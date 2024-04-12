import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from 'src/hooks/useAuth';
import { useLoader } from 'src/hooks/useLoader';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  useEffect(() => {
    toast.success(' Hi, Welcome back 👋');
  }, []);
  const { isLoggedIn } = useAuth();
  const { loading } = useLoader();
  console.log('loading', loading);
  console.log('isLoggedIn', isLoggedIn);

  return (
    <>
      {/* <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet> */}

      <AppView />
    </>
  );
}
