import React from "react";
import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const { data } = useQuery("users", () => fetch("").then((res) => res.json()));
  return (
    <div>
      <h1>All users</h1>
    </div>
  );
};

export default Users;
