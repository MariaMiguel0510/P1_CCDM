
(function () {
	const frameCounts = {
				'A': 3,
				'B': 1,
				'C': 4,
				'D': 3,
				'E': 5,
				'G': 2,
				'I': 3,
				'L': 3,
				'M': 4,
				'N': 2,
				'O': 2,
				'R': 2,
				'S': 4,
				'T': 2,
				'U': 2,
				'V': 2,
				'+': 3,
				'_': 3,
			};

	const app = document.getElementById('app');

	const titleLine1 = document.getElementById('titleLine1');
	const titleLine2 = document.getElementById('titleLine2');
	const titleLine3 = document.getElementById('titleLine3');
	const titleLine4 = document.getElementById('titleLine4');

	const cleanups = [];

	function assetPath(prefix, frameIndex, suffix) {
				return `Data/${encodeURIComponent(prefix)}_${frameIndex}_${suffix}.png`;
	}

	function createSpacer() {
				const spacer = document.createElement('div');
				spacer.className = 'spacer';
				spacer.setAttribute('aria-hidden', 'true');
				return spacer;
	}

	function createGlyph(char) {
				const glyph = document.createElement('div');
				glyph.className = 'glyph';
				glyph.dataset.char = char;

				const mapImg = document.createElement('img');
				mapImg.className = 'layer-map';
				mapImg.alt = '';
				mapImg.loading = 'eager';
				mapImg.decoding = 'async';

				const letterImg = document.createElement('img');
				letterImg.className = 'layer-letter';
				letterImg.alt = '';
				letterImg.loading = 'eager';
				letterImg.decoding = 'async';

				glyph.appendChild(mapImg);
				glyph.appendChild(letterImg);

				const frames = frameCounts[char] ?? 1;
				let current = Math.floor(Math.random() * frames);
				let intervalId = null;

				function applyFrame(idx) {
					current = idx;
					mapImg.src = assetPath(char, idx, 'F');
					letterImg.src = assetPath(char, idx, 'C');
				}

				function tick() {
					if (frames <= 1) return;
					let next = Math.floor(Math.random() * frames);
					if (frames > 1 && next === current) next = (next + 1) % frames;
					applyFrame(next);
				}

				function start() {
					if (intervalId != null) return;
					intervalId = window.setInterval(tick, 3000);
				}

				function stop() {
					if (intervalId == null) return;
					window.clearInterval(intervalId);
					intervalId = null;
				}

				applyFrame(current);
				start();

				glyph.addEventListener('mouseenter', stop);
				glyph.addEventListener('mouseleave', start);
				cleanups.push(() => {
					stop();
					glyph.removeEventListener('mouseenter', stop);
					glyph.removeEventListener('mouseleave', start);
				});

				return glyph;
	}

	function buildLine(container, text, initialChar) {
		container.textContent = '';
		const word = document.createElement('div');
		word.className = 'word';

		let firstGlyph = null;
		let firstLetterConsumed = false;

		for (const rawChar of text) {
			const char = rawChar.toUpperCase();
			if (char === ' ') {
				word.appendChild(createSpacer());
				continue;
			}
			if (!frameCounts[char]) {
				word.appendChild(createSpacer());
				continue;
			}

			const glyph = createGlyph(char);
			if (!firstLetterConsumed && char === initialChar) {
				glyph.classList.add('glyph--initial');
				firstGlyph = glyph;
				firstLetterConsumed = true;
			} else {
				glyph.classList.add('glyph--rest');
			}
			word.appendChild(glyph);
		}

		container.appendChild(word);
		return firstGlyph;
	}

	const initials = [];
	initials.push(buildLine(titleLine1, 'CICLO DE', 'C'));
	initials.push(buildLine(titleLine2, 'CONVERSAS', 'C'));
	initials.push(buildLine(titleLine3, 'DESIGN +', 'D'));
	initials.push(buildLine(titleLine4, 'MULTIMEDIA', 'M'));

	const initialGlyphs = initials.filter(Boolean);

	function pxFromCssValue(value) {
		const n = parseFloat(value);
		return Number.isFinite(n) ? n : 0;
	}

	function computeInitialTransformsToCenterRow() {
		if (initialGlyphs.length !== 4) return;
		const appRect = app.getBoundingClientRect();
		const centerX = appRect.left + appRect.width / 2 - 150;
		const centerY = appRect.top + appRect.height / 2 + 25;

		const firstRect = initialGlyphs[0].getBoundingClientRect();
		const glyphW = firstRect.width;
		const wordEl = titleLine1.querySelector('.word');
		const gapPx = wordEl ? pxFromCssValue(getComputedStyle(wordEl).gap) : 0;
		const step = glyphW + gapPx;

		const offsets = [-1.5, -0.5, 0.5, 1.5];

		for (let i = 0; i < initialGlyphs.length; i++) {
			const glyph = initialGlyphs[i];
			const rect = glyph.getBoundingClientRect();
			const gCx = rect.left + rect.width / 2;
			const gCy = rect.top + rect.height / 2;

			const targetX = centerX + offsets[i] * step;
			const targetY = centerY;

			const dx = targetX - gCx;
			const dy = targetY - gCy;
			glyph.style.setProperty('--fromX', `${dx}px`);
			glyph.style.setProperty('--fromY', `${dy}px`);
		}
	}

	function raf2(fn) {
		requestAnimationFrame(() => requestAnimationFrame(fn));
	}

	document.body.classList.remove('is-frame2', 'is-rest-visible', 'is-ready');
	document.body.classList.add('is-frame1');

	raf2(() => {
		computeInitialTransformsToCenterRow();

		window.setTimeout(() => {
			document.body.classList.add('is-frame2');
		}, 520);

		window.setTimeout(() => {
			document.body.classList.remove('is-frame1');
		}, 1350);

		window.setTimeout(() => {
			document.body.classList.add('is-rest-visible');
			document.body.classList.add('is-ready');
		}, 1350 + 900);
	});

	window.addEventListener('resize', () => {
		if (!document.body.classList.contains('is-frame1')) return;
		raf2(computeInitialTransformsToCenterRow);
	});

	window.addEventListener('beforeunload', () => {
		for (const fn of cleanups) fn();
	});
})();