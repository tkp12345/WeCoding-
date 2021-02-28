function transformDown(event) {
  console.log("다운");
  const slideDown = event.target;
  /* <i class="fas fa-angle-up slide-down"></i>*/
  const slideUp = slideDown.parentElement.children[0];

  /*ul*/
  const classList = slideDown.parentElement.previousElementSibling.children[0];
  let activeLi = classList.getAttribute("data-position");
  /*li*/
  const liList = classList.getElementsByTagName("li");

  if (Number(activeLi) < 0) {
    /*아래이동*/
    activeLi = Number(activeLi) + 200;

    /*아래 이동했으니 위쪽버튼 활성화*/
    slideUp.style.color = "white";
    slideUp.classList.add("slide-up-hover");
    slideUp.addEventListener("click", transformUp);

    /*카드 위치 맨위일때 아래쪽버튼 비활성*/
    if (Number(activeLi) === 0) {
      slideDown.style.color = "cfd8dcdc";
      slideDown.classList.remove("slide-down-hover");
      slideDown.removeEventListener("click", transformDown);
    }
  }
  /*이동*/
  classList.style.transition = "transform 1s";
  classList.style.transform = "translateY(" + String(activeLi) + "px)";
  classList.setAttribute("data-position", activeLi);
}

function transformUp(event) {
  console.log("업");
  const slideUp = event.target;
  const slideDown =
    slideUp.parentElement.nextElementSibling.nextElementSibling.children[0];

  /*ul*/
  const classList = slideUp.parentElement.nextElementSibling.children[0];
  let activeLi = classList.getAttribute("data-position");
  const liList = classList.getElementsByTagName("li");

  /*아래쪽에 카트가 남아있을떄 -> 위쪽버튼활성  */
  if (classList.clientHeight < liList.length * 446 + Number(activeLi)) {
    activeLi = Number(activeLi) - 200;

    /*전체카드(ul)길이가  ul 공간보다 없을때  -> 위쪽버튼 비활성*/
    if (classList.clientHeight > liList.length * 446 + Number(activeLi)) {
      slideUp.style.color = "cfd8dcdc";
      slideUp.classList.remove("slide-up-hover");
      slideUp.removeEventListener("click", transformUp);
    }

    /*위쪽으로 밀어준뒤 -> 아래버튼 활성 */
    slideDown.style.color = "white";
    slideDown.classList.add("slide-down-hover");
    slideDown.addEventListener("click", transformDown);
  }

  classList.style.transition = "transform 1s";
  classList.style.transform = "translateY(" + String(activeLi) + "px)";
  classList.setAttribute("data-position", activeLi);
}

const slideUpList = document.querySelector(".slide-up");

let classList = slideUpList.parentElement.nextElementSibling.children[0];
let liList = classList.getElementsByTagName("li");

if (classList.clientHeight < liList.length * 446) {
  slideUpList.classList.add("slide-up-hover");
  slideUpList.addEventListener("click", transformUp);
} else {
  const arrowContainer = slideUpList.parentElement;
  arrowContainer.removeChild(slideUpList);
}
