
//Tạo hiệu ứng active cho các id="owl-dots"
var header = document.getElementById("owl-dots");
var btns = header.getElementsByClassName("owl-dot");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

// Link vấn đề tiếp theo: https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript