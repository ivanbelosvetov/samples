let textarea = document.getElementById('popup__editable__input');
let button = document.getElementById('popup_platform_button');
let popup_button = document.getElementById('popup__button');
let popup_button2 = document.getElementById('popup__button2');
let images = document.getElementById('img__11');
let imgNumber = 0;
let imageSources = ["https://github.com/ivanbelosvetov/samples/gh-pages/img/Fishdom_1.jpg", "https://github.com/ivanbelosvetov/samples/gh-pages/img/Fishdom.jpg"]
button.onclick = function() {
	textarea.classList.add('edit');

}

popup_button.onclick = function () {
	images.src = imageSources[imgNumber];
	if (imgNumber < 1) {
		imgNumber = imgNumber + 1;
	} else if (imgNumber > 0) {
		imgNumber = imgNumber - 1;
	}
	
	
}

popup_button2.onclick = function () {
	images.src=imageSources[imgNumber];
	if (imgNumber < 1) {
		imgNumber = imgNumber + 1;
	} else if (imgNumber > 0) {
		imgNumber = imgNumber - 1;
	}
}

document.body.onkeydown = (k) => {
	if(k.key=="ArrowLeft") {
		images.src = imageSources[imgNumber];
	if (imgNumber < 1) {
		imgNumber = imgNumber + 1;
	} else if (imgNumber > 0) {
		imgNumber = imgNumber - 1;
	}
	}
	if(k.key=="ArrowRight") {
		images.src = imageSources[imgNumber];
	if (imgNumber < 1) {
		imgNumber = imgNumber + 1;
	} else if (imgNumber > 0) {
		imgNumber = imgNumber - 1;
	}
  }	 

}
