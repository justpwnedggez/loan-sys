import React, { useState, useEffect } from "react";
import Users from "@/Pages/MasterFiles/Users";

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", email: "" });

    const fetchUsers = () => {
        return [
            { id: 1, name: "John Doe", email: "john@example.com" },
            { id: 2, name: "Jane Doe", email: "jane@example.com" },
        ];
    };

    useEffect(() => {
        const data = fetchUsers();
        setUsers(data);
    }, []);

    const addUser = () => {
        setUsers([
            ...users,
            { id: users.length + 1, name: form.name, email: form.email },
        ]);
        setForm({ id: null, name: "", email: "" });
    };

    return (
        <Users
            users={users}
            form={form}
            setForm={setForm}
        />
    );
};

export default UserContainer;
