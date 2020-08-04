
function myFunction() {

  var randomNumber1 = Math.floor((Math.random()*6))+1;
  var randomNumber2 = Math.floor((Math.random()*6))+1;


  document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

  if(randomNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerText = "🚩 Player " + 1 + " wins!";
  }

  else if (randomNumber1 < randomNumber2)
  {
    document.querySelector("h1").innerText = "Player " + 2 + " wins! 🚩";
  }

  else
  {
    document.querySelector("h1").innerText = "🚩 Its a draw! 🚩";
  }

  document.querySelector(".btn").innerText = "Click to play again";

}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        myFunction();
    }
}

function reloadPage() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}
