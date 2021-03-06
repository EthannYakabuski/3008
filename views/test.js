var bankImageNum; 
var shoppingImageNum; 
var emailImageNum;

var pictures = ["Man", "Dog", "Car", "Woman", "Ball", "Apple"];
var picturesSize = 6;

var bankButton = document.getElementById("submit1");
var shoppingButton = document.getElementById("submit2");
var emailButton = document.getElementById("submit3");

var yourPw1 = document.getElementById("yourPw1");
var yourPw2 = document.getElementById("yourPw2");
var yourPw3 = document.getElementById("yourPw3");

var manBankImage = document.getElementById("manBank");
var dogBankImage = document.getElementById("dogBank");
var carBankImage = document.getElementById("carBank");
var womanBankImage = document.getElementById("womanBank");
var ballBankImage = document.getElementById("ballBank");
var appleBankImage = document.getElementById("appleBank");

var manShoppingImage = document.getElementById("manShopping");
var dogShoppingImage = document.getElementById("dogShopping");
var carShoppingImage = document.getElementById("carShopping");
var womanShoppingImage = document.getElementById("womanShopping");
var ballShoppingImage = document.getElementById("ballShopping");
var appleShoppingImage = document.getElementById("appleShopping");

var manEmailImage = document.getElementById("manEmail");
var dogEmailImage = document.getElementById("dogEmail");
var carEmailImage = document.getElementById("carEmail");
var womanEmailImage = document.getElementById("womanEmail");
var ballEmailImage = document.getElementById("ballEmail");
var appleEmailImage = document.getElementById("appleEmail");

var bankWarning = document.getElementById("bankWarning");
var shoppingWarning = document.getElementById("shoppingWarning");
var emailWarning = document.getElementById("emailWarning");

var numTries1 = 0; 
var numTries2 = 0;
var numTries3 = 0;

var pass1Success = false; 
var pass2Success = false; 
var pass3Success = false; 

var bankTime = 0; 
var shoppingTime = 0; 
var emailTime = 0; 

//button event listeners for handling the border lighting of the chosen picture

manBankImage.addEventListener("click", function(e) {
	manBankImage.style.border = "thick solid #0000FF"; 
	dogBankImage.style.border = "none";
	carBankImage.style.border = "none";
	womanBankImage.style.border = "none";
	ballBankImage.style.border = "none";
	appleBankImage.style.border = "none";
});

dogBankImage.addEventListener("click", function(e) {
	dogBankImage.style.border = "thick solid #0000FF"; 
	manBankImage.style.border = "none";
	carBankImage.style.border = "none";
	womanBankImage.style.border = "none";
	ballBankImage.style.border = "none";
	appleBankImage.style.border = "none";
});

carBankImage.addEventListener("click", function(e) {
	carBankImage.style.border = "thick solid #0000FF"; 
	womanBankImage.style.border = "none";
	ballBankImage.style.border = "none";
	appleBankImage.style.border = "none";
	manBankImage.style.border = "none";
	dogBankImage.style.border = "none";
});

womanBankImage.addEventListener("click", function(e) {
	womanBankImage.style.border = "thick solid #0000FF"; 
	ballBankImage.style.border = "none";
	appleBankImage.style.border = "none";
	manBankImage.style.border = "none";
	dogBankImage.style.border = "none";
	carBankImage.style.border = "none";
});

ballBankImage.addEventListener("click", function(e) {
	ballBankImage.style.border = "thick solid #0000FF";
	appleBankImage.style.border = "none";
	manBankImage.style.border = "none";
	dogBankImage.style.border = "none";
	carBankImage.style.border = "none";
	womanBankImage.style.border = "none";
});

appleBankImage.addEventListener("click", function(e) {
	appleBankImage.style.border = "thick solid #0000FF"; 
	manBankImage.style.border = "none";
	dogBankImage.style.border = "none";
	carBankImage.style.border = "none";
	womanBankImage.style.border = "none";
	ballBankImage.style.border = "none";
});



