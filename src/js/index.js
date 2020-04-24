import 'jquery';
import 'cpr_pathpackage'; 
import 'lottie-web';

import {panels} from './views/panels';

import * as css from './views/cssView';
import * as gate from './views/gateView';
import ColorScheme from './views/colorScheme';
import TipsScheme from './views/tipsView';

import {state} from './state';

import {unitTest} from './lib/unitTest';

import variables from './../sass/abstracts/variables.scss';

import loadLoop from './lottie/loading-loop.json';
import cloudMain from './lottie/medium-cloud-texture.json';
import cloud0 from './lottie/small-cloud-green.json';
import cloud1 from './lottie/small-cloud-blue.json';
import cloud2 from './lottie/small-cloud-orange.json';
import cloud3 from './lottie/small-cloud-gray.json';
import { ok } from 'assert';

import * as country from './lib/countries';

const question_length = panels.length-2;
const timing = variables.timing1;
state.qLen = question_length;
state.white = variables.white1;
state.colorScheme = new ColorScheme(
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
	{
		'dialBgColor': variables.green2,
		'btnColorClass': '--0',	
		'background': 'background--0',		
	},
	],
	'pageBreaks':[0,11,21,32,40],			
	}
);

//copy for .header__rectangle--2 
state.tipsScheme = new TipsScheme({
	'divActivate': '.panel--activate',
	'schemeObj': {
		'.landing__container': 'Tap on the circle in the center of your screen to advance to Question 1. Get help answering a question or navigating this tool by coming here anytime. You can always go back a question by clicking the arrow at the bottom of your screen.',
		'.slider__container': 'Use your cursor to drag the slider to the correct position.',
		'.likert__container': 'Click a circle to select the correct response.',
		'.vertfc__container': 'Click a circle to select the correct response.',
		'.dial-group': 'Use your cursor to drag the dial arm to the correct response.',
		'.checkbox__container': "Click on as many circles as you like, then choose 'Next' to proceed.",
	} 
});

$(document).ready(function(){

	/*** POST REQ***/ 
		state.postState = css.postState({
			'cloudMain': cloudMain,
			'cloud0': cloud0,
			'cloud1': cloud1,
			'cloud2': cloud2,
			'cloud3': cloud3,
		},timing,state);

	/*** PRELOAD CTRL ***/
		setTimeout(function(){
			$('.preload').addClass('fade');	
		}, 3000);
			setTimeout(function(){
			$('.preload').addClass('hide');	
		}, 4000);

		setTimeout(function(){
			$('.pathfinder').addClass('fade-in');	
			$('.header__container').addClass('fade-in');	
			$('.gate__container').addClass('fade-in');
		}, 4000);


	/*** App path Ctrl ***/ 		
		$('.pathfinder').build({
			'panels': panels,
			'timing': timing,
			'spacing': 400,
			'state': state,
		});

	/*** LOTTIE CTRL ***/

		//initialize preloader
		lottie.loadAnimation({
		  container: document.getElementById('preload__container'),
		  renderer: 'svg',
		  autoplay: true,
		  animationData: loadLoop,
		  loop: true,
		});

		const preimages=["../toolsassets/images/desktop/group.png"
		,"../toolsassets/images/1x/bg-0.png"
		,"../toolsassets/images/1x/bg-1.png"
		,"../toolsassets/images/1x/bg-2.png"
		,"../toolsassets/images/1x/bg-3.png"];
		css.preloadImgs(preimages);

	/*** Dial Ctrl ***/
	
		$(".dial-tracker").cprDial({
			'thickness': .12,
			'height': '200%',
			'bgColor': variables.green2,
			'fgColor': state.white,
			'state': state,
			'panels': panels,
			'percShow': false,		
		});

		$(".dial-tracker2").cprDial({
			'thickness': .12,
			'height': '200%',
			'bgColor': variables.green2,
			'fgColor': state.white,
			'state': state,	
			'panels': panels,	
			'percShow': true,
		});		


	// /*** Likert Ctrl ***/ 

		$('.likert__form').cprLikert({
			'vertical': false,
			'state': state,
			'panels': panels,
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
			'panels': panels,					
		});

	/*** Slider Ctrl ***/ 
		
		$('.slider__form').cprSlider({
			'state': state,
			'size': .1,
			'panels': panels,
			'sideIcons': false,
			'windowWidth': $('.panel').width(),
			'windowHeight': $('.panel').height(),
			'showOutput': true,
			'outputPerc': true,  
		});

		$('.slider__form--x').cprSlider({
			'state': state,
			'size': .1,
			'panels': panels,
			'sideIcons': false,
			'windowWidth': $('.panel').width(),
			'windowHeight': $('.panel').height(),
			'showOutput': true,
			'outputPerc': false,  
		});		

	/*** Custom CSS ***/

		window.statete = state;

		//Header toggle on scroll
		css.toggleHeader();

		//Initialize Gate
		gate.init(state);

		//stop pointerevents on panel moving
		css.panelFix(timing);	

	/*** Populate country Dropdown ***/
		country.populateCountries('gate__country');
});
