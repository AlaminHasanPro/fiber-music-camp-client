import { useContext } from "react";
import { useQuery } from "react-query";
import { useAuthGlobally } from "../context/AuthProvider";
import { AuthContext } from "../Provider/AuthProvider";

const useUsers = () => {
  const { axiosSecure } = useContext(AuthContext);
  const { loading } = useAuthGlobally();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return { users, refetch };
};

export default useUsers;
