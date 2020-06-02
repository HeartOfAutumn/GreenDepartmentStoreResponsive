var form = document.getElementById('frmContact');
var message_error = document.getElementById('message_error');

form.addEventListener('submit', event => {
  var txtContent = form.elements['txtContent'];
  var gender = form.elements['gender'];
  var txtFullName = form.elements['txtFullName'];
  var txtEmail = form.elements['txtEmail'];

  if((txtContent.value).length < 20){
    message_error.style.display = "block";
    message_error.style.color = "red";
    message_error.textContent = "Nội dung quá ngắn";
  }
  else if(gender.value == ""){
    message_error.style.display = "block";
    message_error.style.color = "red";
    message_error.textContent = "Vui lòng chọn giới tính";
  }
  else if(txtFullName.value == ""){
    message_error.style.display = "block";
    message_error.style.color = "red";
    message_error.textContent = "Vui lòng điền tên";
  }
  else if(txtEmail.value != ""){
    if(ValidateEmail(txtEmail.value)){
      message_error.style.display = "block";
      message_error.style.color = "red";
      message_error.textContent = "Gửi thành công";
      form.reset();
    }
    else{
      message_error.style.display = "block";
      message_error.style.color = "red";
      message_error.textContent = "Email không hợp lệ";
    }
  }
  else{
    message_error.style.display = "block";
    message_error.style.color = "red";
    message_error.textContent = "Gửi thành công";
    form.reset();
  }

  event.preventDefault();
});

function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.match(mailformat)){
    return true;
  }
  else{
    return false;
  }
}