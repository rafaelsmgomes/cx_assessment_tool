export default class Dial {
    constructor(attr) {         
    	this.val = 0;
    	this.question = attr.question;
    	this.id = attr.id;
    	this.textArr = attr.textArr;
    	this.group = attr.group; //Group its on
    	this.count = attr.count; //Whether it counts or not;
    }

    assignValue(qLen,v){
    	this.val = Math.round(100*(v/180));    	
    }    
}
