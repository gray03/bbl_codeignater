/* $(document).ready(function(){

	//Ajax load function
	function showPost(track_page,load_survey){
		if(loading == false){
			loading = true; 
			$('.loading-info').show();
			
			$.ajax({
				url: 'func/load_survey.php',
				data: 'page='+track_page+'&view_type='+load_survey,
				type: 'POST',
				success: function(data){
					loading = false;
					if(data.trim().length == 0){
						
						$('#loading_end').html("No more records!");
						$('.loading-info').hide();
						return;
					}
					$('.loading-info').hide(); 
					$("#show").append(data); 
				},
			});
			
		}
	}
}); */