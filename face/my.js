var meny = Meny.create({
				menuElement: document.querySelector( '.meny' ),

				contentsElement: document.querySelector( '.contents' ),

				position: Meny.getQuery().p || 'left',

				height: 200,

				width: 260,

				threshold: 40
			});

			if( Meny.getQuery().u && Meny.getQuery().u.match( /^http/gi ) ) {
				var contents = document.querySelector( '.contents' );
				contents.style.padding = '0px';
				contents.innerHTML = '<div class="cover"></div><iframe src="'+ Meny.getQuery().u +'" style="width: 100%; height: 100%; border: 0; position: absolute;"></iframe>';
			}
var getAngle = function(Xc, Yc, Xa, Ya, Xb, Yb) {
	var v1x = Xb - Xc;
	var v1y = Yb - Yc;
	var v2x = Xa - Xc;
	var v2y = Ya - Yc;
	return 180 * (Math.atan2(v1x, v1y) - Math.atan2(v2x, v2y)) / Math.PI
};
var left_center_offset = {
	left: 30,
	top: 100
},
right_center_offset = {
	left: 96,
	top: 96
},
radius = 10;
var setEyeOffset = function(event) {
	var offset = $(".eye_wrapper").offset();
	var x1 = offset.left + left_center_offset.left;
	var y1 = offset.top + left_center_offset.top;
	var x2 = offset.left + right_center_offset.left;
	var y2 = offset.top + right_center_offset.top;
	var n1 = event.clientX - x1;
	var m1 = -(event.clientY - y1);
	var k1 = Math.atan2(m1, n1);
	var n2 = event.clientX - x2;
	var m2 = -(event.clientY - y2);
	var k2 = Math.atan2(m2, n2);
	var x11 = (Math.cos(k1) * radius + x1).toFixed(0);
	var y11 = (( - Math.sin(k1) * radius) + y1).toFixed(0);
	$(".eye-left").offset({
		left: x11,
		top: y11
	});
	var x22 = (Math.cos(k2) * radius + x2).toFixed(0);
	var y22 = (( - Math.sin(k2) * radius) + y2).toFixed(0);
	$(".eye-right").offset({
		left: x22,
		top: y22
	})
};
$(window).mousemove(setEyeOffset);
