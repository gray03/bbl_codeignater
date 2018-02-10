/**********  Vote  **********/

function addBelieve(id,action,count_total) {
	if(action!='disabled'){
		if(count_total != 0){
			$.ajax({ 
				url: "ajax/ajax_dashboardPost.php",
				data:'id='+id+'&action_button='+action+'&count_total='+count_total,
				type: "POST",
				beforeSend: function(){
					$('#survey-'+id+' .btn-believe').html("<img src='img/LoaderIcon.gif' />");
				},
				success: function(data){
					var belTotal = parseInt($('#believe-'+id).val());
					var hopTotal = parseInt($('#hope-'+id).val());
					var lovTotal = parseInt($('#love-'+id).val());
					var display_totalCnt = parseInt($('#count-'+id).val());
					var count_likes = parseInt($('#count-likes-'+id).val());
					var countTotalA=$('#count-'+id).val();
					var behoalTotal = parseInt($('#behoal-'+id).attr("data-behoalid"));
					//var totalBehoal=parseInt($('#behoal-'+id).val());
					
				
							if(count_total != 0){
								likes_total = belTotal+1;
								count_likeSum = count_likes - 1; 
								display_totalCnt = countTotalA - 1;
								sumTotalBehoal = 1 + behoalTotal;
								//alert(display_totalCnt);
								$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe " class="btn btn-success btn-xs believe" onClick="addBelieve('+id+',\'believe\','+display_totalCnt+')"  >BELIEVE <span class="badge">'+likes_total+' </span></button> ');
								$('#survey-'+id+' .btn-hope').html('<button type="button" title="hope" class="btn btn-success btn-xs believe" onClick="addHope('+id+',\'hope\','+display_totalCnt+')"  >HOPE <span class="badge">'+hopTotal+' </span></button> ');
								$('#survey-'+id+' .btn-love').html('<button type="button" title="love" class="btn btn-success btn-xs believe" onClick="addLove('+id+',\'love\','+display_totalCnt+')"  >LOVE/LIKE <span class="badge">'+lovTotal+' </span></button> ');
								$('#behoal-'+id).attr("data-behoalid",sumTotalBehoal);
							}else{
								$('#survey-'+id+' .btn-believe button').addClass('disabled');
								$('#survey-'+id+' .btn-hope button').addClass('disabled');
								$('#survey-'+id+' .btn-love button').addClass('disabled');	
								//alert('No more counts');
								sweetAlert("No more counts");
							}
						
						$('#believe-'+id).val(likes_total);
						$('#count-likes-'+id).val(count_likeSum);
						$('#count-'+id).val(display_totalCnt);
						$('.display_totalCnt-'+id).html('<span style="margin-right:30px">Behoals: '+sumTotalBehoal+' </span> Remaining Votes: '+display_totalCnt);
				}
			});
		}else{
			$('#survey-'+id+' .btn-believe button').addClass('disabled');
			$('#survey-'+id+' .btn-hope button').addClass('disabled');
			$('#survey-'+id+' .btn-love button').addClass('disabled');			
			//alert('No more counts');
			sweetAlert("No more counts");

		}
	}else{
		sweetAlert("No more counts");
	}
}


