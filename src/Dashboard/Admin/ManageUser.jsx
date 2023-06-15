import React from "react";
import useTitle from "../../../hook/useHook";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useUsers from "../../../hook/useUsers";
import ManageUserCard from "../components/ManageUserCard";

const ManageUser = () => {
  useTitle("Manage Users");

  const { refetch, users } = useUsers();
  const { axiosSecure } = useAxiosSecure();
  const updateUserRole = async (role, id) => {
    const res = await axiosSecure.put(`/change-user-role/${id}`, { role });
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Student Role Has Updated",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-user/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="max-w-[1240px] mx-auto my-10">
      <h2 className="my-10 text-3xl font-bold">Manage User:{users.length} </h2>
      <section className=" h-[500px] mt-2 overflow-x-auto relative">
        <table className="w-full text-white">
          <thead>
            <tr className="bg-[#1b1e34]  sticky top-0 px-10">
              <th className="py-3"></th>
              <th className="py-3">USER IMAGE</th>
              <th className="py-3">NAME</th>
              <th className="py-3">EMAIL</th>
              <th className="py-3">ROLE</th>
              <th className="py-3">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, i) => (
                <ManageUserCard
                  key={user._id}
                  i={i}
                  user={user}
                  updateUserRole={updateUserRole}
                  deleteUser={deleteUser}
                />
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ManageUser;
