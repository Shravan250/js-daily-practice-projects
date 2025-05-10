const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function(){
  const randomcolor = parseInt(getRandomNumber());
  console.log(randomcolor);
  document.body.style.backgroundColor = colors[randomcolor];
  color.textContent = colors[randomcolor];
});

function getRandomNumber(){
  return Math.random() * colors.length;
}