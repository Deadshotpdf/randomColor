
   
function color(){
        let red=Math.random();
    red=red*255;
  
    red=Math.floor(red);

    let green=Math.random();
    green*=255;
   
    green=Math.floor(green);

    let blue=Math.random();
    blue*=255;
    
    blue=Math.floor(blue);
    return [red,green,blue];
}



let div=document.querySelector(".inner");

let h1=document.querySelector("h1");

let btn=document.querySelector("button");

btn.addEventListener("click",()=>{
    let arr=color();
    let rgb="rgb("+arr[0]+","+arr[1]+","+arr[2]+")";
    h1.innerText=rgb;
    div.style.backgroundColor=rgb;

})









