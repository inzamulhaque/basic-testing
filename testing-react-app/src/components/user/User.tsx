import { type ChangeEvent, type FormEvent, useState } from "react";
import "./User.css";

type FormData = {
  name: string;
  email: string;
};

const User = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const [users, setUsers] = useState<FormData[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    setUsers((prev) => [...prev, formData]);

    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <div className="container">
      <h1>User Form</h1>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          id="name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          id="email"
        />

        <button type="submit">Add User</button>
      </form>

      <h2>User List</h2>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={3}>No data available</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;
