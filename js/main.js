(() => {
	console.log('fired');

	const 	shields = document.querySelectorAll('.sigil-container'),
			lightbox = document.querySelector('.lightbox'),
			video = document.querySelector('video'),
			closeLB = document.querySelector('.lightbox-close'),
			banners = document.querySelector('#houseImages');
    let     icon = document.querySelector('.sigil-box'),
    		houseInfo = document.querySelector('.house-info');

    const houseData = [
		[`STARK`, `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],

		[`BARATHEON`, `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End. House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.`],

		[`LANNISTER`, `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway. The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`],

		[`TULLY`, `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."`],

		[`GREYJOY`, `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke. House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow", although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.`],

		[`ARRYN`, `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.`],

		[`TARGERYEN`, `House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.`],

		[`TYRELL`, `House Tyrell of Highgarden is one of the Great Houses of the Seven Kingdoms, being Lords Paramount of the Mander and the liege lords of the Reach. A large, wealthy house, its wealth is only surpassed among the Great Houses by House Lannister, and the Tyrells can field the greatest armies. Additionally, if they call the ships of the Redwyne fleet, the lords of the Shield Islands, and the coastal lords, they can command a navy that equals if not surpasses the royal fleet of King's Landing.`],

		[`FREY`, `House Frey of the Twins was the Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all the male Freys soon after.`]

	];
    	

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
        TweenMax.fromTo(sigil, 2, { scale: 1, opacity:0 }, { scale: 1.3, repeat:1, yoyo:true, opacity:1 }).eventCallback("onComplete", showLightbox, null, this);
    }

	function animateBanner() {
		const offSet = 600;
        let nameSrc = this.className.split(" ")[1];
        let houseName = document.querySelector('.houseName');
        
        //houseName.innerHTML = `House ${nameSrc}`;
        
		totalOffset = this.dataset.offset * offSet /*+ "px"*/;
		//set the style css will animate
		//banners.style.right = totalOffset;
		//houseName.textContent = `House ${nameSrc}`;
		houseName.textContent = `House ${houseData[this.dataset.offset][0]}`;
		houseInfo.textContent = houseData[this.dataset.offset][1];

		TweenMax.to(banners, 0.8, { right: totalOffset }).eventCallback("onComplete", animateSigil, null, nameSrc);
        
    }
	houseInfo.textContent = houseData[0][1];
	//shields.forEach(shield => shield.addEventListener('click', showLightbox));
	shields.forEach(shield => shield.addEventListener('click', animateBanner));
	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();