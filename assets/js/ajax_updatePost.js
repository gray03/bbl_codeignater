$(document).ready(function(){
	
	
	
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
		submitHandler: submitUpdateForm	
	});
		 
	
	
	
	/* form submit */
	function submitUpdateForm(){		
		//var data = $("#formPost").serialize();
		//var formData = new FormData($('#formPost'));
		//var formObj = $(this);
		//var formURL = formObj.attr("action");
		
		
		$("#formUpdatePost").submit(function(e){
			//var formObj = $(this);
			//var formURL = formObj.attr("action");

		if(window.FormData !== undefined)  
			{
				var formData = new FormData(this);
				$.ajax({
					url: 'ajax/ajax_updatePost.php',
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
						if(data=="registered")
						{
							$('#updatesuccessMsg').fadeIn(1000, function(){
								$('#updatesuccessMsg').html('<div class="alert alert-success" style="width: 90%;margin: 5px auto;" ><h5><span class="fa fa-check-circle" aria-hidden="true"></span> Your Behoal post updated successfully!</h5> </div>').show();
								$("#btn-submit").html('<span class="fa fa-lg fa-share-square-o" aria-hidden="true"></span> Save changes');
							});
							$('.hide_content').hide();
							
						}else if(data=='Error'){
							$('#formUpdatePost')[0].reset();
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
				//e.unbind();
		});	
		
		
	}
	/* End form submit */

	});
	