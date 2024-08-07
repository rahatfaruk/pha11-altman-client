function Comments({comments}) {
  return (  
    <div className="mt-12 max-w-2xl mx-auto">
      <h3 className="mb-4 text-xl">Comments</h3>
      {comments.length < 1 ? 
        <p>No comments/recommendations available. you can suggest!</p> :
        comments.map(comment => <Comment key={comment._id} comment={comment} />)
      }
    </div>
  );
}

export default Comments;


function Comment({comment}) {
  const {postedTimestamp,recommendProductImageUrl,recommendProductName,recommendReason,recommendTitle,recommenderEmail,recommenderName,recommenderPhotoUrl} = comment
  const formattedTime = new Date(+postedTimestamp).toLocaleString()

  return (  
    <div className=" bg-white mb-4 rounded-md dark:bg-gray-800">
      {/* user info, time */}
      <div className="flex items-center justify-between p-3 border-b border-dashed mb-3">
        <div className="flex items-center space-x-2">
          <figure className="p-0.5 inline-block border border-cyan-600 rounded-full">
            <img src={recommenderPhotoUrl} className="size-7 rounded-full" alt='' />
          </figure>
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none dark:text-gray-200">{recommenderName} | {recommenderEmail}</h2>
            <span className="inline-block text-xs leading-none dark:text-gray-400">posted: {formattedTime}</span>
          </div>
        </div>
      </div>
      
      {/* comment img+info */}
      <div className="grid md:grid-cols-3 gap-6 items-center p-3 pt-0">
        <figure>
          <img src={recommendProductImageUrl} className="h-40 md:h-28 w-full rounded-md object-cover" alt="" />
        </figure>
        <div className="md:col-span-2">
          <h4 className="text-sm text-cyan-600 rounded-md">{recommendTitle}</h4>
          <h3 className="font-semibold text-gray-800 dark:text-white"> Product: {recommendProductName}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Reason: {recommendReason}</p>
        </div>
      </div>
    </div>
  );
}
