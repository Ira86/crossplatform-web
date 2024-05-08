import { useGetUsersQuery } from "../../store/api/usersApi";

const AnjasNamn = ({ user }) => (
  <li>
    {user.firstName} {user.lastName}
  </li>
);

export const UserList = () => {
  const { data: users, isLoading, isError, refetch } = useGetUsersQuery({});

  if (isLoading) return <div>Laddar...</div>;
  if (isError || !users) return <div>Error loading users</div>;

  return (
    <div>
      <h2>Användare</h2>
      <button className="submitButton1" onClick={refetch}>
        Uppdatera lista
      </button>{" "}
      <ul>
        {users.map((user) => (
          <AnjasNamn key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
