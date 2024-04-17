import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const ManagerDashboard = lazy(() => import('src/pages/ManagerDashboard'));
export const AccountView = lazy(() => import('src/pages/AccountView'));
export const AccountDetails = lazy(() => import('src/pages/AccountDetails'));
export const Leads = lazy(() => import('src/pages/Leads'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const SignPage = lazy(() => import('src/pages/Signup'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'manager-dashboard', element: <ManagerDashboard /> },
        { path: 'leads', element: <Leads /> },
        { path: 'accounts/view', element: <AccountView /> },
        { path: 'accounts/details', element: <AccountDetails /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
