import * as comp from './components';

export const panels = [
	`<div class="panel panel--0">
		<div class="btn__progress btn__progress--0" data-id='0'></div>
	</div>`,
	`<div class="panel panel--1">		
		<div class="body__content">
			<div class="cta__wrapper cta__wrapper--1">
				<div class="cta__txt cta__txt--1">
					asjfpaj
				</div>
			</div>
			<div class="main__subheader main__subheader--1">
				Transactional Marketing
			</div>
			<div class="main__title main__title--1">
				Do you have a basic integration with your CRM system?
			</div>
			<div class="main__direction">Adjust the dial below to most closely align with your company.</div>
			${comp.createLikert(['weak','strong','strong',])}
		</div>
		<div class="footer">
			<div class="btn__progress btn__progress--1" data-id='1'></div>		
		</div>
	</div>`,
	`<div class="panel panel--2">	
		<div class="body__content">

		</div>
		<div class="footer">										
			<div class="btn__progress btn__progress--2" data-id='2'></div>
		</div>
	</div>`,			
];



/*** THIS IS TEMPLATE FOR PANEL
	`<div class="panel panel--0">

		<div class="btn__progress btn__progress--0" data-id='0'></div>
	</div>`
***/
