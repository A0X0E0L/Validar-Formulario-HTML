/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let form = document.querySelector("form");

  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault(); // detiene tu comportamiento predeterminado del formulario e interpretado mi codigo
    let Card = document.getElementById("Card");
    let cvc = document.getElementById("cvc");
    let Amount = document.getElementById("Amount");
    let FirstName = document.getElementById("FirstName");
    let LastName = document.getElementById("LastName");
    let City = document.getElementById("City");
    let State = document.getElementById("State");
    let PostalCode = document.getElementById("PostalCode");
    let Message = document.getElementById("Message");
    let alert = document.getElementById("alert");

    console.log(email.value);
    console.log(password.value);

    if (card.value === "") {
      //console.log("El campo email está vacio");
      document.getElementById("card").style.background = "red";

      alert("Some fields are missing.");
      return;

      document.getElementById("alert");
    } else {
      document.getElementById("alert") === "hidden";
    }
  }
};
