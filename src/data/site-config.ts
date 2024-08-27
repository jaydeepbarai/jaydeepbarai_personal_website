export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'x-twitter';
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: Image;
    backgroundImage?: Image;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    logo: {
        src: '/logo-no-background.png',
        alt: 'JB Logo'
    },
    title: 'Jaydeep Barai',
    description: 'Astro.js and Tailwind CSS theme for blogging by justgoodui.com',
    image: {
        src: '/ovidius-preview.jpg',
        alt: 'Ovidius - Astro.js and Tailwind CSS theme'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Go to GitHub repo',
            href: 'https://github.com/JustGoodUI/ovidius-astro-theme',
            icon: 'github'
        },
        {
            text: 'Follow on Instagram',
            href: 'https://www.instagram.com/jaydeepbarai?igsh=MTFlbXNwYTNxNW55Yw==',
            icon: 'instagram'
        },
        {
            text: 'Follow on LinkedIn',
            href: 'https://www.linkedin.com/in/jaydeepbarai/',
            icon: 'linkedin'
        }
    ],
    hero: {
        title: 'Hi there!',
        text: "My name is Jaydeep Barai. I'm a Real Estate Investment Advisor based in Dubai, UAE. It's nice to meet you.",
        avatar: {
            src: '/avatar.jpg',
            alt: 'Jaydeep Barai'
        },
        backgroundImage: {
            src: '/hero.webp'
        }
    },
    postsPerPage: 5
};

export default siteConfig;
