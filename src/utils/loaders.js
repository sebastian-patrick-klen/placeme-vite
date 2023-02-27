import { json } from 'react-router-dom';

export async function placesLoader() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/places`);

  if (!res.ok) {
    return json({}, { status: res.status });
  } else {
    return res;
  }
}

export async function usersLoader() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users`);

  if (!res.ok) {
    throw json({}, { status: res.status });
  } else {
    return res;
  }
}

export async function placesByUserLoader({ request, params }) {
  console.log(params.id);
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/places/user/${params.id}`
  );

  if (!res.ok) {
    throw json({}, { status: res.status });
  } else {
    return res;
  }
}
