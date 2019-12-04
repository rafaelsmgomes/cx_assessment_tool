const knob = require('jquery-knob');

export default class ColorScheme {
  constructor(attr) {       
  	this.currPage = 0;  
		this.colorSchemes = attr.colorSchemes;  	
  	this.pageBreaks= attr.pageBreaks;
  }

	addPage(){
		this.currPage++;
		

		if(this.pageBreaks.includes(this.currPage)){
			const index = this.pageBreaks.indexOf(this.currPage);
			const colorScheme = this.colorSchemes[index]; 

			this.changeDialColors(colorScheme)

			this.changeBackground(colorScheme);
			// $('html').
			//     background-image: url(../assets/images/1x/dark-pattern.jpg)
		}
	}  

	changeDialColors(colorScheme){
		$('.dial-tracker, .dial-tracker2').trigger(
      'configure',
      {
        "bgColor":colorScheme.dialBgColor,
      }
		);
	}

	changeBackground(colorScheme){
		$('.background').removeClass('background--0 background--1 background--2 background--3 background--4');
		$('.background').addClass(`${colorScheme.background} fadeInout`);


		setTimeout(function(){
			$('.background').removeClass('fadeInout');
		}, 1700);
	}


	minusPage(){
		this.currPage--;
	}    	

}