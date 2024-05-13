import SectionTitle from "../../comps/SectionTitle";

const reviews = [
  {id: '1', review: "With AltProduct, we're able to easily find our alternate product in full detail. It's become an essential tool for us to grow and engage with our audience.", userName: 'Josh Tyson', userImg: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description', userPosition: 'Product Manager | Capsule'},
  {id: '2', review: "Since September, I am gonna using this website for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team.", userName: 'Luisa', userImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80", userPosition: 'Senior Director of Operations | Fitbit'},
  {id: '3', review: "Recently I need suggestion about my phone. I have posted here. Withing short period, I got some great alternatives suggestion. It was really helpful for me.", userName: 'Alisa Williams', userImg: 'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description', userPosition: 'Entrepreneur | Happy customer'},
]

function Reviews() {
  return (
    <div className="overflow-hidden dark:bg-gray-800">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <SectionTitle title={'User Reviews'} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({id, review, userName, userImg, userPosition}) => (
            <div key={id} className="flex h-auto">
              <div className="flex flex-col border shadow-md bg-white rounded-xl dark:bg-cyan-900">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                    " {review} "
                  </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-cyan-800">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src={userImg} />
                    </div>
                    <div className="grow ms-3">
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">{userName}</p>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">{userPosition}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;