export default class Vertfc {
    constructor(textArr) {       
    	this.val = 0;
    	this.textArr = textArr;
    }

    assignValue(qLen,v){
    	this.val = Math.round(100*(1/qLen)*(v/100));
    }    
}
