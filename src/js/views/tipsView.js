export default class TipsScheme{
  constructor(attr) {       
  	this.divActivate = attr.divActivate;
  	this.schemeObj = attr.schemeObj;
  }

	// addPage(){
	// 	this.currPage++;

	// 	console.log(this.currPage);

	// }  

	// minusPage(){
	// 	this.currPage--;

	// 	console.log(this.currPage);

	// 	// if(this.pageBreaks.includes(this.currPage+1)){
	// 	// 	const index = this.pageBreaks.indexOf(this.currPage+1);

	// 	// 	console.log(`index:${index}, colorScheme:${this.colorSchemes}`);
	// 	// 	const colorScheme = this.colorSchemes[Number(index)-1]; 

	// 	// 	this.changeDialColors(colorScheme);
	// 	// 	this.changeBackground(colorScheme);
	// 	// 	this.changeComponentBtns(colorScheme);			
	// 	// 	this.changeRegressBtn(colorScheme);
	// 	// }
	// } 

	changeTips(){		
		for(const component in this.schemeObj){
			const ele = $(this.divActivate).find(component)[0];

			component === '.landing__container' ? $('.header__rectangle--2').removeClass('header__rectangle--activate') : $('.header__rectangle--2').addClass('header__rectangle--activate');
			if(ele){			
				$('.grow--text--1').text(this.schemeObj[component]);	
				break;
			}
		}
	}  
};
