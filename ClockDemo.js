function Clock() {
	var el = document.getElementById("clock");

	var seconds;
	var minutes;
	var hours;
	var meridian = "AM";

	var date;

	var setSeconds = function() {
		seconds = date.getSeconds();
	}

	var setMinutes = function() {
		minutes = date.getMinutes();
	}

	var setHours = function() {
		hours = date.getHours();
		if (hours < 1) {
			hours = 12;
			meridian = "AM";
		} else if (hours >= 12) {
			if (hours != 12) {
				hours -= 12;
			}
			meridian = "PM";
		} else {
			meridian = "AM";
		}
	}

	var setTime = function() {
		setSeconds();
		setMinutes();
		setHours();
	}

	var displayTime = function() {
		date = new Date();
		setTime();
		var strTime = formatZeros(hours) + ":" +
		formatZeros(minutes) + ":" +
		formatZeros(seconds) + meridian;
		el.innerHTML = strTime;
	}

	var formatZeros = function(time) {
		if (time < 10) {
			time = "0" + time;
		}
		return time;
	}

	var update = setInterval(displayTime, 1000);
}

var clock = new Clock();