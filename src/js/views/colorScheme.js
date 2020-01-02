const knob = require('jquery-knob');

export default class ColorScheme {
  constructor(attr) {       
  	this.currPage = 0;  
		this.colorSchemes = attr.colorSchemes;  	
  	this.pageBreaks= attr.pageBreaks;
  }

	addPage(){
		this.currPage++;

		console.log(this.currPage);

		if(this.pageBreaks.includes(this.currPage)){
			const index = this.pageBreaks.indexOf(this.currPage);
			const colorScheme = this.colorSchemes[index]; 

			this.changeDialColors(colorScheme);
			this.changeBackground(colorScheme);
			this.changeComponentBtns(colorScheme);			
			this.changeRegressBtn(colorScheme);
		}
	}  

	minusPage(){
		this.currPage--;



		if(this.pageBreaks.includes(this.currPage+1)){
			const index = this.pageBreaks.indexOf(this.currPage+1);

			console.log(`index:${index}, colorScheme:${this.colorSchemes}`);
			const colorScheme = this.colorSchemes[Number(index)-1]; 

			this.changeDialColors(colorScheme);
			this.changeBackground(colorScheme);
			this.changeComponentBtns(colorScheme);			
			this.changeRegressBtn(colorScheme);
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

	changeComponentBtns(colorScheme){
		$('.likert__button, .checkbox__button, .vertfc__button').removeClass('likert__button--0 likert__button--1 likert__button--2 likert__button--3 checkbox__button--0 checkbox__button--1 checkbox__button--2 checkbox__button--3 vertfc__button--0 vertfc__button--1 vertfc__button--2 vertfc__button--3');
		
		$('.likert__button').addClass(`likert__button${colorScheme.btnColorClass}`);
		$('.vertfc__button').addClass(`vertfc__button${colorScheme.btnColorClass}`);
		$('.checkbox__button').addClass(`checkbox__button${colorScheme.btnColorClass}`);				
	}

	changeRegressBtn(colorScheme){
		$('.btn__regress').removeClass('btn__regress--0 btn__regress--1 btn__regress--2 btn__regress--3');
		$('.btn__regress').addClass(`btn__regress${colorScheme.btnColorClass}`);

		$('.header__rectangle--grow').removeClass('header__rectangle--grow--0 header__rectangle--grow--1 header__rectangle--grow--2 header__rectangle--grow--3');
		$('.header__rectangle--grow').addClass(`header__rectangle--grow${colorScheme.btnColorClass}`);
	}

}