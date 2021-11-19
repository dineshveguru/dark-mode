document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("button").style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    document.querySelector("button").onclick = function(){
        if(document.querySelector("h1").style.color == "black"){
            document.querySelector("h1").style.color = "white";
            document.querySelector("body").style.backgroundColor = "rgb(20, 20, 20)";     
            document.querySelector(".container").style.backgroundColor = "rgb(54, 54, 54)";
            document.querySelector(".container").style.boxShadow = "0 0 20px 10px rgba(80, 80, 80, 0.9)";
            document.querySelector("h1").innerHTML = "Dark Mode";
            document.querySelector("button").innerHTML = "Light Mode";
            document.querySelector("button").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        }
        else{
            document.querySelector("h1").style.color = "black";
            document.querySelector("body").style.backgroundColor = "aliceblue";     
            document.querySelector(".container").style.backgroundColor = "#fff";
            document.querySelector(".container").style.boxShadow = "-10px -10px 25px rgba(255, 255, 255, 0.9), 10px 10px 15px rgba(0, 0, 0, 0.2)";
            document.querySelector("h1").innerHTML = "Light Mode";
            document.querySelector("button").innerHTML = "Dark Mode";
            document.querySelector("button").style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        }
    }
})