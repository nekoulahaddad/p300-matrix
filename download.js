$(document).ready(function() {
								
	$("#showData").click( 
		function() {
			document.getElementById("data").classList.toggle("showMe");
		})

		$("#showDoc").click( 
	function() {
		document.getElementById("doc").classList.toggle("showMe");
	})
		$("#showTime").click( 
	function() {
		document.getElementById("data_time").classList.toggle("showMe");
	})
	
});