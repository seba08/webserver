const d = document;
const $caja = d.querySelector(".caja"),
$nombre = d.querySelector(".nombre"),
$boton = d.querySelector(".miboton")


d.addEventListener("DOMContentLoaded", ()=>{

    d.addEventListener("click", e=>{
        if(e.target.matches(".miboton")){
            $caja.classList.add('.cambiar-color')
            $caja.querySelector("h2").innerHTML = "Hola: " + $nombre.value;
        }

       /* if($nombre.value == ""){
            alert("El campo es obligatorio")
            location.reload()
        } */
    })
})