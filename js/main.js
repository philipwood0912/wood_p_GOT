(() => {
	console.log('fired');

	const 	shields = document.querySelectorAll('.sigil-container'),
			lightbox = document.querySelector('.lightbox'),
			video = document.querySelector('video');

	function showLightbox() {
		lightbox.classList.add('show-lightbox');
		video.play();
	}

	function hideLightbox() {
		lightbox.classList.remove('show-lightbox');
		// rewind the video to the beginning
		// and also pause it
		video.currentTime = 0;
		video.pause();
	}

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);
})();