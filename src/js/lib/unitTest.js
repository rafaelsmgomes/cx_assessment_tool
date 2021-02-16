export const unitTest = function(state){			
	runTest();

	function runTest(){
		console.log('<<<<<TOTAL QUESTIONS>>>>>')
		printCountQ();
		console.log('');
		console.log('<<<<<TOTAL QUESTIONS per GROUP>>>>>')
		printCountQperG();
		console.log('');
		console.log('<<<<<TOTAL SCORES Per GROUP>>>>>');
		printScoresPerG();
		console.log('');
		console.log('<<<<<Average Per Group>>>>>');
		printAvgPerG();
	}

	// PRINT TEST

	function printAvgPerG(){
		const avgObj = retrieveAvgPerG();
		
		for(let group in avgObj){
			console.log(`Average of ${group}: ${avgObj[group]}`);
		}
	}

	function printCountQ() {
		console.log(`Number of total questions:${countQ()}`);
	}

	function printCountQperG(){
		const groups = countQperG();

		for(const key in groups){
			console.log(`${key}:${groups[key].length}`);					
		}
	}

	function printScoresPerG(){
		const scoresArr = retrieveScoresPerG()
		for(let score of scoresArr){
			console.log(score);
		}
	}

	// UNIT TESTS
	function countQ(){				
		return state.qLen;		
	}

	function countQperG(){				
		const groups = {};

		qFlat().forEach( function(element, index) {
			if(!groups[element.group]){
				groups[element.group] = [];
				groups[element.group].push(element);
			}else{
				groups[element.group].push(element);
			}
		});		
		return groups;		
	}

	function retrieveScoresPerG(){
		const scoresContainer = [];
		const groups = countQperG();		
		for(let group in groups){
			let questionNum = 1;
			const questions =  groups[group];
			
			for(let question of questions){
				scoresContainer.push(`${group} question ${questionNum} score: ${question.val}, count:${question.count}`);
				questionNum += 1
			}
		}	

		return scoresContainer;
	}


	function retrieveAvgPerG(){
		const groups = countQperG();	
		
		const avgPerGroup = {};
		let denominator = 0;
		for(let group in groups){
			if(!avgPerGroup[group]){
				avgPerGroup[group] = 0;
				denominator = 0;
			};		

			for(let question of groups[group]){
				avgPerGroup[group] += question.val
				denominator++;
			}				 			
			
			avgPerGroup[group] = avgPerGroup[group]/denominator; 		
		}
		
		return avgPerGroup;
	}

	// HELPER FUNCTIONs
	function qFlat(){
		const dials = state.dials;
		const likerts = state.likerts;
		const checkboxes = state.checkboxes;
		const vertfcs = state.vertfcs;
		const sliders = state.sliders;

		return dials.concat(likerts,checkboxes,vertfcs,sliders);
	}
};