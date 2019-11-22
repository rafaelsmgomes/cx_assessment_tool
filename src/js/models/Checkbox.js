export default class Checkbox {
    constructor(attr) {       
    	this.val = 25;
        this.group = attr.group;
        this.count = attr.count;
        this.question = attr.question;
    	this.textArr = attr.textArr;
        this.id = null;
    	this.chosenArr = new Set();
        this.pointVal = this.retrievePointVal()*75;        
    }

    addAns(answers){
        this.clearAnswers();
        for(let answer of answers){
    	   this.chosenArr.add(answer);
        }
    }    

    clearAnswers(){
    	this.chosenArr.clear();	
    }

    retrievePointVal(){
        const checkbox = this.textArr;
        const checkboxLen = checkbox.length;
        const value = 1/checkboxLen;
        return value;        
    }

    assignValue(qLen,v){
        this.val = Math.round(100*(1/qLen)*(v/100))+25;
    }
}
