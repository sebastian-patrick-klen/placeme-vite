import { useLoaderData } from 'react-router-dom';
import AllUsers from '../components/User/AllUsers';

const UsersPage = () => {
  const data = useLoaderData();

  return <AllUsers users={data.users} />;
};

export default UsersPage;
