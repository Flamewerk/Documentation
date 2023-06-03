---
title: 'Flamewerk - Documentation'
layout: client
description: 'meta description of the page'
---

:::BlockClientSidePanel
::BlockProseContent


:ComponentLink{title="Default Config Properties" route="/project-config" content="Set Global Config Settings "}

:ComponentLink{title="Example Config Website" route="/web-project-config" content="Example of a Website Config"}

:ComponentLink{title="Example Config Application" route="/app-project-config" content="Example of a Application Config"}

:ComponentLink{title="Example Config Client" route="/client-project-config" content="Client Instructions and example Config"}


::

:::

:::BlockClientMainPanel


::BlockProseContentMain
# Default Empty Project Config

::BlockProseContentCenter
You can Copy & Paste these demo configs in the startup & production repository. 
::

::BlockProseCodeTop
  ```javascript

import {GlobeEuropeAfricaIcon} from '@heroicons/vue/24/outline'
// IMPORT ALL HEROICONS HERE YOU WOULD LIKE TO USE IN YOUR MENU
export const useSettings = defineStore("project", {
  state: () => ({
    name: '',                     // Name of your project
    tagline: '',                  // Subtitle of your project

    textlogo: 'Flamewerk',        // Text logo name 
    logo: true,                   // Toggle Logo Image display
    logoimage: '',                // Provide a image in the public logo folder
    logodark: false,              // Toggle dark theme logo
    logodarkimage: '',            // Provide a image in the public logo folder

    language: 'en',
    dafaultroute: '/error',       // Default error route 
                                  // can be set to / to just ( push dead links to the homepage)

    layout: 'default',                // (default, web, app, client )      

    shop: true,                   // still need to hook up
    shopcurrency: 'eur',          // Default Currenty ( Should be an object)
    snipcartid: '',               // Snipcart API

    headertype: 'Maximum',        // Options: Tiny, Maximum, Application
    headermenu: true,             // Enable to set a classic menu
    headerlanguage: true,         // Enable Language popdown
    headerlogin: false,           // Enable Login Button
    headersocials: true,          // Place Socials in header
    headerlogintext: '',          // Login Button Text
    headerclientprofile: false,   // ???

    nostr:true,                   // Login Prompt Request Nip-07 on page load
    nostrlogin: true,             // Add’s a menu icon to retrigger Nip-07 Login Prompt
    nostrregister: true,          // Add’s a key menu icon to popup a Generating Keypairs 
    nostrprofile: true,           // Still need to be implemented Reads out your profile Information.
    nostrrelay: '',               // Set your relay to connect to wss://relay.example.io

    footertype: 'Ecommerce',      // Options: Tiny, Minimal, Maximum, Ecommerce
    footerlanguage: true,         // Enable Language Popup 
    footernewsletter: false,      // Newsletter toggle 
    footersocials: true,          // Toggle Dark/Light mode switch
    footertheme:true,             // Toggle Dark/Light mode switch
    
    socialnavigation : {          // Enter a Url/Key to your Social Account
      facebook: '',
      instagram: '',
      twitter: '',
      github:'',
      discord: '',
      dribble: '',
      linkedin: '',
      telegram: '',
      nostr: '',
    },

    // HEADERNAVIGATION
    Headernavigation : { 
      basicmenu : [
        {
          name: '',
          description: '',
          href: '/',
          icon: '',
          heroicon: GlobeEuropeAfricaIcon,
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

      ],
      MenuPopupSplitColums: {
        company : [
          { name: 'About', href: '/new-page', icon: '📱' },
        ],
        partners : [
          { name: 'Community', href: '/new-page', icon: '🐳' },
        ],
      }
    },
    // FOOTER NAVIGATION
    Footernavigation : {
      // Minimal Footer
      main: [
        { name: 'About', href: '/page' },
      ],
      // Maximum & Ecommerce Footer
      FooterColums: {
      solutions: [
        { name: 'Website', href: '/site' },
      ]
    }
    }
  }),
});



  ```
::


::

:::