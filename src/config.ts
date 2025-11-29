import {
    StorefrontIcon,
    InstagramLogoIcon,
    EnvelopeSimpleIcon,
} from '@phosphor-icons/react/dist/ssr';

import type {Config} from '@/types';
// import image from '@/card-image.jpg?cardImage';

export const config: Config = {
    // Set your or company name
    title: 'All Out Trivia',
    // Add a brief description to display below the name
    bio: 'All Out Trivia offers easy, ready-to-play digital trivia games for fun, effortless group entertainment.',
    // Select a background style
    background: 'sunset',
    // Set your Google Analytics id to enable
    // gaId: 'G-XXXXXXXXX',
    // Localise sharing text
    shareTitle: 'Share link',
    // Set icon links to contact you to display below the header
    headerLinks: [
    ],
    // Set main links
    mainLinks: [
        {
            id: 'etsy',
            title: 'Check out the Etsy Store!',
            url: 'https://allouttrivia.etsy.com',
            icon: StorefrontIcon,
        },
        {
            id: 'instagram',
            title: 'Follow us on Instagram!',
            url: 'https://www.instagram.com/allouttrivia/',
            icon: InstagramLogoIcon,
        },
        {
            id: 'email',
            title: 'Subscribe to the Newsletter!',
            url: 'https://allouttrivia.eo.page/19x7w',
            icon: EnvelopeSimpleIcon,
        },
    ],
    vCard: {
    },
};
