// JavaScript Document
$(document).ready(function(){

// Add survey

	$('#close_behoal').hide();

$('#button_add_behoal').click(function(){
	if($('#txtSub').val()==""){
		$('#error').html("Empty Subject");
		$('#error').css('color','red');
		return false;
	} 
	else
		{
		var txtSub = $('#txtSub').val();
		}
		
		
		
	if($('#txtSpec').val()==""){
		$('#error').html("Empty Specific");
		$('#error').css('color','red');
		return false;
	}
	else
	{
		var txtSpec = $('#txtSpec').val();
	}
	
	
	if($('#txtVisibility').val()==""){
		$('#error').html("Empty Visibility");
		$('#error').css('color','red');
		return false;
	} 
	else{
		var txtVisi = $('#txtVisibility').val();
	}
	
	if($('#txtContent').val()==""){
		$('#error').html("Empty Content");
		$('#error').css('color','red');
		return false;
	} 
	else{
		var txtCon = $('#txtContent').val();
	}
	
	jQuery.post("process.php", {
	subj_data:txtSub,
	spec_data: txtSpec,
	visi_data: txtVisi,
	con_data: txtCon
	},  function(data, textStatus){
		if(data == 1){
			$('#error').hide();
			$('#response').html("<i class='fa fa-check-circle' aria-hidden='true'></i> Successfully Added!!");
			$('#response').css({'color':'#3c763d', 'background-color':'#dff0d8', 'width': '100%', 'padding':'10px', 'border-color':'#d6e9c6'});
			$('.add_behoal').hide();
			$('#close_behoal').show();
			
		}
		else{
			$('#response').html("Some Error Occurred");
			$('#response').css({'color':'#a94442', 'background-color':'#f2dede', 'width': '100%', 'padding':'10px', 'border-color':'#ebccd1'});
		}
	});
});	 
	 
	 
// Modal Add Survey Form

	$('.bg_addSurvey').hide();
	
	$('.add_postSurvey').click(function(){
		$('.bg_addSurvey').fadeIn(1000);
	});
	$('#close_behoal').click(function(){
		$('.bg_addSurvey').fadeOut(1000);
	});

// Tabination
jQuery(function () {
    jQuery('#myTab a:last').tab('show')
})

// For Carousel Image
$(function() {
		$('#carousel').carouFredSel({
			responsive: true,
			items: {
				visible: 1,
				width: 900,
				height: 300
			},
			scroll: {
				duration: 250,
				timeoutDuration: 2500,
				fx: 'fade'
			},
			pagination: '#pager'
		});
	});
});

// Load the content of dashboard(survey content)
setInterval(function(){
	   $('#show').fadeIn('slow').load('func/load_survey.php').fadeIn('500');
 }, 1000);
	 


