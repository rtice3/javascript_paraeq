function calc_peaking (freq, gain, qual) {
	var arr = [];
	var A = Math.pow(10, gain/40);
	var w = 2 * Math.PI * freq/Fs;
	var a = Math.sin(w)/(2 * qual);

	var a0 = 1 + (a / A);
	var a1 = -2 * Math.cos(w);
	var a2 = 1 - (a / A);
	var b0 = 1 + (a * A);
	var b1 = -2 * Math.cos(w);
	var b2 = 1 - (a * A);

	a1 /= a0;
	a2 /= a0;

	b0 /= a0;
	b1 /= a0;
	b2 /= a0;

	x_axis.forEach( function(i, index, ar) {
		var z = 2 * Math.PI * (i/Fs);
		var num = Math.pow(b0, 2) + Math.pow(b1, 2) + Math.pow(b2, 2) + 2 * (b0 * b1 + b1 * b2) * Math.cos(z) + 2 * b0 * b2 * Math.cos(2 * z);
		var den = 1 + Math.pow(a1, 2) + Math.pow(a2, 2) + 2 * (a1 + a1 * a2) * Math.cos(z) + 2 * a2 * Math.cos(2 * z);
		var mag = 10 * Math.log(num/den) / Math.LN10;
		arr.push([i, mag]);
	});

	return arr;
}

function calc_lpf (freq, qual) {
	var arr = [];

	var w = 2 * Math.PI * freq/Fs;
	var a = Math.sin(w)/(2 * qual);

	var a0 = 1 + a;
	var a1 = -2 * Math.cos(w);
	var a2 = 1 - a;

	var b0 = (1 - Math.cos(w)) / 2;
	var b1 = 1 - Math.cos(w);
	var b2 = (1 - Math.cos(w)) / 2;

	a1 /= a0;
	a2 /= a0;

	b0 /= a0;
	b1 /= a0;
	b2 /= a0;

	x_axis.forEach( function(i, index, ar) {
		var z = 2 * Math.PI * (i/Fs);
		var num = Math.pow(b0, 2) + Math.pow(b1, 2) + Math.pow(b2, 2) + 2 * (b0 * b1 + b1 * b2) * Math.cos(z) + 2 * b0 * b2 * Math.cos(2 * z);
		var den = 1 + Math.pow(a1, 2) + Math.pow(a2, 2) + 2 * (a1 + a1 * a2) * Math.cos(z) + 2 * a2 * Math.cos(2 * z);
		var mag = 10 * Math.log(num/den) / Math.LN10;
		arr.push([i, mag]);
	});

	return arr;
}

function calc_hpf (freq, qual) {
	var arr = [];

	var w = 2 * Math.PI * freq/Fs;
	var a = Math.sin(w)/(2 * qual);

	var a0 = 1 + a;
	var a1 = -2 * Math.cos(w);
	var a2 = 1 - a;

	var b0 = (1 + Math.cos(w)) / 2;
	var b1 = -(1 + Math.cos(w));
	var b2 = (1 + Math.cos(w)) / 2;

	a1 /= a0;
	a2 /= a0;

	b0 /= a0;
	b1 /= a0;
	b2 /= a0;

	x_axis.forEach( function(i, index, ar) {
		var z = 2 * Math.PI * (i/Fs);
		var num = Math.pow(b0, 2) + Math.pow(b1, 2) + Math.pow(b2, 2) + 2 * (b0 * b1 + b1 * b2) * Math.cos(z) + 2 * b0 * b2 * Math.cos(2 * z);
		var den = 1 + Math.pow(a1, 2) + Math.pow(a2, 2) + 2 * (a1 + a1 * a2) * Math.cos(z) + 2 * a2 * Math.cos(2 * z);
		var mag = 10 * Math.log(num/den) / Math.LN10;
		arr.push([i, mag]);
	});

	return arr;
}