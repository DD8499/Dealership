import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  useEffect(() => {
    toast.success(' Hi, Welcome back 👋');
  }, []);
  return (
    <>
      {/* <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet> */}

      <AppView />
    </>
  );
}
