import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { maxContent } from "../App";
import useAxios from "../hooks/useAxios";
import Loading from "../comps/Loading";

function UpdateQuery() {
  const [query, setQuery] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  const { axiosBase } = useAxios()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    const formData = {
      productName: e.target.productName.value,
      productBrand: e.target.productBrand.value,
      productImageUrl: e.target.productImageUrl.value,
      queryTitle: e.target.queryTitle.value,
      alternationReason: e.target.alternationReason.value
    }

    // send update req to server
    axiosBase.patch(`/update-query?id=${_id}`, formData)
      .then(res => {
        toast.success('query updated successfully')
        navigate('/my-queries')
      })
      .catch(err => toast.error('failed to add query: ', err.message))
  }

  // get query onload page
  useEffect(() => {
    axiosBase(`/query-details?id=${id}`)
    .then(res => {
      setQuery(res.data)
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

  const { _id, productName, productBrand, productImageUrl, queryTitle, alternationReason } = query
  return (
    <section className="flex-1 px-4 dark:bg-gray-800">
      <div className={`${maxContent} py-10`}>
        <h2 className="text-center mb-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-800 dark:text-white">
          Update Query
        </h2>

        <form onSubmit={handleSubmit} id="form" className="max-w-2xl mx-auto">
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">product name</span>
            <input type="text" name="productName" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" defaultValue={productName} required />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">product brand</span>
            <input type="text" name="productBrand" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" defaultValue={productBrand} required />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">product image url</span>
            <input type="text" name="productImageUrl" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" defaultValue={productImageUrl} placeholder="http://www.photo.jpg" required />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">query title</span>
            <input type="text" name="queryTitle" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" defaultValue={queryTitle} required />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Alternation Reason</span>
            <input type="text" name="alternationReason" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" defaultValue={alternationReason} required />
          </label>

          <div className="mt-6">
            <button type="submit" className="bg-cyan-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Update query</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UpdateQuery;