import { toast } from "react-toastify";
import SectionTitle from "../../comps/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

function RecommendForm({query, incRecCount, addComment}) {
  const {user} = useAuth()
  const {axiosBase} = useAxios()

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = {
      recommendTitle:e.target.recommendTitle.value, 
      recommendProductName:e.target.recommendProductName.value, 
      recommendProductImageUrl:e.target.recommendProductImageUrl.value,
      recommendReason:e.target.recommendReason.value
    }

    const newRecommendation = {
      ...formData,
      recommenderName: user.displayName,
      recommenderEmail: user.email,
      recommenderPhotoUrl: user.photoURL,
      postedTimestamp: new Date().getTime(),
      queryId: query._id,
      queryTitle: query.queryTitle,
      productName: query.productName,
      userName: query.userName,
      userEmail: query.userEmail,
    }

    // post newQuery into db
    axiosBase.post('/add-recommendation', newRecommendation)
    .then(res => {
      toast.success('recommendation added successfully')
      e.target.reset()
      // inc recommend count
      incRecCount()
      // add this comment into ui
      addComment({...newRecommendation, _id: res.data.insertedId})
    })
    .catch(err => toast.error('faile to add recommendation: ', err.message))
  }

  return (  
    <div>
      <SectionTitle title={'Add a Recommendation'} />

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <label className="block mb-4">
          <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">recommend title</span>
          <input type="text" name="recommendTitle" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" required />
        </label>
        <label className="block mb-4">
          <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">recommend product name</span>
          <input type="text" name="recommendProductName" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" required />
        </label>
        <label className="block mb-4">
          <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">recommend product image url</span>
          <input type="text" name="recommendProductImageUrl" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" placeholder="http://www.photo.jpg" required />
        </label>
        <label className="block mb-4">
          <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Recommend Reason</span>
          <input type="text" name="recommendReason" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" required />
        </label>

        <div className="mt-6">
          <button type="submit" className="bg-cyan-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Add Recommendation</button>
        </div>
      </form>
    </div>
  );
}

export default RecommendForm;