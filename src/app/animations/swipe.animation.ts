import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

const timing = '.5s ease';

export const swipeInFromLeft = animation([
	style({ 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: '0' }),
	animate(
		timing,
		keyframes([
			style({ 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: '0' }),
			style({ 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: '1' }),
		])
	)
]);

export const swipeInFromRight = animation([
	style({ 'clip-path': 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', opacity: '0' }),
	animate(
		timing,
		keyframes([
			style({ 'clip-path': 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', opacity: '0' }),
			style({ 'clip-path': 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', opacity: '1' }),
		])
	)
]);

export const swipeOutToLeft = animation([
	style({ 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: '1', position: 'absolute' }),
	animate(
		timing,
		keyframes([
			style({ 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: '1', position: 'absolute' }),
			style({ 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: '0', position: 'absolute' }),
		])
	)
]);

export const swipeOutToRight = animation([
	style({ 'clip-path': 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', opacity: '1', position: 'absolute' }),
	animate(
		timing,
		keyframes([
			style({ 'clip-path': 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', opacity: '1', position: 'absolute' }),
			style({ 'clip-path': 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', opacity: '0', position: 'absolute' }),
		])
	)
]);

export const swipeAnimation = trigger(
	'swipe',
	[
		transition('void => left', [useAnimation(swipeInFromLeft)]),
		transition('void => right', [useAnimation(swipeInFromRight)]),
		transition('left => void', [useAnimation(swipeOutToRight)]),
		transition('right => void', [useAnimation(swipeOutToLeft)])
	]
);