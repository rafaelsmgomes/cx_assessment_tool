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
				Transactional Marketing
			</div>
			<div class="main__title main__title--1">
				Do you have a basic integration with your CRM system?
			</div>			
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>			
			${comp.createDial({
				'question':'What percentage of your sales marketing effort is automated (lead flow, website, campaigns)?',
				'textArr': ['hello', 'bye'],
				'group': 'broadcast',
				'count': true,
			})}
		</div>
		<div class="btn__progress btn__progress--1" data-id='1' data-line='1'></div>
	</div>`,
	`<div class="panel panel--2">	
		<div class="body__content">
			<h1>3</h1>
		</div>
		<div class="btn__progress btn__progress--2" data-id='2' data-line='2'></div>
	</div>`,
	`<div class="panel panel--3">	
		<div class="body__content">
			<h1>4</h1>
		</div>
		<div class="btn__progress btn__progress--3" data-id='3' data-line='3'></div>
	</div>`,
	`<div class="panel panel--4">	
		<div class="body__content">
			<h1>5</h1>
		</div>
		<div class="btn__progress btn__progress--4" data-id='4' data-line='4'></div>
	</div>`,
	`<div class="panel panel--5">	
		<div class="body__content">
			<h1>6</h1>
		</div>
		<div class="btn__progress btn__progress--5" data-id='5' data-line='1'></div>
	</div>`,
	`<div class="panel panel--6">	
		<div class="body__content">
			<h1>7</h1>
		</div>
		<div class="btn__progress btn__progress--6" data-id='6' data-line='2'></div>
	</div>`,
	`<div class="panel panel--7">	
		<div class="body__content">
			<h1>8</h1>
		</div>
		<div class="btn__progress btn__progress--7" data-id='7' data-line='3'></div>
	</div>`,
	`<div class="panel panel--8">	
		<div class="body__content">
			<h1>9</h1>
		</div>
		<div class="btn__progress btn__progress--8" data-id='8' data-line='4'></div>
	</div>`,
	`<div class="panel panel--9">	
		<div class="body__content">
			<h1>10</h1>
		</div>
		<div class="btn__progress btn__progress--9" data-id='9' data-line='1'></div>
	</div>`,


	`<div class="panel panel--10">	
		<div class="body__content">
			<h1>11</h1>
		</div>
		<div class="btn__progress btn__progress--10" data-id='10' data-line='2'></div>
	</div>`,
	`<div class="panel panel--11">	
		<div class="body__content">	
			<h1>12</h1>
		</div>
		<div class="btn__progress btn__progress--11" data-id='11' data-line='3'></div>
	</div>`,
	`<div class="panel panel--12">	
		<div class="body__content">
			<h1>13</h1>
		</div>
		<div class="btn__progress btn__progress--12" data-id='12' data-line='4'></div>
	</div>`,
	`<div class="panel panel--13">	
		<div class="body__content">
			<h1>14</h1>
		</div>
		<div class="btn__progress btn__progress--13" data-id='13' data-line='1'></div>
	</div>`,
	`<div class="panel panel--14">	
		<div class="body__content">
			<h1>15</h1>
		</div>
		<div class="btn__progress btn__progress--14" data-id='14' data-line='2'></div>
	</div>`,
	`<div class="panel panel--15">	
		<div class="body__content">
			<h1>16</h1>
	 	</div>
	 	<div class="btn__progress btn__progress--15" data-id='15' data-line='3'></div>
	</div>`,
	`<div class="panel panel--16">	
		<div class="body__content">
			<h1>17</h1>
		</div>
		<div class="btn__progress btn__progress--16" data-id='16' data-line='4'></div>
	</div>`,
	`<div class="panel panel--17">	
		<div class="body__content">
			<h1>18</h1>
		</div>
		<div class="btn__progress btn__progress--17" data-id='17' data-line='1'></div>
	</div>`,					
	`<div class="panel panel--18">	
		<div class="body__content">
			<h1>19</h1>
		</div>
		<div class="btn__progress btn__progress--18" data-id='18' data-line='2'></div>
	</div>`,
	`<div class="panel panel--19">	
		<div class="body__content">
			<h1>20</h1>
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