$(document).ready(function(){
	
	var track_page = 1; //track user scroll as page number, right now page number is 1
	var loading  = false; //prevents multiple loads
	var timelineId	=	var_decrypt($("#timelineId").val());
	var load_survey	=	1;
	
	
	showTimeline(track_page, load_survey);  // display post behoal

	
	$(window).scroll(function() { 
		if($(window).scrollTop() + $(window).height() >= $(document).height()) { //if user scrolled to bottom of the page
			track_page++; 
			showTimeline(track_page, load_survey);	
		}
	});	
	

	
	//Ajax load function
	function showTimeline(track_page,load_survey){
		if(loading == false){
			loading = true; 
			$('.loading-info').show();
			
			$.ajax({
				url:"ajax/ajax_timeline.php",
				data:"timelineId="+timelineId+"&page="+track_page+"&view_type="+load_survey+"&action=showTimeline",
				type: 'POST',
				success: function(data){
					loading = false;
					if(data.trim().length == 0){
						
						$('#loading_end').html("No more records!");
						$('.loading-info').hide();
						return;
					}
					$('.loading-info').hide(); 
					 $("#timeline_con").append(data);
				},
			});
			
		}
	}
	
	
	/* Show timeline post */
	/*function showTimeline(track_page,load_survey){
		if(loading == false){
			loading = true; 
			$('.loading-info').show();
				
			$.ajax({
				type:"post",
				url:"ajax/ajax_timeline.php",
				data:"timelineId="+timelineId+"&page="+track_page+"&view_type="+load_survey+"&action=showTimeline",
				success:function(data){
					loading = false;
					if(data.trim().length == 0){
						
						$('#loading_end').html("No more records!");
						$('.loading-info').hide();
						return;
					}
					$('.loading-info').hide(); 
					 $("#timeline_con").append(data);
					 //$('#postComment').attr('disabled',true);
				}
			});
		}
	};*/
	//showTimeline();
	
	
	/* 
	
	
	
	$('.tooltip_sort p').click(function(){
		//alert(true);
		//alert($(this).attr("id"));
		var id = $(this).attr("id");
		
		if(id == 'one'){
			$('#one').addClass('active');
			var load_survey	=	1;
			
			showTimeline(track_page, load_survey);  // display post behoal
			$("#timeline_con").load(location.href + " #timeline_con");
		}else{
			$('#one').removeClass('active');
		}
		
		if(id == 'two'){
			$('#two').addClass('active');
			var load_survey	=	2;
			
			showTimeline(track_page, load_survey);  // display post behoal
			$("#timeline_con").load(location.href + " #timeline_con");
		}else{
			$('#two').removeClass('active');
		}
		
		if(id == 'three'){
			$('#three').addClass('active');
			var load_survey	=	3;
			
			showTimeline(track_page, load_survey);  // display post behoal
			$("#timeline_con").load(location.href + " #timeline_con");
		}else{
			$('#three').removeClass('active');
		}
		//$("#timeline_con").load(location.href + " #timeline_con");
		//showTimeline(track_page);  // display post behoal
	});
	 */
	
	
	
	$(this).on("click", ".btn_editPost", function () {
		
		
	//$('.btn_editProfile').click(function (){
	var decrypt_id = $(this).data('id');
	var idSurvey = var_decrypt(decrypt_id);
	
	
	/*showDashboard(track_page,load_survey); 

	$(window).scroll(function() { 
		if($(window).scrollTop() + $(window).height() >= $(document).height()) { //if user scrolled to bottom of the page
			track_page++; 
			showDashboard(track_page,load_survey);	
		}
	});	
	*/
	
	//var idSurvey = $(this).data('id');
	 
	 $("#id_survey").val( idSurvey );
	 
	// alert(idSurvey);
		$.ajax({
			type: 'GET',
			url: 'ajax/ajax_viewModal.php',
			data: 'surveyId='+decrypt_id+'&action=getDetails',
			dataType: 'json',
			/* beforeSend: function(){
				$('.showEditProfile').html('<img src="../img/showEditProfile.gif " alt="Loading" style="margin:auto" /> LOADING');
			}, */
			success:function(data){
				var id = data['survey_id'];            
				var vSub = data['survey_subject']; 
				var vSpec = data['survey_specific'];
				var vImage = data['survey_image'];
				var vPDF = data['survey_pdf'];
				var vDesc = data['survey_content'];
				var vURL = data['survey_video'];
				
				 $('#txtSub').val(vSub);  
				 $('#txtSpec').val(vSpec);   
				 $('textarea#txtContent').val(vDesc); 
				 $('.show_surveyId').text(id);
				 var media_surveyId=$('.show_surveyId').text(id);
				 
				 /* if( vURL.length != 0){
					$('#urlVideo').val('https://www.youtube.com/watch?v='+vURL); 
				 }
				 if( vURL.length == 0){
					$('#urlVideo').val(); 
				 }
				 
				 $('#uploadedimage[type=file]').val(vImage); 
				 $('#uploadedPDF').val(vPDF);  */
				 
				 
			}
		});
		
		
		
		/* Show media content  */
		//var media_surveyId=12;
		
		function showMedia(){
			$.ajax({
				type:"post",
				url:"ajax/ajax_timeline.php",
				data:"media_surveyId="+idSurvey+"&action=showMedia",
				success:function(data){
					 $("#media_option_con").html(data);
					 //$('#postComment').attr('disabled',true);
				}
			  });
		};
		showMedia();
		
		
		$("#formMedia").validate({
			rules: {
				imageMedia: {    
					required: true,
					extension: "png|jpe?g|gif",
					filesize: 3621440,
				},
				uploadedPDF: {
					required: true,
					extension: "pdf",
					filesize: 2621440,
				},
				urlVideo: {
					required: true,
					url: true
				},
				urlSite: {
					url: true
				},
			},
			submitHandler: submitMedia
		});	
		
		
		function submitMedia(){
			$("#formMedia").submit(function(e){
				//if(window.FormData !== undefined){
				var formData = new FormData(this);
				formData.append('idSurvey', idSurvey);
					$.ajax({
						url: 'ajax/ajax_editPost.php',
						type: 'POST',
						data:  formData,
						mimeType:"multipart/form-data",
						contentType: false,
						cache: false,
						processData:false,
						beforeSend:function(){
							$('.btn-mediaImg').html('<span class="fa fa-spinner fa-spin fa-fw"></span> Uploading');
						},
						success: function(data, textStatus, jqXHR){
							$('.msg').html('<div class="alert alert-success" style="width: 100%;margin: 5px auto;" ><p class="font_green"><span class="fa fa-check-circle fa-lg" aria-hidden="true"></span> Upload Complete</p> </div>').show().delay(6000).fadeOut('slow');
							$('#formMedia')[0].reset();
							$('.btn-mediaImg').hide();
							$("#timeline_con").load(location.href + " #timeline_con");
							showTimeline(track_page,load_survey); 

							//showTimeline(track_page);  // display post behoal
							//location.reload(true);
							//loadProfilePic();
							//$('#formUploadPic .btn-primaryButton').html('<span class="fa fa-spinner fa-spin fa-fw"></span> Uploading');
						}
					});
				
			   //}
					e.preventDefault();
			});
		}
	 
	});
	
	
	
	$(this).on('click', '.btnRotate', function() {
	//$('.btnRotate').click(function() {
		// alert("Hello");

		var idno = "test";
		var imgRotate = $('#imageRotate').attr('src');
		var deg = $(this).val();
		//alert(imgRotate);
		$.ajax({
			url: "saveimagerotate.php",
			type: 'POST',
			data: "imgRotate="+imgRotate+"&degree="+deg, 
			success: function(data){
				//alert(deg);
								
				$('.imageRotate').animate({  transform: deg }, {
					step: function(deg,fx) {
						$(this).css({
							'-webkit-transform':'rotate('+deg+'deg)', 
							'-moz-transform':'rotate('+deg+'deg)',
							'transform':'rotate('+deg+'deg)'
						});
					}
				});
				
				//$('.imageRotate').rotate(deg);
				$('.msgMedia').html('<div class="alert alert-success" style="width: 100%;margin: 5px auto;font-weight:600" ><p class="font_green"><span class="fa fa-check-circle fa-lg" aria-hidden="true"></span> Image Rotated. <a href=""> Click here to reload your page.</a></p> </div>').show().delay(6000).fadeOut('slow');
				/* $('#imageRotate').css({
					'-webkit-transform':'rotate('+deg+'deg)', 
					'-moz-transform':'rotate('+deg+'deg)',
					'transform':'rotate('+deg+'deg)'
				}); */
				showTimeline(track_page,load_survey);
				/*if(data=='new'){
					alert(1);
				}*/
			}
		});
    });
	
	
	/* Validate update post form */
	$("#formUpdatePost").validate({
		rules: {
			txtSub: {
				required: true
			},
			txtSpec: {
				required: true,
				//extension: "xls|csv"
			},
			/*txtContent: {
				required: true,
			},
			uploadedimage: {                      
				extension: "png|jpe?g|gif",
				filesize: 3621440,
			},
			uploadedPDF: {
				extension: "pdf",
				filesize: 2621440,
			},
			urlVideo: {
				url: true
			}*/
		},
		submitHandler: submitUpdateForm	
	});
		 
	
	

	
	$(this).on("click", ".btn_delPost", function () {
		var idSurveyDec = $(this).data('id');
		var decrypt_id = var_decrypt(idSurveyDec);
				
		swal({
			title: "Are you sure?",
			text: "You will not be able to recover this post!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "Yes, delete it!",
			closeOnConfirm: false
		},
		function(){
			// swal("Deleted!", "Your imaginary file has been deleted.", "success"); data:"comID="+id+"&userID="+idUser+"&commentMes="+inputValue+"&action=showeditcomment",
			//alert(pass);
			$.ajax({
				type: 'GET',
				url: 'ajax/ajax_delete.php',
				data: 'surveyId='+decrypt_id+'&action=deletePost',
				//dataType: 'json',
				//async: false,
				success:function(data){
					if(data == 'OK'){
						swal("Deleted!", "Your imaginary file has been deleted.", "success"); 
						$("#timeline_con").load(location.href + " #timeline_con");
						showTimeline(track_page,load_survey); 
					}else{
						alert(false);
					}
				}
			});
		});
	});
	
	
	
	
	
	
	
	
	
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
	
	
	/* form submit */
	function submitUpdateForm(){		
	
		
		$("#formUpdatePost").submit(function(e){
			//var formObj = $(this);
			//var formURL = formObj.attr("action");
			var action = 'updatePost';

		if(window.FormData !== undefined){
				
				var formData = new FormData(this);
				formData.append('action', action);
				$.ajax({
					url: 'ajax/ajax_editPost.php',
					type: 'POST',
					data:  formData,
					mimeType:"multipart/form-data",
					contentType: false,
					cache: false,
					processData:false,
					beforeSend: function()
					{	
						$("#error").fadeOut();
						$("#updatesuccessMsg").fadeOut();
						$("#btn-submit").html('<span class="fa fa-spinner fa-spin fa-fw"></span> SENDING ...');
					},
					success: function(data, textStatus, jqXHR)
					{
						if(data=="success")
						{
							$('#updatesuccessMsg').fadeIn(1000, function(){
								$('#updatesuccessMsg').html('<div class="alert alert-success" style="width: 90%;margin: 5px auto;" ><h5><span class="fa fa-check-circle" aria-hidden="true"></span> Your Behoal post  successfully updated!</h5> </div>').show();
								//$("#btn_editPost").html('<span class="fa fa-lg fa-share-square-o" aria-hidden="true"></span> Save changes');
								$("#btn-submit").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> UPDATE POST');
								
							});
							
							$('#formUpdatePost')[0].reset();
							$('#formUpdatePost').hide();
							$(".btn_saveeditPost").hide();
							$("#timeline_con").load(location.href + " #timeline_con");
							showTimeline(track_page,load_survey);  // display post behoal
							//$("#btn-submit").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Save changes');
							//return true;
							
						}else if(data=='Error'){
							//$("input").val(""); 
							//$("textarea").val("");
							$('#formUpdatePost')[0].reset();
							$(".btn_saveeditPost").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Save changes');
						}else{
								
							$("#error").fadeIn(1000, function(){
								$("#error").html('<div class="alert alert-danger"><span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+data+' !</div>');
								$(".btn_saveeditPost").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Save changes');
							});
									
						}	
							
					},
					error: function(jqXHR, textStatus, errorThrown) 
					{
						$("#multi-msg").html('<pre><code class="prettyprint">AJAX Request Failed<br/> textStatus='+textStatus+', errorThrown='+errorThrown+'</code></pre>');
					}           
			   });
		   }
				e.preventDefault();
				//e.unbind();
		});	
		
		
	}
	/* End form submit */
	
	


	

	
});
	