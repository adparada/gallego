document.addEventListener("DOMContentLoaded", function () {
  
  const elementos = document.querySelectorAll(".container");

  elementos.forEach((elemento) => {
    const informacionOculta = elemento.querySelector(".mas-info");
    informacionOculta.style.opacity = "0";
    informacionOculta.style.maxHeight = "0";
    informacionOculta.style.padding = "0 20px";
    elemento.addEventListener("mouseover", function () {
      informacionOculta.style.opacity = "1";
      informacionOculta.style.maxHeight = "1000px"; // Un valor lo suficientemente grande para contener el contenido
      informacionOculta.style.padding = "10px 20px";
    });

    elemento.addEventListener("mouseout", function () {
      informacionOculta.style.opacity = "0";
      informacionOculta.style.maxHeight = "0";
      informacionOculta.style.padding = "0 20px";
    });
  });
});
