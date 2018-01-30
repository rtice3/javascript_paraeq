function update_slider(freq, gain, fslider_elm, gslider_elm, flabel_elm, glabel_elm) {
	fslider_elm.slider( "value", Math.floor(Math.log(freq) / (slider_scalar * Math.LN10)));
	flabel_elm.val(Math.floor(Math.floor(freq)));
	gslider_elm.slider( "option", "value", gain);
	glabel_elm.val(gain.toFixed(1));
}

function update_slider_pass(freq, fslider_elm, flabel_elm) {
	fslider_elm.slider( "value", Math.floor(Math.log(freq) / (slider_scalar * Math.LN10)));
	flabel_elm.val(Math.floor(Math.floor(freq)));
}

function f2s(freq) {
	return Math.floor(Math.log(freq) / (slider_scalar * Math.LN10))
}

function s2f(fslider_elm) {
	 return slider_scale[fslider_elm.slider("value")];
}

function q2s(qual) {
	return Math.floor(Math.log(1 + qual) / (q_scalar * Math.LN10))
}

function s2q(qslider_elm) {
	return q_scale[qslider_elm.slider("value")];
}

function do_slide(freq, gain, indicator_elm) {
	var ppos = new Object();
	var cpos = new Object();
	var offset = plot.offset();
	cpos.x = freq;
	cpos.y = gain;
	ppos = plot.p2c(cpos);
	var icon_height = indicator_elm.height();
	var icon_width = indicator_elm.width();
	ppos.left += offset.left - (icon_width / 2);
	ppos.top += offset.top - (icon_height / 2);
	indicator_elm.offset({ top: ppos.top, left: ppos.left });
}

function do_fslide(val, gain, flabel_elm, findicator_elm) {
	var slider = slider_scale[val];
	flabel_elm.val(Math.floor(slider));
	var freq = Math.floor(slider);
	do_slide(freq, gain, findicator_elm);
	return freq;
}


function do_gslide(freq, val, glabel_elm, gindicator_elm) {
	glabel_elm.val(val);
	var gain = ui.value;
	do_slide(freq, gain, gindicator_elm);
	return gain;
}

function bypass_enable(enable, tab) {
	if(enable) {
		enable = 0;
	}
	else {
		enable = 1;
		$( "#tabs" ).tabs( "option", "active", tab);
	}

	return enable;
}
