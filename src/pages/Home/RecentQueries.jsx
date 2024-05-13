import { maxContent } from "../../App";
import SectionTitle from "../../comps/SectionTitle";

function RecentQueries() {
  return (
    <section className="px-4 dark:bg-gray-800">
      <div className={`${maxContent} py-10`}>
        <SectionTitle title={'Recent Queries'} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <QueryCard />
          <QueryCard />
          <QueryCard />
        </div>
      </div>
    </section>
  );
}

export default RecentQueries;


function QueryCard() {
  return (
    <div className="border rounded-md">
      {/* user info, time */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <figure className="p-0.5 inline-block border border-cyan-600 rounded-full">
            <img src='https://dummyimage.com/40x40/000/fff&text=a' className="size-7 rounded-full" alt='' />
          </figure>
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none dark:text-gray-200">leroy_jenkins72</h2>
            <span className="inline-block text-xs leading-none dark:text-gray-400">posted: 14/03/2024 - 07:03 pm</span>
          </div>
        </div>
      </div>

      <img className="object-cover object-center w-full h-64 lg:h-80" src="https://dummyimage.com/400x300/000/fff&text=galaxy-s22u" alt="" />

      {/* query, product info */}
      <div className="p-4">
        <h4 className="text-cyan-600 rounded-md mb-2">Query: what is the alternative of this?</h4>
        <h3 className="mb-1 text-xl font-semibold text-gray-800 dark:text-white">galaxy s22 ultra</h3>
        <p className="mb-1 text-gray-500 dark:text-gray-400">Brand: samsung</p>
        <p className="mb-1 text-gray-500 dark:text-gray-400">Alteration reason: I am uncomfortable with android.</p>
      </div>
    </div>
  );
}

export { QueryCard };