//initial set
let count = 0;

const btns = document.querySelectorAll(".btn");
const displayedValue = document.getElementById("value");

btns.forEach(function(btn) {
    btn.addEventListener("click" , (e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }

        if (count > 0){
            displayedValue.style.color = "green";
        }else if(count < 0){
            displayedValue.style.color = "red"
        }else{
            displayedValue.style.color = "#222"
        }

        displayedValue.textContent = count;
    });
});
