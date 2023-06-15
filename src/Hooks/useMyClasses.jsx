import { useContext } from 'react';
import { useQuery } from 'react-query';

import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const useMyClasses = () => {
    const {user, loading} = useContext(AuthContext)
    const {axiosSecure} = useAxiosSecure()
    const {data: classes = [], refetch} = useQuery({
        queryKey: ["my-classes", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-classes?email=${user?.email}`)
            return res.data
        }
    })
    return {classes, refetch}
};

export default useMyClasses;