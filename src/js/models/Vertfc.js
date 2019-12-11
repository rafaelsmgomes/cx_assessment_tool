export default class Vertfc {
    constructor(attr) {   
      this.group = attr.group;
      this.id = attr.id;
      this.question = attr.question;
      this.count = attr.count;  
    	this.val = 25;
    	this.textArr = attr.textArr;
      this.id = null;   
      this.choseAns = null;   
    }

    assignValue(v){
    	// console.log(v);
    	this.val = Number(v);
    }    

    chooseAns(txt){
      this.choseAns = txt;
    }
}
