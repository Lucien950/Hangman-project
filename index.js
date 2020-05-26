const myForm = document.getElementById("nameForm");

myForm.addEventListener("submit", e=>{
    e.preventDefault();
    document.getElementById("playerName").innerHTML = new FormData(myForm).get("name");

    document.getElementById("background").style.opacity = "0";
    document.getElementById("namePopup").style.opacity = "0";

    setTimeout(()=>{document.getElementById("background").style.display = "none"}, 500);
    setTimeout(()=>{document.getElementById("namePopup").style.display = "none"}, 500);
})
