import { trigger, transition, useAnimation, animate, animation, keyframes, style, group, query } from "@angular/animations";

export const pageFade = animation([
    query(':enter, :leave', [
        style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        })
    ], { optional: true }),
    group([
        query(':leave', [
            style({ opacity: 1 }),
            animate(
                '.4s ease',
                keyframes([
                    style({ opacity: 1 }),
                    style({ opacity: 1, }),
                ])
            )
        ], { optional: true }),
        query(':enter', [
            style({ opacity: 0 }),
            animate(
                '.4s ease',
                keyframes([
                    style({ opacity: 0 }),
                    style({ opacity: 1, }),
                ])
            )
        ], { optional: true })
    ])
]);

export const pageSlide = animation([
    query(':enter, :leave', [
        style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        })
    ], { optional: true }),
    group([
        query(':leave', [
            style({ opacity: 1, transform: `translateX(0rem)` }),
            animate(
                '.4s ease-out',
                keyframes([
                    style({ opacity: 1, transform: `translateX(0rem)` }),
                    style({ opacity: 1, transform: `translateX(-100%)` }),
                ])
            )
        ], { optional: true }),
        query(':enter', [
            style({ opacity: 0, transform: `translateX(100%)` }),
            animate(
                '.4s ease-out',
                keyframes([
                    style({ opacity: 1, transform: `translateX(100%)` }),
                    style({ opacity: 1, transform: `translateX(0rem)` }),
                ])
            )
        ], { optional: true })
    ])
]);

export const pageAnimation = trigger(
    'routeAnimations',
    [
        transition('* <=> *', [useAnimation(pageFade)]),
    ]
);

