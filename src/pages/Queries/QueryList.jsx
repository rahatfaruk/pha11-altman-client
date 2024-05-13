import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../comps/Loading";
import { Link } from "react-router-dom";

function QueryList({layout}) {
  const [queries, setQueries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios('/data.json')
    .then(res => {
      setQueries(res.data)
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
    <div >
      <div className={`grid gap-8 md:gap-10 ${layout==='grid'? 'md:grid-cols-2 lg:grid-cols-3':''}`}>
        {
          queries.length === 0 ? 
          (
            <div className="text-center space-y-4 md:col-span-2 lg:col-span-3">
              <p className="text-center text-xl text-gray-500">Query list is empty</p>
            </div>
          ) :
          queries.map((query) => <QueryCard key={query._id} query={query} layout={layout} />)
        }
      </div>
    </div>
  );
}

export default QueryList;


function QueryCard({query, layout}) {
  const {_id, productName, productBrand, productImageUrl, queryTitle, alternationReason, userName, userPhotoUrl, postedTimestamp, recommendationCount} = query
  const formattedTime = new Date(+postedTimestamp).toLocaleString()

  return (
    <div className="border rounded-md shadow-md overflow-hidden">
      {/* user info, time */}
      <div className="flex items-center justify-between p-3 bg-gray-200 dark:bg-gray-700">
        <div className="flex items-center space-x-2">
          <figure className="p-0.5 inline-block border border-cyan-600 rounded-full">
            <img src={userPhotoUrl} className="size-7 rounded-full" alt='' />
          </figure>
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none dark:text-gray-200">{userName}</h2>
            <span className="inline-block text-xs leading-none dark:text-gray-400">posted: {formattedTime}</span>
          </div>
        </div>
      </div>

      <div className={layout==='list' ? 'md:flex p-4 items-center' : ''}>
        <div className={layout==='list' ? 'md:w-1/2 lg:w-1/3':''}>
          <img className={`${layout==='list' ? 'md:h-56 rounded-md' : 'md:h-80'} object-cover object-bottom w-full h-64`} src={productImageUrl} alt="" />
        </div>

        {/* query, product info */}
        <div className="p-4">
          <h4 className="text-cyan-600 rounded-md mb-2">Query: {queryTitle}</h4>
          <h3 className="mb-1 text-xl font-semibold text-gray-800 dark:text-white">{productName}</h3>
          <p className="mb-1 text-gray-500 dark:text-gray-400">Brand: {productBrand}</p>
          <p className="mb-1 text-gray-500 dark:text-gray-400">Alteration reason: {alternationReason}</p>
          <p className="mb-1 text-gray-500 dark:text-gray-400">Recommendation: {recommendationCount}</p>

          <ul className="flex gap-4 mt-4">
            <li>
              <Link to={`/query-details/${_id}`} className="bg-cyan-600 text-white px-2.5 py-1 rounded-md inline-block hover:opacity-85 capitalize" >Recommend</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}