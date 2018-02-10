$(document).ready(function(){
	$('#formChangePass').validate({
		rules:{
			txt_oldPass:{
				required:true,
			},
			txt_reoldPass:{
				required:true,
				equalTo: '#txt_oldPass'
			},
			txt_newPass:{
				required:true,
				minlength: 5
			},
		},
		submitHandler: passChange
	});
	
	function passChange(){
		var formData = $("#formChangePass").serialize();
		
		$.ajax({
			url:'ajax/ajax_changeAcc.php',
			type:'POST',
			data:formData,
			beforeSend:function(data){
				$('.btn-change').html('<span class="fa fa-spinner fa-spin fa-fw"></span> Updating ...');
			},
			success:function(data){
				if(data=='Email_invalid'){
					$('#msg').html('<div class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Invalid Old Password</div>');
					$('.btn-change').html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Change');
				}else{
					$('#msg').html('<div class="alert alert-success"><span class="fa fa-check-circle" aria-hidden="true"></span> New Password has been created <br> Check your email address to view your updated password</div>').show().delay(3000).fadeOut('slow');
					$('.btn-change').html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Change');
					$('#formChangePass')[0].reset();
				}
			}
		});
		
	}
});