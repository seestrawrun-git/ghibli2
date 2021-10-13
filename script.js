
let myImage;
let mySummary;

// let data = fetch("https://ghibliapi.herokuapp.com/films")
// 	.then(response =>  { 	
// 		console.log(response)
// 		return response.json()
// 	})
// 	.then(result => {
// 		console.log(result)

// 		let pickedMovie =
// 		result[Math.floor(random(result.length-1))];

// 		myImage = loadImage(pickedMovie.image);
// 		console.log(myImage);

// 		mySummary = pickedMovie.description
// 		console.log(mySummary);

// 		return result
// 	});

async function  getData(){ 
	let response  = await fetch("https://ghibliapi.herokuapp.com/films");
	let data = await response.json();
	let pickedMovie = data[Math.floor(random(data.length-1))];
	myImage = loadImage(pickedMovie.image);
	mySummary = pickedMovie.description

}
getData();



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	if(myImage != undefined) {
		image(myImage,0, 0);
	}

	if(mySummary != undefined) {
		text(mySummary, 50, 50, 400, 400); //(mySummary,xPosition, yPosition, xBound, yBound)
		}

}