document.addEventListener("DOMContentLoaded", function(){
    const headerContainer = document.querySelector("#header-container");

    fetch("header.html")
    .then(respuesta => {    
        if(!respuesta.ok){
            throw new Error("Respuesta incorrecta");
        }
        return respuesta.text();
    })

    
    .then(datos =>{
        headerContainer.innerHTML = datos;
        window.onscroll = function() {myFunction()};

        // Get the header
        var header = document.getElementsByClassName("myHeader")[0];

        // Get the offset position of the navbar
        var sticky = header.offsetTop;
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    })
})

//funcion a reutilizar footer
document.addEventListener("DOMContentLoaded", function(){
    const footerContainer = document.querySelector("#footer-container");

    fetch("footer.html")
    .then(respuesta => {    
        if(!respuesta.ok){
            throw new Error("Respuesta es incorrecta");
        }
        return respuesta.text();
    })
    .then(datos =>{
        footerContainer.innerHTML = datos
    })
})