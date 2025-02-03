import React from "react";
import "./users.css";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", img: "https://via.placeholder.com/80" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", img: "https://via.placeholder.com/80" },
];

function Users() {
  return (
    <div className="users-container">
      <h1 className="text-xl font-bold mb-4">Users List</h1>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.img} alt={user.name} />
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
