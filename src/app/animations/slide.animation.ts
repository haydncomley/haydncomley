import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

const timing = '.5s ease';

export const slideInFromLeft = animation([
	style({ transform: 'translateX(-100%)' }),
	animate(
		timing,
		keyframes([
			style({ transform: 'translateX(-100%)' }),
			style({ transform: 'translateX(0%)' }),
		])
	)
]);

export const slideInFromRight = animation([
	style({ transform: 'translateX(100%)' }),
	animate(
		timing,
		keyframes([
			style({ transform: 'translateX(100%)' }),
			style({ transform: 'translateX(0%)' }),
		])
	)
]);

export const slideOutToLeft = animation([
	style({ transform: 'translateX(0%)' }),
	animate(
		timing,
		keyframes([
			style({ transform: 'translateX(0%)' }),
			style({ transform: 'translateX(-100%)' }),
		])
	)
]);

export const slideOutToRight = animation([
	style({ transform: 'translateX(0%)' }),
	animate(
		timing,
		keyframes([
			style({ transform: 'translateX(0%)' }),
			style({ transform: 'translateX(100%)' }),
		])
	)
]);

export const slideAnimation = trigger(
	'slide',
	[
		transition('void => left', [useAnimation(slideInFromRight)]),
		transition('void => right', [useAnimation(slideInFromLeft)]),
		transition('left => void', [useAnimation(slideOutToLeft)]),
		transition('right => void', [useAnimation(slideOutToRight)])
	]
);