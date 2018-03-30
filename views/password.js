var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';
var img = 'car.gif';
var pictures = ["Man", "Dog", "Car", "Woman", "Ball", "Apple"];

var picturePasswords = [0, 0, 0];
var picturePasswordCycler = 0;

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var imgBox = document.getElementById("img");
var submit1 = document.getElementById("submit1");
var submit2 = document.getElementById("submit2");
var submit3 = document.getElementById("submit3");
var yourPw1 = document.getElementById("yourPw1");
var yourPw2 = document.getElementById("yourPw2");
var yourPw3 = document.getElementById("yourPw3");

var yourPwImage1 = document.getElementById("yourPwImage1");
var yourPwImage2 = document.getElementById("yourPwImage2");
var yourPwImage3 = document.getElementById("yourPwImage3");



submit1.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
	(imgBox.checked) ? characters += img : '';
    yourPw1.value = password(charNum.value, characters);
	
});

submit2.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
	(imgBox.checked) ? characters += img : '';
    yourPw2.value = password(charNum.value, characters);
});

submit3.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
	(imgBox.checked) ? characters += img : '';
    yourPw3.value = password(charNum.value, characters);
});

function password(l,characters){
	var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

function choosePictureLocation() {
	return getRandomInt(pictures.size);
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

