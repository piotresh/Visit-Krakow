<script> 
	// Scrolls down 90px from the top of 
	// the document, to resize the navlist 
	// padding and the title font-size 
	window.onscroll = function() { 
		scrollFunction() 
	}; 
		
	function scrollFunction() { 
		if (document.body.scrollTop > 90 || 
			document.documentElement.scrollTop > 90) 
		{ 
			document.getElementById("navlist") 
						.style.padding = "25px 10px"; 
				
			document.getElementById("logo") 
					.style.fontSize = "24px"; 
		} 
		else { 
			document.getElementById("navlist") 
						.style.padding = "90px 10px"; 
						
			document.getElementById("logo") 
						.style.fontSize = "35px"; 
		} 
	} 
</script>
