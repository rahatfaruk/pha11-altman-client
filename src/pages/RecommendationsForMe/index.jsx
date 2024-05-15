import { useEffect, useState } from "react";
import axios from "axios";
import { maxContent } from "../../App";
import SectionTitle from "../../comps/SectionTitle";
import Table from "./Table";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Loading from "../../comps/Loading";

function RecommendationsForMe() {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)
  const {axiosBase, axiosSecure} = useAxios()
  const {user} = useAuth()

  // get recommendations for me (where others are recommender)
  useEffect(() => {
    axiosSecure(`/all-recommendations?userEmail=${user.email}`)
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
        <SectionTitle title={'Recommendations for me'} />

        <Table recommendations={recommendations} />
      </div>
    </section>
  );
}

export default RecommendationsForMe;