import * as comp from './components';

export const panels = [
	`<div class="panel panel--0 panel--activate">
		<div class="body__content">
			<div class="landing__texture"></div>
			<h1 class='landing__title landing__title--x'>B2B Marketing Maturity</h1>
			<h2 class="landing__subtitle landing__subtitle--x">Is your business ahead of the curve, or do you need to catch up?</h2>			
			<div class="landing__container btn__progress btn__progress--0" data-id='0' data-line='0'>
				<h1 class="landing__title">B2B Marketing Maturity</h1>
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
			<div class="main__direction">Adjust the slider below to most closely align with your company.</div>					
			${comp.createSlider({
				'question': 'What percentage of your sales marketing effort is automated (lead flow, website, campaigns)?',
				'group': 'broadcast',
				'count': true,
				'sliderArr': [
					{
						'question':'What percentage of your sales marketing effort is automated (lead flow, website, campaigns)?',
						'max':'100%',
						'min':'0%',
					},
				],
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
				How would you rank your use of features that are designed to give time back to marketing teams (e.g. templates, campaign blueprints, webforms etc)?
			</div>			
			<div class="main__direction">Adjust the slider below to most closely align with your company.</div>					
			${comp.createSlider1({
				'question': 'How would you rank your use of features that are designed to give time back to marketing teams (e.g. templates, campaign blueprints, webforms etc)?',
				'group': 'broadcast',
				'count': true,
				'sliderArr': [
					{
						'question':'How would you rank your use of features that are designed to give time back to marketing teams (e.g. templates, campaign blueprints, webforms etc)?',
						'max':'100',
						'min':'1',
					},
				],
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
				Do you send batch-and-blast style communications to wide audiences?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createLikert({				
				'question':'Do you send batch-and-blast style communications to wide audiences?',
				'textArr': ['No', 'Sometimes', 'Yes'],				
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
				Do you send targeted emails specific to a segmented group of contacts regarding their specific interests?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createLikert({				
				'question':'Do you send targeted emails specific to a segmented group of contacts regarding their specific interests?',
				'textArr': ['No, not really', 'Sometimes','Yes'],
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
				How would you rate your use of email and your website as marketing channels?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial1({				
				'question':'How much do you use email and your website as marketing channels?',
				'textArr': ['Barely', 'Some', 'A lot'],
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
				Is your email/marketing automation platform currently integrated with your CRM application?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Is your email/marketing automation platform currently integrated with your CRM application?',
				'textArr': ['Yes', 'No'],
				'group': 'broadcast',
				'count': true,
			})}
			</div>
		<div class="btn__progress btn__progress--6" data-id='6' data-line='2'></div>
	</div>`,
	`<div class="panel panel--7">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				What metrics do you track to show success in your marketing programs?
			</div>			
			<div class="main__direction">Select all that apply. If none apply, click next.</div>			
			${comp.createCheckbox({				
				'question':'What metrics do you track to show success in your marketing programs?',
				'textArr': ['Email opens', 'Click-throughs', 'Downloads', 'Form completions', 'Subscribes/Unsubscribes', 'Web or landing page traffic', 'Event participation'],			
				'group': 'broadcast',
				'count': false,
			})}	
			<div class='btn__progress btn__progress--7' data-id='7' data-line='3'>Next</div>
		</div>		
	</div>`,
	`<div class="panel panel--8">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				How many marketers are on your team?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createLikert({				
				'question':'How many marketers are on your team?',
				'textArr': ['1-2','3-5','5-10','10+'],
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
				Our marketing programs are  focused towards (click all that apply)
			</div>			
			<div class="main__direction">Select all that apply. If none apply, click next.</div>			
			${comp.createCheckbox({				
				'question':'Our marketing programs are  focused towards (click all that apply)',
				'textArr': ['Business to Business or large considered purchases', 'Business to in the moment Consumer purchases', 'Brand Awareness', 'Business to Business to Consumer (B2B2C) purchases'],
				'group': 'broadcast',
				'count': false,
			})}	
			<div class="btn__progress btn__progress--9" data-id='9' data-line='1'>Next</div>
		</div>	
	</div>`,
	`<div class="panel panel--10">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Broadcast Marketing
			</div>
			<div class="main__title main__title--1">
				What is your current unsubscribe rate?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createLikert({				
				'question':'What is your current unsubscribe rate?',
				'textArr': ["I don't know","We don't track unsubscribe rates",'Greater than 0.5%',"Less than 0.2%"],
				'group': 'broadcast',
				'count': false,
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
				Are you coordinating across more than 2 channels (i.e. email, web, social) in your marketing campaigns?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial1({				
				'question':'Are you coordinating across more than 2 channels (i.e. email, web, social) in your marketing campaigns?',
				'textArr': ['No', 'Sometimes', 'Always'],
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
				What level of automation exists in your programs/campaigns?			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial1({				
				'question':'What level of automation exists in your programs/campaigns?',
				'textArr': ['None, we deploy manually', 'A few', 'Almost all'],
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
				Do your campaigns allow you to automatically move a contact from one campaign into another based on their interactions?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Do your campaigns allow you to automatically move a contact from one campaign into another based on their interactions?',
				'textArr': ['Yes','No'],
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
				How personalized is your marketing content across your marketing&nbsp;channels?
			</div>			
			<div class="main__direction">Please select one response.</div>
			${comp.createVertfc({				
				'question':'How personalized is your marketing content across your marketing channels?',
				'textArr': ['Highly personalized based on behavior',"Minimal, such as 'first name' or 'company'",'Same content for everyone'],
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
				Do you perform lead scoring to identify high value&nbsp;buyers?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial1({				
				'question':'Do you perform lead scoring to identify high value buyers?',
				'textArr': ['Never',"Sometimes",'Always'],
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
				Does your marketing automation platform score leads based on behavioral activities and profile data?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Does your marketing automation platform score leads based on behavioral activities and profile data?',
				'textArr': ['Both behavioral activities and profile data','Only behavioral activities',"Only profile data","We don't use lead scoring to qualify leads"],
				'group': 'responsive',
				'custVals': [100,50,50,0],
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
				What level of segmentation drives your campaigns?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'What level of segmentation drives your campaigns?',
				'textArr': ['Advanced segments based on profile and behavioral data',"Basic customer persona defined segments",'Wide audience or&nbsp;list'],
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
				Do you currently incorporate behavioral re-targeting in your marketing&nbsp;campaigns?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Do you currently incorporate behavioral re-targeting in your marketing campaigns?',
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
				Do you perform A/B email testing?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Do you perform A/B email testing?',
				'textArr': ['Yes',"No"],
				'group': 'responsive',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--19" data-id='19' data-line='3'></div>
	</div>`,
	`<div class="panel panel--20">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Responsive Marketing
			</div>
			<div class="main__title main__title--1">
				Do you currently use testing and optimization tools on your landing pages and website?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Do you currently use testing and optimization tools on your landing pages and website?',
				'textArr': ['Yes','No'],
				'group': 'responsive',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--20" data-id='20' data-line='4'></div>
	</div>`,


	`<div class="panel panel--21">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				How advanced are your targeting and segmentation processes?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'How advanced are your targeting and segmentation processes?',
				'textArr': ["We have highly specific audience filters that target buyers in real-time based on changing profile and behavior data",'We use an audience builder to target very specific segments and use inclusion/exclusion criteria in our model','We create a number of filters and audiences based on profile and behavioral attributes',"We haven't had the opportunity to advance in this area"],
				'custVals': [100, 50, 50, 0],
				'group': 'relationship',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--21" data-id='21' data-line='1'></div>
	</div>`,
	`<div class="panel panel--22">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				Do you use any form of data science to derive segments?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Do you use any form of data science to derive segments?',
				'textArr': ["We use account signals and scoring to identify the best prospects", "We use look-alike modeling to find prospects", "No"],
				'group': 'relationship',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--22" data-id='22' data-line='2'></div>
	</div>`,
	`<div class="panel panel--23">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				Do you orchestrate your campaigns across 4 or more digital channels (i.e. email, mobile, SMS, display ads, web, and social) to create a connected experience?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Do you orchestrate your campaigns across 4 or more digital channels (i.e. email, mobile, SMS, display ads, web, and social) to create a connected experience?',
				'textArr': ['Yes', 'No'],
				'group': 'relationship',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--23" data-id='23' data-line='3'></div>
	</div>`,
	`<div class="panel panel--24">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				Do you deliver a personalized account experience across channels for contacts within that organization?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Do you deliver a personalized account experience across channels for contacts within that organization?',
				'textArr': ['Yes, always', 'Sometimes', 'Never', 'Not applicable to our business'],
				'custVals': [100,50,0,0],
				'group': 'relationship',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--24" data-id='24' data-line='4'></div>
	</div>`,
	`<div class="panel panel--25">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				Do you have an account based marketing (ABM)&nbsp;program?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Do you have an account based marketing (ABM) program?',
				'textArr': ["We have an ABM program and it's working beautifully", 'We are just getting started on an ABM program', 'No', 'Not applicable to our business'],
				'custVals': [100,50,0,0],
				'group': 'relationship',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--25" data-id='25' data-line='1'></div>
	</div>`,
	// `<div class="panel panel--25">	
	// 	<div class="body__content">
	// 		<div class="main__subheader main__subheader--1">
	// 			Relationship Marketing
	// 		</div>
	// 		<div class="main__title main__title--1">
	// 			Do you use a predictive vendor for populating predictive lead scores in your ABM program (e.g., Demandbase, Mintigo, 6thSense)?
	// 		</div>			
	// 		<div class="main__direction">Please select one response.</div>			
	// 		${comp.createVertfc({				
	// 			'question':'Do you use a predictive vendor for populating predictive lead scores in your ABM program (e.g., Demandbase, Mintigo, 6thSense)?',
	// 			'textArr': ['Yes', "Not Applicable","No"],
	// 			'group': 'relationship',
	// 			'count': true,
	// 		})}
	// 	</div>
	// 	<div class="btn__progress btn__progress--25" data-id='25' data-line='1'></div>
	// </div>`,
	`<div class="panel panel--26">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				Do you leverage machine learning or artificial intelligence to optimize any part of your marketing campaigns?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Do you leverage machine learning or artificial intelligence to optimize any part of your marketing campaigns?',
				'textArr': ['Yes','No'],
				'group': 'relationship',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--26" data-id='26' data-line='2'></div>
	</div>`,
	`<div class="panel panel--27">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				What kinds of AI do you use in your marketing program? Check all that apply:
			</div>			
			<div class="main__direction">Select all that apply. If none apply, click next.</div>			
			${comp.createCheckbox({				
				'question':'What kinds of AI do you use in your marketing program? Check all that apply:',
				'textArr': ['Send time optimization','Offer recommendations','Predictive lead scoring','Content recommendations','Other'],
				'group': 'relationship',
				'count': true,
			})}
			<div class='btn__progress btn__progress--27' data-id='27' data-line='3'>Next</div>			
		</div>
	</div>`,
	`<div class="panel panel--28">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				Do you send emails to buyers optimized based on when they are most likely open?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'Do you send emails to buyers optimized based on when they are most likely open?',
				'textArr': ['Yes', "I don't know", 'No'],
				'custVals': [100,0,0],
				'group': 'relationship',
				'count': true,
			})}			
		</div>
		<div class="btn__progress btn__progress--28" data-id='28' data-line='4'></div>
	</div>`,
	`<div class="panel panel--29">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				Do you provide real-time online personalization for customers or prospects based on their behavior?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial1({				
				'question':'Do you provide real-time online personalization for customers or prospects based on their (interests) behavior on your website?',
				'textArr': ['No', 'Only Basic', "Yes"],
				'group': 'relationship',
				'count': true,
			})}			
		</div>
		<div class="btn__progress btn__progress--29" data-id='29' data-line='1'></div>
	</div>`,
	`<div class="panel panel--30">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				How do you standardize data and improve data quality in your marketing database?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'How do you standardize data and improve data quality in your marketing database?',
				'textArr': ['We have a process in place that supports data quality and standards in real-time', 'We use a 3rd party solution to clean and append data', "We have defined standards, but don't always apply them",'We have no data-standardization in place'],
				'group': 'relationship',
				'count': true,
			})}			
		</div>
		<div class="btn__progress btn__progress--30" data-id='30' data-line='2'></div>
	</div>`,
	`<div class="panel panel--31">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				How do you measure your marketing efforts?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'How do you measure your marketing efforts?',
				'textArr': ["We are able to see marketing's contribution to sales' success across each channel and activity within sales (closed loop reporting)", 'We have some consistent means of measuring campaigns with some deep analysis in specific areas', "We generate basic reports"],
				'group': 'relationship',
				'count': true,
			})}			
		</div>
		<div class="btn__progress btn__progress--31" data-id='31' data-line='3'></div>
	</div>`,
	`<div class="panel panel--32">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Relationship Marketing
			</div>
			<div class="main__title main__title--1">
				How integrated is your marketing data?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({				
				'question':'How integrated is your marketing data?',
				'textArr': ['We have a unified customer database that automates some essential online, offline and 3rd party data','We have integrated some customer data, but using and manipulating it  is a manual process','All of our marketing data is siloed'],
				'group': 'relationship',
				'count': true,
			})}			
		</div>
		<div class="btn__progress btn__progress--32" data-id='32' data-line='4'></div>
	</div>`,


	`<div class="panel panel--33">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Lifecycle Engagement
			</div>
			<div class="main__title main__title--1">
				Do you have data connections that allow you to have a full 360 degree view of your customer across marketing, sales, and service?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({
				'question':'Do you have data connections that allow you to have a view of your customer across marketing, sales, and service?',
				'textArr': ['Yes, we have data connections across all three','We connect our marketing and sales data only', 'We connect our marketing and service data only','No, we are not able to connect the data between any of these systems'],
				'group': 'Lifecycle',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--33" data-id='33' data-line='1'></div>
	</div>`,
	`<div class="panel panel--34">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Lifecycle Engagement
			</div>
			<div class="main__title main__title--1">
				Do you leverage unified customer profiles across marketing, sales and service to provide personalized experiences for your customers?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({
				'question':'Do you leverage unified customer profiles across marketing, sales and service to provide personalized experiences for your customers?',
				'textArr': ['Yes','No'],
				'group': 'Lifecycle',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--34" data-id='34' data-line='2'></div>
	</div>`,
	`<div class="panel panel--35">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Lifecycle Engagement
			</div>
			<div class="main__title main__title--1">
				Do you run marketing programs to drive sales on a commerce site for repeat or low-consideration purchases?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({
				'question':'Do you run marketing programs to drive sales on a B2B commerce site for repeat or low-consideration purchases?',
				'textArr': ['Yes, our commerce site has been integrated into our overall marketing&nbsp;strategy ',"No, we don't"],
				'group': 'Lifecycle',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--35" data-id='35' data-line='3'></div>
	</div>`,
	`<div class="panel panel--36">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Lifecycle Engagement
			</div>
			<div class="main__title main__title--1">
				Do you run marketing programs targeted specifically to your loyalty program members?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({
				'question':'Do you run marketing programs targeted specifically to your loyalty program members?',
				'textArr': ['Yes, loyalty has been integrated into our overall marketing strategy',"No, we don't"],
				'group': 'Lifecycle',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--36" data-id='36' data-line='4'></div>
	</div>`,
	`<div class="panel panel--37">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Lifecycle Engagement
			</div>
			<div class="main__title main__title--1">
				Do you have an automated way to stop or pause marketing promotions to specific customers when they are experiencing important service issues with your&nbsp;organization?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({
				'question':'Do you have an automated way to stop or pause marketing promotions to specific customers when they are experiencing important service issues with your organization?',
				'textArr': ['Yes, we have an amazing line of communication and data sharing between marketing and service',"We have some insight, but it's not reliable",'No, unfortunately, we have no insight into service issues'],
				'group': 'Lifecycle',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--37" data-id='37' data-line='1'></div>
	</div>`,
	`<div class="panel panel--38">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Lifecycle Engagement
			</div>
			<div class="main__title main__title--1">
				Are your customer service reps empowered with personalized recommendations and marketing promotions for up-sell or cross-sell opportunities?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({
				'question':'Are your customer service reps empowered with personalized recommendations and marketing promotions for up-sell or cross-sell opportunities?',
				'textArr': ["Yes, our service reps have visibility into a customer's recent purchases and interests and can make recommended&nbsp;offers","No, our service reps are strictly focused on service and not empowered to do any cross-sell or&nbsp;up-sell"],
				'group': 'Lifecycle',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--38" data-id='38' data-line='2'></div>
	</div>`,
	`<div class="panel panel--39">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Lifecycle Engagement
			</div>
			<div class="main__title main__title--1">
				Do your sales reps have insight into the most recent service interactions so they can be aware of any concerns prior to approaching the customer?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({
				'question':'Do your sales reps have insight into the most recent service interactions so they can be aware of any concerns prior to approaching the customer?',
				'textArr': ["Yes, sales reps have access to any service interactions and concerns","No, there is no data shared between sales and service"],
				'group': 'Lifecycle',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--39" data-id='39' data-line='3'></div>
	</div>`,
	`<div class="panel panel--40">	
		<div class="body__content">
			<div class="main__subheader main__subheader--1">
				Lifecycle Engagement
			</div>
			<div class="main__title main__title--1">
				Do you track, measure and analyze customer lifetime&nbsp;value?
			</div>			
			<div class="main__direction">Please select one response.</div>			
			${comp.createVertfc({
				'question':'Do you track, measure and analyze customer lifetime value?',
				'textArr': ["Yes, our systems are automatically improving how we engage based on customer metrics to understand customer lifetime&nbsp;value","Yes, we use predictive algorithms to identify next best actions based on customer churn","Yes, we view reports to diagnose what happened in the past","No, we don't do this"],
				'custVals':[100,50,50,0],
				'group': 'Lifecycle',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--40" data-id='40' data-line='5'></div>
	</div>`,


	`<div class="panel panel--41">	
		<div class="body__content">
			<h1 class='results__title results__title--1'>Your Marketing Maturity Assessment Results</h1>
			<div class="wrapper wrapper--1">				
				<div class="cloud cloud--1" id='cloud--1-0'>
						<div class="text__wrapper text__wrapper--1">
							<div class="cloud__title cloud__title--1">
								Maturity Score
							</div>
							<div class="cloud__text cloud__text--1 cloud__text--1-0">
								<span class='cloud__score--1-0'>X</span>/100
							</div>			
						</div>
				</div>
				<div class="results__text--wrapper">
					<div class="results__header results__header--1">Overall Maturity Score</div>
					<div class="results__text results__text--1">
						Your score indicates your marketing organization is critical to delivering on your corporate strategy and goals. Key characteristics of companies like yours include a hyper focus on key business drivers including: attracting  and nurturing prospects and activities around engaging and acquiring new customers. Companies that have achieved this level of marketing excellence have shifted their focus to be completely data-driven, leveraging a full arsenal of tools to achieve marketing excellence across all relevant channels.
					</div>
				</div>
			</div>
			<div class="line__wrapper--x">
			
			</div>
			<div class="wrapper wrapper--2">
				<div class="cloud__wrapper">
					<div class="cloud cloud--2" id='cloud--2-0'>
						<div class="text__wrapper text__wrapper--2">
							<div class="cloud__title cloud__title--2">Maturity Score</div>
							<div class="cloud__text cloud__text--2 cloud__text--2-0"><span class='cloud__score--2-0'>X</span>/100</div>
						</div>
					</div>
					<div class="cloud__subtitle">Broadcast Marketing</div>
				</div>
				<div class="cloud__wrapper">
					<div class="cloud cloud--2" id='cloud--2-1'>
						<div class="text__wrapper text__wrapper--2">
							<div class="cloud__title cloud__title--2">Maturity Score</div>
							<div class="cloud__text cloud__text--2 cloud__text--2-1"><span class='cloud__score--2-1'>X</span>/100</div>
						</div>
					</div>
					<div class="cloud__subtitle">Responsive Marketing</div>
				</div>
				<div class="cloud__wrapper">
					<div class="cloud cloud--2" id='cloud--2-2'>
						<div class="text__wrapper text__wrapper--2">
							<div class="cloud__title cloud__title--2">Maturity Score</div>
							<div class="cloud__text cloud__text--2 cloud__text--2-2"><span class='cloud__score--2-2'>X</span>/100</div>
						</div>
					</div>
					<div class="cloud__subtitle">Relationship Marketing</div>
				</div>
				<div class="cloud__wrapper">
					<div class="cloud cloud--2" id='cloud--2-3'>
						<div class="text__wrapper text__wrapper--2">
							<div class="cloud__title cloud__title--2">Maturity Score</div>
							<div class="cloud__text cloud__text--2 cloud__text--2-3"><span class='cloud__score--2-3'>X</span>/100</div>
						</div>
					</div>
					<div class="cloud__subtitle cloud__subtitle--1">Lifecycle Engagement Marketing</div>
				</div>
			</div>
			<a href='http://oracle.assessment-tools.com/cx/maturity/bin_dev/PDF/cx_pdf.html' target='_blank' class="btn__pdf btn__pdf--1">
				Download your Marketing Maturity Report
			</a>
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

						// ${comp.createDial2({
				// 	'question':'What percentage of your sales marketing effort is automated (lead flow, website, campaigns)?',
				// 	'textArr': ['0%', '100%'],
				// 	'group': 'broadcast',
				// 	'count': true,
				// })}			