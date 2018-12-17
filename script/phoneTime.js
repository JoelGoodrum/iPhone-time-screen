let months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

function updatePhoneTime() {

	let time = new Date();
	let hours = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	let month = time.getMonth();

	if(sec < 10) {
		sec = `0${sec}`;
		document.getElementById('iTime').innerText = `${hours % 12}:${min}`;
		document.getElementById('iSecond').innerText = sec;
	} else {
		document.getElementById('iTime').innerText = `${hours % 12}:${min}`;
		document.getElementById('iSecond').innerText = sec;
	}
	

}

window.setInterval(function(){
	updatePhoneTime();
}, 1000);
