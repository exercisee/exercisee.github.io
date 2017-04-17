$(function () {

	//showing default result selection is math grade 3 results
	$('#m3-results').show();
	$('.grade-filter').on('change',function (){
		var selectedGrade = $('.grade-filter').val();
		selectedGrade = '#' +selectedGrade +'-results';
		hideAllResults();
		$(selectedGrade).show();
	});

	function hideAllResults() {
		$('#m3-results').hide();
		$('#m4-results').hide();
		$('#m5-results').hide();
	}
});