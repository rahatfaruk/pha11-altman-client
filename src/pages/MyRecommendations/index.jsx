import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { maxContent } from "../../App";
import SectionTitle from "../../comps/SectionTitle";
import Table from "./Table";
import Loading from "../../comps/Loading";

function MyRecommendations() {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)
  const {axiosBase} = useAxios()
  const {user} = useAuth()

  const deleteRecommendation = id => {
    setRecommendations(recommendations.filter(rec => rec._id !== id))
  }

  // get my comments/recommendations (where i am recommender)
  useEffect(() => {
    axiosBase(`/all-recommendations?recommenderEmail=${user.email}`)
    .then(res => {
      setRecommendations(res.data)
      setLoading(false)
    })
    .catch(err => {
      setLoading(false)
      toast.error('fetching comments failed!' + err.message)
    })
  }, [])

  if (loading) {
    return <Loading />
  }
  return (  
    <section className="flex-1 px-4 dark:bg-gray-800 dark:text-white">
      <div className={`${maxContent} py-10`}>
        <SectionTitle title={'My Recommendations'} />

        <Table recommendations={recommendations} deleteRecommendation={deleteRecommendation} />
      </div>
    </section>
  );
}

export default MyRecommendations;