import usePayment from "../../Hooks/usePayment";
import PaymentHistoryTable from "./PaymentHistoryTable";




const PaymentHistory = () => {

    const { paymentHistory } = usePayment()


    return (
        <main className='h-screen mt-20 overflow-hidden'>
            <section className='h-[650px] mt-2 overflow-x-auto relative'>
                <table className='w-full'>
                    <thead >
                        <tr className='sticky top-0 px-10 bg-[#1b1e34]'>
                            <th className='py-3 text-white'></th>
                            <th className='py-3 text-white'>Transaction Id</th>
                            <th className='py-3 text-white'>Price</th>
                            <th className='py-3 text-white'>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            paymentHistory && paymentHistory.map((payment, i) => <PaymentHistoryTable key={payment._id} payment={payment} i={i} />)
                        }

                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default PaymentHistory;