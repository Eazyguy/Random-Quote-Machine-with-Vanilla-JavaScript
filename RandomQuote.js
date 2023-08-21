function getSlides(){
     //fetch external json file
fetch("slides.json")
.then((res)=>res.json())
.then((slides)=>{
     //intialize index
let index = 0;

let right = document.getElementById("right");
let left = document.getElementById("left");
right.addEventListener("click",nextSlide);
left.addEventListener("click",prevSlide);

//output slides to dom
function setSlide(){
let quote= document.getElementById("quote");
let con = document.getElementById("slide-con");


let item = slides[index-1]

let output = `
<blockquote>${item.quote}<cite>${item.cite}</cite></blockquote>
`

con.innerHTML = output
//quote.style.background=`${item.color}`;
document.body.style.background=`${item.color}`
}

//get previous slide
function prevSlide(){
index--;

//check boundary

if(index === 0){

index = slides.length

}

setSlide()
}

//get next slide

function nextSlide(){

index++;

if(index === slides.length){
index = 1;
}
setSlide()
}
// Get Random Slides
function randomQuote(){
index = Math.floor(Math.random()*slides.length)
setSlide()
}

randomQuote()
setInterval(randomQuote,5000)

}

)
}

getSlides()