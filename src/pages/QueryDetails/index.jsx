import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { maxContent } from "../../App";
import QueryInfo from "./QueryInfo";
import Loading from "../../comps/Loading";
import SectionTitle from "../../comps/SectionTitle";
import RecommendForm from "./RecommendForm";
import Comments from "./Comments";

function QueryDetails() {
  const [query, setQuery] = useState({})
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingCom, setLoadingCom] = useState(true)
  const {id} = useParams()
  const {axiosBase} = useAxios()

  // increase recommendationCount by 1
  const incRecCount = () => {
    setQuery({...query, recommendationCount: query.recommendationCount+1})
  }

  // add new comment
  const addComment = (newComment) => {
    setComments( [newComment, ...comments] )
  }

  // get this query details info
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

  // get comments/recommendations of this query
  useEffect(() => {
    axiosBase(`/query-comments?queryId=${id}`)
    .then(res => {
      setComments(res.data)
      setLoadingCom(false)
    })
    .catch(err => {
      setLoadingCom(false)
      toast.error('fetching comments failed!' + err.message)
    })
  }, [])

  if (loading || loadingCom) {
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
          <RecommendForm query={query} incRecCount={incRecCount} addComment={addComment}  />
          <Comments comments={comments} />
        </div>

      </div>
    </section>
  );
}

export default QueryDetails;