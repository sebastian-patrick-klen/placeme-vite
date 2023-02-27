import UserCard from './UserCard';

export default function AllUsers({ users }) {
  return (
    <div className='mx-auto max-w-6xl grid grid-cols-3 gap-y-6 gap-x-6 my-16'>
      {users.map((user) => (
        <UserCard
          img={user.image}
          name={user.name}
          posts={user.places.length}
          id={user.id}
          key={user.id}
        />
      ))}
    </div>
  );
}