manShoppingImage.addEventListener("click", function(e) {
	manShoppingImage.style.border = "thick solid #0000FF"; 
	dogShoppingImage.style.border = "none";
	carShoppingImage.style.border = "none";
	womanShoppingImage.style.border = "none";
	ballShoppingImage.style.border = "none";
	appleShoppingImage.style.border = "none";
});

dogShoppingImage.addEventListener("click", function(e) {
	dogShoppingImage.style.border = "thick solid #0000FF"; 
	manShoppingImage.style.border = "none";
	carShoppingImage.style.border = "none";
	womanShoppingImage.style.border = "none";
	ballShoppingImage.style.border = "none";
	appleShoppingImage.style.border = "none";
});

carShoppingImage.addEventListener("click", function(e) {
	carShoppingImage.style.border = "thick solid #0000FF"; 
	womanShoppingImage.style.border = "none";
	ballShoppingImage.style.border = "none";
	appleShoppingImage.style.border = "none";
	manShoppingImage.style.border = "none";
	dogShoppingImage.style.border = "none";
});

womanShoppingImage.addEventListener("click", function(e) {
	womanShoppingImage.style.border = "thick solid #0000FF"; 
	ballShoppingImage.style.border = "none";
	appleShoppingImage.style.border = "none";
	manShoppingImage.style.border = "none";
	dogShoppingImage.style.border = "none";
	carShoppingImage.style.border = "none";
});

ballShoppingImage.addEventListener("click", function(e) {
	ballShoppingImage.style.border = "thick solid #0000FF";
	appleShoppingImage.style.border = "none";
	manShoppingImage.style.border = "none";
	dogShoppingImage.style.border = "none";
	carShoppingImage.style.border = "none";
	womanShoppingImage.style.border = "none";
});

appleShoppingImage.addEventListener("click", function(e) {
	appleShoppingImage.style.border = "thick solid #0000FF"; 
	manShoppingImage.style.border = "none";
	dogShoppingImage.style.border = "none";
	carShoppingImage.style.border = "none";
	womanShoppingImage.style.border = "none";
	ballShoppingImage.style.border = "none";
});



manEmailImage.addEventListener("click", function(e) {
	manEmailImage.style.border = "thick solid #0000FF"; 
	dogEmailImage.style.border = "none";
	carEmailImage.style.border = "none";
	womanEmailImage.style.border = "none";
	ballEmailImage.style.border = "none";
	appleEmailImage.style.border = "none";
});

dogEmailImage.addEventListener("click", function(e) {
	dogEmailImage.style.border = "thick solid #0000FF"; 
	manEmailImage.style.border = "none";
	carEmailImage.style.border = "none";
	womanEmailImage.style.border = "none";
	ballEmailImage.style.border = "none";
	appleEmailImage.style.border = "none";
});

carEmailImage.addEventListener("click", function(e) {
	carEmailImage.style.border = "thick solid #0000FF"; 
	womanEmailImage.style.border = "none";
	ballEmailImage.style.border = "none";
	appleEmailImage.style.border = "none";
	manEmailImage.style.border = "none";
	dogEmailImage.style.border = "none";
});

womanEmailImage.addEventListener("click", function(e) {
	womanEmailImage.style.border = "thick solid #0000FF"; 
	ballEmailImage.style.border = "none";
	appleEmailImage.style.border = "none";
	manEmailImage.style.border = "none";
	dogEmailImage.style.border = "none";
	carEmailImage.style.border = "none";
});

ballEmailImage.addEventListener("click", function(e) {
	ballEmailImage.style.border = "thick solid #0000FF";
	appleEmailImage.style.border = "none";
	manEmailImage.style.border = "none";
	dogEmailImage.style.border = "none";
	carEmailImage.style.border = "none";
	womanEmailImage.style.border = "none";
});

appleEmailImage.addEventListener("click", function(e) {
	appleEmailImage.style.border = "thick solid #0000FF"; 
	manEmailImage.style.border = "none";
	dogEmailImage.style.border = "none";
	carEmailImage.style.border = "none";
	womanEmailImage.style.border = "none";
	ballEmailImage.style.border = "none";
});

var myBankInt = setInterval(function() {
	bankTime++;
}, 1000);

var myShoppingInt = setInterval(function() {
	shoppingTime++;
}, 1000);

