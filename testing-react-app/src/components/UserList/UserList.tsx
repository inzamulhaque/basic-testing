import { useEffect, useState } from "react";
import "./UserList.css";

type User = {
  name: string;
  age: number;
};

type UserListProps = {
  users: User[];
};

const UserList = ({ users }: UserListProps) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1500);
  }, []);

  if (users.length === 0) {
    return <p>No users available.</p>;
  }

  return (
    <div className="table-container">
      <h2>User List</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody data-testid="user-list-body">
          {users.map((user, index) => (
            <tr key={`${user.name}-${index}`}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showMessage && <div data-testid="welcome-message">Welcome</div>}
    </div>
  );
};

export default UserList;
