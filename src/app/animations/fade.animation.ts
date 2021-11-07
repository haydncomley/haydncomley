import { animate, animation, keyframes, style, transition, trigger, useAnimation } from "@angular/animations";

export const fadeIn = animation([
    style({ opacity: 0 }),
    animate(
        '.2s ease',
        keyframes([
            style({ opacity: 0, }),
            style({ opacity: 1 }),
        ])
    )
]);

export const fadeOut = animation([
    style({ opacity: 0 }),
    animate(
        '.2s ease',
        keyframes([
            style({ opacity: 1 }),
            style({ opacity: 0, }),
        ])
    )
])

export const fadeAnimation = trigger(
    'fade',
    [
        transition('void => *', [useAnimation(fadeIn)]),
        transition('* => void', [useAnimation(fadeOut)])
    ]
);