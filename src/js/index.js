import 'jquery';
import 'cpr_pathpackage'; 

// import Checkbox from './models/Checkbox';
// import Dial from './models/Dial';
// import Likert from './models/Likert';
// import Slider from './models/Slider';
// import Vertfc from './models/Vertfc';

import {panels} from './views/panels';
import ColorScheme from './views/colorScheme';

import {state} from './state';

import variables from './../sass/abstracts/variables.scss';

const question_length = panels.length-2;
const timing = variables.timing1;
state.qLen = question_length;
state.white = variables.white1;

const colorSchemeGroup = new ColorScheme(
	{'colorSchemes':[{
		'dialBgColor': variables.green2,
		'btnColorClass': '--0',	
		'background': 'background--0',		
	},
	{				
		'dialBgColor':variables.blue2,
		'btnColorClass':'--1',			
		'background': 'background--1',		
	},
	{				
		'dialBgColor':variables.tan1,
		'btnColorClass':'--2',		
		'background': 'background--2',		
	},
	{				
		'dialBgColor':variables.grey2,
		'btnColorClass':'--3',		
		'background': 'background--3',		
	},		
	],
	'pageBreaks':[0,10,20,33],			
	}
);
state.colorScheme = colorSchemeGroup;

$(document).ready(function(){
	/*** App path Ctrl ***/ 		
		$('.pathfinder').build({
			'panels': panels,
			'timing': timing,
			'spacing': 400,
			'state': state,
			// 'delay': 1,
		});

	// /*** Dial Ctrl ***/ 
		$(".dial-tracker").cprDial({
			'thickness': .12,
			'height': '200%',
			'bgColor': variables.green2,
			'fgColor': state.white,
			'state': state,
			'percShow': false,		
		});

		$(".dial-tracker2").cprDial({
			'thickness': .12,
			'height': '200%',
			'bgColor': variables.green2,
			'fgColor': state.white,
			'state': state,		
			'percShow': true,
		});		


	// /*** Likert Ctrl ***/ 

		$('.likert__form').cprLikert({
			'vertical': false,
			'state': state,
		});

	// /*** Checkbox Ctrl ***/ 

		$('.checkbox__form').cprCheckbox({
			'vertical': false,
			'state': state,
			'size': .15,
		});

	// /*** Vertfc Ctrl ***/ 

		$('.vertfc__form').cprVertfc({
			'state': state,
			'size': .10,
		});

	/*** Slider Ctrl ***/ 
		
		$('.slider__form').cprSlider({
			'state': state,
			'size': .1,
			'sideIcons': false,
			'windowWidth': $('.panel').width(),
			'windowHeight': $('.panel').height(),
		});



	/*** Custom CSS on Btn Progress ***/
		// $('.btn__progress').click(function(){
		// 	colorSchemeGroup1.addPage();
		// 	console.log(colorSchemeGroup1);
		// });

		// $('.btn__regress').click(function(){
		// 	colorSchemeGroup1.minusPage();
		// 	console.log(colorSchemeGroup1);
		// });


	// $('.btn__progress--6').click();
	window.statete = state;
});

// ------------------------------------------------
// POST AND GET REQUEST TO GENERATE DATABASE
// ------------------------------------------------

$('.header__rectangle--grow-3').click(postState);
async function postState() {

	const options = {
		method: 'POST',
		body: JSON.stringify(window.statete),
		headers: {
			'Content-Type': 'application/json',
		},
	}
	fetch('/api', options)

	.then((resp) => {
		console.log(resp)
		return fetch('/api2', { method: 'GET'} )
	})
	.then((response) => {
		return response.json();	
	})
	.then( (el) => {
		const myJson = el;
		console.log(myJson);
	})
}

// ------------------------------------------------
// GET PDF DATA FUNCTION
// ------------------------------------------------

// $('.header__rectangle--grow-3').click(getPdfData);
// async function getPdfData() {
// 	fetch('/pdf')
// 	.then(response => {
// 		return response.json()
// 	})
// 	.then( el => {
// 		const pdfData = el;
// 		console.log(pdfData)
// 	})
// }
