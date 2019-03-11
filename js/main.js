(() => {
	console.log('fired');

	const 	shields = document.querySelectorAll('.sigil-container'),
			lightbox = document.querySelector('.lightbox'),
			video = document.querySelector('video');

	function showLightbox() {
		lightbox.classList.add('show-lightbox');
	}

	function hideLightbox() {
		lightbox.classList.remove('show-lightbox');
	}

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);
})();