$(document).ready(function(){

	$("#formRecovery").validate({
		rules:{
			conRec:{
				required:true,
				number: true
			},
			emailRec:{
				required:true,
				email:true
			}
		},
		submitHandler: submitRecoveryAcc
	});
		 
		 
	function submitRecoveryAcc(){
		var formData = $("#formRecovery").serialize();
		
		$.ajax({
			url:'ajax/ajax_recoveryAcc.php',
			type:'POST',
			data:formData,
			beforeSend:function(){
				$(".btn-recovAcc").html('<span class="fa fa-spinner fa-spin fa-fw"></span> SENDING ...');
			},
			success:function(data){
				if(data=='success'){
					$('.msg').html('<div class="alert alert-success" style="width: 90%;margin: 5px auto;padding:6px 20px" ><h5><span class="fa fa-check-circle" aria-hidden="true"></span> Success!!</h5> Check your email address to view your account details. </div>').show().delay(6000).fadeOut('slow');
					$('#formRecovery')[0].reset();
					$(".btn-recovAcc").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Submit');
				}else{
					$('.msg').html('<div class="alert alert-danger" style="width: 90%;margin: 5px auto;padding:6px 20px" ><h5 style="color:red"><span class="fa fa-times" aria-hidden="true"></span> Wrong Info</h5> Invalid email address.</div>').show().delay(6000).fadeOut('slow');
					$(".btn-recovAcc").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Submit');
				}
			}	
		});
	}	 
	
});