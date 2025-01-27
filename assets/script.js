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

let compteur = 0;

/* Récupération des éléments en HTML */
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');

function changeImg(){
	bannerImg.src = `assets/images/slideshow/${slides[compteur].image}`;
	tagLine.innerHTML = slides[compteur].tagLine;
}

function changeDots(){
	// Retirer la class "dot_selected" sur toutes les dots
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	// Ajouter la class "dot_selected" sur la dot en cours
	dots[compteur].classList.add('dot_selected');
}

// Créer un événement pour la flèche de gauche
arrowLeft.addEventListener("click", function() {
	compteur--;

	if(compteur < 0){
		compteur = slides.length-1;
	}

	changeImg();
	changeDots();
});

// Créer un événement pour la flèche de droite
arrowRight.addEventListener("click", function() {
	compteur++;

	if(compteur == slides.length){
		compteur = 0;
	}

	changeImg();
	changeDots();
});