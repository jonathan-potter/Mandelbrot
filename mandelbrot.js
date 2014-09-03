(function (window) {
	var canvas, colormap, iterationRange, iterations, full_mandelbrot, mandelbrot, mapNumberRange, pixels, x_range, y_range;

	x_range = [-2.0, 1];
	y_range = [-1.5, 1.5];
	pixels = 400;
	iterations = 100;

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

	mapNumberToRange = function (mappedRange, range, value) {
		var rangeScale;

		rangeScale = (range.max - range.min) / (mappedRange.max - mappedRange.min);

		return (value - range.min) / rangeScale + mappedRange.min;
	};

	colormap = function (z, range) {
		var r;

		if (z.o) {
			r = ~~(mapNumberToRange({min: 0, max: 255}, range, z.o));
		} else {
			r = 255;
		}

		return r;
	};

	iterationRange = function (matrix) {
		var iterations, range, x, y;

		range = {
			max: Number.MIN_SAFE_INTEGER,
			min: Number.MAX_SAFE_INTEGER
		}
		for (x = 0; x < matrix.length; x++) {
			for (y = 0; y < matrix[0].length; y++) {
				iterations = matrix[x][y].o;

				range.max = Math.max(iterations, range.max);
				range.min = Math.min(iterations, range.min);
			}
		}

		return range;
	};

	canvas = document.getElementById("mandelbrot");
	full_mandelbrot = function () {
		var ctx, data, delta_x, delta_y, imageData, iteration, matrix, range, range_x, range_y, x, x_index, y, y_index;


		range_x = x_range[1] - x_range[0];
		range_y = y_range[1] - y_range[0];
		delta_x = range_x / pixels;
		delta_y = range_y / pixels;

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
		for (iteration = 0; iteration < iterations; iteration++) {
			for (var x_index = 0; x_index < pixels; x_index++) {
				for (var y_index = 0; y_index < pixels; y_index++) {
					z = matrix[x_index][y_index];

					matrix[x_index][y_index] = mandelbrot(z, iteration);
				}
			}
		}

		canvas.width = pixels;
		canvas.height = pixels;
		ctx = canvas.getContext("2d");
		imageData = ctx.getImageData(0, 0, pixels, pixels);
		var data = imageData.data;

		range = iterationRange(matrix);
		console.log(range);
		for (var x = 0; x < pixels; x++) {
			for (var y = 0; y < pixels; y++) {
				i = (y * pixels + x) * 4;
				data[i + 1] = colormap(matrix[x][y], range);
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

		x_range = [zoom.x - range_x / 20, zoom.x + range_x / 20];
		y_range = [zoom.y - range_y / 20, zoom.y + range_y / 20];

		full_mandelbrot();
	});

})(this);