var myEmailInt = setInterval(function() {
	emailTime++;
}, 1000);

	
//this button listener is for the bank password checking
//it builds a data object storing the attempted password information and
//send it to the server to check for accuracy
bankButton.addEventListener("click", function(e) {
	//create data object to send to server to check to see if password is correct
	
	if(numTries1 >= 3) {
		bankWarning.innerHTML = "You have already tried the maximum number of times";
	} else {
      var pictureLocation; 	
      var passwordEntered;
	  var passwordType = "bank";
	  var participantNum;
	
	  if(manBankImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 0;
	  } else if (dogBankImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 1; 
	  } else if (carBankImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 2; 
	  } else if (womanBankImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 3;
	  } else if (ballBankImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 4; 
	  } else if (appleBankImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 5; 
	  }
	
	  passwordEntered = yourPw1.value;
	
	  numTries1++;
	
	  var userData = {
		  pictureLocation: pictureLocation,
	      passwordEntered: passwordEntered, 
		  passwordType: passwordType,
		  numTries: numTries1, 
		  time: bankTime
	  };
	
	  console.log("This password attempt is being sent to the server:"); 
	  console.log(userData);
	
	
	  //send the data object containing the password attempt information to the server
	  //to check for accuracy
	  $.post("/passAttempt",userData, 
	  function(data) {
		  console.log("response received Bank password checked"); 
		  console.log(data.success);
		  
		  if(data.success) {
			  
		  }
		  
	  });
	}
	
});

//this button listener is for the shopping password checking
//it builds a data object storing the attempted password information and
//send it to the server to check for accuracy
shoppingButton.addEventListener("click", function(e) {
	//create data object to send to server to check to see if password is correct
	
	if(numTries2 >= 3) {
		shoppingWarning.innerHTML = "You have already tried the maximum number of times";
	} else {
	  var pictureLocation; 	
      var passwordEntered;
	  var passwordType = "shopping";
	
	  if(manShoppingImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 0;
	  } else if (dogShoppingImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 1; 
	  } else if (carShoppingImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 2; 
	  } else if (womanShoppingImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 3;
	  } else if (ballShoppingImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 4; 
	  } else if (appleShoppingImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 5; 
	  }
	
	  passwordEntered = yourPw2.value;
	
	  numTries2++;
	
	  var userData = {
		  pictureLocation: pictureLocation,
	      passwordEntered: passwordEntered,
		  passwordType: passwordType,
		  numTries: numTries2, 
		  time: shoppingTime
	  };
	
	  console.log("This password attempt is being sent to the server:"); 
	  console.log(userData);
	
	  //send the password attempt in data object to check with server for accuracy
	  $.post("/passAttempt",userData, 
	  function(data) {
		  console.log("response received shopping password checked"); 
	  });
	}
  });

//this button listener is for the email password checking
//it builds a data object storing the attempted password information and
//send it to the server to check for accuracy
emailButton.addEventListener("click", function(e) {
	//create data object to send to server to check to see if password is correct
	
	if(numTries3 >= 3) {
		emailWarning.innerHTML = "You have already tried the maximum number of times";
	} else {
		
	  var pictureLocation; 	
      var passwordEntered;
	  var passwordType = "email";
	
	  if(manEmailImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 0;
	  } else if (dogEmailImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 1; 
	  } else if (carEmailImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 2; 
	  } else if (womanEmailImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 3;
	  } else if (ballEmailImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 4; 
	  } else if (appleEmailImage.style.border === "thick solid rgb(0, 0, 255)") {
		  pictureLocation = 5; 
	  }
	
	  passwordEntered = yourPw3.value;
	
	  numTries3++;
	
	  var userData = {
		  pictureLocation: pictureLocation,
	      passwordEntered: passwordEntered,
		  passwordType: passwordType,
		  numTries: numTries3,
		  time: emailTime
	  };
	
	  console.log("This password attempt is being sent to the server:"); 
	  console.log(userData);
	
	  //send the data object to the server to check for accuracy
	  $.post("/passAttempt",userData, 
	  function(data) {
		  console.log("response received email password checked"); 
	  });
	}
	
});





