

	// Instance the tour
	var tour = new Tour({
	  steps: [
	  {
		element: ".left_conA_clk_profile .left_conA_clk1 small",
		title: "View my Profile",
		content: "Click ' <i class='fa fa-search fa-lg' aria-hidden='true'></i> View my profile ' to view your profile page",
		smartPlacement: true,
		keyboard: true,
		autoscroll: true,
		backdrop: true,
		backdropContainer: 'body',
		backdropPadding: 0,
	  },
	  {
		element: ".secA",
		title: "Total Behoal Post",
		content: "This section count all the total of your entry post",
		smartPlacement: true,
		keyboard: true,
		autoscroll: true,
		backdrop: true,
		backdropContainer: 'body',
		backdropPadding: 0,
	  },
	  {
		element: ".secB",
		title: "Champ Behoal(soon)",
		content: "Total champion entry post by BBL event",
		smartPlacement: true,
		keyboard: true,
		autoscroll: true,
		backdrop: true,
		backdropContainer: 'body',
		backdropPadding: 0,
	  },
	  {
		element: ".secC",
		title: "Followed(soon)",
		content: "Total list of the BBL user who followed your post",
		smartPlacement: true,
		keyboard: true,
		autoscroll: true,
		backdrop: true,
		backdropContainer: 'body',
		backdropPadding: 0,
	  },
	  {
		element: ".postForm",
		title: "Posting your entry",
		content: "This is where you post your entry",
		smartPlacement: true,
		keyboard: true,
		autoscroll: true,
		backdrop: true,
		backdropContainer: 'body',
		backdropPadding: 0,
	  },
	  {
		element: ".input1",
		title: "Posting your entry (Subject)",
		content: "General Subject or the Main Title of your entry",
		smartPlacement: true,
		keyboard: true,
		autoscroll: true,
		backdrop: true,
		backdropContainer: 'body',
		backdropPadding: 0,
	  },
	  {
		element: ".input2",
		title: "Posting your entry (Specific)",
		content: "Word to distinguish to the subject of your entry",
		smartPlacement: true,
		keyboard: true,
		autoscroll: true,
		backdrop: true,
		backdropContainer: 'body',
		backdropPadding: 0,
	  },
	  {
		element: ".input3",
		title: "Posting your entry (Description)",
		content: "Description of your entry (optional)",
		smartPlacement: true,
		keyboard: true,
		autoscroll: true,
		backdrop: true,
		backdropContainer: 'body',
		backdropPadding: 0,
	  },
	  {
		element: ".postFooter",
		title: "Posting your entry (Attachment)",
		content: "attach an image, video(youtube URL video only), pdf file or URL site (optional)",
		smartPlacement: true,
		keyboard: true,
		autoscroll: true,
		backdrop: true,
		backdropContainer: 'body',
		backdropPadding: 0,
	  },
	  {
		element: "#show",
		title: "BBL post entry",
		content: "Show all the entry post <br><br> <b>That's all. You can now enjoy posting your entry</b>",
		smartPlacement: true,
		keyboard: true,
		autoscroll: true,
		backdrop: true,
		backdropContainer: 'body',
		backdropPadding: 0,
	  }
	]});

	// // Initialize the tour
	// tour.init();

	// // Start the tour
	// tour.start();
	
	var showWebTour = function(){
		$('#modalWebTour').addClass('in').css({
			'display' : 'block',
			'z-index' : '3'
		});
		$('#background_modalCom').fadeIn(1000).css({
			'position' 		: 'fixed',
			'top' 			: '0',
			'right'			: '0',
			'left'			: '0',
			'bottom'		: '0',
			'background-color' : '#000',
			'opacity'		:'0.5'
		});
		/* $('#modalChangePass').modal({
			show: true,
		}); */
		//$('body').addClass('modal-open');
	};

	$(window).load(function(){
		var timerWebTour = window.setTimeout(showWebTour,1000);
		//var timerProfile = window.setTimeout(showNotifProfile,300000);
	});
	
	
	
	$(document).ready(function(){
		
		$('.btnWebTour').click(function(){
			//alert(true);
			
			$('#modalWebTour').removeClass('in').hide();
			$('#background_modalCom').hide();
			// Initialize the tour
				tour.init();

			// Start the tour
				tour.start();
		});
		
		$('#btn-close, .close').click(function() {
			$('#modalChkStat').removeClass('in').hide();
			$('#modalWebTour').removeClass('in').hide();
			$('#background_modalCom').hide();
			clearTimeout(timer);
		});
		
		
		
	
	});