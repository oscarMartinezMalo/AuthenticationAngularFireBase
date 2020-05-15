import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
    animation,
    useAnimation
} from '@angular/animations';

export const bounceOutLeftAnimation = animation(
    animate(
        '500ms 0.1s ease-in',
        keyframes([
            style({
                offset: 0.2,
                opacity: 1,
                transform: 'translateX(20px)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(-100%)'
            })
        ])
    )
);

export const fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [animate(2000)])
]);

export const slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-10px' }),
        animate(500)
    ]),

    transition(':leave', [
        animate('500ms 0.1s ease-in', style({ transform: 'translateX(-100%' })) // duration delay easing (https://cubic-bezier.com/)
    ])
]);

export const slideOutRigth = trigger('slideOutRigth', [
    transition(':enter', [
        style({ transform: 'translateX(-10px' }),
        animate(500)
    ]),
    transition(':leave', [
        animate(
            '500ms 0.1s ease-in',
            keyframes([
                style({
                    offset: 0.2,
                    opacity: 1,
                    transform: 'translateX(20px)'
                }),
                style({
                    offset: 1,
                    opacity: 0,
                    transform: 'translateX(-100%)'
                })
            ])
        )
    ])
]);

export const todoAnimation = trigger('todoAnimation', [
    transition(':enter', [style({ opacity: 0 }), animate(2000)]),
    transition(':leave', useAnimation(bounceOutLeftAnimation))
]);

export const fadeInAnimation = animation(
    [style({ opacity: 0 }), animate('{{ duration }} {{easing}}')],
    {
        params: {
            duration: '2s',
            easing: 'ease-out'
        }
    }
);

// Animation with Params
export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [useAnimation(fadeInAnimation)]),

    transition(':leave', [animate(2000, style({ opacity: 0 }))])
]);
