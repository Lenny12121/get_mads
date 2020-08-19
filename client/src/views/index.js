import Dashboard from './pages/Dashboard';
import Account from './pages/Account.jsx';
import SupportedProjects from './pages/SupportedProjects';
import EarthPositiveBadges from './pages/earthPositiveBadges';
import Typography from './elements/Typography';
import Cards from './elements/Cards';
import Tabs from './elements/Tabs';
import Breadcrumbs from './elements/Breadcrumbs';
import Forms from './elements/Forms';
import Loaders from './elements/Loaders';
import Avatars from './elements/Avatars';
import Invoice from './pages/Invoice';
import Analytics from './pages/Analytics';
import CmsPage from './pages/Cms';
import Widgets from './pages/Widgets';
import BlankPage from './pages/BlankPage';
import SubNav from './pages/SubNav';
import Feed from './pages/Feed';
import Modals from './elements/Modals';
import ProgressBars from './elements/ProgressBars';
import PaginationPage from './elements/Pagination';
import ErrorPage from './pages/404';

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
const pageList = [
  {
    name: 'Your Impact',
    path: '/home',
    component: Dashboard,
  },
  // {
  //   name: 'Your Impact',
  //   path: '/',
  //   component: ErrorPage,
  // },
  {
    name: 'Account',
    path: '/account',
    component: Account,
  },
  {
    name: 'Your Impact',
    path: '/error',
    component: ErrorPage,
  },
  {
    name: 'Supported Projects',
    path: '/supported-projects',
    component: SupportedProjects,
  },
  {
    name: 'Public Ledger',
    path: '/public/ledger',
    component: Typography,
  },
  {
    name: 'Offset CO2',
    path: '/offset-co21',
    component: Cards,
  },
  {
    name: 'Offset Plastic',
    path: '/offset-plastics',
    component: Tabs,
  },
  {
    name: 'Earth Positive Badges',
    path: '/earth-positive-badges',
    component: EarthPositiveBadges,
  },
  {
    name: 'Progress Bars',
    path: '/elements/progressbars',
    component: ProgressBars,
  },
  {
    name: 'Pagination',
    path: '/elements/pagination',
    component: PaginationPage,
  },
  {
    name: 'Modals',
    path: '/elements/modals',
    component: Modals,
  },
  {
    name: 'Breadcrumbs',
    path: '/elements/breadcrumbs',
    component: Breadcrumbs,
  },
  {
    name: 'Forms',
    path: '/elements/forms',
    component: Forms,
  },
  {
    name: 'Loaders',
    path: '/elements/loaders',
    component: Loaders,
  },
  {
    name: 'Avatars',
    path: '/elements/avatars',
    component: Avatars,
  },
  {
    name: 'Blank',
    path: '/pages/blank',
    component: BlankPage,
  },
  {
    name: 'Sub Navigation',
    path: '/pages/subnav',
    component: SubNav,
  },
  {
    name: '404',
    path: '/pages/404',
    component: ErrorPage,
  },
  {
    name: 'Analytics',
    path: '/apps/analytics',
    component: Analytics,
  },
  {
    name: 'Activity Feed',
    path: '/apps/feed',
    component: Feed,
  },
  {
    name: 'Invoice',
    path: '/apps/invoice',
    component: Invoice,
  },
  {
    name: 'CMS',
    path: '/apps/cms',
    component: CmsPage,
  },
  {
    name: 'Widgets',
    path: '/widgets',
    component: Widgets,
  },
];

export default pageList;
