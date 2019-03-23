(() => {
	console.log('fired');

	const 	shields = document.querySelectorAll('.sigil-container'),
			lightbox = document.querySelector('.lightbox'),
			video = document.querySelector('video'),
			closeLB = document.querySelector('.lightbox-close'),
			banners = document.querySelector('#houseImages');
    let     icon = document.querySelector('.sigil-box');

	function showLightbox() {
		//grab the right video source
		//debugger;
		//get the lowercase house name from the class list
		
        // let targetHouse = this.classList.split(" ")[1];
		// make sure the names match - needs to be uppercase
		// stark becomes Stark -> first make a capital S then add tark
		let targetSrc = this.charAt(0).toUpperCase() + this.slice(1);
        
		video.src = `video/House-${targetSrc}.mp4`;

		lightbox.classList.add('show-lightbox');

		video.load();
		video.play();
	}

	function hideLightbox() {
		lightbox.classList.remove('show-lightbox');
        icon.classList.remove('show-lightbox');
		// rewind the video to the beginning
		// and also pause it
		video.currentTime = 0;
		video.pause();
	}
    
    function animateSigil() {
        
        icon.classList.add('show-lightbox');
        
        icon.innerHTML = `<img src="images/house-${this}.svg" alt="${this}">`;
        let sigil = document.querySelector('.sigil-box img');
        TweenMax.fromTo(sigil, 2, { scale: 1, opacity:0 }, { scale: 1.2, repeat:1, yoyo:true, opacity:1 }).eventCallback("onComplete", showLightbox, null, this);
    }

	function animateBanner() {
		const offSet = 600;
        let nameSrc = this.className.split(" ")[1];
        let houseName = document.querySelector('.houseName');
        
        houseName.innerHTML = `House ${nameSrc}`;
        
		totalOffset = this.dataset.offset * offSet /*+ "px"*/;
		//set the style css will animate
		//banners.style.right = totalOffset;

		TweenMax.to(banners, 0.8, { right: totalOffset }).eventCallback("onComplete", animateSigil, null, nameSrc);
        
        
	}

	//shields.forEach(shield => shield.addEventListener('click', showLightbox));
	shields.forEach(shield => shield.addEventListener('click', animateBanner));
	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();