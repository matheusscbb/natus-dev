function goTo(div) {
    document.getElementById(div).scrollIntoView({behavior: "smooth"})
        if(div === "contact"){
            setTimeout(function(){
                document.getElementById("name").focus();
            }, 750);
             
        }
}
