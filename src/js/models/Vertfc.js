export default class Vertfc {
    constructor(attr) {   
      this.group = attr.group;
      this.count = attr.count;  
    	this.val = 25;
    	this.textArr = attr.textArr;
    }

    assignValue(qLen,v){
    	// console.log(v);
    	this.val = Math.round(100*(1/qLen)*(v/100));
    }    
}
