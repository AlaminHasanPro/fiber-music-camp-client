import useEnrolledClasses from "../../Hooks/useEnrolledClasses";
import EnrolledClassTable from "./EnrollClassTable";




const EnrolledClass = () => {

    const { enrolledClasses } = useEnrolledClasses()


    return (
        <main className='h-screen mt-20 overflow-hidden'>
            <section className='h-[650px] mt-2 overflow-x-auto relative'>
                <table className='w-full'>
                    <thead >
                        <tr className='sticky top-0 px-10 bg-[#1b1e34]'>
                            <th className='py-3 text-white'></th>
                            <th className='py-3 text-white'>Class Image</th>
                            <th className='py-3 text-white'>Class Name</th>
                            <th className='py-3 text-white'>Instructor Name</th>
                            <th className='py-3 text-white'>Instructor Email</th>
                            <th className='py-3 text-white'>Price</th>

                        </tr>
                    </thead>
                    <tbody >

                        {
                            enrolledClasses && enrolledClasses.map((singleClass, i) => <EnrolledClassTable key={singleClass._id} singleClass={singleClass} i={i} />)
                        }

                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default EnrolledClass;