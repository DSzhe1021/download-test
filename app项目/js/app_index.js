			var app_width = document.documentElement.clientWidth;
			var app_height = document.documentElement.clientHeight;
			window.onresize = function(){
				var app_width = document.documentElement.clientWidth;
				var app_height = document.documentElement.clientHeight;
				document.getElementsByTagName("html")[0].style.fontSize = 0.03125 * app_width + "px";
				document.getElementById("app_bottom").style.top = app_height - document.getElementById("app_bottom").offsetHeight + "px";
			}
			document.getElementsByTagName("html")[0].style.fontSize = 0.03125 * app_width + "px";
			document.getElementById("app_bottom").style.top = app_height - document.getElementById("app_bottom").offsetHeight + "px";
			if(document.getElementsByTagName("body")[0].offsetHeight<=0){
				document.getElementsByTagName("body")[0].style.height = app_height + "px";
			}
			var app_rem = document.getElementById("app_bottom").offsetWidth/32;
			console.log(app_rem)