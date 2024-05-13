import { ChevronDoubleRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function AddQueryBanner() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className={`max-w-lg flex flex-col items-center gap-4 px-4 py-12 md:py-16 mx-auto text-center`}>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-800 dark:text-white">
          Add New <span className="text-cyan-600">Query</span>
        </h2>
        <p className="max-w-4xl text-lg text-center text-gray-500 dark:text-gray-300">
          Ask your query about any of your product Or ask for suggestion. Our communities is ready to help you out!
        </p>
        <div>
          <Link to={'/add-query'} className="flex items-center gap-1 px-5 py-3 rounded-md bg-cyan-600 text-white font-semibold hover:opacity-85 capitalize">Add New Query <ChevronDoubleRight /> </Link>
        </div>
      </div>
    </section>
  );
}

export default AddQueryBanner;