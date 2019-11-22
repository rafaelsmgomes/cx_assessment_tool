import * as comp from './components';

export const panels = [
	`<div class="panel panel--0">
		<div class="body__content">
			<div class="landing__texture"></div>
			<div class="landing__container btn__progress btn__progress--0" data-id='0' data-line='0'>
				<h1 class="landing__title">Are you Cloud&nbsp;Confident?</h1>
				<h2 class="landing__subtitle">Is your business ahead of the curve, or do you need to catch up?</h2>
				<div class="landing__txt landing__txt--1">Let's find out</div>
				<div class="landing__img landing__img--1">
				</div>
			</div>
		</div>
	</div>`,
	`<div class="panel panel--1">		
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				What percentage of your sales marketing effort is automated (lead flow, website, campaigns)?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial2({
				'question':'What percentage of your sales marketing effort is automated (lead flow, website, campaigns)?',
				'textArr': ['0%', '100%'],
				'group': 'broadcast',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--1" data-id='1' data-line='1'></div>
	</div>`,
	`<div class="panel panel--2">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				Does your company use email, campaign and form templates to save time?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createLikert({				
				'question':'Does your company use email, campaign and form templates to save time?',
				'textArr': ['Never', 'Sometimes', 'Yes, regularly'],
				'group': 'broadcast',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--2" data-id='2' data-line='2'></div>
	</div>`,
	`<div class="panel panel--3">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				Are the emails you send primarily targeted or batch and blast style  communications?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createVertfc({				
				'question':'Are the emails you send primarily targeted or batch and blast style  communications?',
				'textArr': ['Targeted', 'Batch and blast'],
				'group': 'broadcast',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--3" data-id='3' data-line='3'></div>
	</div>`,
	`<div class="panel panel--4">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				How would you rate your use of email and your website as marketing channels?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial1({				
				'question':'How would you rate your use of email and your website as marketing channels?',
				'textArr': ['None', 'Some', 'Alot'],
				'group': 'broadcast',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--4" data-id='4' data-line='4'></div>
	</div>`,
	`<div class="panel panel--5">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				Is your email/ marketing automation platform currently integrated with your CRM application?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createVertfc({				
				'question':'Is your email/ marketing automation platform currently integrated with your CRM application?',
				'textArr': ['Yes', 'No'],
				'group': 'broadcast',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--5" data-id='5' data-line='1'></div>
	</div>`,
	`<div class="panel panel--6">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				What metrics do you track to show success in your marketing programs?
			</div>			
			<div class="main__direction">Click all that apply:</div>			
			${comp.createCheckbox({				
				'question':'What metrics do you track to show success in your marketing programs?',
				'textArr': ['email opens', 'click-throughs', 'downloads', 'form completions', 'subscribes/unsubscribes', 'web or landing page traffic', 'event participation'],
				'group': 'broadcast',
				'count': false,
			})}	
			<button class='btn__progress btn__progress--6' data-id='6' data-line='2'>Next</button>
		</div>		
	</div>`,
	`<div class="panel panel--7">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				How many marketers are on your team?
			</div>			
			<div class="main__direction">Click all that apply:</div>			
			${comp.createLikert({				
				'question':'How many marketers are on your team?',
				'textArr': ['1-2','3-5','5-10','10+'],
				'group': 'broadcast',
				'count': false,
			})}
		</div>		
		<div class="btn__progress btn__progress--7" data-id='7' data-line='3'></div>
	</div>`,
	`<div class="panel panel--8">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				What do you focus your marketing on?
			</div>			
			<div class="main__direction">Click all that apply:</div>			
			${comp.createLikert({				
				'question':'What do you focus your marketing on?',
				'textArr': ['Large considered purchases','In the moment purchases','Brand awareness'],
				'group': 'broadcast',
				'count': false,
			})}
		</div>	
		<div class="btn__progress btn__progress--8" data-id='8' data-line='4'></div>
	</div>`,
	`<div class="panel panel--9">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				What is your current unsubscribe rate?
			</div>			
			<div class="main__direction">Click all that apply:</div>			
			${comp.createLikert({				
				'question':'What is your current unsubscribe rate?',
				'textArr': ['Less than 0.2%','Greater than 0.5%',"We don't track unsubscribe rates"],
				'group': 'broadcast',
				'count': false,
			})}	
		</div>		
		<div class="btn__progress btn__progress--9" data-id='9' data-line='1'></div>
	</div>`,


	`<div class="panel panel--10">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Responsive Marketing
			</div>
			<div class="main__title main__title--1">
				Are you coordinating across multiple channels in your marketing campaigns?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial1({				
				'question':'Are you coordinating across multiple channels in your marketing campaigns?',
				'textArr': ['No', 'Sometimes', 'Always'],
				'group': 'responsive',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--10" data-id='10' data-line='2'></div>
	</div>`,
	`<div class="panel panel--11">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Responsive Marketing
			</div>
			<div class="main__title main__title--1">
				What level of automation exists in your programs/campaigns?			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial1({				
				'question':'What level of automation exists in your programs/campaigns?',
				'textArr': ['None, we deploy manually', 'A few', 'Almost all'],
				'group': 'responsive',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--11" data-id='11' data-line='3'></div>
	</div>`,
	`<div class="panel panel--12">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Responsive Marketing
			</div>
			<div class="main__title main__title--1">
				Do you listen to contact behavior in order to direct them into a more specific campaign?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createVertfc({				
				'question':'Do you listen to contact behavior in order to direct them into a more specific campaign?',
				'textArr': ['Yes','No'],
				'group': 'responsive',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--12" data-id='12' data-line='4'></div>
	</div>`,
	`<div class="panel panel--13">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Responsive Marketing
			</div>
			<div class="main__title main__title--1">
				How personalized is your marketing content across your marketing channels?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>
			${comp.createLikert({				
				'question':'How personalized is your marketing content across your marketing channels?',
				'textArr': ['Same content for everyone',"Minimal, such as 'first name' or 'company'",'Highly personalized based on behavior'],
				'group': 'responsive',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--13" data-id='13' data-line='1'></div>
	</div>`,
	`<div class="panel panel--14">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Responsive Marketing
			</div>
			<div class="main__title main__title--1">
				Do you perform lead scoring to identify high value buyers?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial1({				
				'question':'Do you perform lead scoring to identify high value buyers?',
				'textArr': ['Never',"Sometimes",'Always'],
				'group': 'responsive',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--14" data-id='14' data-line='2'></div>
	</div>`,
	`<div class="panel panel--15">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Responsive Marketing
			</div>
			<div class="main__title main__title--1">
				Does your marketing automation platform score leads based on behavioral activities and profile data?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createLikert({				
				'question':'Does your marketing automation platform score leads based on behavioral activities and profile data?',
				'textArr': ['Only behavioral activities',"Only profile data",'Both behavioral activities and profile data',"We don't use lead scoring to qualify leads"],
				'group': 'responsive',
				'count': true,
			})}
		</div>
	 	<div class="btn__progress btn__progress--15" data-id='15' data-line='3'></div>
	</div>`,
	`<div class="panel panel--16">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Responsive Marketing
			</div>
			<div class="main__title main__title--1">
				What level of segmentation drives your campaigns?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createLikert({				
				'question':'What level of segmentation drives your campaigns?',
				'textArr': ['wide audience or&nbsp;list',"basic customer persona defined segments",'advanced segments based on profile and behavioral data',"1:1 real-time microsegments"],
				'group': 'responsive',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--16" data-id='16' data-line='4'></div>
	</div>`,
	`<div class="panel panel--17">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Responsive Marketing
			</div>
			<div class="main__title main__title--1">
				Do you currently incorporate behavioral re-targeting in your marketing campaigns?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial1({				
				'question':'Do you currently incorporate behavioral re-targeting in your marketing campaigns?',
				'textArr': ['never',"sometimes",'always'],
				'group': 'responsive',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--17" data-id='17' data-line='1'></div>
	</div>`,					
	`<div class="panel panel--18">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Responsive Marketing
			</div>
			<div class="main__title main__title--1">
				Do you perform any A/B email testing or optimization?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createVertfc({				
				'question':'Do you perform any A/B email testing or optimization?',
				'textArr': ['Yes',"No"],
				'group': 'responsive',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--18" data-id='18' data-line='2'></div>
	</div>`,
	`<div class="panel panel--19">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Responsive Marketing
			</div>
			<div class="main__title main__title--1">
				Do you currently use testing and optimization tools on your landing pages and website?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createLikert({				
				'question':'Do you currently use testing and optimization tools on your landing pages and website?',
				'textArr': ['No',"Yes, but only for A/B testing",'Yes, we use A/B, multivariate testing and optimization tools regularly'],
				'group': 'responsive',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--19" data-id='19' data-line='3'></div>
	</div>`,


	`<div class="panel panel--20">	
		<div class="body__content">
			<h1>21</h1>
		</div>
		<div class="btn__progress btn__progress--20" data-id='20' data-line='4'></div>
	</div>`,
	`<div class="panel panel--21">	
		<div class="body__content">
			<h1>22</h1>
		</div>
		<div class="btn__progress btn__progress--21" data-id='21' data-line='1'></div>
	</div>`,
	`<div class="panel panel--22">	
		<div class="body__content">
			<h1>23</h1>
		</div>
		<div class="btn__progress btn__progress--22" data-id='22' data-line='2'></div>
	</div>`,
	`<div class="panel panel--23">	
		<div class="body__content">
			<h1>24</h1>
		</div>
		<div class="btn__progress btn__progress--23" data-id='23' data-line='3'></div>
	</div>`,
	`<div class="panel panel--24">	
		<div class="body__content">
			<h1>25</h1>
		</div>
		<div class="btn__progress btn__progress--24" data-id='24' data-line='4'></div>
	</div>`,
	`<div class="panel panel--25">	
		<div class="body__content">
			<h1>26</h1>
		</div>
		<div class="btn__progress btn__progress--25" data-id='25' data-line='1'></div>
	</div>`,
	`<div class="panel panel--26">	
		<div class="body__content">
			<h1>27</h1>
		</div>
		<div class="btn__progress btn__progress--26" data-id='26' data-line='2'></div>
	</div>`,
	`<div class="panel panel--27">	
		<div class="body__content">
			<h1>28</h1>
		</div>
		<div class="btn__progress btn__progress--27" data-id='27' data-line='3'></div>
	</div>`,
	`<div class="panel panel--28">	
		<div class="body__content">
			<h1>29</h1>
		</div>
		<div class="btn__progress btn__progress--28" data-id='28' data-line='4'></div>
	</div>`,
	`<div class="panel panel--29">	
		<div class="body__content">
			<h1>30</h1>
		</div>
		<div class="btn__progress btn__progress--29" data-id='29' data-line='1'></div>
	</div>`,
	`<div class="panel panel--30">	
		<div class="body__content">
			<h1>31</h1>
		</div>
		<div class="btn__progress btn__progress--30" data-id='30' data-line='2'></div>
	</div>`,
	`<div class="panel panel--31">	
		<div class="body__content">
			<h1>32</h1>
		</div>
		<div class="btn__progress btn__progress--31" data-id='31' data-line='3'></div>
	</div>`,
	`<div class="panel panel--32">	
		<div class="body__content">
			<h1>33</h1>
		</div>
		<div class="btn__progress btn__progress--32" data-id='32' data-line='4'></div>
	</div>`,


	`<div class="panel panel--33">	
		<div class="body__content">
			<h1>34</h1>
		</div>
		<div class="btn__progress btn__progress--33" data-id='33' data-line='1'></div>
	</div>`,
	`<div class="panel panel--34">	
		<div class="body__content">
			<h1>35</h1>
		</div>
		<div class="btn__progress btn__progress--34" data-id='34' data-line='2'></div>
	</div>`,
	`<div class="panel panel--35">	
		<div class="body__content">
			<h1>36</h1>
		</div>
		<div class="btn__progress btn__progress--35" data-id='35' data-line='3'></div>
	</div>`,
	`<div class="panel panel--36">	
		<div class="body__content">
			<h1>37</h1>
		</div>
		<div class="btn__progress btn__progress--36" data-id='36' data-line='4'></div>
	</div>`,
	`<div class="panel panel--37">	
		<div class="body__content">
			<h1>38</h1>
		</div>
		<div class="btn__progress btn__progress--37" data-id='37' data-line='1'></div>
	</div>`,
	`<div class="panel panel--38">	
		<div class="body__content">
			<h1>39</h1>
		</div>
		<div class="btn__progress btn__progress--38" data-id='38' data-line='2'></div>
	</div>`,
	`<div class="panel panel--39">	
		<div class="body__content">
			<h1>40</h1>
		</div>
		<div class="btn__progress btn__progress--39" data-id='39' data-line='3'></div>
	</div>`,
	`<div class="panel panel--40">	
		<div class="body__content">
			<h1>41</h1>
		</div>
		<div class="btn__progress btn__progress--40" data-id='40' data-line='5'></div>
	</div>`,


	`<div class="panel panel--41">	
		<div class="body__content">
			<h1>42</h1>
		</div>		
	</div>`,

];



