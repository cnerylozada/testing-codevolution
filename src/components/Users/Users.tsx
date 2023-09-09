import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/users";

export const Users = () => {
  const [users, setUsers] = useState<{ id: string; name: string }[]>();
  useEffect(() => {
    getAllUsers().then((_) => {
      setUsers(_);
    });
  }, []);
  return (
    <div>
      <div>Users</div>
      {users && (
        <div>
          {users.map((_, index) => {
            return (
              <div key={index}>
                id: {_.id} Name: {_.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
