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
function transformLeft(event){
    const slideLeft =event.target;
    const slideRight =slideLeft.nextElementSibling;

    /*ul*/
    const classList=slideLeft.parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');
    const liList = classList.getElementsByTagName('li');

    /*오른쪽에 카드가 남아있을때  -> 왼쪽버튼 활성*/
    if(classList.clientWidth < (liList.length * 260 + Number(activeLi))){
        activeLi =Number(activeLi)-260;

         /* 카드가  ul 공간보다 없을때  -> 버튼비활성*/
        if(classList.clientWidth > (liList.length * 260 + Number(activeLi))){
        slideLeft.style.color='#cfd8dc';
        slideLeft.classList.remove('slide-left-hover');
        }

        slideRight.style.color='#2f3059';
        slideRight.classList.add('slide-right-hover');
    }

    classList.style.transition = 'transform 1s';
    classList.style.transform  = 'translateX(' + String(activeLi) +'px)';
    classList.setAttribute('data-position',activeLi);

}


const slideLeftList = document.getElementsByClassName("slide-left");

for(let i=0; i<slideLeftList.length; i++){
    let classList = slideLeftList[i].parentElement.parentElement.nextElementSibling;
    /*li*/
    let liList = classList.getElementsByTagName("li");

    /*ul너비  < li개수 * li.width*/
    if(classList.clientWidth <(liList.length * 260)){
        /*left 버튼 활성화*/
        slideLeftList[i].classList.add("slide-left-hover");
        slideLeftList[i].addEventListener("click",transformLeft);
    }else{
        /* 버튼 버튼비활성화*/
        const arrowContainer=slideLeftList[i].parentElement;
        arrowContainer.removeChild(slideLeftList[i].nextElementSibling);
       arrowContainer.removeChild(slideLeftList[i]);
        // arraowContainer.removeChild(slideLeftList[i]);
    
    }
}





