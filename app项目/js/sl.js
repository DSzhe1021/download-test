var sltop1 = document.getElementById("sl-top5");
sltop1.onclick = function slclick1(){
	alert("何双说班长爱啪啪")
}
var slzt  = document.getElementById("sl-top8");
var slfj = document.getElementById("sl-top7");
var sltp1 = document.getElementsByTagName("img")[3];
var sltp2 = document.getElementsByTagName("img")[4];
var sltp3 = document.getElementsByTagName("img")[5];
var sltp4 = document.getElementsByTagName("img")[2];
var slle = document.getElementById("slleft");
var slle1 = document.getElementById("slleft3");
var slle2 = document.getElementById("slleft4");
slfj.onclick = function slclick2(){
	// slfj.border-bottom: 0.3rem solid rgb(51,181,230);
	// slfj.border-right: 0.1rem solid rgb(51,181,230);
	slzt.style.borderBottom = 'none';
	slzt.style.borderLeft = 'none';
	this.style.borderBottom = '0.3rem solid rgb(51,181,230)';
	this.style.borderRight = '0.1rem solid rgb(51,181,230)';
	sltp1.style.display = "none";
	sltp2.style.display = "none";
	sltp3.style.display = "none";
	sltp4.style.display = "none";
	slle.style.display = "block";
	slle1.style.display = "block";

}
slzt.onclick = function slclick3(){
	slfj.style.borderBottom = 'none';
	slfj.style.borderRight = 'none';
	this.style.borderBottom = '0.3rem solid rgb(51,181,230)';
	this.style.borderLeft = '0.1rem solid rgb(51,181,230)';	
	sltp1.style.display = "block";
	sltp2.style.display = "block";
	sltp3.style.display = "block";
	sltp4.style.display = "block";
	slle.style.display = "none";
	slle1.style.display = "none";
}
slle1.onclick = function slclick4(){
	alert("敬请期待");
}
slle2.onclick = function slclick5(){
	alert("敬请期待");
}


