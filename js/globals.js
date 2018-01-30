var plot;
var Fs = 48000;
var max_freq = Fs / 2;

var max_q = 17;
var min_q = 0.64;

var max_g = 24;
var min_g = -24;

var f_hf = 10000;
var g_hf = 0;
var q_hf = 0.83;
var hf_en = 1;

var f_hmf = 2000;
var g_hmf = 0;
var q_hmf = 0.83;
var hmf_en = 1;

var f_lmf = 1000;
var g_lmf = 0;
var q_lmf = 0.83;
var lmf_en = 1;

var f_lf = 200;
var g_lf = 0;
var q_lf = 0.63;
var lf_en = 1;

var f_hpf = 60;
var q_hpf = 0.63;
var hpf_en = 0;

var f_lpf = 15000;
var q_lpf = 0.63;
var lpf_en = 0;

var x_axis = [];
var slider_scale = [];
var q_scale = [];

var x_axis_steps = 850;
var x_axis_scalar = Math.log(max_freq) / (Math.LN10 * x_axis_steps);
var slider_scale_steps = 1024;
var slider_scalar = Math.log(max_freq) / (Math.LN10 * slider_scale_steps);
var q_scale_steps = slider_scale_steps;
var q_scalar = Math.log(max_q) / (Math.LN10 * q_scale_steps);


var options = {
	series: {
		lines: {
			show: true,
			fill: true,
			fillColor: false,
		},
		points: {
			show: false
		}
	},
	grid: {
		show: true,
		hoverable: false,
		clickable: false
	},
	colors: ["#00FF00", "#FF0000", "#0000FF", "#FF9900", "#A0A0A0", "#A0A0A0", "#FFFFFF"],
	legend: {
		show: false
	},
	xaxis: {
		transform: function(v) { return Math.log(v) / Math.LN10; },
		inverseTransform: function(v) { return Math.pow(10, v); },
		min: 10,
		max: max_freq,
		color: "#474747",
		ticks: [[10, "10"], [20,"20"], [30, ""], [40, ""], [50, "50"], [60, ""], [70, ""], [80, ""], [90, ""], [100, "100"], [200, "200"], [300, ""], [400, ""], [500, "500"], [600, ""], [700, ""], [800, ""], [900, ""], [1000, "1k"], [2000, "2k"], [3000, ""], [4000, ""], [5000, "5k"], [6000, ""], [7000, ""], [8000, ""], [9000, ""], [10000, "10k"], [20000, "20k"]]
	},
	yaxis: {
		min: min_g,
		max: max_g,
		color: "#474747",
		ticks: [-24, -18, -12, -6, [0, "dB 0"], 6, 12, 18, 24]
	}
};

function init() {
	for(var a = 1; a <= x_axis_steps; a++)
		x_axis.push(Math.pow(10, x_axis_scalar * a));

	for(var b = 1; b <= slider_scale_steps; b++)
		slider_scale.push(Math.pow(10, slider_scalar * b));

	for(var c = 1; c <= q_scale_steps; c++) 
		q_scale.push(Math.pow(10, q_scalar * c) - 1);
}