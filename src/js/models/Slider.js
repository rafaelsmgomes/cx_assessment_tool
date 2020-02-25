export default class Slider {
	
	constructor(attr){
		this.question = attr.question;
		this.id = attr.id;
		this.group = attr.group;
    this.count = attr.count;
		this.sliderGroup = attr.sliderArr;
		this.questionSet = [];
		this.minSet = [];
		this.maxSet = [];
		this.indVal = [];
		this.val = 0;
    this.id = null;		

		this.sortAll();
	}

	sortAll(){		
		for(var slider of this.sliderGroup){
			this.questionSet.push(slider.question);
			this.minSet.push(slider.min);
			this.maxSet.push(slider.max);	
		}
	}

  assignValue(){
  	let sumofVal = 0;

  	for(let val of this.indVal){
  		sumofVal += val;
  	}

  	this.val = sumofVal/this.maxSet.length;
  	// this.val = Math.round(sumofVal)
  }    	
}