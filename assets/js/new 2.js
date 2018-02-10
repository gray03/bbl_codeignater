$(document).ready(function(){
			$('.mobile_header_show').hide();
			$('.mobile_show_search').click(function(){
				$(this).hide();
				$('.mobile_header_show').fadeIn().css({
					position:'absolute',
					top:'0px',
					width:'100%',
					backgroundColor:'#132831',
					display:'inherit'
				});
				$('#hide_notif, .browse_cat, .fa-undo').hide();
				$('.header-logo').css({width:'85%'});
			});
			
			$('.return_link').click(function(){
				$('.mobile_header_show').hide();
				$('.header-logo').css({width:'auto'});
				$('#hide_notif, .browse_cat, .mobile_show_search, .fa-undo').fadeIn();
			});
		});