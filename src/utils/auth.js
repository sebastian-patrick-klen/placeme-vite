export function getAuthToken() {
  const res = localStorage.getItem('token');

  if (!res) return '';
  // [userId, token]
  const token = res.split(' ');

  return token;
}

export function logOut() {
  localStorage.removeItem('token');
}
