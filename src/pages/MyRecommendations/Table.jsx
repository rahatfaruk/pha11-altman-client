import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

function Table({recommendations, deleteRecommendation}) {
  const {axiosSecure} = useAxios()
  const {user} = useAuth()

  // delete my recommendation
  const handleDelete = id => {
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
        // TODO: send delete request 
        axiosSecure.delete(`/delete-recommendation/${id}?email=${user.email}`)
        .then(() => {
          // delete confirmation msg
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          // update UI: remove this recomend from table
          deleteRecommendation(id)

        })
        .catch(err => {
          alert('could not delete!')
          console.log(err.message);
        }) 

      }
    });
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:border">
      <table className="w-full text-sm md:text-base text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs md:text-base text-gray-700 uppercase bg-cyan-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">Product Name</th>
            <th scope="col" className="px-4 py-3">Recommend Product</th>
            <th scope="col" className="px-4 py-3">ID</th>
            <th scope="col" className="px-4 py-3">Posted Time</th>
            <th scope="col" className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map(rec => (
            <tr key={rec._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-cyan-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{rec.productName}</th>
              <td className="px-4 py-4">{rec.recommendProductName}</td>
              <td className="px-4 py-4 text-sm">{rec._id}</td>
              <td className="px-4 py-4 text-sm">{new Date(+rec.postedTimestamp).toLocaleString()}</td>
              <td className="px-4 py-4 flex gap-2 md:gap-4 flex-col md:flex-row">
                <button onClick={() => handleDelete(rec._id)} className="bg-red-700 text-white px-4 py-1 rounded-md hover:opacity-90">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default Table