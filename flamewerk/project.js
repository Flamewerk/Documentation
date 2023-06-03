import {GlobeEuropeAfricaIcon, BuildingStorefrontIcon,HeartIcon,FireIcon, CloudArrowUpIcon,CodeBracketSquareIcon, Square3Stack3DIcon, CursorArrowRippleIcon, CommandLineIcon, WrenchScrewdriverIcon} from '@heroicons/vue/24/outline'
// IMPORT ALL HEROICONS HERE YOU WOULD LIKE TO USE IN YOUR MENU
export const useSettings = defineStore("project", {
  state: () => ({
    name: "Flamewerk",
    tagline: "Nuxt3 Statup Template",

    textlogo: "Flamewerk",
    logo: true,
    logoimage: "light.webp",
    logodark: false,    
    logodarkimage: "dark.webp",

    language: "en",
    dafaultroute: "/error",      // Default error route (can be set to / to just push dead links to the homepage)

    layout: 'web',               // (default, web, app, client )      

    shop: false,                  // still need to hook up
    shopcurrency: 'eur',         // Default Currenty ( Should be an object)
    snipcartid: 'YjIxYzVkZTMtZTAwYi00ODAxLWFiZTgtN2RmNGM4Y2NkZDJlNjM3MjQ4MDgxODk2ODI3ODcy', // Snipcart API

    headertype: 'Maximum',       // Options: Tiny, Maximum, Application
    headermenu: true,            // Enable to set a classic menu
    headerlanguage: true,
    headerlogin: false,
    headersocials: true,
    headerlogintext: 'Sign up!',
    headerclientprofile: false,

    nostr:false,                   // Login Prompt Request Nip-07 on page load
    nostrlogin: false,             // Add’s a menu icon to retrigger Nip-07 Login Prompt
    nostrregister: false,          // Add’s a key menu icon to popup a Generating Keypairs 
    nostrprofile: false,          // Still need to be implemented Reads out your profile Information.
    nostrrelay: "wss://relay.damus.io",               // Set your relay to connect to wss://relay.example.io

    footertype: 'Ecommerce',      // Options: Tiny, Minimal, Maximum, Ecommerce
    footerlanguage: true,
    footernewsletter: false,
    footersocials: true,          // Toggle Dark/Light mode switch
    footertheme:true,             // Toggle Dark/Light mode switch
    
    socialnavigation : {          // Enter a Url/Key to your Social Account
      facebook: '',
      instagram: '',
      twitter: 'https://twitter.com/flamewerk',
      github:'',
      discord: 'https://discord.gg/eKCS93H9eA',
      dribble: '',
      linkedin: '',
      telegram: 'https://t.me/+dCCYfqrQg5Q0ZTk0',
      nostr: '',
    },

    // HEADERNAVIGATION
    Headernavigation : { 
      basicmenu : [
        {
          name: 'Introduction',
          description: 'Design and create Blogs, landingpages and traditional websites.',
          href: '/introduction',
          icon: '',
          heroicon: GlobeEuropeAfricaIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Local Setup',
          description: 'Start building the core app design with ready made auth designs.',
          href: '/local-setup',
          icon: '',
          heroicon: CodeBracketSquareIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Project Config',
          description: 'Create a product list and start selling products and digital goods today.',
          href: '/project-config',
          icon: '',
          heroicon: BuildingStorefrontIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Layouts',
          description: 'Provide documentation or just share notes to improve user guidance.',
          href: '/layouts',
          icon: '',
          heroicon: Square3Stack3DIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Building Blocks',
          description: 'Provide documentation or just share notes to improve user guidance.',
          href: '/building-blocks',
          icon: '',
          heroicon: WrenchScrewdriverIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Deployment',
          description: 'Provide documentation or just share notes to improve user guidance.',
          href: '/deployment',
          icon: '',
          heroicon: CloudArrowUpIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Demos ',
          description: 'Provide documentation or just share notes to improve user guidance.',
          href: '/demos',
          icon: '',
          heroicon: FireIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },


        {
          name: 'Contributing',
          description: 'Provide documentation or just share notes to improve user guidance.',
          href: '/contribute',
          icon: '',
          heroicon: HeartIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },


      ],

      MenuPopupBig: false,
      MenuPopupBigName: 'Examples',
      MenuPopupSplit: false,
      MenuPopupSplitName: 'Split Menu',
      MenuPopupSplitBlog: true,


      // MENU SLIDE OPEN
      MenuPopupBigItems : [
        {
          name: 'Website',
          description: 'Design and create Blogs, landingpages and traditional websites.',
          href: '/site',
          icon: '🖥️',
          bgcolor:'bg-blue-500',
          position: 1,
        },
        {
          name: 'Application',
          description: 'Start building the core app design with ready made auth designs.',
          href: '/login',
          icon: '📱',
          bgcolor:'bg-yellow-500',
          position: 2,
        },
        { name: 'E-commerce', 
        description: 'Create a product list and start selling products and digital goods today.',
          href: '/shop', 
          icon: '🛍️',
          bgcolor:'bg-purple-500', 
          position: 3,
        }, 
        {
          name: 'Client',
          description: 'Build multi-panel clients for building applications and workapps.',
          href: '/client',
          icon: '🥂',
          bgcolor:'bg-pink-500',
          position: 4,
        },


      ],
      MenuPopupSplitColums: {
        company : [
          { name: 'About', href: '/new-page', icon: '📱' },
          { name: 'Customers', href: '/new-page', icon: '🛍️' },
          { name: 'Press', href: '/new-page', icon: '☠️' },
          { name: 'Careers', href: '/new-page', icon: '🦞' },
          { name: 'Privacy', href: '/new-page', icon: '🦎' },
        ],
        partners : [
          { name: 'Community', href: '/new-page', icon: '🐳' },
          { name: 'Partners', href: '/new-page', icon: '🪸' },
          { name: 'Guides', href: '/new-page', icon: '🌺' },
          { name: 'Webinars', href: '/new-page', icon: '🍿' },
        ],
      }
    },
    // FOOTER NAVIGATION
    Footernavigation : {
      // Minimal Footer
      main: [
        { name: 'About', href: '/page' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Accessibility', href: '#' },
        { name: 'Partners', href: '#' },
      ],
      // Maximum & Ecommerce Footer
      FooterColums: {
      solutions: [
        { name: 'Website', href: '/site' },
        { name: 'Application', href: '/login' },
      ],
      support: [
        { name: 'Ecommerce', href: '/shop' },
        { name: 'Library', href: '/library' },
      ],
      company: [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Documentation', href: '/library' },
      ],
      about: [
        { name: 'About', href: '/about' },
        { name: 'Shipping', href: '/shipping' },

      ],
    }
    }
  }),
});
