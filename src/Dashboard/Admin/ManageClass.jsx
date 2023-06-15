
import Swal from "sweetalert2";
import { useState } from "react";
import useClasses from "../../Hooks/useClasses";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ManageClassCard from "./ManageClassCard";


const ManageClass = () => {


  const { classes, refetch } = useClasses("all");
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const { axiosSecure } = useAxiosSecure();
  const updateStatus = async (status, id) => {
    const res = await axiosSecure.put(`/change-class-status/${id}`, { status });
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Status Has Updated",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const sendFeedback = (e) => {
    e.preventDefault();

    if (e.target.feed.value) {
      axiosSecure
        .put(`/send-feedback/${id}`, { feedback: e.target.feed.value })

        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Feedback Has been Sent",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      e.target.reset();
      setIsOpen(false);
    }
  };

  const openFeed = (id) => {
    setIsOpen(true);
    setId(id);
  };

  return (
    <div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } p-4 max-w-[700px] h-[300px] shadow-lg fixed z-[111111] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded bg-white`}
      >
        <form onSubmit={sendFeedback}>
          <textarea
            required
            name="feed"
            placeholder="write your feedback"
            className="w-full h-[220px] text-black bg-white resize-none outline-0 border-2 p-4 rounded"
          ></textarea>
          <div className="flex justify-center gap-3">
            <button className="px-4 py-2 text-white rounded bg-[#1b1e34]">
              Send
            </button>
            <div
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-white rounded cursor-pointer bg-[#1b1e34] "
            >
              close
            </div>
          </div>
        </form>
      </div>
      <section className="  h-[500px] mt-2 overflow-x-auto relative">
        <h2 className="my-10 text-3xl font-bold">
          Manage Class:{classes.length}{" "}
        </h2>
        <table className="w-full ">
          <thead className="bg-[#1b1e34] text-white">
            <th className="py-3 "></th>
            <th className="py-3 lowercase">CLASS IMAGE</th>
            <th className="py-3 lowercase">CLASS NAME</th>
            <th className="py-3 lowercase">INSTRUCTOR EMAIL</th>
            <th className="py-3 lowercase">INSTRUCTOR NAME</th>
            <th className="py-3 lowercase">AVAILAVLE SEATS</th>
            <th className="py-3 lowercase">PRICE</th>
            <th className="py-3 lowercase">ACTION</th>
          </thead>
          <tbody>
            {classes &&
              classes.map((singleClass, i) => (
                <ManageClassCard
                  key={singleClass._id}
                  updateStatus={updateStatus}
                  openFeed={openFeed}
                  i={i}
                  singleClass={singleClass}
                />
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ManageClass;
