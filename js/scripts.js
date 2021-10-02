
$(document).ready(function() {
    $.getJSON("data/make.json", doWhenYouHaveTheData);
});

function doWhenYouHaveTheData(data){

      
    function carouselSlides(){
   
        for(let i = -1; i < data.slides.length; i++){

     
          let storesSlide = document.createElement("div");
          storesSlide.className = "storesSlide";

            if(i == -1){
               let darkImg = document.createElement("div");
               darkImg.className = "darkImg";
               storesSlide.appendChild(darkImg);
        
               document.querySelector('.sliderWrapper').appendChild(storesSlide);

            }
            else{

               let img = '<img src="'+data.slides[i].img+'" alt="">';
               storesSlide.innerHTML = img;
   
               document.querySelector('.sliderWrapper').appendChild(storesSlide);
            }
        }
    };

    carouselSlides();   


   
   
   
   const prev = document.getElementById('btnPrev'),
   next = document.getElementById('btnNext'),
   slides = document.querySelectorAll('.storesSlide'),
   transform = document.querySelector('.sliderWrapper'),
   navbar = document.querySelector('.navbar'),
   prodBackImg = document.querySelector('.backImg'),
   prodImgContainer = document.querySelector('.imgContainer');
   
   let   indexSlide = 0;
   let   numSlide = document.querySelector('.numOfSlides');
   
   
   
    const numberOfSlide = (n = 0) => {
   
        
       
        if(n+1 < 10 && slides.length - 1 < 10){
           numSlide.innerHTML = `0${n + 1} / 0${slides.length - 1}`;
        } else if(n+1 < 10 && slides.length - 1 > 9)  {
           numSlide.innerHTML = `0${n + 1} / ${slides.length - 1}`;  
        } else if(n+1 > 9 && slides.length - 1 < 10)  {
           numSlide.innerHTML = `${n + 1} / 0${slides.length - 1}`;  
        } else {
           numSlide.innerHTML = `${n + 1} / ${slides.length - 1}`;  
        }     
   
    };
   
   
   numberOfSlide();
   
   
    const btnAdd = (buttonAdd, functionAdd) =>{

       buttonAdd.addEventListener('click', functionAdd)
       buttonAdd.style.color = "white";
   
    };
   
   
    const btnRemove = (buttonRemove, functionRemove) =>{

       buttonRemove.removeEventListener('click', functionRemove)
       buttonRemove.style.color = "rgba(255, 255, 255, 0.432)";
   
    };
   
   
   
   
   
   
   
    const centerSlide = n => {
   
       let num = 41 * n;
       transform.style.transform = `translate3d(calc(-12.5vw -  ${num}vw), 0, 0)`;
   
       numberOfSlide(n);
   
      
        if(indexSlide == slides.length - 2){
   
           btnRemove(next, nextSlide);
           
        } else if(indexSlide == 0){
       
           btnRemove(prev, prevSlide);
        }
    };
   
   
   
   
    const nextSlide = () => {
       btnAdd(prev, prevSlide);
       
       indexSlide++;
       centerSlide(indexSlide);   
    };
   
   
    const prevSlide = () => {
       btnAdd(next, nextSlide);    
       
       indexSlide--;
       centerSlide(indexSlide);
    };
   
   
   next.addEventListener('click', nextSlide);
   
   
      window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
    
        if(scrollY != 0){
          navbar.style.backgroundColor = `#f5f5f573`; 
        }
        else{
         navbar.style.backgroundColor = `#38343900`; 
        }
   
      });



   
   
   
   
    

    
  


   




   
   
    function boxContainer(){
   
        for(let i = 0; i < data.box.length; i++){
   
          let box = document.createElement("div");
          box.className = "box";
          
          let boxImg = document.createElement("div");
          boxImg.className = "boxImg";
          let img = '<img src="'+data.box[i].boxImg+'" alt="">';
          boxImg.innerHTML = img;
          box.appendChild(boxImg);
          
      
          let boxText = document.createElement("div");
          boxText.className = "boxText";  
          let text = '<h5>'+data.box[i].boxText.h5+'</h5><p>'+data.box[i].boxText.p+'</p>';   
          boxText.innerHTML = text;
          box.appendChild(boxText);
          
   
          document.getElementById('whiteBoxContainer').appendChild(box);
       
        }
    };
   
   boxContainer();
   
   
   
   
   
   
   
   
   
   
   
   
   





};