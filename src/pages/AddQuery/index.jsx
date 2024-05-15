import { toast } from "react-toastify";
import { maxContent } from "../../App";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

function AddQuery() {
  const {user} = useAuth()
  const {axiosSecure} = useAxios()

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = {
      productName:e.target.productName.value, 
      productBrand:e.target.productBrand.value, 
      productImageUrl:e.target.productImageUrl.value,
      queryTitle:e.target.queryTitle.value, 
      alternationReason:e.target.alternationReason.value
    }

    const newQuery = {
      ...formData,
      userName: user.displayName,
      userEmail: user.email,
      userPhotoUrl: user.photoURL,
      postedTimestamp: new Date().getTime(),
      recommendationCount: 0
    }

    // post newQuery into db
    axiosSecure.post(`/add-query?email=${user.email}`, newQuery)
    .then(res => {
      toast.success('query added successfully')
      e.target.reset()
    })
    .catch(err => toast.error('failed to add query: ', err.message))
  }

  return (  
    <section className="flex-1 px-4 dark:bg-gray-800">
      <div className={`${maxContent} py-10`}>
        <h2 className="text-center mb-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-800 dark:text-white">
          Add Query
        </h2>

        <form onSubmit={handleSubmit} id="form" className="max-w-2xl mx-auto">
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">product name</span>
            <input type="text" name="productName" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" required />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">product brand</span>
            <input type="text" name="productBrand" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" required />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">product image url</span>
            <input type="text" name="productImageUrl" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" placeholder="http://www.photo.jpg" required />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">query title</span>
            <input type="text" name="queryTitle" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" required />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Alternation Reason</span>
            <input type="text" name="alternationReason" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" required />
          </label>

          <div className="mt-6">
            <button type="submit" className="bg-cyan-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Add query</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddQuery;