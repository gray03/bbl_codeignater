$(document).ready(function(){
	
	/* Input file size validator */
	$.validator.addMethod('filesize', function (value, element, param) {
		return this.optional(element) || (element.files[0].size <= param)
	}, 'Filesize must 3mb or below');

	var userID = $('.id_profpic').val();
	var timelineID = $('#timelineId').val();
	
	
	
	/* Validate post form */
	$("#formUploadPic").validate({
		rules: {
			uploadedProfPic: {    
				required: true,
				extension: "png|jpe?g|gif",
				filesize: 3145728,
			}
		},
		//submitHandler: submitEditProfPic
	});	
	
	
	
	
		
	/* Validate profileEdit form */
	
	$("#formRegTest").validate({
		rules: {
			A1: {    
				required: true,
			},
			A2: {    
				required: true,
			},
			A7: {    
				required: true,
			},
			A4: {    
				required: true,
				maxlength:11,
				number: true
			},
			A5: {    
				required: true,
			}
		},
		submitHandler: submitEditProfDetails	
	});
	
	
	/* Validate Cover photo */
	
	$("#formUploadCoverPhoto").validate({
		rules:{
			uploadedCoverPhoto: {
				required: true,
				extension: "png|jpe?g",
				filesize: 3145728
				
			}
		},
		//submitHandler: submitEditCoverPhoto
	});
	
	
	
	//function submitEditProfPic(){
		$("#formUploadPic").submit(function(e){
			if(window.FormData !== undefined){
				var formData = new FormData(this);
				$.ajax({
					url: 'ajax/ajax_Profile.php',
					type: 'POST',
					data:  formData,
					mimeType:"multipart/form-data",
					contentType: false,
					cache: false,
					processData:false,
					beforeSend:function(){
						$('.loadingOpacity').show();
						
						$('#formUploadPic .btn-primaryButton').html('<span class="fa fa-spinner fa-spin fa-fw"></span> Uploading');
						$('.conProfile2, .conProfile').hide();
					},
					success: function(data, textStatus, jqXHR){
						$('.msg').fadeIn(1000, function(){
							$('.msg').html('<div class="alert alert-success" style="width: 100%;margin: 5px auto;" ><p class="font_green"><span class="fa fa-check-circle fa-lg" aria-hidden="true"></span> Upload Complete</p> </div>').delay(3000).fadeOut('slow');
						});
						$('.loadingOpacity, .conProfile2, .btn-uploadPic').hide();
						//$('.msg').hide();
						$('#formUploadPic .btn-primaryButton').html('<span class="fa fa-share-square-o" aria-hidden="true"></span>  Upload');
						$('#formUploadPic')[0].reset();
						$('#LoadImageUploadNavi, #LoadImageUploadTimeline').hide();
						loadProfilePic2(userID);
						loadProfilePic(userID);
						//$('#formUploadPic .btn-primaryButton').html('<span class="fa fa-spinner fa-spin fa-fw"></span> Uploading');
					}
				});
			}
			
			e.preventDefault();
		});
	//}
	
	
	//function submitEditCoverPhoto(){
		//$("#formUploadCoverPhoto").submit(function(e){
		$('.uploadedCoverPhoto').on('change', function(e) {
			//alert(true);
			//if(window.FormData !== undefined){
				//var formData = new FormData(this);		
				//var pic = $(this).val().replace(/.*(\/|\\)/, '');
				
				var file_data = $(this).prop('files')[0];
				var form_data = new FormData();
				form_data.append('uploadedCoverPhoto', file_data);
				
				//alert(pic);
				$.ajax({
					url: 'ajax/ajax_Profile.php',
					type: 'POST',
					data:  form_data,
					mimeType:"multipart/form-data",
					contentType: false,
					cache: false,
					processData:false,
					success: function(data){
						//if(data != 'success_upload'){
							
						//}else{
							//alert(data);
						//}
						//loadCoverPhoto();
						setTimeout(function() {
							swal("Success!", "New photo successfully upload", "success"); 
						}, 500);
						loadCoverPhoto();
					}
				});
				
			//}
			
			e.preventDefault();
		});		
	//}
	
	
	
	
	function loadProfilePic(id){
		$.ajax({
			url: 'ajax/ajax_Profile.php',
			type: 'GET',
			data: 'userID='+id+'&action=showPic',
			dataType: 'json',
			async: false,
			success: function(data){
				$('.conProfile').fadeIn(2000,function(){
					$('.conProfile').html("<div class='' style='width:100px;	height:100px;    background-image: url(profile_pic/medium/"+data+");   background-size: 100% 100%;'></div>");
				});
			}
			
		});
		
	}
	
	function loadProfilePic2(id){
		$.ajax({
			url: 'ajax/ajax_Profile.php',
			type: 'GET',
			data: 'userID='+id+'&action=showPic',
			dataType: 'json',
			async: false,
			success: function(data){
				$('.LoadImageUploadNavi').fadeIn(2000,function(){
					$('.LoadImageUploadNavi').delay(3000).html("<div style='background-image: url(profile_pic/small/"+data+");background-size: 100% 100%;  border-radius: 100%;'> </div>");
				});
				$('.LoadImageUploadTimeline').fadeIn(2000,function(){
					$('.LoadImageUploadTimeline').delay(3000).html("<img class='prof_randomColor surveyDec_withPic timeline_withPic timeline_withPicNew' src='profile_pic/medium/"+data+"' width='100%' height='auto' style='border:thin solid #e0e0e0; '   />");
				});
			}
			
		});
		
	}
	
	
	function loadCoverPhoto(){
		$.ajax({
			url: 'ajax/ajax_Profile.php',
			type: 'GET',
			data: 'userID=id&action=showCoverPhoto',
			dataType: 'json',
			async: true,
			success: function(data){
				//$('.profile_info').css('border', '1px solid');
				//setTimeout(function() {
				//	$('.profile_info').css("background-image", "url(cover_photo/"+data+")");
				//}, 500);
				//$('.profile_info').on('change',function(e) {
					$('.profile_info').css("background-image", "url(cover_photo/"+data+")");
					//e.preventDefault();

				//});
				
				//alert(data);
			}
			
		});
	}
	
	
	function submitEditProfDetails(){
		var formData = $("#formRegTest").serialize();
		
		$.ajax({
			url:'ajax/ajax_Profile.php',
			type:'POST',
			data:formData,
			beforeSend:function(){
				$('.btn_profileEdit').html('<span class="fa fa-spinner fa-spin fa-fw"></span> SENDING ...');
			},
			success:function(data){
				$('.modalViewDec .msg').fadeIn(1000, function(){
					$('.modalViewDec .msg').html('<div class="alert alert-success" style="width: 100%;margin: 5px auto;" ><p class="font_green"><span class="fa fa-check-circle fa-lg" aria-hidden="true"></span> Updated Profile Information  Complete</p> </div>').show().delay(3000).fadeOut('slow');
					$('.btn_profileEdit').html('<i class="fa fa-pencil-square-o"></i> EDIT');
					updateShowProfile(timelineID);
				});
					
			}	
		});
	}
	
	
	
	
	function updateShowProfile(id){
		
		$.ajax({
			type: 'GET',
			url: 'ajax/ajax_viewModal.php',
			data: 'userId='+id+'&action=getDetails_user',
			dataType: 'json',
			success:function(data){
				
				var u1 = data['user_fname'];
				var u1 = u1[0].toUpperCase() + u1.slice(1);
				
				var u2 = data['user_lname'];
				var u2 = u2[0].toUpperCase() + u2.slice(1);
				
				var u3 = data['user_country'];
				var u4 = data['user_bday'];
				
				var name = u1 + ' ' + u2;
				
				$('.update_name').html(name);
				$('.update_bday').html(u4);
				$('.update_hometown').html(u3);
				
				
				/* 
				$('.A1').val(u2).prop('disabled', true);
				$('.A7').val(u1).prop('disabled', true);
				$('.A3').val(u4).prop('disabled', true);
				$('.A5').val(u6).prop('disabled', true);
				
					$('.A2').val(u3).prop('disabled', true);
					$('.A4').val(u5).prop('disabled', true);  */
					
			}
		}); 
	
	}
	
	
	function var_decrypt(id){
		
		var id;
		$.ajax({
			type: 'GET',
			url: 'ajax/ajax_viewModal.php',
			data: 'encrypt_ID='+id+'&action=getID',
			dataType: 'json',
			async: false,
			success:function(data){
				id = data;         
			}
		});
		
		return id;
		
	}
	
	loadProfilePic(userID);
	
	
});