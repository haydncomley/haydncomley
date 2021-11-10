import { animate, animation, keyframes, style, transition, trigger, useAnimation } from "@angular/animations";

const timing = '.5s ease';

export const swipeInFromLeft = animation([
    style({ 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }),
    animate(
        timing,
        keyframes([
            style({ 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }),
            style({ 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }),
        ])
    )
]);

export const swipeInFromRight = animation([
    style({ 'clip-path': 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }),
    animate(
        timing,
        keyframes([
            style({ 'clip-path': 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }),
            style({ 'clip-path': 'polygon(100% 0, 0 0, 0 100%, 100% 100%)' }),
        ])
    )
]);

export const swipeOutToLeft = animation([
    style({ 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', position: 'absolute' }),
    animate(
        timing,
        keyframes([
            style({ 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', position: 'absolute' }),
            style({ 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0% 100%)', position: 'absolute' }),
        ])
    )
]);

export const swipeOutToRight = animation([
    style({ 'clip-path': 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', position: 'absolute' }),
    animate(
        timing,
        keyframes([
            style({ 'clip-path': 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', position: 'absolute' }),
            style({ 'clip-path': 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', position: 'absolute' }),
        ])
    )
]);

export const swipeAnimation = trigger(
    'slide',
    [
        transition('void => left', [useAnimation(swipeInFromLeft)]),
        transition('void => right', [useAnimation(swipeInFromRight)]),
        transition('left => void', [useAnimation(swipeOutToRight)]),
        transition('right => void', [useAnimation(swipeOutToLeft)])
    ]
);