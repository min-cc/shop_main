// back to top
var btn = $(".arrow-up");
$(window).scroll(function () {
  if ($(window).scrollTop() > 900) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

//slide show
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  console.log(n);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-background");
  var carousel = document.getElementsByClassName("carousel");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < carousel.length; i++) {
    carousel[i].classList.remove("carousel-active");
  }
  slides[slideIndex-1].style.display = "block";
  carousel[slideIndex-1].classList.add("carousel-active");
}

function nextSlide() {
  setInterval(() => {
    showSlides(slideIndex);
    slideIndex++;
  }, 5000);
}

function showFormRegister() {
  var register = document.getElementsByClassName("register");
  if (register[0].style.display == "none") {
    register[0].style.display = "block";
  } else {
    register[0].style.display = "none";
  } 
  var reset = document.getElementsByClassName('register')[0].querySelectorAll('input')
  for(x of reset){
    x.value = ''
  }
}

function xoa_dau(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}

var username = document.getElementById("username");
var password = document.getElementById("password");
var cfpassword = document.getElementById("cfpassword");
var btnDisable = document.getElementById("register");

function validateName(){
  var valueName = xoa_dau(username.value);
  // var validateName = /^[a-zA-Z0-9 ]{1,}$/g;
  var validateName = /^\w{2,32}$/g;
  if (validateName.test(valueName)) {
    document.getElementsByClassName("warning")[0].style.display = "none";
  } else {
    document.getElementsByClassName("warning")[0].style.display = "block";
  }
  validateCheck(0)
}

function validatePass(){
  var splitArr = password.value.split('') //tach string thanh array
  var chuthuong = 0 
  var chuhoa = 0
  for(var x of splitArr){
    if('a' <= x && x <= 'z'){
      chuthuong++
    }
    if('A' <= x && x <= 'Z'){
      chuhoa++
    }
  }
  if(chuthuong*chuhoa != 0 && 8 <= splitArr.length && splitArr.length <=32){
    document.getElementsByClassName("warning")[1].style.display = "none"
  }else{
    document.getElementsByClassName("warning")[1].style.display = "block";
  }
  validateCheck(1)
}

function confirmPass() {
  if(password.value!=cfpassword.value){
    document.getElementsByClassName("warning")[2].style.display = "block"
  }else{
    document.getElementsByClassName("warning")[2].style.display = "none"

  }
  validateCheck(2)
}

function validateCheck(x){
  if(document.getElementsByClassName("warning")[x].style.display == "block"){
    btnDisable.disabled = true
    btnDisable.classList.add('disable-btn')
  }else{
    btnDisable.disabled = false
    btnDisable.classList.remove('disable-btn')
  }
}

function showPopup(){
  document.getElementsByClassName("popup")[0].style.display = "block"
}

if(localStorage.getItem('user') == 'true'){
  showPopup()
  setTimeout(() => {
    document.getElementsByClassName("popup")[0].style.display = "none"
    localStorage.removeItem('user')
  }, 3000)
}

function validateForm() {
  localStorage.setItem('user', 'true')
}

nextSlide();
