import { useEffect, useState } from "react";
import { maxContent } from "../../App";
import useAxios from "../../hooks/useAxios";
import Loading from "../../comps/Loading";
import QueryList from "./QueryList";
import SearchLayout from "./SearchLayout";
import { toast } from "react-toastify";

function Queries() {
  const [layout, setLayout] = useState('grid')
  const [queries, setQueries] = useState([])
  const [searchedQueries, setSearchedQueries] = useState([])
  const [loading, setLoading] = useState(true)
  const {axiosBase} = useAxios()

  const searchQueries = (search) => {
    const resultArr = queries.filter(query => 
      query.productName.toLowerCase().includes(search.toLowerCase())
    )
    setSearchedQueries(resultArr);
  }

  useEffect(() => {
    axiosBase('/all-queries')
    .then(res => {
      setQueries(res.data)
      setSearchedQueries(res.data)
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
    <section className="flex-1 px-4 dark:bg-gray-800">
      <div className={`${maxContent} py-10`}>
        <h2 className="text-center mb-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-800 dark:text-white">
          All Queries
        </h2>

        <SearchLayout setLayout={setLayout} searchQueries={searchQueries} />

        <QueryList layout={layout} queries={searchedQueries} />
      </div>
    </section>
  );
}

export default Queries;