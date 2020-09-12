if(localStorage.getItem("theme") == "dark"){
    setDarkMode = true;
}

function toggleTheme(mode){
    var isToggle = document.getElementById('toggleTheme');
    var getToggle = confirm ("Apakah kamu ingin Beralih ke Dark Mode?");
    
    if(getToggle == true){
        isToggle.innerHTML = "Light";
        var test = document.body;
        test.classList.toggle("light-mode");
    } else {
        isToggle.innerHTML = "Dark";
        test.classList.toggle("light-mode");
    }
    
}

/*function toggleTheme(mode){
    alert("Hai");
    document.body.classList.toggle("light");
}*/