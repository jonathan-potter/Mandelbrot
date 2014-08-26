(function (window) {
	var draw_mandelbrot, pixels, x_range, y_range;

	x_range = [-2.0, 2.0];
	y_range = [-2.0, 2.0];
	pixels = 400;

	full_mandelbrot = function () {

		range_x = x_range[1] - x_range[0];
		range_y = y_range[1] - y_range[0];
		delta_x = range_x / pixels;
		delta_y = range_y / pixels;

		iterations = 55;

		mandelbrot = function (z, iterations) {
			var c, i, r, o;

			c = z.c;
			v = z.v;
			r = v.r * v.r - v.i * v.i + c.r;
			i = 2 * v.r * v.i + c.i;
			o = z.o;

			if (Math.abs(r * r + i * i) > 4) {
				o = o || iterations;
			}

			return {c: c, v: {r: r, i: i}, o: o};
		};

		colormap = function (z) {
			var r, g, b;

			// z = Math.abs(z.v.r * z.v.r + z.v.i * z.v.i);
			// if (z === z) {
			// 	r = Math.round(z);
			// } else {
			// 	r = 0;
			// }
			if (z.o) {
				r = 255 - (Math.round(z.o) * 8);
			} else {
				r = 0;
			}

			return r;
		};

		// initial setup
		matrix = [];
		for (var x_index = 0; x_index < pixels; x_index++) {
			matrix.push([]);
			for (var y_index = 0; y_index < pixels; y_index++) {
				x = x_range[0] + x_index * delta_x;
				y = y_range[0] + y_index * delta_y;

				matrix[x_index][y_index] = {c: {r: x, i: y}, v: {r: 0, i: 0}, o: null};
			}
		}

		/** iteration **/
		for (i = 0; i < iterations; i++) {
			for (var x_index = 0; x_index < pixels; x_index++) {
				for (var y_index = 0; y_index < pixels; y_index++) {
					z = matrix[x_index][y_index];

					matrix[x_index][y_index] = mandelbrot(z, i);
				}
			}
		}

		canvas = document.getElementById("mandelbrot");
		canvas.width = pixels;
		canvas.height = pixels;
		ctx = canvas.getContext("2d");
		imageData = ctx.getImageData(0, 0, pixels, pixels);
		var data = imageData.data;

		for (var x = 0; x < pixels; x++) {
			for (var y = 0; y < pixels; y++) {
				i = (y * pixels + x) * 4;
				data[i + 1] = 255 - colormap(matrix[x][y]);
				data[i + 3] = 255;
			}
		}

		ctx.putImageData(imageData, 0, 0);
		console.log("done!");
	}

	full_mandelbrot();

	canvas.addEventListener("click", function (event) {
		var center, click;

		click = {x: event.offsetX, y: event.offsetY};

		range_x = x_range[1] - x_range[0];
		range_y = y_range[1] - y_range[0];

		center = {}
		center["x"] = (x_range[0] + x_range[1]) / 2;
		center["y"] = (y_range[0] + y_range[1]) / 2;

		top_left = {x: center.x - range_x / 2, y: center.y - range_y / 2};

		zoom_x = top_left.x + click.x / pixels * range_x;
		zoom_y = top_left.y + click.y / pixels * range_y;
		zoom = {x: zoom_x, y: zoom_y};

		x_range = [zoom.x - range_x / 16, zoom.x + range_x / 16];
		y_range = [zoom.y - range_y / 16, zoom.y + range_y / 16];

		full_mandelbrot();
	});

})(this);