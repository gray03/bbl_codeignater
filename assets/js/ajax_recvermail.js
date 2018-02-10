


$(document).ready(function(){

	$("#formRecVerMail").validate({
		rules:{
			email:{
				required:true,
				email:true
			}
		},
		submitHandler: submitRecoveryAcc
	});
		 
		 
	function submitRecoveryAcc(){
		var formData = $("#formRecVerMail").serialize();
		
		$.ajax({
			url:'ajax/ajax_recvermail.php',
			type:'POST',
			data:formData,
			beforeSend:function(){
				$(".btn-recovAcc").html('<span class="fa fa-spinner fa-spin fa-fw"></span> SENDING ...');
			},
			success:function(data){
				if(data=='error'){
					$('.msg').html('<div class="alert alert-danger" style="width: 100%;margin: 5px auto;" ><h5 style="color:red;font-size:12px"><span class="fa fa-times" aria-hidden="true"></span> Wrong Info</h5> </div>').show().delay(3000).fadeOut('slow');
					$(".btn-recovAcc").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Submit');
				}else if(data=='valid code'){
					$('.msg').html('<div class="alert alert-warning" style="width: 100%;margin: 5px auto;" ><h5 style="color:#697100;font-size:12px"><span class="fa fa-exclamation-circle" aria-hidden="true"></span>Your registered email is validated</h5> </div>').show().delay(3000).fadeOut('slow');
					$(".btn-recovAcc").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Submit');
				}else{
					$('.msg').html('<div class="alert alert-success" style="width: 100%;margin: 5px auto;" ><h5 style="font-size:12px"><span class="fa fa-check-circle" aria-hidden="true"></span> Success. Check your registered email.</h5> </div>').show();
					$('#formRecVerMail')[0].reset();
					//$('.email_form').hide();
					$(".btn-recovAcc").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Submit');
				}
			}	
		});
	}	 
	
});