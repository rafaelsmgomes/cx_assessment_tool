export default class Dial {
    constructor(attr) {         
    	this.val = 0;
    	this.question = attr.question;
    	this.id = null;
    	this.textArr = attr.textArr;
    	this.group = attr.group; //Group its on
    	this.count = attr.count; //Whether it counts or not;
        this.chosenAns = null;
    }

    assignValue(qLen,v){
    	this.val = Math.round(100*(v/180));    	
    }    

    assignAns(v){
        if(this.textArr.length === 3){
            if(v <= 60){
                this.chosenAns = this.textArr[0];
            }else if(v > 60 && v <= 120){
                this.chosenAns = this.textArr[1];
            }else{
                this.chosenAns = this.textArr[2];
            }
        }else{
            if(v <= 90){
                this.chosenAns = this.textArr[0];
            }else{
                this.chosenAns = this.textArr[1];
            }
        }
    }
}
