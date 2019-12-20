export const toggleHeader = () => {
		$('.panel--41').scroll(function () {
    if ($(this).scrollTop() < 5) {      
    	$(".header__container").removeClass("fade-up");      
    }else{    	
    	$(".header__container").addClass("fade-up");
    }              
  });
};

export const loadLottie = (obj, data, timing) => {

	console.log(
		'asdfasdf',
		data
	// data[0].BroadcastScore,
	// data[0].ResponsiveScore,
	// data[0].RelationshipScore,
	// data[0].LifecycleScore,
	// // 'asdfasdf'
	);


	for(const key in obj){
		const lottieTemp = lottie.loadAnimation({
		  container: document.getElementById(key),
		  renderer: 'svg',
		  autoplay: false,
		  animationData: obj[key],
		  loop: false,
		});

		setTimeout(function(){
			lottieTemp.play(); 
		}, timing*2)
	}
}