import { useContext } from "react";
import { useQuery } from "react-query";

import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useEnrolledClasses = () => {
    const {user, loading} = useContext(AuthContext)
    const {axiosSecure} = useAxiosSecure()
    const {data : enrolledClasses = [], refetch} = useQuery({
        queryKey: ["selected-class", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolled-classes?email=${user?.email}`)
            return res.data
        }
    })
    return {enrolledClasses, refetch}
};

export default useEnrolledClasses;