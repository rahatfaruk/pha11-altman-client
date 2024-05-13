import { useEffect, useState } from "react";
import axios from "axios";
import { maxContent } from "../../App";
import SectionTitle from "../../comps/SectionTitle";
import Table from "./Table";

function RecommendationsForMe() {
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    axios('/data2.json')
    .then(res => {
      setRecommendations(res.data)
    })
  })

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