var bankImageNum; 
var shoppingImageNum; 
var emailImageNum;

var pictures = ["Man", "Dog", "Car", "Woman", "Ball", "Apple"];
var picturesSize = 6;

var bankButton = document.getElementById("bankButton");
var shoppingButton = document.getElementById("shoppingButton");
var emailButton = document.getElementById("emailButton");

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


bankButton.addEventListener("click", function(e) {
	//check to see if password is correct
	
});

shoppingButton.addEventListener("click", function(e) {
	//check to see if password is correct
	
});

emailButton.addEventListener("click", function(e) {
	//check to see if password is correct
	
});