import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/users/usersService";

type UseFetchUsersResult = {
  users: getAllUsersResponseDTO | null;
  error: string | null;
  loading: boolean;
  getUserById: (userId: number) => UserType | null;
};

const useFetchUsers = (): UseFetchUsersResult => {
  const [users, setUsers] = useState<getAllUsersResponseDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setLoading(true);

        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const getUserById = (userId: number): UserType | null => {
    if (users) {
      const user = users.find((user) => user.id === userId);
      return user || null;
    }
    return null;
  };

  return { users, error, loading, getUserById };
};

export default useFetchUsers;
