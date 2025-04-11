function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function myFunction1() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }