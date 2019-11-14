export default class Vertfc {
    constructor(textArr) {       
    	this.val = 25;
    	this.textArr = textArr;
    }

    assignValue(qLen,v){
    	// console.log(v);
    	this.val = Math.round(100*(1/qLen)*(v/100));
    }    
}
