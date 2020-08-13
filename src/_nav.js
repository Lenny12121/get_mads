export default {
  top: [
    {
      name: 'Your Impact',
      url: '/home',
      icon: 'Target',
    },
    {
      name: 'Supported Projects',
      url: '/supported-projects',
      icon: 'Heart',
    },
    {
      name: 'Public Ledger',
      url: '/public-ledger',
      icon: 'BookOpen',
    },
    {
      name: 'Add Impact',
      icon: 'PlusCircle',
      children: [
        {
          name: 'Buttons',
          url: '/elements/buttons',
        },
        {
          name: 'Grid',
          url: '/elements/grid',
        },
        {
          name: 'Alerts',
          url: '/elements/alerts',
        },
        {
          name: 'Typography',
          url: '/elements/typography',
        },
        {
          name: 'Cards',
          url: '/elements/cards',
        },
        {
          name: 'Tabs',
          url: '/elements/tabs',
        },
        {
          name: 'Tables',
          url: '/elements/tables',
        },
        {
          name: 'Breadcrumbs',
          url: '/elements/breadcrumbs',
        },
        {
          name: 'Forms',
          url: '/elements/forms',
        },
        {
          name: 'Modals',
          url: '/elements/modals',
        },
        {
          name: 'Loaders',
          url: '/elements/loaders',
        },
        {
          name: 'Avatars',
          url: '/elements/avatars',
        },
        {
          name: 'Progress Bars',
          url: '/elements/progressbars',
        },
        {
          name: 'Pagination',
          url: '/elements/pagination',
        },
      ],
    },
    {
      name: 'Resources',
      icon: 'Layers',
      children: [
        {
          name: 'Blank',
          url: '/pages/blank',
        },
        {
          name: 'Sub Navigation',
          url: '/pages/subnav',
        },
        {
          name: '404',
          url: '/pages/404',
        },
      ],
    },
    {
      divider: true,
    },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   icon: 'Package',
    //   badge: {
    //     text: 'NEW',
    //   },
    // },
  ],
  bottom: [
    {
      name: 'Account',
      url: '/dashboard',
      icon: 'User',
      badge: {
        variant: 'success',
        text: '3',
      },
    },
  ],
};
