$(document).ready(function() {							
	$("#start2").click( 
		function() {
			$(".dis").prop('disabled', true);
			var flashes = [];
			var milis = [];
			const s_color = $("#s-color").val();
			const ISI = $("#duration_of_stimulus").val();
			const d_s = 100;
			const time = d_s + ISI;
			const n_t = $("#number_of_trials").val();
			
			number_of_trials = n_t;
			
			var all_chars = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
			new_chars =  [1,3,5,7,9,11,13,15,2,4,6,8,10,12,14,16];
			number_of_trials--;
			
			for(a=0; a<number_of_trials; a++) {
				temp_chars =  [1,3,5,7,9,11,13,15,2,4,6,8,10,12,14,16];
				new_chars = new_chars.concat(temp_chars);
				if(a == number_of_trials-1){
					new_chars.unshift(17);
				document.getElementById("data").innerHTML = new_chars.slice(1, new_chars.length);
				}
			}
						
			c=new_chars.length;
			i=0;
			console.log(c)
			var d = new Date();
			var h = d.getHours();
			var m = d.getMinutes();
			var s = d.getSeconds();
			var n = d.getMilliseconds();
			var startTime = h + ":" + m + ":" + s + " -- " + "you choosed the second protocol";;
			var fix_s = s+5;
			var firstStimulus = m + ":" + fix_s;
			document.getElementById("time").innerHTML = startTime;
			document.getElementById("f_s").innerHTML = firstStimulus;
			setTimeout(flash,5000);
			// 2 second pause before stimulus presentation starts
			var flash_time = d_s;			
			function flash() {
				
					
				if(i<c) {				
					var flash_index = new_chars[i];
					requestAnimationFrame(() => {
					light_unlit(flash_index,1); // highlight element
					var d = new Date();
					var m = d.getMinutes();
					var s = d.getSeconds();
					var n = d.getMilliseconds();
					//var timer = m + ":" + s;
					//document.getElementById("timer").innerHTML = timer;
					var mili_s = m*60*1000+1000*s+n;
					milis.push(mili_s);		
					new_time = (m + "," + s + "," + n);
					flashes.push(new_time)	
					})								
					setTimeout(
						function() {
							light_unlit(flash_index,0); // revert element to default colour after flash							
							setTimeout(flash,ISI);
						}
					,flash_time);
					}
					i++;
						if(i == c+1 && flashes){
							console.log(flashes);
							
							let milis1 = milis.slice(1, milis.length);
							console.log(milis1);
							
							for(i=0;i<milis1.length;i++){
							milis1[i] = -milis1[i] + milis1[i+1] - (time) + 99900
							}
							console.log(milis1);
							var total = 0;
							for(j = 0; j < milis1.length-1; j++) {
							    total += milis1[j];
							}
							var avg = total / (milis1.length-1);
							console.log(avg)
							flashes.push("Mean Error = " + avg)
						document.getElementById("data_time").innerHTML = (flashes.slice(1, flashes.length)).join('\r\n');
						$(".dis").prop('disabled', false);
					}	
					
				
			
				
			
			}
			// recursive function to keep calling setTimeout until all characters have flashed	
			function light_unlit(char_index,state) {
				
				if(state==0) {
					stim_colour = "grey";
				} else {
					stim_colour = s_color;
				}
				
				switch(char_index) {
				case 1: $("#A").css("color",stim_colour); break;
				case 2: $("#B").css("color",stim_colour); break;
				case 3: $("#C").css("color",stim_colour); break;
				case 4: $("#D").css("color",stim_colour); break;
				case 5: $("#E").css("color",stim_colour); break;
				case 6: $("#F").css("color",stim_colour); break;
				case 7: $("#G").css("color",stim_colour); break;
				case 8: $("#H").css("color",stim_colour); break;
				case 9: $("#I").css("color",stim_colour); break;
				case 10: $("#J").css("color",stim_colour); break;
				case 11: $("#K").css("color",stim_colour); break;
				case 12: $("#L").css("color",stim_colour); break;
				case 13: $("#M").css("color",stim_colour); break;
				case 14: $("#N").css("color",stim_colour); break;
				case 15: $("#O").css("color",stim_colour); break;
				case 16: $("#P").css("color",stim_colour); break;
				case 17: $("#P").css("color","grey"); break;
				default: 
				}
			
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