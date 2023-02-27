import { Fragment } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loading from './Loading';

const Layout = ({ children }) => {
  const navigation = useNavigation();
  return (
    <Fragment>
      <Header />
      <main>{navigation.state === 'loading' ? <Loading /> : <Outlet />}</main>
    </Fragment>
  );
};

export default Layout;
