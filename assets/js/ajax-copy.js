/**********  Vote  **********/

function addBelieve(id,action,count_total,count_rank,cur_date) {
	if(action!='disabled'){

		$.ajax({
		url: "ajax/ajax_dashboardPost.php",
		data:'id='+id+'&action_button='+action+'&count_total='+count_total+'&cur_date='+cur_date,
		type: "POST",
		beforeSend: function(){
			$('#survey-'+id+' .btn-believe').html("<img src='img/LoaderIcon.gif' />");
			$('#survey-'+id+' .btn-hope').html("<img src='img/LoaderIcon.gif' />");
			$('#survey-'+id+' .btn-love').html("<img src='img/LoaderIcon.gif' />");
		},
		
		
		success: function(data){
			var belTotal = parseInt($('#believe-'+id).val());
			var hopTotal = parseInt($('#hope-'+id).val());
			var lovTotal = parseInt($('#love-'+id).val());
			
			var count_likes = parseInt($('#count-likes-'+id).val());
			if(action) {
				var countTotal= count_total - 1;
					//case "like":
					if(count_rank != 3){
						if(cur_date != cur_date){
							if(countTotal >= 1){
								//if(action == 'like'){
									likes_total = belTotal+1;
									count_likeSum = count_likes - 1; 
									$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="believe btn btn-success btn-xs" onClick="addBelieve('+id+',\'believe\','+countTotal+')" />BELIEVE <span class="badge">'+likes_total+' </span></button> ');
									$('#survey-'+id+' .btn-hope').html('<button type="button" title="believe" class="hope btn btn-success btn-xs" onClick="addHope('+id+',\'hope\','+countTotal+')" />HOPE <span class="badge">'+hopTotal+' </span></button> ');
									$('#survey-'+id+' .btn-love').html('<button type="button" title="believe" class="love btn btn-success btn-xs" onClick="addLove('+id+',\'love\','+countTotal+')" />LOVE/LIKE <span class="badge">'+lovTotal+' </span></button> ');
									
									//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hope" onClick="addHope('+id+',\'hope\','+countTotal+')" /> HOPE');
									//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="love" onClick="addLikes('+id+',\'hope\','+countTotal+')" /> LOVE/LIKE');
									
									
								//}
							}else{
								//$('#survey-'+id+' .btn-believe').html('<input type="button" title="BELIEVE" class="believeGray" /> BELIEVE');
								//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hopeGray" /> HOPE');
								//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="loveGray" />  LOVE/LIKE');
								$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="btn btn-success btn-xs disabled" >BELIEVE <span class="badge">'+likes_total+' </span></button> ');
								$('#survey-'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs disabled" >HOPE <span class="badge">'+hopTotal+' </span></button> ');
								$('#survey-'+id+' .btn-love').html('<button type="button" title="LOVE/LIKE" class="btn btn-success btn-xs disabled"  >LOVE/LIKE <span class="badge">'+lovTotal+' </span></button> ');						
								alert('No more counts');
								//$('.successMessage').show();
							}
						}else{
							likes_total = belTotal+1;
							count_likeSum = count_likes - 1; 
							$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="btn btn-success btn-xs disabled" >BELIEVE <span class="badge">'+likes_total+' </span></button> ');
							$('#survey-'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs disabled" >HOPE <span class="badge">'+hopTotal+' </span></button> ');
							$('#survey-'+id+' .btn-love').html('<button type="button" title="LOVE/LIKE" class="btn btn-success btn-xs disabled"  >LOVE/LIKE <span class="badge">'+lovTotal+' </span></button> ');
							//$('#survey-'+id+' .btn-believe').html('<button type="button" title="BELIEVE" class="btn btn-success btn-xs disabled" /> BELIEVE <span class="badge">'+likes+' </span></button> ');
							//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hopeGray" /> HOPE');
							//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="loveGray" />  LOVE/LIKE');
							alert('Please vote tom');
							
							//alert('Please vote tom');
									//$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="believe btn btn-success btn-xs disabled" onClick="addBelieve('+id+',\'believe\','+countTotal+')" />BELIEVE <span class="badge">'+likes+' </span></button> ');
						}
					}else{
						//$('#survey-'+id+' .btn-believe').html('<input type="button" title="BELIEVE" class="believeGray" /> BELIEVE');
						//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hopeGray" /> HOPE');
						//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="loveGray" />  LOVE/LIKE');
						$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="btn btn-success btn-xs disabled" >BELIEVE <span class="badge">'+likes_total+' </span></button> ');
						$('#survey-'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs disabled" >HOPE <span class="badge">'+hopTotal+' </span></button> ');
						$('#survey-'+id+' .btn-love').html('<button type="button" title="LOVE/LIKE" class="btn btn-success btn-xs disabled"  >LOVE/LIKE <span class="badge">'+lovTotal+' </span></button> ');
						alert('No more counts');
					}
					//break;
					/*case "unlike":
					$('#tutorial-'+id+' .btn-likes').html('<input type="button" title="Like" class="like"  onClick="addLikes('+id+',\'like\')" />')
					likes = likes-1;
					break;*/
				
			}
			$('#believe-'+id).val(belTotal);
			$('#count-likes-'+id).val(count_likeSum);
			/*if(likes>0) {
				$('#survey-'+id+' .label-believe').html(likes+" Believe(s)");
			} else {
				$('#survey-'+id+' .label-believe').html('');
			}*/
		}
		
		
		});
	}else{
		alert('No more counts');
	}
}


function addHope(id,action,count_total,count_rank,cur_date) {
	if(action!='disabled'){
		$.ajax({
		url: "ajax/ajax_dashboardPost.php",
		data:'id='+id+'&action_button='+action+'&count_total='+count_total+'&cur_date='+cur_date,
		type: "POST",
		beforeSend: function(){
			$('#survey-'+id+' .btn-believe').html("<img src='img/LoaderIcon.gif' />");
			$('#survey-'+id+' .btn-hope').html("<img src='img/LoaderIcon.gif' />");
			$('#survey-'+id+' .btn-love').html("<img src='img/LoaderIcon.gif' />");
		},
		
		
		success: function(data){
			var belTotal = parseInt($('#believe-'+id).val());
			var hopTotal = parseInt($('#hope-'+id).val());
			var lovTotal = parseInt($('#love-'+id).val());
			
			var count_likes = parseInt($('#count-likes-'+id).val());
			if(action) {
				var countTotal= count_total - 1;
				//case "like":
				if(count_rank != 3){
					if(cur_date != cur_date){
						if(countTotal >= 1){
							//if(action == 'like'){
								
								//$('#survey-'+id+' .btn-believe').html('<input type="button" title="believe" class="believe" onClick="addBelieve('+id+',\'believe\','+countTotal+')" />');
								//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hope" onClick="addHope('+id+',\'hope\','+countTotal+')" /> HOPE');
								//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="love" onClick="addLikes('+id+',\'hope\','+countTotal+')" /> LOVE/LIKE');
								likes_total = hopTotal+1;
								count_likeSum = count_likes - 1; 
								$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="believe btn btn-success btn-xs" onClick="addBelieve('+id+',\'believe\','+countTotal+')" />BELIEVE <span class="badge">'+belTotal+' </span></button> ');
								$('#survey-'+id+' .btn-hope').html('<button type="button" title="believe" class="hope btn btn-success btn-xs" onClick="addHope('+id+',\'hope\','+countTotal+')" />HOPE <span class="badge">'+likes_total+' </span></button> ');
								$('#survey-'+id+' .btn-love').html('<button type="button" title="believe" class="love btn btn-success btn-xs" onClick="addLove('+id+',\'love\','+countTotal+')" />LOVE/LIKE <span class="badge">'+lovTotal+' </span></button> ');
							//}
						}else{
							//$('#survey-'+id+' .btn-believe').html('<input type="button" title="BELIEVE" class="believeGray" /> BELIEVE');
							//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hopeGray" /> HOPE');
							//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="loveGray" />  LOVE/LIKE');
							$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="btn btn-success btn-xs disabled" >BELIEVE <span class="badge">'+belTotal+' </span></button> ');
							$('#survey-'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs disabled" >HOPE <span class="badge">'+likes_total+' </span></button> ');
							$('#survey-'+id+' .btn-love').html('<button type="button" title="LOVE/LIKE" class="btn btn-success btn-xs disabled"  >LOVE/LIKE <span class="badge">'+lovTotal+' </span></button> ');
							alert('No more counts');
							//$('.successMessage').show();
						}
					}else{
						//$('#survey-'+id+' .btn-believe').html('<input type="button" title="BELIEVE" class="believeGray" /> BELIEVE');
						//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hopeGray" /> HOPE');
						//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="loveGray" />  LOVE/LIKE');
						likes_total = hopTotal+1;
						count_likeSum = count_likes - 1; 
						$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="btn btn-success btn-xs disabled" >BELIEVE <span class="badge">'+belTotal+' </span></button> ');
						$('#survey-'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs disabled" >HOPE <span class="badge">'+likes_total+' </span></button> ');
						$('#survey-'+id+' .btn-love').html('<button type="button" title="LOVE/LIKE" class="btn btn-success btn-xs disabled"  >LOVE/LIKE <span class="badge">'+lovTotal+' </span></button> ');					
						alert('Please vote tom');

					}
				}else{
					//$('#survey-'+id+' .btn-believe').html('<input type="button" title="BELIEVE" class="believeGray" /> BELIEVE');
					//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hopeGray" /> HOPE');
					//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="loveGray" />  LOVE/LIKE');
					$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="btn btn-success btn-xs disabled" >BELIEVE <span class="badge">'+belTotal+' </span></button> ');
					$('#survey-'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs disabled" >HOPE <span class="badge">'+likes_total+' </span></button> ');
					$('#survey-'+id+' .btn-love').html('<button type="button" title="LOVE/LIKE" class="btn btn-success btn-xs disabled"  >LOVE/LIKE <span class="badge">'+lovTotal+' </span></button> ');
					alert('No more counts');
				}
				//break;
				/*case "unlike":
				$('#tutorial-'+id+' .btn-likes').html('<input type="button" title="Like" class="like"  onClick="addLikes('+id+',\'like\')" />')
				likes = likes-1;
				break;*/
			}
			$('#hope-'+id).val(hopTotal);
			$('#count-likes-'+id).val(count_likeSum);
			/*if(likes>0) {
				$('#survey-'+id+' .label-hope').html(likes+" Hope(s)");
			} else {
				$('#survey-'+id+' .label-hope').html('');
			}*/
		}
		
		
		});
	}else{
		alert('No more counts');
	}
}



function addLove(id,action,count_total,count_rank,cur_date) {
	if(action!='disabled'){
		$.ajax({
		url: "ajax/ajax_dashboardPost.php",
		data:'id='+id+'&action_button='+action+'&count_total='+count_total+'&cur_date='+cur_date,
		type: "POST",
		beforeSend: function(){
			$('#survey-'+id+' .btn-believe').html("<img src='img/LoaderIcon.gif' />");
			$('#survey-'+id+' .btn-hope').html("<img src='img/LoaderIcon.gif' />");
			$('#survey-'+id+' .btn-love').html("<img src='img/LoaderIcon.gif' />");
		},
		
		
		success: function(data){
			var belTotal = parseInt($('#believe-'+id).val());
			var hopTotal = parseInt($('#hope-'+id).val());
			var lovTotal = parseInt($('#love-'+id).val());
			var display_totalCnt = parseInt($('#count-'+id).val());
			var count_likes = parseInt($('#count-likes-'+id).val());
			if(action) {
				var countTotal= count_total - 1;
				//case "like":
				if(count_rank != 3){
					if(cur_date != cur_date){
						if(countTotal >= 1){
							//if(action == 'like'){
								
								//$('#survey-'+id+' .btn-believe').html('<input type="button" title="believe" class="believe" onClick="addBelieve('+id+',\'believe\','+countTotal+')" />');
								//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hope" onClick="addHope('+id+',\'hope\','+countTotal+')" /> HOPE');
								//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="love" onClick="addLove('+id+',\'hope\','+countTotal+')" /> LOVE/LIKE');
								likes_total = lovTotal+1;
								display_totalCnt = 3 - count_rank;
								count_likeSum = count_likes - 1; 
								$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="believe btn btn-success btn-xs" onClick="addBelieve('+id+',\'believe\','+countTotal+')" />BELIEVE <span class="badge">'+belTotal+' </span></button> ');
								$('#survey-'+id+' .btn-hope').html('<button type="button" title="believe" class="hope btn btn-success btn-xs" onClick="addHope('+id+',\'hope\','+countTotal+')" />HOPE <span class="badge">'+hopTotal+' </span></button> ');
								$('#survey-'+id+' .btn-love').html('<button type="button" title="believe" class="love btn btn-success btn-xs" onClick="addLove('+id+',\'love\','+countTotal+')" />LOVE/LIKE <span class="badge">'+likes_total+' </span></button> ');
								$('#survey-'+id+' .display_totalCnt').html("Total Count: " +display_totalCnt);

							//}
						}else{
							//$('#survey-'+id+' .btn-believe').html('<input type="button" title="BELIEVE" class="believeGray" /> BELIEVE');
							//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hopeGray" /> HOPE');
							//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="loveGray" />  LOVE/LIKE');
							$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="btn btn-success btn-xs disabled" >BELIEVE <span class="badge">'+belTotal+' </span></button> ');
							$('#survey-'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs disabled" >HOPE <span class="badge">'+hopTotal+' </span></button> ');
							$('#survey-'+id+' .btn-love').html('<button type="button" title="LOVE/LIKE" class="btn btn-success btn-xs disabled"  >LOVE/LIKE <span class="badge">'+likes_total+' </span></button> ');
							alert('No more counts');
							//$('.successMessage').show();
						}
					}else{
						//$('#survey-'+id+' .btn-believe').html('<input type="button" title="BELIEVE" class="believeGray" /> BELIEVE');
						//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hopeGray" /> HOPE');
						//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="loveGray" />  LOVE/LIKE');
						likes_total = lovTotal+1;
						count_likeSum = count_likes - 1; 
						$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="btn btn-success btn-xs disabled" >BELIEVE <span class="badge">'+belTotal+' </span></button> ');
						$('#survey-'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs disabled" >HOPE <span class="badge">'+hopTotal+' </span></button> ');
						$('#survey-'+id+' .btn-love').html('<button type="button" title="LOVE/LIKE" class="btn btn-success btn-xs disabled"  >LOVE/LIKE <span class="badge">'+likes_total+' </span></button> ');
						alert('Please vote tom');
					}
				}else{
					//$('#survey-'+id+' .btn-believe').html('<input type="button" title="BELIEVE" class="believeGray" /> BELIEVE');
					//$('#survey-'+id+' .btn-hope').html('<input type="button" title="HOPE" class="hopeGray" /> HOPE');
					//$('#survey-'+id+' .btn-love').html('<input type="button" title="LOVE/LIKE" class="loveGray" />  LOVE/LIKE');
					$('#survey-'+id+' .btn-believe').html('<button type="button" title="believe" class="btn btn-success btn-xs disabled" >BELIEVE <span class="badge">'+belTotal+' </span></button> ');
					$('#survey-'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs disabled" >HOPE <span class="badge">'+hopTotal+' </span></button> ');
					$('#survey-'+id+' .btn-love').html('<button type="button" title="LOVE/LIKE" class="btn btn-success btn-xs disabled"  >LOVE/LIKE <span class="badge">'+likes_total+' </span></button> ');
					alert('No more counts');
				}
				//break;
				/*case "unlike":
				$('#tutorial-'+id+' .btn-likes').html('<input type="button" title="Like" class="like"  onClick="addLikes('+id+',\'like\')" />')
				likes = likes-1;
				break;*/
			}
			//$('#love-'+id).val(likes);
			//$('#count-likes-'+id).val(count_likeSum);
			//$('#count-'+id).val(display_totalCnt);
			

			/*if(likes>0) {
				$('#survey-'+id+' .label-love').html(likes+" Love(s)/Like(s)");
			} else {
				$('#survey-'+id+' .label-love').html('');
			}*/
		}
		
		
		});
	}else{
		alert('No more counts');
	}
}

/********** END Vote **********/


$(document).ready(function(){
	
	
	
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
			txtContent: {
				required: true,
			},
			uploadedimage: {
				extension: "png|jpe?g|gif",
				filesize: 1621440,
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
						$("#btn-submit").html('<span class="fa fa-spinner fa-spin fa-fw"></span> SENDING ...');
					},
					success: function(data, textStatus, jqXHR)
					{
						if(data=="registered")
						{
							$('#successMsg').fadeIn(1000, function(){
								$('#successMsg').html('<div class="alert alert-success" style="width: 90%;margin: 5px auto;" ><h5><span class="fa fa-check-circle" aria-hidden="true"></span> Your Behoal post published successfully!</h5> </div>').show().delay(1000).fadeOut('slow');
								$("#btn-submit").html('<span class="fa fa-lg fa-share-square-o" aria-hidden="true"></span> Save changes');
							});
							$("input").val(""); 
							$("textarea").val("");
							//$('#formPost').reset();
							showDashboard(); // display post behoal
							//return true;
							
						}else if(data=='Error'){
							$("input").val(""); 
							$("textarea").val("");
							$("#btn-submit").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Save changes');
						}else{
								
							$("#error").fadeIn(1000, function(){
								$("#error").html('<div class="alert alert-danger"><span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+data+' !</div>');
								$("#btn-submit").html('<span class="fa fa-share-square-o" aria-hidden="true"></span> Save changes');
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
				e.unbind();
		});	
		
		
	}
	/* End form submit */
	
	/* Display post behoal  */
	function showDashboard(){
	  $.ajax({
		type:"post",
		url:"func/load_survey.php",
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
	
	
});



	