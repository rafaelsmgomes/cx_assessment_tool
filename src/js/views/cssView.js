export const toggleHeader = () => {
		$('.panel--41').scroll(function () {
    if ($(this).scrollTop() < 5) {      
    	$(".header__container").removeClass("fade-up");      
    }else{    	
    	$(".header__container").addClass("fade-up");
    }              
  });
};