/*** THIS IS TEMPLATE FOR PANEL
	`<div class="panel panel--0">

		<div class="btn__progress btn__progress--0" data-id='0'></div>
	</div>`
***/


// ${comp.createSlider({
// 	'id': 0,
// 	'question': 'Do you have a basic integration with your CRM system?',
// 	'group': 0,
// 	'count': true,
// 	'sliderArr': [
// 		{
// 			'question':'How',
// 			'max':100,
// 			'min':0,
// 		},
// 		{
// 			'question':'When',
// 			'max':'yes',
// 			'min':'no',
// 		},
// 		{
// 			'question':'Who',
// 			'max':'100%',
// 			'min':'0%',
// 		},
// 	],
// })}

			// ${comp.createSlider({
			// 	'id': 0,
			// 	'question': 'Do you have a basic integration with your CRM system?',
			// 	'group': 0,
			// 	'count': true,
			// 	'sliderArr': [
			// 		{
			// 			'question':'How',
			// 			'max':100,
			// 			'min':0,
			// 		},
			// 		{
			// 			'question':'When',
			// 			'max':'yes',
			// 			'min':'no',
			// 		},
			// 		{
			// 			'question':'Who',
			// 			'max':'100%',
			// 			'min':'0%',
			// 		},
			// 	],
			// })}

			// TEMPLATE FOR PANEL--0

		// <div class="body__content">
		// 	<div class="landing__texture"></div>
		// 	<div class="landing__container btn__progress btn__progress--0" data-id='0' data-line='0'>
		// 		<h1 class="landing__title">Are you Cloud&nbsp;Confident?</h1>
		// 		<h2 class="landing__subtitle">Is your business ahead of the curve, or do you need to catch up?</h2>
		// 		<div class="landing__txt landing__txt--1">Let's find out</div>
		// 		<div class="landing__img landing__img--1">
		// 		</div>
		// 	</div>
		// </div>