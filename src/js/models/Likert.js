export default class Likert {
    constructor(attr) {
    	this.val = 0;
    	this.id = attr.id;
    	this.question = attr.question;
    	this.textArr = attr.textArr;
    	this.group = attr.group;
    	this.count = attr.count;
        this.id = null;     
        this.choseAns = null;   
    }

    assignValue(v){
    	this.val = Number(v);
    }    

    chooseAns(txt){
        this.choseAns = txt;
    }
}
