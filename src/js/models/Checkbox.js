export default class Checkbox {
    constructor(textArr) {       
    	this.val = 0;
    	this.textArr = textArr;
    	this.chosenArr = new Set();
        this.pointVal = this.retrievePointVal()*100;
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
        this.val = Math.round(100*(1/qLen)*(v/100));
    }
}
