import { useParams } from "react-router-dom";
import { maxContent } from "../../App";
import QueryInfo from "./QueryInfo";
import Loading from "../../comps/Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../../comps/SectionTitle";
import RecommendForm from "./RecommendForm";
import Comments from "./Comments";

function QueryDetails() {
  const [query, setQuery] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    axios('/data.json')
    .then(res => {
      setQuery(res.data[id])
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
    <section className="flex-1 px-4 dark:bg-gray-800 dark:text-white">
      <div className={`${maxContent} py-10`}>
        <SectionTitle title={'Query Details'} />

        <div className="bg-gray-200 px-4 py-10 rounded-md dark:bg-gray-700">
          <QueryInfo query={query} />
        </div>

        <div className="bg-gray-200 px-4 py-10 rounded-md dark:bg-gray-700 mt-8">
          <RecommendForm query={query} />
          <Comments />
        </div>

      </div>
    </section>
  );
}

export default QueryDetails;