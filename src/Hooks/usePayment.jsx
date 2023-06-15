import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const usePayment = () => {
    const {user, loading} = useContext(AuthContext)
    const {axiosSecure} = useAxiosSecure()
    const {data: paymentHistory = []} = useQuery({
        queryKey: ["payment-history", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-history?email=${user?.email}`)
            return res.data
        }
    })
    return {paymentHistory}
};

export default usePayment;