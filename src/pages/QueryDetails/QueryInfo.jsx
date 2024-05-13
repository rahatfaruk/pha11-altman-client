function QueryInfo({ query }) {
  const { _id, productName, productBrand, productImageUrl, queryTitle, alternationReason, userName, userEmail, userPhotoUrl, postedTimestamp, recommendationCount } = query
  const formattedTime = new Date(+postedTimestamp).toLocaleString()

  return (
    <div className="border rounded-md shadow-md max-w-2xl mx-auto bg-white dark:bg-cyan-950">
      {/* user info, time */}
      <div className="flex items-center justify-between p-3 dark:bg-cyan-900. rounded-t-md">
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

      <img className="object-cover w-full h-64 lg:h-80" src={productImageUrl} alt="" />

      {/* query, product info */}
      <div className="p-4">
        <h4 className="text-cyan-600 rounded-md mb-2">Query: {queryTitle}</h4>
        <h3 className="mb-1 text-xl font-semibold text-gray-800 dark:text-white">{productName}</h3>
        <p className="mb-1 text-gray-500 dark:text-gray-400">Brand: {productBrand}</p>
        <p className="mb-1 text-gray-500 dark:text-gray-400">Alteration reason: {alternationReason}</p>
        <p className="mb-1 text-gray-500 dark:text-gray-400">Recommendation: {recommendationCount}</p>
      </div>
    </div>
  );
}

export default QueryInfo;