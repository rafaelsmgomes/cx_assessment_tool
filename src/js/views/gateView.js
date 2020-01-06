export const init = (state) => {
	$('.gate__form').submit(function(e){
		e.preventDefault();

		console.log($('#gate__company').val().length);

		state.company = $('#gate__company').val();
		state.revenue = $('#gate__revenue').val();
		state.country = $('#gate__country').val();
		state.employees = $('#gate__employees').val();
		state.industry = $('#gate__industry').val();


		$('.gate__form').removeClass('fade-in');
		setTimeout(function(){
			$('.gate__container').removeClass('fade-in');
		}, 1000);		
	});
};