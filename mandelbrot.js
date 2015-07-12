;(function (window) {
	var canvas, colormap, initializeMatrix, iterationRange, iterations, full_mandelbrot, mandelbrot, mapNumberRange, pixels,
		x_range, y_range;

	x_range = [-2.0, 1];
	y_range = [-1.5, 1.5];
	pixels = 400;
	iterations = 64;

	mandelbrot = function (pixel, iteration) {
    if (pixel.crossoverIteration) { return pixel; }
    
		var crossoverIteration, c, imaginary, real, z;
		/** the base equation for the mandelbrot set is  **/
		/** f(z) = z^2 + c **/

		c = pixel.c;
		z = pixel.z;
		real = z.real * z.real - z.imaginary * z.imaginary + c.real;
		imaginary = 2 * z.real * z.imaginary + c.imaginary;

		crossoverIteration = pixel.crossoverIteration;
		if (real * real + imaginary * imaginary > 4) {
			crossoverIteration = crossoverIteration || iteration;
		}

		return {c: c, z: {real: real, imaginary: imaginary}, crossoverIteration: crossoverIteration};
	};

	mapNumberToRange = function (mappedRange, range, value) {
		var rangeScale;

		rangeScale = (range.max - range.min) / (mappedRange.max - mappedRange.min);

		return (value - range.min) / rangeScale + mappedRange.min;
	};

	colormap = function (z, range) {
		var r;

		if (z.crossoverIteration) {
			r = ~~(mapNumberToRange({min: 0, max: 255}, range, z.crossoverIteration));
		} else {
			r = 0;
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
				iterations = matrix[x][y].crossoverIteration;

				range.max = Math.max(iterations, range.max);
				range.min = Math.min(iterations, range.min);
			}
		}

		return range;
	};

	initializeMatrix = function (pixels) {
		var data, delta_x, delta_y, imageData, iteration, matrix, range, range_x, range_y, x, x_index, y, y_index;

		range_x = x_range[1] - x_range[0];
		range_y = y_range[1] - y_range[0];
		delta_x = range_x / pixels;
		delta_y = range_y / pixels;

		matrix = [];
		for (var x_index = 0; x_index < pixels; x_index++) {
			matrix.push([]);
			for (var y_index = 0; y_index < pixels; y_index++) {
				x = x_range[0] + x_index * delta_x;
				y = y_range[0] + y_index * delta_y;

				matrix[x_index][y_index] = {
					                 c: {real: x, imaginary: y},
					                 z: {real: 0, imaginary: 0},
					crossoverIteration: null
				};
			}
		}

		return matrix;
	};

	full_mandelbrot = function (pixels, iterations) {
		var ctx, data, delta_x, delta_y, imageData, iteration, matrix, pixel, range, range_y, x_index, y_index;

		// initial setup
		matrix = initializeMatrix(pixels);

		/** iteration **/
		for (iteration = 0; iteration < iterations; iteration++) {
			for (var x_index = 0; x_index < pixels; x_index++) {
				for (var y_index = 0; y_index < pixels; y_index++) {
					pixel = matrix[x_index][y_index];

					matrix[x_index][y_index] = mandelbrot(pixel, iteration);
				}
			}
		}

		canvas = document.getElementById("mandelbrot");
		canvas.width = pixels;
		canvas.height = pixels;
		ctx = canvas.getContext("2d");
		imageData = ctx.getImageData(0, 0, pixels, pixels);
		var data = imageData.data;

		range = iterationRange(matrix);
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

	full_mandelbrot(pixels, iterations);

	canvas = document.getElementById("mandelbrot");
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

		full_mandelbrot(pixels, iterations);

	});

})(this);