function addHope(id,action,count_total) {
	if(action!='disabled'){
		if(count_total != 0){
			$.ajax({
				url: "ajax/ajax_dashboardPost.php",
				data:'id='+id+'&action_button='+action+'&count_total='+count_total,
				type: "POST",
				beforeSend: function(){
					$('#survey-'+id+' .btn-hope').html("<img src='img/LoaderIcon.gif' />");
				},
				
				
				success: function(data){
					var belTotal = parseInt($('#believe-'+id).val());
					var hopTotal = parseInt($('#hope-'+id).val());
					var lovTotal = parseInt($('#love-'+id).val());
					var display_totalCnt = parseInt($('#count-'+id).val());
					var count_likes = parseInt($('#count-likes-'+id).val());
					var countTotalA=$('#count-'+id).val();
					var behoalTotal = parseInt($('#behoal-'+id).attr("data-behoalid"));
					
						if(count_total != 0){
							likes_total = hopTotal+1;
							count_likeSum = count_likes - 1; 
							display_totalCnt = countTotalA - 1;
							sumTotalBehoal =behoalTotal + 1;
							//alert(display_totalCnt);
							$('#survey-'+id+' .btn-believe').html('<button type="button" title="BELIEVE " class="btn btn-success btn-xs believe" onClick="addBelieve('+id+',\'believe\','+display_totalCnt+')"  >BELIEVE <span class="badge">'+belTotal+' </span></button> ');
							$('#survey-'+id+' .btn-hope').html('<button type="button" title="HOPE " class="btn btn-success btn-xs believe" onClick="addHope('+id+',\'hope\','+display_totalCnt+')"  >HOPE <span class="badge">'+likes_total+' </span></button> ');
							$('#survey-'+id+' .btn-love').html('<button type="button" title="LOVE" class="btn btn-success btn-xs believe" onClick="addLove('+id+',\'love\','+display_totalCnt+')"  >LOVE/LIKE <span class="badge">'+lovTotal+' </span></button> ');
							$('#behoal-'+id).attr("data-behoalid",sumTotalBehoal);
						}else{
							$('#survey-'+id+' .btn-believe button').addClass('disabled');
							$('#survey-'+id+' .btn-hope button').addClass('disabled');
							$('#survey-'+id+' .btn-love button').addClass('disabled');	
							sweetAlert("No more counts");
						}
					$('#hope-'+id).val(likes_total);
					$('#count-likes-'+id).val(count_likeSum);
					$('#count-'+id).val(display_totalCnt);
					$('.display_totalCnt-'+id).html('<span style="margin-right:30px">Behoals: '+sumTotalBehoal+' </span> Remaining Votes: '+display_totalCnt);
				}
			
			});
		}else{
			$('#survey-'+id+' .btn-believe button').addClass('disabled');
			$('#survey-'+id+' .btn-hope button').addClass('disabled');
			$('#survey-'+id+' .btn-love button').addClass('disabled');			
			sweetAlert("No more counts");
		}
	}else{
		sweetAlert("No more counts");
	}
}



function addLove(id,action,count_total) {
	if(action!='disabled'){
		if(count_total != 0){
			$.ajax({
				url: "ajax/ajax_dashboardPost.php",
				data:'id='+id+'&action_button='+action+'&count_total='+count_total,
				type: "POST",
				beforeSend: function(){
					$('#survey-'+id+' .btn-love').html("<img src='img/LoaderIcon.gif' />");
				},
				
				
				success: function(data){
					var belTotal = parseInt($('#believe-'+id).val());
					var hopTotal = parseInt($('#hope-'+id).val());
					var lovTotal = parseInt($('#love-'+id).val());
					var display_totalCnt = parseInt($('#count-'+id).val());
					var count_likes = parseInt($('#count-likes-'+id).val());
					var countTotalA=$('#count-'+id).val();
					var behoalTotal = parseInt($('#behoal-'+id).attr("data-behoalid"));
					
							if(count_total != 0){
								likes_total = lovTotal+1;
								count_likeSum = count_likes - 1; 
								display_totalCnt = countTotalA - 1;
								sumTotalBehoal = 1 + behoalTotal;
								//alert(display_totalCnt);
								$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe " class="btn btn-success btn-xs believe" onClick="addBelieve('+id+',\'believe\','+display_totalCnt+')"  >BELIEVE <span class="badge">'+belTotal+' </span></button> ');
								$('#survey-'+id+' .btn-hope').html('<button type="button" title="hope" class="btn btn-success btn-xs believe" onClick="addHope('+id+',\'hope\','+display_totalCnt+')"  >HOPE <span class="badge">'+hopTotal+' </span></button> ');
								$('#survey-'+id+' .btn-love').html('<button type="button" title="love" class="btn btn-success btn-xs believe" onClick="addLove('+id+',\'love\','+display_totalCnt+')"  >LOVE/LIKE <span class="badge">'+likes_total+' </span></button> ');
								$('#behoal-'+id).attr("data-behoalid",sumTotalBehoal);
							}else{
								$('#survey-'+id+' .btn-believe button').addClass('disabled');
								$('#survey-'+id+' .btn-hope button').addClass('disabled');
								$('#survey-'+id+' .btn-love button').addClass('disabled');	
								sweetAlert("No more counts");
							}
						$('#love-'+id).val(likes_total);
						$('#count-likes-'+id).val(count_likeSum);
						$('#count-'+id).val(display_totalCnt);
						$('.display_totalCnt-'+id).html('<span style="margin-right:30px">Behoals: '+sumTotalBehoal+' </span> Remaining Votes: '+display_totalCnt);
				}
			});
		}else{
			$('#survey-'+id+' .btn-believe button').addClass('disabled');
			$('#survey-'+id+' .btn-hope button').addClass('disabled');
			$('#survey-'+id+' .btn-love button').addClass('disabled');			
			sweetAlert("No more counts");
		}
	}else{
		sweetAlert("No more counts");
	}
}

