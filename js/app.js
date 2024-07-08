function showHome(){
    var Alerts = document.getElementById("alerts");
    Alerts.style.display = "none";
    var Home = document.getElementById("home");
    Home.style.display = "contents";
}

function showAlerts(){
    var Home = document.getElementById("home");
    Home.style.display = "none";
    var Alerts = document.getElementById("alerts");
    Alerts.style.display = "contents";
    
}