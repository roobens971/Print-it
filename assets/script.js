const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/***Even listeners sur les flèches - Etapes 2***/
const arrow = document.querySelectorAll('.arrow');
console.log(arrow);

/** Bullet points **/
const bulletPoints = document.querySelector('.dots');
console.log(bulletPoints);

/*slide1*/
const slide1 = document.querySelector(".slide1");
console.log(slide1);
slide1.src = "./assets/images/slideshow/slide1.jpg";
slide1.classList.add("dot_selected");

/*slide2*/
const slide2 = document.querySelector(".slide2");
console.log(slide2);
slide2.src = "./assets/images/slideshow/slide2.jpg";
/*slide2.classList.add("dot_selected");*/


/*slide3*/
const slide3 = document.querySelector(".slide3");
console.log(slide3);
slide3.src = "./assets/images/slideshow/slide3.jpg";
/*slide3.classList.add("dot_selected");*/


/*slide4*/
const slide4 = document.querySelector(".slide4");
console.log(slide4);
slide4.src = "./assets/images/slideshow/slide4.jpg";
/*slide4.classList.add("dot_selected");*/