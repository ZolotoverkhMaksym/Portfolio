function featuresSetImg() {
	const featuresImgwrapper = document.querySelector('.features__image-wrapper');
	const featuresTitle = document.querySelector('.features__tittle');

	window.addEventListener('resize', featuresImgwrapperSet);

	function featuresImgwrapperSet() {
		if (document.body.clientWidth >= 992) {
			featuresImgwrapper.style.top = `${featuresTitle.offsetTop + featuresTitle.offsetHeight + 19}px`;
			featuresImgwrapper.style.left = `${featuresTitle.offsetLeft}px`;
		} else {
			featuresImgwrapper.style.top = ``;
			featuresImgwrapper.style.left = ``;
		}
	}
	featuresImgwrapperSet();
}
featuresSetImg();