function Table({recommendations}) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:border">
      <table className="w-full text-sm md:text-base text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs md:text-base text-gray-700 uppercase bg-cyan-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">Product Name</th>
            <th scope="col" className="px-4 py-3">Recommend Product</th>
            <th scope="col" className="px-4 py-3">Recommender Email</th>
            <th scope="col" className="px-4 py-3">ID</th>
            <th scope="col" className="px-4 py-3">Posted Time</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.length < 1 ? 
          <p className="text-center py-8 px-2 text-xl font-semibold">No recommendations available!</p> :
          recommendations.map(rec => (
            <tr key={rec._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-cyan-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{rec.productName}</th>
              <td className="px-4 py-4">{rec.recommendProductName}</td>
              <td className="px-4 py-4 text-sm">{rec.recommenderEmail}</td>
              <td className="px-4 py-4 text-sm">{rec._id}</td>
              <td className="px-4 py-4 text-sm">{new Date(+rec.postedTimestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table