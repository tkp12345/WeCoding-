
/*=============== backToTop  ==================*/

const backToTop = document.getElementById("backtotop");

function checkScroll() {
  const pageLength = window.pageYOffset;

  if (pageLength !== 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

function moveBackToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

window.addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moveBackToTop);

/*=============== card scroll ==================*/

function transformRight(event) {
  const slideRight = event.target;
  /*<i class="fas fa-angle-right slide-right"></i>*/
  const slideLeft = slideRight.previousElementSibling;

  /*ul*/
  const classList = slideRight.parentElement.parentElement.nextElementSibling;
  /*<ul class=​"class-list" data-position=​"0">*/
  let activeLi = classList.getAttribute("data-position");
  /**/
  const liList = classList.getElementsByTagName("li");
  /*HTMLCollection(6) [li.class-card, ... li.class-card]*/

  if (Number(activeLi) < 0) {
    /*오른쪽 이동*/
    activeLi = Number(activeLi) + 260;

    /*오른쪽이동 했으니 왼쪽버튼활성화*/
    slideLeft.style.color = "white";
    slideLeft.classList.add("slide-left-hover");
    slideLeft.addEventListener("click", transformLeft);

    /*카드 위치 왼쪽 맨끝일떄  오른쪽버튼 비활성*/
    if (Number(activeLi) === 0) {
      slideRight.style.color = "cfd8dcdc";
      slideRight.classList.remove("slide-right-hover");
      slideRight.removeEventListener("click", transformRight);
    }
  }

  /*위 조건에따른 카드(ul) 이동 */
  classList.style.transition = "transform 1s";
  classList.style.transform = "translateX(" + String(activeLi) + "px)";
  /*data-position 에 바뀐 위치값 저장*/
  classList.setAttribute("data-position", activeLi);
}

function transformLeft(event) {
  const slideLeft = event.target;
  const slideRight = slideLeft.nextElementSibling;

  /*ul*/
  const classList = slideLeft.parentElement.parentElement.nextElementSibling;
  let activeLi = classList.getAttribute("data-position");
  const liList = classList.getElementsByTagName("li");

  /*오른쪽에 카드가 남아있을때  -> 왼쪽버튼 활성*/
  if (classList.clientWidth < liList.length * 260 + Number(activeLi)) {
    /*왼쪽으로 밀어준다*/
    activeLi = Number(activeLi) - 260;

    /* 전체카드(ul)길이가  ul 공간보다 없을때  -> 왼쪽 버튼비활성*/
    if (classList.clientWidth > liList.length * 260 + Number(activeLi)) {
      slideLeft.style.color = "cfd8dcdc";
      slideLeft.classList.remove("slide-left-hover");
      slideLeft.removeEventListener("click", transformLeft);
    }

    /*왼쪽으로 밀어준뒤 -> 오른쪽 버튼 활성*/
    slideRight.style.color = "white";
    slideRight.classList.add("slide-right-hover");
    slideRight.addEventListener("click", transformRight);
  }

  /*위 조건에따른 카드(ul) 이동 */
  classList.style.transition = "transform 1s";
  classList.style.transform = "translateX(" + String(activeLi) + "px)";
  /*data-position 에 바뀐 위치값 저장*/
  classList.setAttribute("data-position", activeLi);
}

const slideLeftList = document.getElementsByClassName("slide-left");

for (let i = 0; i < slideLeftList.length; i++) {
  let classList =
    slideLeftList[i].parentElement.parentElement.nextElementSibling;
  /*li*/
  let liList = classList.getElementsByTagName("li");

  /*ul너비  < li개수 * li.width*/
  if (classList.clientWidth < liList.length * 260) {
    /*left 버튼 활성화*/
    slideLeftList[i].classList.add("slide-left-hover");
    slideLeftList[i].addEventListener("click", transformLeft);
  } else {
    /* 버튼 버튼비활성화*/
    const arrowContainer = slideLeftList[i].parentElement;
    arrowContainer.removeChild(slideLeftList[i].nextElementSibling);
    arrowContainer.removeChild(slideLeftList[i]);
    // arraowContainer.removeChild(slideLeftList[i]);
  }
}
