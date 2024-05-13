import { ChevronDoubleRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className={`max-w-lg flex flex-col items-center gap-4 px-4 py-6 mx-auto text-center`}>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-800 md:text-3xl dark:text-white">
          Want to explore <span className="text-cyan-600">all queries?</span>
        </h2>
        <p className="max-w-4xl text-center text-gray-500 dark:text-gray-300">
          Explore everyone's query. Help others by suggesting their product alternatives. You can also comment on others suggested products.  
        </p>
        <div>
          <Link to={'/all-queries'} className="flex items-center gap-1 bg-cyan-600 text-white px-4 py-2 rounded-md hover:opacity-85 capitalize">Explore all queries <ChevronDoubleRight/> </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;