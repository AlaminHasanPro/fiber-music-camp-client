import { useContext } from "react";
import { useQuery } from "react-query";

import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useClass = (id) => {
    const { user, loading } = useContext(AuthContext)
    const { axiosSecure } = useAxiosSecure()
    const { data: singleClass = {} } = useQuery({
        queryKey: ['class', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/class/${id}`)
            return res.data
        }
    })
    return { singleClass }
};

export default useClass;