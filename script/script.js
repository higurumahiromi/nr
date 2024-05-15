function togglePopup(){
    document.getElementById('popup').style.display = "block";
    document.getElementById('blur').style.display = "block";
}

function closepopup(){
    document.getElementById('popup').style.display = "none";
    document.getElementById('blur').style.display = "none";
    document.getElementById('popupo').style.display = "none";
    document.getElementById('bluro').style.display = "none";
}

function back(){
    window.history.back();
}

function popupowner(){
    document.getElementById('popupo').style.display = "block";
    document.getElementById('bluro').style.display = "block";
}

document.getElementById("toggleBtn").onclick = function() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("main").classList.toggle("active");
};

document.getElementById("closeBtn").onclick = function() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("main").classList.toggle("active");
};
