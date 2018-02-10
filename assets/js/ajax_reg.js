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
			}
		},
		submitHandler: registerForm	
	});
	
	
	
	
	function registerForm(){
		var formData = $("#formReg").serialize();
		//var modalReg = $('#modalRegister').modal();
		//var formData = new FormData("#formReg");
		
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
	
	
	
});