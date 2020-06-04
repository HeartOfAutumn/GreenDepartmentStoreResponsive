var location_container = document.getElementById("location-container")
var tooltip = document.getElementById("prov_lst");
var tooltipClose = document.querySelector(".tooltip_close")

location_container.addEventListener("click", function(){
    tooltip.style.display = "block";
});

tooltipClose.addEventListener("click", function(){
    tooltip.style.display = "none;";
});
