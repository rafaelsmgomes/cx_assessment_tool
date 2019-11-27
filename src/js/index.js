import 'jquery';
import 'cpr_pathpackage'; 

import Checkbox from './models/Checkbox';
import Dial from './models/Dial';
import Likert from './models/Likert';
import Slider from './models/Slider';
import Vertfc from './models/Vertfc';

import {panels} from './views/panels';
import {state} from './state';

import variables from './../sass/abstracts/variables.scss';

const question_length = panels.length-2;
const timing = variables.timing1;
state.qLen = question_length;
state.brown2 = variables.brown2;
state.white = variables.white1;

$(document).ready(function(){
	/*** App path Ctrl ***/ 		
		$('.pathfinder').build({
			'panels': panels,
			'timing': timing,
			'spacing': 400,
			// 'delay': 1,
		});



	/*** Dial Ctrl ***/ 
		$(".dial-tracker").cprDial({
			'thickness': .12,
			'height': '200%',
			'bgColor': state.brown2,
			'fgColor': state.white,
			'state': state,
			'percShow': false,		
		});

		$(".dial-tracker2").cprDial({
			'thickness': .12,
			'height': '200%',
			'bgColor': state.brown2,
			'fgColor': state.white,
			'state': state,		
			'percShow': true,
		});		


	/*** Likert Ctrl ***/ 

		$('.likert__form').cprLikert({
			'vertical': false,
			'state': state,
		});

	/*** Checkbox Ctrl ***/ 

		$('.checkbox__form').cprCheckbox({
			'vertical': false,
			'state': state,
			'size': .15,
		});

	/*** Vertfc Ctrl ***/ 

		$('.vertfc__form').cprVertfc({
			'state': state,
			'size': .10,
		});

	/*** Slider Ctrl ***/ 
		
		$('.slider__form').cprSlider({
			'state': state,
			'size': .1,
			'sideIcons': false,
		});

	/*** Custom CSS on Btn Progress ***/


	// $('.btn__progress--6').click();
	window.statete = state;
});