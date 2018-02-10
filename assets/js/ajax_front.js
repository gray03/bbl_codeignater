$(document).ready(function(){
	
	
	/* Validate post form */
	$("#formReg").validate({
		rules: {
			fname: {
				required: true,
			},
			sname: {
				required: true,
			},
			email: {
				required: true,
				email: true
			},
			uname: {
				required: true,
				minlength: 5
			},
			pass: {
				required: true,
				minlength: 5
			},
			repass: {
				required: true,
				minlength:5,
				equalTo: "#pass",
			},
			connum: {
				required: true,
				maxlength:11,
				number: true
			},
			selGender: {
				required: true
			},
			sel_month: {
				required: true
			},
			sel_day: {
				required: true
			},
			txtyear:{
				required: true
			},
			policy:{
				required: true
			}
		},
		submitHandler: registerForm	
	});
	
	
	
	$("#formRecVerMail").validate({
		rules:{
			email:{
				required:true,
				email:true
			}
		},
		submitHandler: submitRecoveryAcc
	});
	
	
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
		 
	
	function registerForm(){
		var formData = $("#formReg").serialize();
		//var modalReg = $('#modalRegister').modal();
		//var formData = new FormData("#formReg");
		
		// var recaptcha = $(".g-recaptcha").val();
		if (grecaptcha.getResponse() == "") {
			//alert("Please check the recaptcha");
			$('#recaptcha_error').show().delay(1000).fadeOut();
		}else{
		
			$.ajax({
				url:'ajax/ajax_reg.php',
				type:'POST',
				data:formData,
				beforeSend:function(){
					$('.btn-register').html('<span class="fa fa-spinner fa-spin fa-fw"></span> SENDING ...');
				},
				success:function(data){
					
					if(data=='EMAIL SAME'){
						//alert('Email Already use');
						$("#error").html('<div class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Email Address already use.</div>').show().delay(3000).fadeOut('slow');
						$('.btn-register').html('<span class="fa fa-share-square-o" aria-hidden="true" ></span> Register');
					}else{
						//alert('Success');
						$('#successMsg').fadeIn(1000, function(){
							$('#successMsg').html('<div class="alert alert-success" style="width: 100%;margin: 5px auto;" ><h5><span class="fa fa-check-circle" aria-hidden="true"></span> You have been succesfully Registered.</h5><p>You will receive email from BBL Team for your Account Verification prior to Login.</p> </div>').show().delay(7000).fadeOut('slow');
							//$(modalReg).delay(2000).close();
						});
						$('#formReg')[0].reset();
						$('.btn-register').html('<span class="fa fa-share-square-o" aria-hidden="true" ></span> Register');
						
					}
				}	
			});
		}
	}
	
	
	
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