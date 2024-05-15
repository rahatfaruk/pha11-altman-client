import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { maxContent } from "../../App";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Loading from "../../comps/Loading";
import SectionTitle from "../../comps/SectionTitle";
import QueryCard from "./QueryCard";

function MyQueryList() {
  const [myQueries, setMyQueries] = useState([])
  const [loading, setLoading] = useState(true)
  const {axiosBase} = useAxios()
  const {user} = useAuth()

  // delete a spot
  const handleDeleteQuery = id => {
    // show confirm dialog before delete
    Swal.fire({
      title: "Are you sure?",
      text: "This Spot will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0891b2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // send delete request 
        axiosBase.delete(`/delete-query/${id}`)
        .then(() => {
          // delete confirmation msg
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          // update UI: remove card
          setMyQueries(myQueries.filter(mq => mq._id !== id))
        })
        .catch(err => {
          toast.error('could not delete! ' + err.message)
          console.log(err.message);
        }) 
      }
    });
  }


  useEffect(() => {
    axiosBase(`/my-queries?userEmail=${user.email}`)
    .then(res => {
      setMyQueries(res.data)
      setLoading(false)
    })
    .catch(err => {
      setLoading(false)
      toast.error('fetching queries failed!' + err.message)
    })
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <section className="px-4 dark:bg-gray-800">
      <div className={`${maxContent} py-10`}>
        <SectionTitle title={'My Queries'} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {
            myQueries.length === 0 ? 
            (
              <div className="text-center space-y-4 md:col-span-2 lg:col-span-3">
                <p className="text-center text-xl text-gray-500">Your query list is empty</p>
                <Link to={'/add-query'} className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-cyan-600 text-white font-semibold hover:opacity-85 capitalize">Add New Query </Link>
              </div>
            ) :
            myQueries.map((query) => <QueryCard key={query._id} query={query} onDeleteQuery={handleDeleteQuery} />)
          }
          
        </div>
      </div>
    </section>
  );
}

export default MyQueryList;
