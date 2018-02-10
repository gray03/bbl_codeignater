// JavaScript Document



// Stick Ads and Scroll Navi
$(window).scroll(function(){
	
	//$('.backtotop').hide();
	
	if ($(this).scrollTop() > 1000) {
		//$('#sponsor_con').fadeIn().addClass("sponsor_con_stick");
		$('.scrollUp').fadeIn();
		$('.scrollDown').fadeIn();
		//$('#sponsor_con2').addClass("sponsor_con_stick");
	} else {
		//$('#sponsor_con').removeClass("sponsor_con_stick");
		$('.scrollUp').fadeOut();
		$('.scrollDown').fadeIn();
		//$('#sponsor_con2').removeClass("sponsor_con_stick");
	}
  
});


$(document).ready(function(){
	
	
	// EMOJI
	/* var heightBody = $('#modalViewCom').height(); 
	$('.emoji_containerBG').css("display", 'none');
	$('body').css("height", heightBody);
	
	$("#txtContentComment").emoji({
		button: "#btnLoad1",
		showTab: true,
		animation: 'slide',
		icons: [{
			name: "Emoji",
			path: "dist/emoji/img/tieba/",
			maxNum: 50,
			file: ".png",
			placeholder: ":{alias}:",
			alias: {
				1: "hehe",
				2: "haha",
				3: "tushe",
				4: "a",
				5: "ku",
				6: "lu",
				7: "kaixin",
				8: "han",
				9: "lei",
				10: "heixian",
				11: "bishi",
				12: "bugaoxing",
				13: "zhenbang",
				14: "qian",
				15: "yiwen",
				16: "yinxian",
				17: "tu",
				18: "yi",
				19: "weiqu",
				20: "huaxin",
				21: "hu",
				22: "xiaonian",
				23: "neng",
				24: "taikaixin",
				25: "huaji",
				26: "mianqiang",
				27: "kuanghan",
				28: "guai",
				29: "shuijiao",
				30: "jinku",
				31: "shengqi",
				32: "jinya",
				33: "pen",
				34: "aixin",
				35: "xinsui",
				36: "meigui",
				37: "liwu",
				38: "caihong",
				39: "xxyl",
				40: "taiyang",
				41: "qianbi",
				42: "dnegpao",
				43: "chabei",
				44: "dangao",
				45: "yinyue",
				46: "haha2",
				47: "shenli",
				48: "damuzhi",
				49: "ruo",
				50: "OK"
			},
		}]
	});

	$('#btnLoad1').click(function(){
		$('.emoji_containerBG').css("display", 'inherit');
	});
	
	$('.emoji_container, .emoji_containerBG').click(function(){
		$('.emoji_container, .emoji_containerBG').css("display", 'none');
	}); */
	
//////////////////////////////////////////////////////////////////////////////////////////////


	// LeftNavi Mobile
	/* var widthBody = $('body').width();
	if(widthBody < 991){
		$('#leftnaviMob_con').addClass('leftnaviMobile');
		$('#leftnaviMob_con ').children('.left_conA, .left_conB').not(":first").addClass('leftnaviMobile_friends');
		$('.left_conA_clk').html("<div class='left_conA_clk_close' style=''><i class='fa fa-times-circle' aria-hidden='true'></i> CLICK HERE TO CLOSE </div>");
		$('.mobLeftMenu').css("display", "inherit");
	}else{
		$('#leftnaviMob_con').removeClass('leftnaviMobile');
		$('#leftnaviMob_con ').children('.left_conA, .left_conB').not(":first").removeClass('leftnaviMobile_friends');
		$('.left_conA_clk').html("");
		$('.mobLeftMenu').css("display", "none");
	}
	
	
	$('.left_conA_clk, .mobile_menu').click(function(){
		$('.search_con, .container_bg').fadeOut();
		$("#leftnaviMob_con").animate({"right":"-320px"}, "slow");
		$('body').css("overflow", "auto");
	}); */
	
	
	//showViewPortSize(widthBody);
	
//////////////////////////////////////////////////////////////////////////////////////////////
	
	//Tooltip Post
	$(".plusIcon").mouseover(function(){
		$(".tooltip_post").show();
	});
	$(".plusIcon").mouseout(function(){
		$(".tooltip_post").hide();
	});

	$(".sortIcon, .tooltip_sort").mouseover(function(){
		$(".tooltip_sort").show();
	});
	$(".tooltip_sort").mouseout(function(){
		$(".tooltip_sort").hide();
	});


//////////////////////////////////////////////////////////////////////////////////////////////

	// Ads

	$('.sponsor1 .closeBtn').click(function(){
		$('.sponsor1A').css("display", "none").fadeOut(5000);
		$('.sponsor1B').css("display", "inherit");
	});

	$('.sponsor2 .closeBtn').click(function(){
		$('.sponsor2A').css("display", "none").fadeOut(5000);
		$('.sponsor2B').css("display", "inherit");
	});

	$('.sponsor3 .closeBtn').click(function(){
		$('.sponsor3A').css("display", "none").fadeOut(5000);
		$('.sponsor3B').css("display", "inherit");
	});

	$('.sponsor4 .closeBtn').click(function(){
		$('.sponsor4A').css("display", "none").fadeOut(5000);
		$('.sponsor4B').css("display", "inherit");
	});

	$('.sponsor5 .closeBtn').click(function(){
		$('.sponsor5A').css("display", "none").fadeOut(5000);
		$('.sponsor5B').css("display", "inherit");
	});
	
	$('.sponsor6 .closeBtn').click(function(){
		$('.sponsor6A').css("display", "none").fadeOut(5000);
		$('.sponsor6B').css("display", "inherit");
	});

//////////////////////////////////////////////////////////////////////////////////////////////


	// ACtive Menu
	
	$('.main_menu li').click(function(){
		$(this).addClass('active');
		$('.top_header_navi_icon').removeClass('active');
	});

//////////////////////////////////////////////////////////////////////////////////////////////

	// For mobile navi 
	//$('.mobile_submenu').hide();

	$('.mobile_menu, .mobile_submenu').click(function(){
		//$('.mobile_submenu').slideToggle();
		$('.mobile_submenu').toggleClass('mobile_submenu_show');
		$('.mobile_submenuBG').toggleClass('mobile_submenuShow mobile_submenuHide');
		//$('.container_bg').toogle();
	});
	
	/* $('.container_bg').click(function(){
		$(this).fadeOut();
	});
	 */
	$('.top_header_navi_uname').click(function(){
		$('.dropdownProfileMenu').toggle();
	});
	
	
	$('.mobLeftMenu').click(function(){
		$('body').css("overflow", "hidden");
		$('.container_bg').css({
				"display" : "initial",
				"position" : "fixed",
				"left" : 0,
			});
		//alert(true);
		//$('#leftnaviMob_con').animate({"right" : "-340px"}, 'slow');
		$("#leftnaviMob_con").animate({"right":"0px"}, "fast");
	});
	
	
//////////////////////////////////////////////////////////////////////////////////////////////

	// Maintenance

	$('.bg_maintanance').fadeIn(500);

//////////////////////////////////////////////////////////////////////////////////////////////

	// Modal Add Survey Form

		$('.bg_addSurvey').hide();
		
		$('.add_postSurvey').click(function(){
			$('.bg_addSurvey').fadeIn(1000);
		});
		$('#close_behoal').click(function(){
			$('.bg_addSurvey').fadeOut(1000);
		});
		
		
//////////////////////////////////////////////////////////////////////////////////////////////

	//button disable/enable
	$('#postComment, #postCommentMod').attr('disabled',true);
		
		$('#txtContentComment').keyup(function(){
			//if($(this).html().length !=0){
			if($(this).is(':empty')){
				$('#postComment, #postCommentMod').attr('disabled', true);    
			}
			else{
				$('#postComment, #postCommentMod').attr('disabled', false);    
			}
		});
		
		
	
//////////////////////////////////////////////////////////////////////////////////////////////		

	// Random Color Profile
	$(".prof_randomColor").each(function() {
		var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 150) + ',' + (Math.floor((256-199)*Math.random()) + 150) + ',' + (Math.floor((256-199)*Math.random()) + 150) + ')';
		$(this).css("background-color", hue);
	});
//////////////////////////////////////////////////////////////////////////////////////////////

	// Form Close
	$('.close, #btn-close').click(function(){
		$('#formPost, #formUpdatePost').show();
		$('#btn-modal_post, #btn-submit').show();
		$('#successMsg, #error, #updatesuccessMsg').html('');
	});

//////////////////////////////////////////////////////////////////////////////////////////////
	
	//Post Modal Media
	
	$('.media_option ').show();
	$('.media_post_img_con').hide();
	$('.media_post_video_con').hide();
	$('.media_post_pdf_con').hide();
	$('.media_post_url_con').hide();
	
	
	$('.media_post_img').click(function(){
		$('.media_post_img_con ').slideDown();
		$('.media_post_video_con, .media_post_pdf_con, .media_post_url_con').slideUp().hide();
		$('#urlVideo, #uploadedPDF, #urlSite').val('');
	});
	
	$('.media_post_video').click(function(){
		$('.media_post_video_con ').slideDown();
		$('.media_post_img_con, .media_post_pdf_con, .media_post_url_con').slideUp().hide();
		$('#uploadedimage, #uploadedPDF, #urlSite').val('');
	});
	
	$('.media_post_pdf').click(function(){
		$('.media_post_pdf_con ').slideDown();
		$('.media_post_img_con, .media_post_video_con, .media_post_url_con').slideUp().hide();
		$('#uploadedimage, #urlVideo, #urlSite').val('');
	});
	
	
	$('.media_post_url').click(function(){
		$('.media_post_url_con ').slideDown();
		$('.media_post_img_con, .media_post_video_con, .media_post_pdf_con').slideUp().hide();
		$('#uploadedimage, #urlVideo, #uploadedPDF').val('');
	});
	


//////////////////////////////////////////////////////////////////////////////////////////////
	
	/* Search */
	$('.searchIcon').click(function(){
		$('.container_bg').fadeIn();
		$('.searchInNavi').addClass('searchInNaviMob')
		$('.searchInputField').focus();
		$('html, body ').addClass('search_noScroll');
		
	});
	
	$('#searchBtn_close, .container_bg').click(function(){
		$('.search_con, .container_bg').fadeOut();
		$('html, body ').removeClass('search_noScroll');
		//$("#leftnaviMob_con").animate({"right":"-320px"}, "slow");
		$('body').css("overflow", "auto");
		$('.searchContainer').hide();
		$('.searchInputField').val('');
		$('.searchInNavi').removeClass('searchInNaviMob');
	});
	
	
	
	
	// SEARCH ENGINE
	$('.searchInputField').keyup(function(){
		var txt = $(this).val();
		
		if(txt != ''){
			$('.searchInNavi').addClass('searchInNaviMob');
			$('.container_bg').fadeIn();
			$.ajax({
				type: "POST",
				url: 'ajax/ajax_search.php',
				data:'search='+txt+'&action=searchBar',
				beforeSend: function(){
					$('.searchContainer').html('<h4 style="color: #a2a2a2;"><span class="fa fa-spinner fa-spin fa-fw"></span> Loading ...</h4>');
				},
				success:function(data){
					$('html, body ').addClass('search_noScroll');
					$('.container_bg ').css('left',0);

					if(data != 'error'){
						$('.searchContainer').show().html(data);	
					}else{
						$('.searchContainer').show().html(data);
					}
				}
			});
			
		}else{
			$('.searchInNavi').removeClass('searchInNaviMob');
			$('.searchContainer').hide();
			$('.container_bg').fadeOut();
			
			
		}
		
	});
	
	
	
	//timeago plugins

	//disable right click
	/* $("body").on("contextmenu",function(e){
	   return false;
	});  

	$(document).keydown(function(e){
		if(e.which === 123){
		   return false;
		} 
	});  */
	
	
//////////////////////////////////////////////////////////////////////////////////////////////


	//Edit Profile Info 
	$('.btn_profileEdit').click(function(){
		$('.profileEdit input[type="text"]').prop('disabled', false).removeClass('profileDec_nostyleInput');
		$('.profileEdit input[type="text"]').first().focus();
		$(this).html('<i class="fa fa-floppy-o" aria-hidden="true"></i> SAVE');
		/*$(".modalviewdec .profileedit").attr("contenteditable","true").css({
			'border' : '1px solid #c7c0c0',
			'border-radius' : '3px',
			'background-color' : 'rgb(241, 241, 241)'
		});
		$('.modalviewdec .profileedit').first().focus();
		$(this).removeclass('btn_profileedit').addclass('btn_profilesave').html('<i class="fa fa-floppy-o" aria-hidden="true"></i> save');*/
		
	});
	
	$('.btn-closeprofileEdit').click(function(){
		$('.profileEdit input[type="text"]').addClass('profileDec_nostyleInput');
		//alert(true);
	});
	
	
	
//////////////////////////////////////////////////////////////////////////////////////////////
	
	
	/*$('#scrollNavi').on('click', function(event) {

		//var target = $(this.getAttribute('href'));
		var target = $(this).attr('class');

		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}

	});*/
	
//////////////////////////////////////////////////////////////////////////////////////////////

	//Click BackNavi
	$('.scrollUp').click(function(){
		//alert(true);
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	$('.scrollDown').click(function(){
		//alert(true);
		$("html, body").animate({ scrollTop: 9999  }, "slow");
	});
	
	
//////////////////////////////////////////////////////////////////////////////////////////////


$('.modalCoverPhoto').click(function(e) {
    $('.uploadedCoverPhoto').click();
});

/* 


function showViewPortSize(widthBody) {
	$(window).resize(function() {
		if(widthBody < 1000){
			$('#leftnaviMob_con').addClass('leftnaviMobile');
			$('#leftnaviMob_con ').children('.left_conA').last().addClass('leftnaviMobile_friends');
		}else{
			$('#leftnaviMob_con').removeClass('leftnaviMobile');
			$('#leftnaviMob_con ').children('.left_conA').last().removeClass('leftnaviMobile_friends');
		}
	});
}




 */
 
 
 
//////////////////////////////////////////////////////////////////////////////////////////////
 
	//View Image in modal
	
	$(this).on("click", ".clkImage", function () {
	//$('.clkImage').click(function(){
		var id = $(this).attr('data-survey-id');
		
		
		
		$.ajax({
			type: 'GET',
			url: 'ajax/ajax_viewModal.php',
			data: 'postID='+id+'&action=getDetails_post',
			dataType: 'json',
			beforeSend: function(){
				$('.viewImgCon #loading').show();
				//$('.modalViewDec').hide();
			},
			success:function(data){
				$('.viewImgCon #loading').hide();
				
				var surveyID = data['survey_id'];
				var subj = data['survey_subject'];
				var spec = data['survey_specific'];
				var img  = data['survey_image'];
				var cont = data['survey_content'];
				
				
				$('.viewImgCon').html('<center><img src="images/large/'+img+'" class="img-responsive"/></center><h4 >'+subj+'</h4><p style="color: #795548;   font-weight: 800;    font-size: 14px;    position: relative;    word-wrap: break-word;">'+spec+'</p><p style="color: #000596;">'+cont+'</p>');
				
				
			}
		}); 
		
		
		
		
		//alert(id);
		//$('.viewImgCon').html('<img src="images/'+img+'" class="img-responsive" /><h4>'+subj+'</h4>');
		
	});
	
 	
	
});



 
 
 
 
 