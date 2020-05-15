import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
} from '@angular/animations';

export const slider =
    trigger('routeAnimations', [
        transition('* => isLeft', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            group([
                query(':leave', [
                    animate('600ms ease', style({ left: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('600ms ease', style({ left: '0%' }))
                ])
            ]),
        ]),
        transition('* => isRight', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                style({ right: '-100%' })
            ]),
            group([
                query(':leave', [
                    animate('600ms ease', style({ right: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('600ms ease', style({ right: '0%' }))
                ])
            ]),
        ]),
        transition('isRight => *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            group([
                query(':leave', [
                    animate('600ms ease', style({ left: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('600ms ease', style({ left: '0%' }))
                ])
            ]),
        ]),
        transition('isLeft => *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                style({ right: '-100%' })
            ]),
            group([
                query(':leave', [
                    animate('600ms ease', style({ right: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('600ms ease', style({ right: '0%' }))
                ])
            ]),
        ])
    ],
    );
