import 'jquery';
import 'cpr_pathpackage'; 

import Checkbox from './models/Checkbox';
import Dial from './models/Dial';
import Likert from './models/Likert';
import Slider from './models/Slider';
import Vertfc from './models/Vertfc';

import {panels} from './views/panels';
import {state} from './state';

const question_length = panels.length-2;
state.qLen = question_length;
state.white = '#fff';


/*** App path Ctrl ***/ 

	$('.pathfinder').build({
		'panels': panels,
		'timing': 1500,
		'spacing': 400,
		// 'delay': 1,
	});



/*** Dial Ctrl ***/ 

	// $(".dial-tracker").cprDial({
	// 	'thickness': .12,
	// 	'height': '200%',
	// 	'bgColor': '#56504b',
	// 	'fgColor': state.white,
	// 	'state': state,		
	// });

/*** Likert Ctrl ***/ 

	// $('.likert__form').cprLikert({
	// 	'vertical': false,
	// 	'state': state,
	// });

/*** Checkbox Ctrl ***/ 

	// $('.checkbox__form').cprCheckbox({
	// 	'vertical': false,
	// 	'state': state,
	// 	'size': .15,
	// });

/*** Vertfc Ctrl ***/ 

	// $('.vertfc__form').cprVertfc({
	// 	'state': state,
	// 	'size': .10,
	// });

/*** Slider Ctrl ***/ 
	
	$('.slider__form').cprSlider({
		'state': state,
		'size': .1,
		'sideIcons': false,
	});

window.statete  = state.sliders[0];


// $('.btn__progress--1').click();

// $('.btn__progress').click(function(e){
// 	const sendThis = 'a';

// 	console.log(sendThis);
// })