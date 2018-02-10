
$(document).ready(function(){
	
    var allBoxes = $("#sponsor_con").children(".sponsorSec");
    transitionBox(null, allBoxes.first());
		
	

});



	function transitionBox(from, to) {
		function next() {
			var nextTo;
			if (to.is(":last-child")) {
				nextTo = to.closest("#sponsor_con").children(".sponsorSec").first();
			} else {
				nextTo = to.next();
			}
			to.fadeIn(500, function () {
				setTimeout(function () {
					transitionBox(to, nextTo);
				}, 5000);
			});
		}
		
		if (from) {
			from.fadeOut(500, next);
		} else {
			next();
		}
	}
		