(() => {
	console.log('fired');

	const 	shields = document.querySelectorAll('.sigil-container'),
			lightbox = document.querySelector('.lightbox'),
			video = document.querySelector('video'),
			closeLB = document.querySelector('.lightbox-close'),
			banners = document.querySelector('#houseImages');

	function showLightbox() {
		//grab the right video source
		//debugger;
		//get the lowercase house name from the class list
		let targetHouse = this.className.split(" ")[1];
		
		// make sure the names match - needs to be uppercase
		// stark becomes Stark -> first make a capital S then add tark
		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetSrc}.mp4`;

		lightbox.classList.add('show-lightbox');

		video.load();
		video.play();
	}

	function hideLightbox() {
		lightbox.classList.remove('show-lightbox');
		// rewind the video to the beginning
		// and also pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		const offSet = 600;

		totalOffset = this.dataset.offset * offSet + "px";
		//set the style css will animate
		banners.style.right = totalOffset;
	}

	//shields.forEach(shield => shield.addEventListener('click', showLightbox));
	shields.forEach(shield => shield.addEventListener('click', animateBanner));
	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();