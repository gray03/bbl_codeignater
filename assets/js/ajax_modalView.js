$(document).ready(function(){
	
	$(this).on("click", "#modalClkShowInfo", function () {
		var idUser = $(this).data('id');
		
		//alert(idUser);
		
	
	
		$.ajax({
			type: 'GET',
			url: 'ajax/ajax_viewModal.php',
			data: 'userId='+idUser+'&action=getDetails_user',
			dataType: 'json',
			beforeSend: function(){
				$('#loading').show();
				$('.modalViewDec').hide();
			},
			success:function(data){
				
				 var u1 = data['user_fname'];
				var u2 = data['user_lname'];
				var u3 = data['user_gender'];
				var u4 = data['user_email'];
				var u5 = data['user_contact'];
				var u6 = data['user_bday'];
				//var u7 = data['user_country'];
				
				$('#loading').hide();
				$('.modalViewDec').show();
				$('.A1').val(u2).prop('disabled', true);
				$('.A7').val(u1).prop('disabled', true);
				$('.A3').val(u4).prop('disabled', true);
				$('.A5').val(u6).prop('disabled', true);
				
					$('.A2').val(u3).prop('disabled', true);
					$('.A4').val(u5).prop('disabled', true); 
					
				/* 	
				$('#sname').val(u2);
				$('#fname').val(u1);
				$('#email').val(u4);
				$('#bday').val(u6);
				
					$('#gender').val(u3);
					$('#contactnum').val(u5); */
				
				
			}
		}); 
	
	});
	
		
		//alert(id);
		//$('.viewImgCon').html('<img src="images/'+img+'" class="img-responsive" /><h4>'+subj+'</h4>');
		
	
	

	
});