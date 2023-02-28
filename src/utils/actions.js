export async function newPlaceAction() {
  const fetchString = `${import.meta.env.VITE_API_URL}/api/places`;

  fetch(fetchString, {
    method: 'PATCH',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.user.token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      router.push(`/places/${res.place.id}`);
    })
    .catch((err) => {
      console.log(err);
    });
}
