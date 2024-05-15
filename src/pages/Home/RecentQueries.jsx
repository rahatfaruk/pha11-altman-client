import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { maxContent } from "../../App";
import useAxios from "../../hooks/useAxios";
import SectionTitle from "../../comps/SectionTitle";
import Loading from "../../comps/Loading";

function RecentQueries() {
  const [myQueries, setMyQueries] = useState([])
  const [loading, setLoading] = useState(true)
  const {axiosBase} = useAxios()

  useEffect(() => {
    axiosBase('/all-queries')
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
        <SectionTitle title={'Recent Queries'} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {
            myQueries.length === 0 ? 
            (
              <div className="text-center space-y-4 md:col-span-2 lg:col-span-3">
                <p className="text-center text-xl text-gray-500">Query list is empty</p>
              </div>
            ) :
            myQueries.map((query) => <QueryCard key={query._id} query={query} />)
          }
        </div>
      </div>
    </section>
  );
}

export default RecentQueries;


function QueryCard({query}) {
  const {productName, productBrand, productImageUrl, queryTitle, alternationReason, userName, userEmail,userPhotoUrl, postedTimestamp} = query
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
        
      </div>
    </div>
  );
}

export { QueryCard };