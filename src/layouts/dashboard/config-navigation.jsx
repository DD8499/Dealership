import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Salesperson Dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Manager Dashboard',
    path: '/manager-dashboard',
    icon: icon('managerDashboard'),
  },
  {
    title: 'Leads',
    path: '/leads',
    icon: icon('leads'),
  },
  {
    title: 'Accounts',
    path: '/accounts',
    icon: icon('account'),
  },
  {
    title: 'Activities',
    path: '/activities',
    icon: icon('activity'),
  },
  {
    title: 'Considerations',
    path: '/considerations',
    icon: icon('consideration'),
  },
  {
    title: 'Inventory Management',
    path: '/inventory',
    icon: icon('inventory'),
  },
  {
    title: 'ICQ',
    path: '/icq',
    icon: icon('accounting'),
    toolTip: 'Integrated Accounting With Quickbooks',
  },
  {
    title: 'POS & RM',
    path: '/pos',
    icon: icon('pos'),
    toolTip: 'POS & Retails Management',
  },
  {
    title: 'RTA',
    path: '/rta',
    icon: icon('reporting'),
    toolTip: 'Reporting Tool And Analytics',
  },
  {
    title: 'SSPT',
    path: '/sspt',
    icon: icon('ic_cart'),
    toolTip: 'Service Scheduling And Productivity Tracker',
  },
  {
    title: 'ROBE',
    path: '/robe',
    icon: icon('ic_lock'),
    toolTip: 'Repair Order And Billing Estimates',
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;