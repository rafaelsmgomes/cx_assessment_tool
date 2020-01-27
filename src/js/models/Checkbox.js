export default class Checkbox {
    constructor(attr) {       
    	this.val = 0;
        this.group = attr.group;
        this.count = attr.count;
        this.question = attr.question;
    	this.textArr = attr.textArr;
        this.id = null;
        this.custVals = attr.custVals;
    	this.choseAns = [];
        // this.pointVal = this.retrievePointVal()*75;        
    }

    addAns(answers){
        this.clearAnswers();
        for(let answer of answers){
    	   this.choseAns.push(answer);
        }        
    }    

    clearAnswers(){
    	this.choseAns = [];	
    }

    // retrievePointVal(){
    //     const checkbox = this.textArr;
    //     const checkboxLen = checkbox.length;
    //     const value = 1/checkboxLen;
    //     return value;        
    // }

    assignValue(){
        if(this.custVals === undefined){
            const len = Number(this.textArr.length);
            const ansLen = Number(this.choseAns.length);
            this.val = (ansLen/len)*100;            
        }else{      
            let val = 0;        
            for(let [i,text] of this.choseAns.entries()){
                val += this.custVals[i];
            }
            this.val = val;
        }
    }
}
