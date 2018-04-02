var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';




var pictures = ["Man", "Dog", "Car", "Woman", "Ball", "Apple"];
var picturesSize = 6;

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
    yourPw1.value = password(charNum.value, characters);
	yourPwImage1.src = choosePictureLocation();
});

submit2.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    yourPw2.value = password(charNum.value, characters);
	yourPwImage2.src = choosePictureLocation();
});

submit3.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    yourPw3.value = password(charNum.value, characters);
	yourPwImage3.src = choosePictureLocation();
});

test.addEventListener("click", function(e) {
	
	sendData();
	 
});

function sendData() {
	console.log("Sending password data"); 

	console.log( yourPw1.value );
	console.log( yourPwImage1.src );
	
	console.log( yourPw2.value );
	console.log( yourPwImage2.src );
	
	console.log( yourPw3.value );
	console.log( yourPwImage3.src );

	
	//get the passwords from the page
	var userData = {
		pass1: yourPw1.value,
		passImage1: yourPwImage1.src,
		
		pass2: yourPw2.value,
		passImage2: yourPwImage2.src,
		
		pass3: yourPw3.value,
		passImage3: yourPwImage3.src
		
		
	}
	
	
	$.post("/submit", userData, 
	function(data) {
		console.log("response received, password data saved to database");
		loadTestPage();
	});
	
	
	
	/*
	$.ajax({method: "POST", 
			data: userData,
			
			success: function(data) {
				console.log("response received");
			}
	});
	*/
	
}

function loadTestPage() {
	
	console.log("In loadTestPage() ");
	
	/*
	$.ajax( {method:"GET", 
		url: "/test",
		success: function(data) {
			console.log("test page loaded");
			
			
		}
	});
	*/
	
	//https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript/442393#442393?newreg=ad510bb969e34afb86b3217f61625b1c
	//not safe and may interfere with back button usage
	//for our use here this is okay as we are staying local
	window.location.href = "test.html";
	

}


function password(l,characters){
	var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

//chooses the picture in the pictures array that this password will be associated with
function choosePictureLocation() {
	var pictureLocation = getRandomInt(picturesSize);
	var pictureString = ''; 
	
	if (pictureLocation == 0) {
		pictureString = "man.gif"; 
	} else if (pictureLocation == 1) {
		pictureString = "dog.gif";
	} else if (pictureLocation == 2) {
		pictureString = "car.gif";
	} else if (pictureLocation == 3) {
		pictureString = "woman.gif"; 
	} else if (pictureLocation == 4) {
		pictureString = "ball.gif";
	} else {
		pictureString = "apple.gif";
	}

	return pictureString;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

