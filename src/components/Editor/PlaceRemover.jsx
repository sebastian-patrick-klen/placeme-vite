import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../utils/auth';

export default function ({ id }) {
  const navigate = useNavigate();
  const token = getAuthToken();

  async function handleDelete() {
    const fetchString = `${import.meta.env.VITE_API_URL}/api/places/${id}`;

    const res = await fetch(fetchString, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token[1]}`,
      },
    });

    const data = await res.json();

    if (res.ok) {
      navigate('/');
    }
  }

  return (
    <button
      onClick={handleDelete}
      className='text-red11 bg-red4 hover:bg-red5 inline-flex py-3 items-center justify-center rounded-md px-4 font-medium leading-none outline-none'
    >
      Smazat
    </button>
  );
}
