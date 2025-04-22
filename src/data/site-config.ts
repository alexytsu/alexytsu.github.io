export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title: string;
    text: string;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'alexytsu',
    subtitle: 'Venture Building • Tech Wrangling',
    description: 'Personal site of a startup builder',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Writing',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    socialLinks: [
        {
            text: 'Helix Collective',
            href: 'https://helixcollective.com/'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/alexytsu/'
        },
        {
            text: 'Telegram',
            href: 'https://t.me/alexytsu'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/alexytsu'
        }
    ],
    hero: {
        title: 'Digital Garden',
        text:
            '_/ˈdɪdʒɪtl ˈɡɑː.dən/_ _**noun**_\n\n' +
            'Digital gardens form part of the small web. ' +
            'They are owned by their caretakers who carve out sovereign territory in a landscape dominated by Web2.0 companies that offer "space for rent". ' +
            'Digital gardens are therefore not prone to [enshittification](https://doctorow.medium.com/https-pluralistic-net-2024-04-04-teach-me-how-to-shruggie-kagi-caaa88c221f2) nor constrained by concessions to centralized recommendation algorithms.',
        actions: [
            {
                text: 'Explore',
                href: '/blog'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
