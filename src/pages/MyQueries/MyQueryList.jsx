import { useEffect, useState } from "react";
import { maxContent } from "../../App";
import SectionTitle from "../../comps/SectionTitle";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../comps/Loading";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

function MyQueryList() {
  const [myQueries, setMyQueries] = useState([])
  const [loading, setLoading] = useState(true)
  const {axiosBase} = useAxios()
  const {user} = useAuth()

  useEffect(() => {
    axiosBase(`/my-queries?userEmail=${user.email}`)
    .then(res => {
      console.log('my-queries:', res.data);
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
            myQueries.map((query) => <QueryCard key={query._id} query={query} />)
          }
          
        </div>
      </div>
    </section>
  );
}

export default MyQueryList;


function QueryCard({query}) {
  const {_id, productName, productBrand, productImageUrl, queryTitle, alternationReason, userName, userEmail, userPhotoUrl, postedTimestamp, recommendationCount} = query
  const formattedTime = new Date(+postedTimestamp).toLocaleString()

  return (
    <div className="border rounded-md shadow-md">
      {/* user info, time */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <figure className="p-0.5 inline-block border border-cyan-600 rounded-full">
            <img src={userPhotoUrl} className="size-7 rounded-full" alt='' />
          </figure>
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none dark:text-gray-200">{userName} | {userEmail}</h2>
            <span className="inline-block text-xs leading-none dark:text-gray-400">posted: {formattedTime}</span>
          </div>
        </div>
      </div>

      <img className="object-cover object-bottom w-full h-64 lg:h-80" src={productImageUrl} alt="" />

      {/* query, product info */}
      <div className="p-4">
        <h4 className="text-cyan-600 rounded-md mb-2">Query: {queryTitle}</h4>
        <h3 className="mb-1 text-xl font-semibold text-gray-800 dark:text-white">{productName}</h3>
        <p className="mb-1 text-gray-500 dark:text-gray-400">Brand: {productBrand}</p>
        <p className="mb-1 text-gray-500 dark:text-gray-400">Alteration reason: {alternationReason}</p>
        <p className="mb-1 text-gray-500 dark:text-gray-400">Recommendation: {recommendationCount}</p>

        <ul className="flex gap-4 mt-4">
          <li>
            <Link to={`/query-details/${_id}`} className="bg-cyan-600 text-white px-2.5 py-1 rounded-md inline-block hover:opacity-85 capitalize" >View Details</Link>
          </li>
          <li>
            <Link to={'/update-query'} className="bg-cyan-600 text-white px-2.5 py-1 rounded-md inline-block hover:opacity-85 capitalize" >Update</Link>
          </li>
          <li>
            <button className="bg-red-800 text-white px-2.5 py-1 rounded-md inline-block hover:opacity-85 capitalize">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { QueryCard };