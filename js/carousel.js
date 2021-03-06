
const showing_class = "showing";
const firstCrousel = document.querySelector(".slide:nth-child(1)");  
const lastCrousel  = document.querySelector(".slide:nth-child(3)");

function prev_move(){
    
    const currentCarousel = document.querySelector(".showing");

    if(currentCarousel){
        const prevCarousel = currentCarousel.previousElementSibling;
        currentCarousel.classList.remove(showing_class);

        if(prevCarousel){
            prevCarousel.classList.add(showing_class);
        }else{
            lastCrousel.classList.add(showing_class);
        }
    }
}

function next_move(){
    console.log("next_move click");
    const currentCarousel = document.querySelector(".showing"); 

    if(currentCarousel){
        const nextCarousel = currentCarousel.nextElementSibling;
        currentCarousel.classList.remove(showing_class);

        /*마지막 슬라이드의 다음태그는 .left btns 태그임으로  */
        if(nextCarousel !=leftButton){
            nextCarousel.classList.add(showing_class);
        }else{
            firstCrousel.classList.add(showing_class);
        }
    }
}

const leftButton= document.querySelector(".left");
const rightButton= document.querySelector(".right");

leftButton.addEventListener('click',prev_move);
rightButton.addEventListener('click',next_move);

setInterval(()=>{
    const rightButton= document.querySelector(".right");
    rightButton.click();
}
,3000);