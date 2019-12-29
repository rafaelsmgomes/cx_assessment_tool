export default class TipsScheme{
  constructor(attr) {       
  	this.currPage = 0;  
		this.tipsSchemes = attr.tipsSchemes;  	
  	this.pageBreaks= attr.pageBreaks;
  }

	addPage(){
		this.currPage++;

		console.log(this.currPage);

		// if(this.pageBreaks.includes(this.currPage)){
		// 	const index = this.pageBreaks.indexOf(this.currPage);
		// 	const colorScheme = this.colorSchemes[index]; 

		// 	this.changeDialColors(colorScheme);
		// 	this.changeBackground(colorScheme);
		// 	this.changeComponentBtns(colorScheme);			
		// 	this.changeRegressBtn(colorScheme);
		// }
	}  

	minusPage(){
		this.currPage--;

		console.log(this.currPage);

		// if(this.pageBreaks.includes(this.currPage+1)){
		// 	const index = this.pageBreaks.indexOf(this.currPage+1);

		// 	console.log(`index:${index}, colorScheme:${this.colorSchemes}`);
		// 	const colorScheme = this.colorSchemes[Number(index)-1]; 

		// 	this.changeDialColors(colorScheme);
		// 	this.changeBackground(colorScheme);
		// 	this.changeComponentBtns(colorScheme);			
		// 	this.changeRegressBtn(colorScheme);
		// }
	}   
};
