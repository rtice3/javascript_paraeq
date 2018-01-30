function get_new() {
	var f_line = [];
	var lf = calc_peaking(f_lf, lf_en * g_lf, q_lf);
	var lmf = calc_peaking(f_lmf, lmf_en * g_lmf, q_lmf);
	var hmf = calc_peaking(f_hmf, hmf_en * g_hmf, q_hmf);
	var hf = calc_peaking(f_hf, hf_en * g_hf, q_hf);
	if(lpf_en)
		var lpf = calc_lpf(f_lpf, q_lpf);
	else
		var lpf = calc_lpf(max_freq + 10, q_lpf);
	if(hpf_en)
		var hpf = calc_hpf(f_hpf, q_hpf);
	else
		var hpf = calc_hpf(1, q_hpf);

	x_axis.forEach( function(j, i, ar) {
		var total = lf[i][1] + lmf[i][1] + hmf[i][1] + hf[i][1] + lpf[i][1] + hpf[i][1];
		if(total > 24)
			total = 24;
		f_line.push([j, total]);
	});

	plot = $.plot("#placeholder",
		[
		{ data: hf, label: "HF"},
		{ data: hmf, label: "HMF"},
		{ data: lmf, label: "LMF"},
		{ data: lf, label: "LF"},
		{ data: hpf, label: "HPF"},
		{ data: lpf, label: "LPF"},
		{ data: f_line, label: "EQ"}
		],
		options);
}

function d2p(point, elm) {
	var offset = plot.offset();
	var cpos = new Object();

	cpos.top = point.top - offset.top + (elm.height / 2);
	cpos.left = point.left - offset.left + (elm.width / 2);
	cpos = plot.c2p(cpos);

	return ({ freq: cpos.x, gain: cpos.y})
}

function p2d(freq, gain, elm) {
	var ppos = new Object();
	var cpos = new Object();
	var offset = plot.offset();
	cpos.x = freq;
	cpos.y = gain;
	ppos = plot.p2c(cpos);
	ppos.left += offset.left  - (elm.width / 2);
	ppos.top += offset.top  - (elm.height / 2);
	return ppos;
}
