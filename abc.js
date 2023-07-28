let plus_button = document.querySelectorAll("#sixth div.slide");
console.log(plus_button);
let para = document.querySelectorAll("#sixth p");
console.log(para);

// !first
let plus1 = plus_button[0];
console.log(plus1);
let cross1 = plus_button[1];
console.log(cross1);

plus1.addEventListener("click",(e)=>{
    plus1.style.display = "none";
    cross1.style.display="block";
    para[0].style.display = "none";
});
cross1.addEventListener("click",(e)=>{
    plus1.style.display = "block";
    cross1.style.display="none";
    para[0].style.display = "block";
});

// !second
let plus2 = plus_button[2];
console.log(plus2);
let cross2 = plus_button[3];
console.log(cross2);

plus2.addEventListener("click",(e)=>{
    plus2.style.display = "none";
    cross2.style.display="block";
    para[1].style.display = "none";
});
cross2.addEventListener("click",(e)=>{
    plus2.style.display = "block";
    cross2.style.display="none";
    para[1].style.display = "block";
});

// !third
let plus3 = plus_button[4];
console.log(plus3);
let cross3 = plus_button[5];
console.log(cross3);

plus3.addEventListener("click",(e)=>{
    plus3.style.display = "none";
    cross3.style.display="block";
    para[2].style.display = "none";
});
cross3.addEventListener("click",(e)=>{
    plus3.style.display = "block";
    cross3.style.display="none";
    para[2].style.display = "block";
});

// !fourth
let plus4 = plus_button[6];
console.log(plus4);
let cross4 = plus_button[7];
console.log(cross4);

plus4.addEventListener("click",(e)=>{
    plus4.style.display = "none";
    cross4.style.display="block";
    para[3].style.display = "none";
});
cross4.addEventListener("click",(e)=>{
    plus4.style.display = "block";
    cross4.style.display="none";
    para[3].style.display = "block";
});

// !fifth
let plus5 = plus_button[8];
console.log(plus5);
let cross5 = plus_button[9];
console.log(cross5);

plus5.addEventListener("click",(e)=>{
    plus5.style.display = "none";
    cross5.style.display="block";
    para[4].style.display = "none";
});
cross5.addEventListener("click",(e)=>{
    plus5.style.display = "block";
    cross5.style.display="none";
    para[4].style.display = "block";
});

// !sixth
let plus6 = plus_button[10];
console.log(plus6);
let cross6 = plus_button[11];
console.log(cross6);

plus6.addEventListener("click",(e)=>{
    plus6.style.display = "none";
    cross6.style.display="block";
    para[5].style.display = "none";
});
cross6.addEventListener("click",(e)=>{
    plus6.style.display = "block";
    cross6.style.display="none";
    para[5].style.display = "block";
});3
