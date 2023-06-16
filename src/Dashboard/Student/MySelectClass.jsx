

import { Link } from 'react-router-dom';


import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useSelectedClasses from '../../Hooks/useSelectedClasses';
import SelectedClassTable from './SelectedClassTable';


const MySelectClass = () => {


    const { selectedClasses, refetch } = useSelectedClasses()
    const { axiosSecure } = useAxiosSecure()
    const deleteSelectedClass = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-selected-class/${ id }`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })


    }


    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='my-10 text-3xl font-bold'>Select Class:{selectedClasses.length} </h1>
                <Link to='/dashboard/payment'>
                    <button className='bg-[#1b1e34] font-semibold px-6 py-2 rounded-md text-white'>Pay</button>
                </Link>
            </div>
            <div className='max-w-[1240px] mx-auto'>
                <section className='  h-[500px] mt-2 overflow-x-auto relative'>
                    <table className='w-full '>
                        <thead >
                            <tr className='bg-[#1b1e34]  text-white sticky top-0 px-10'>
                                <th className='py-3'></th>
                                <th className='py-3 uppercase'>Class Image</th>
                                <th className='py-3 uppercase'>Class Name</th>
                                <th className='py-3 uppercase'>Instructor Name</th>
                                <th className='py-3 uppercase'>Instructor Email</th>
                                <th className='py-3 uppercase'>Price</th>
                                <th className='py-3 uppercase'>Action</th>
                            </tr>
                        </thead>
                        <tbody >

                            {
                                selectedClasses && selectedClasses.map((singleClass, i) => <SelectedClassTable key={singleClass._id} singleClass={singleClass} i={i} deleteSelectedClass={deleteSelectedClass} />)
                            }

                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default MySelectClass;