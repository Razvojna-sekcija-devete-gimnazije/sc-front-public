export const appRoutes = [
    {
        id: 'home',
        name: 'Početna',
        path: '/',
        lazy: async () => {
            const { default: HomePage } = await import('../pages/HomePage/HomePage.jsx');
            return { Component: HomePage };
        },
        showInMenu: true,
    },
    {
        id: 'about',
        name: 'About',
        path: '/about',
        lazy: async () => {
            const { default: AboutPage } = await import('../pages/AboutPage/AboutPage.jsx');
            return { Component: AboutPage };
        },
        showInMenu: true,
    },
    {
        id: 'skola',
        name: 'Škola',
        path: '/skola',
        showInMenu: true,
        children: [
            {
                id: 'about-skola',
                name: 'O nama',
                path: '../about',        
                lazy: async () => {
                    const { default: AboutPage } = await import('../pages/AboutPage/AboutPage.jsx');
                    return { Component: AboutPage };
                },
                showInMenu: true,
            },
            {
                id: 'staff',
                name: 'Zaposleni',
                path: '../',     
                lazy: async () => {
                    const { default: HomePage } = await import('../pages/HomePage/HomePage.jsx');
                    return { Component: HomePage };
                },
                showInMenu: true,
            },
        ],
    }
];