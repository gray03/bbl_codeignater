
$(document).ready(function(){
	
	
	var track_page = 1; //track user scroll as page number, right now page number is 1
	var loading  = false; //prevents multiple loads
	var load_survey = $('#load_survey').val();
	
	/* Input file size validator */
	$.validator.addMethod('filesize', function (value, element, param) {
		return this.optional(element) || (element.files[0].size <= param)
	}, 'Filesize must 4mb or below');

	
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
				filesize: 4194304,
			},
			uploadedPDF: {
				extension: "pdf",
				filesize: 2621440,
			},
			urlVideo: {
				url: true
			},
			urlSite: {
				url: true
			},
		},
		submitHandler: submitForm	
	});
		 
	
	
	$('.btn-closeForm').click(function(){
		$('#formPost')[0].reset();
	});
	
	
	
	/* Display post behoal  */
	
	showPost(track_page,load_survey); 

	$(window).scroll(function() { 
		if($(window).scrollTop() + $(window).height() >= $(document).height()) { //if user scrolled to bottom of the page
			track_page++; 
			showPost(track_page,load_survey);	
		}
	});	
	
	
	//Ajax load function
	function showPost(track_page,load_survey){
		if(loading == false){
			loading = true; 
			$('.loading-info').show();
			
			$.ajax({
				url: 'func/load_survey.php',
				data: 'page='+track_page+'&view_type='+load_survey,
				type: 'POST',
				success: function(data){
					loading = false;
					if(data.trim().length == 0){
						
						$('#loading_end').html("No more records!");
						$('.loading-info').hide();
						return;
					}
					$('.loading-info').hide(); 
					$("#show").append(data); 
				},
			});
			
		}
	}
	
	
		 
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
						//var track_page = 1;
						if(data=="success")
						{
							$('#successMsg').fadeIn(1000, function(){
								$('#successMsg').html('<div class="alert alert-success" style="width: 100%;margin: 5px auto;" ><h5><span class="fa fa-check-circle" aria-hidden="true"></span> Your Behoal post published successfully!</h5> </div>').delay(3000).fadeOut('slow');
								$("#btn-submit").html('<span class="fa fa-lg fa-share-square-o" aria-hidden="true"></span> Save changes');
							});
							//$("input").val(""); 
							//$("textarea").val("");
							$('#formPost')[0].reset();
							//$('#formPost, #btn-modal_post').hide();
							$("#show").load(location.href + " #show"); // display post behoal
							showPost(track_page, load_survey); 
							//return true;
							$("#btn-modal_post").attr('disabled',false).html('<span class="fa fa-share-square-o" aria-hidden="true"></span> POST');
							//return false;
							$('.media_post_img_con, .media_post_video_con, .media_post_pdf_con, .media_post_url_con').hide();
							
						}else if(data=='Error'){
							//$("input").val(""); 
							//$("textarea").val("");
							$('#formPost')[0].reset();
							$("#btn-modal_post").attr('disabled',false).html('<span class="fa fa-share-square-o" aria-hidden="true"></span> POST');
						}else{
							swal({
								title: "Ops! Session Timeout",
								text: "Please login again your account",
								type: "warning",
								confirmButtonColor: "#177500 "
							}, function() {
								window.location = "logout.php";
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
	

	
	
	
	
	
	
	
});
