(function (window) {
	var canvas, ctx, mandelbrot, pixels, x, y, z;

	x_range = [-4.0, 4.0];
	y_range = [-4.0, 4.0];

	range_x = x_range[1] - x_range[0];
	range_y = y_range[1] - y_range[0];

	pixels = 800;
	delta_x = range_x / pixels;
	delta_y = range_y / pixels;

	iterations = 22;

	mandelbrot = function (z) {
		var c, i, r;

		c = z.c;
		v = z.v;
		r = v.r * v.r - v.i * v.i + c.r;
		i = 2 * v.r * v.i + c.i;

		return {c: c, v: {r: r, i: i}};
	};

	colormap = function (z) {
		var r, g, b;

		z = Math.abs(z.v.r * z.v.r + z.v.i * z.v.i)
		if (z === z) {
			r = Math.round(z);
		} else {
			r = 255;
		}

		return r;
	};


	matrix = [];
	for (var x_index = 0; x_index < pixels; x_index++) {
		matrix.push([]);
		for (var y_index = 0; y_index < pixels; y_index++) {
			x = x_range[0] + x_index * delta_x;
			y = y_range[0] + y_index * delta_y;

			matrix[x_index][y_index] = {c: {r: x, i: y}, v: {r: 0, i: 0}};
		}
	}

	/** iteration **/
	for (i = 0; i < iterations - 1; i++) {
		for (var x_index = 0; x_index < pixels; x_index++) {
			for (var y_index = 0; y_index < pixels; y_index++) {
				z = matrix[x_index][y_index];

				matrix[x_index][y_index] = mandelbrot(z);
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
			data[i + 3] = colormap(matrix[x][y]);
		}
	}

	ctx.putImageData(imageData, 0, 0);
	console.log("done!")

})(this);