/********** END Vote **********/

$(document).ready(function(){
	
	/*var win = $(window);

	// Each time the user scrolls
	win.scroll(function() {
		// End of the document reached?
		if ($(document).height() - win.height() == win.scrollTop()) {
			$('#loading').show();
			showDashboard();
			
		}
	});*/
	
	
	
	/* Input file size validator */
	$.validator.addMethod('filesize', function (value, element, param) {
		return this.optional(element) || (element.files[0].size <= param)
	}, 'Filesize must 1mb or below');

	
	/* Validate post form */
	$("#formPost").validate({
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
			},*/
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
			}
		},
		submitHandler: submitForm	
	});
		 
		 
	/* form submit */
	function submitForm(){		
		//var data = $("#formPost").serialize();
		//var formData = new FormData($('#formPost'));
		//var formObj = $(this);
		//var formURL = formObj.attr("action");
		
		
		$("#formPost").submit(function(e){
			//var formObj = $(this);
			//var formURL = formObj.attr("action");

		if(window.FormData !== undefined)  
			{
				var formData = new FormData(this);
				$.ajax({
					url: 'ajax/ajax_postBehoal.php',
					type: 'POST',
					data:  formData,
					mimeType:"multipart/form-data",
					contentType: false,
					cache: false,
					processData:false,
					beforeSend: function()
					{	
						$("#error").fadeOut();
						$("#successMsg").fadeOut();
						$("#btn-modal_post").attr('disabled',true).html('<span class="fa fa-spinner fa-spin fa-fw"></span> SENDING ...');
					},
					success: function(data, textStatus, jqXHR)
					{
						if(data=="success")
						{
							$('#successMsg').fadeIn(1000, function(){
								$('#successMsg').html('<div class="alert alert-success" style="width: 90%;margin: 5px auto;" ><h5><span class="fa fa-check-circle" aria-hidden="true"></span> Your Behoal post published successfully!</h5> </div>').show();
								$("#btn-submit").html('<span class="fa fa-lg fa-share-square-o" aria-hidden="true"></span> Save changes');
							});
							//$("input").val(""); 
							//$("textarea").val("");
							$('#formPost')[0].reset();
							$('#formPost, #btn-modal_post').hide();
							showDashboard(); // display post behoal
							//return true;
							$("#btn-modal_post").attr('disabled',false).html('<span class="fa fa-share-square-o" aria-hidden="true"></span> POST');
							
						}else if(data=='Error'){
							//$("input").val(""); 
							//$("textarea").val("");
							$('#formPost')[0].reset();
							$("#btn-modal_post").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Save changes');
						}else{
								
							$("#error").fadeIn(1000, function(){
								$("#error").html('<div class="alert alert-danger"><span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+data+' !</div>');
								$("#btn-modal_post").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Save changes');
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
	
	/* Display post behoal  */
	function showDashboard(){
	  $.ajax({
		type:"post",
		url:"func/load_survey2.php",
		data:"action=showDashboard",
		//beforeSend: function(){
			//$('#comment').html('<img src="loaderIcon.gif" />');
		//},
		success:function(data){
			 $("#show").html(data);
		}
	  });
	}

	showDashboard();  // display post behoal
	
	
	
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
				}else if(data=='Insert Success'){
					//alert('Success');
					$('#successMsg').fadeIn(1000, function(){
						$('#successMsg').html('<div class="alert alert-success" style="width: 100%;margin: 5px auto;" ><h5><span class="fa fa-check-circle" aria-hidden="true"></span> You have been succesfully Registered.</h5><p>You will receive email from BBL Team for your Account Verification prior to Login.</p> </div>').show().delay(7000).fadeOut('slow');
						//$(modalReg).delay(2000).close();
					});
					$('#formReg')[0].reset();
					$('.btn-register').html('<span class="fa fa-share-square-o" aria-hidden="true" ></span> Register');
					
				}else{
					alert('Error');
				}
			}	
		});
	}
	
	
	
	
});
