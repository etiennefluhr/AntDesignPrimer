
    import { IAnimObject } from 'rc-tween-one/typings/AnimObject';

    /*******************************************************************************************************************
    *   All animations being used in the application.
    *******************************************************************************************************************/
    export class Animation
    {
        /** Initially fade in the header layout component. */
        public          static      readonly        INIT_SHOW_HEADER    :IAnimObject    =
        {
            type:       'from',
            opacity:    0.0,
            repeat:     0,
            duration:   1000,
            delay:      0,
        };

        /** Initially fade in the footer layout component. */
        public          static      readonly        INIT_SHOW_FOOTER    :IAnimObject    =
        {
            type:       'from',
            opacity:    0.0,
            repeat:     0,
            duration:   1000,
            delay:      1000,
        };

        /** Initially fade in the content layout component. */
        public          static      readonly        INIT_SHOW_CONTENT   :IAnimObject    =
        {
            type:       'from',
            opacity:    0.0,
            repeat:     0,
            duration:   1000,
            delay:      2000,
        };

        /** Initially fade in the menu layout component. */
        public          static      readonly        INIT_SHOW_MENU      :IAnimObject    =
        {
            type:       'from',
            opacity:    0.0,
            repeat:     0,
            duration:   1000,
            delay:      3000,
        };

        /** Fade out the content layout component. */
        public          static      readonly        HIDE_CONTENT        :IAnimObject    =
        {
            type:       'to',
            opacity:    0.0,
            repeat:     0,
            duration:   1000,
        };

        /** Fade in the content layout component. */
        public          static      readonly        SHOW_CONTENT        :IAnimObject    =
        {
            type:       'to',
            opacity:    1.0,
            repeat:     0,
            duration:   1000,
        };

        /** Test animation. */
        public          static      readonly        TEST                :IAnimObject    =
        {
            type:     'to',
            yoyo:     true,
            x:        0,
            y:        0,
            scale:    0.25,
            rotate:   80,
            repeat:   -1,
            duration: 1000,
        };

        /** Appear via fade in animation. */
        public          static      readonly        TEST_FADE_IN        :IAnimObject    =
        {
            type:       'from',
            opacity:    0.0,
            repeat:     0,
            duration:   1000,
        };

        /** Disappear via fade out animation. */
        public          static      readonly        TEST_FADE_OUT       :IAnimObject    =
        {
            type:       'to',
            opacity:    0.0,
            repeat:     0,
            duration:   1000,
        };

        /** Appear via fade in animation. */
        public          static      readonly        TEST_TIMELINE       :IAnimObject[]  =
        [
            Animation.TEST_FADE_IN,
            Animation.TEST_FADE_OUT,
            {
                type:       'to',
                opacity:    1.0,
                repeat:     0,
                duration:   1000,
            },
            {
                type:       'to',
                scale:      0.25,
                rotate:     80,
                duration:   1000,
            },
            {
                type:       'to',
                scale:      1.0,
                rotate:     0,
                duration:   1000,
            },
        ];
    }
