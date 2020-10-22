$(document).ready(function() {
	var flashes = [];
	var milis = [];
								
	$("#start7").click( 
		function() {
			const s_color = $("#s-color").val();
			const ISI = $("#duration_of_stimulus").val() - 1;
			const d_s = 99;
			const time = d_s + ISI + 2;
			const n_t = $("#number_of_trials").val();
			
			number_of_trials = n_t;
			
			var all_chars = [1,2,3,4,5,6,7,8];
			new_chars =  [1,3,5,7,2,4,6,8];
			number_of_trials--;
			
			for(a=0; a<number_of_trials; a++) {
				temp_chars =  [1,3,5,7,2,4,6,8];
				new_chars = new_chars.concat(temp_chars);
				if(a == number_of_trials-1){
				document.getElementById("data").innerHTML = new_chars;
				}
			}
						
			c=new_chars.length;
			i=0;
			
			var d = new Date();
			var m = d.getMinutes();
			var s = d.getSeconds();
			var n = d.getMilliseconds();
			var startTime = m + ":" + s;
			var fix_s = s+5;
			var firstStimulus = m + ":" + fix_s;
			document.getElementById("time").innerHTML = startTime;
			document.getElementById("f_s").innerHTML = firstStimulus;
			setTimeout(flash,5000);
			// 2 second pause before stimulus presentation starts
			function flash() {

				count=1;
				var x=setInterval(function(){
  				// whatever code
  				var flash_index = new_chars[count];
  				$("." + flash_index).toggleClass( s_color );
  				  	var d = new Date();
					var m = d.getMinutes();
					var s = d.getSeconds();
					var n = d.getMilliseconds();
				var mili_s = m*60*1000+1000*s+n;
					milis.push(mili_s);	
					new_time = (s + ":" + n);
					flashes.push(new_time);	
  				setTimeout(
						function() {
						$("." + flash_index).toggleClass( s_color );
						}
					,d_s);				  				
  				if(count == c-1) {
  					clearInterval(x);
  					console.log(milis)
 							for(i=0;i<milis.length-1;i++){
								milis[i] = -milis[i] + milis[i+1] - (time)
							}
							var total = 0;
							for(j = 0; j < milis.length-1; j++) {
							    total += milis[j];
							}
							console.log(milis,total)
							var avg = total / (milis.length-1);
							flashes.push("Mean Error = " + avg)
						document.getElementById("data_time").innerHTML = flashes.join('\r\n');

  				}
  				count++;
				}, time);
			}			

			function shuffle(array) {
				var currentIndex = array.length, temporaryValue, randomIndex;

				// While there remain elements to shuffle...
				while (0 !== currentIndex) {

					// Pick a remaining element...
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;

					// And swap it with the current element.
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}

				return array;
			}			
		}		
	);
	
});