window.onload = () => {
	let button = document.querySelector("#calc");
	

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
	
	
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document
			.querySelector("#weight").value);

	
    let result = weight/(height*height)*10000;
 	
    document.getElementById("display").value += result.toFixed(2);;
    }
	
	let clear = document.querySelector("#clear");
	clear.addEventListener("click", clearScrn);
	function clearScrn(){
		
		document.getElementById("display").value ="";
	}