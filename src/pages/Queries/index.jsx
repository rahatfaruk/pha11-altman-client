import { Grid, ListTask, Search } from "react-bootstrap-icons";
import { maxContent } from "../../App";
import QueryList from "./QueryList";
import { useState } from "react";

function Queries() {
  const [layout, setLayout] = useState('grid')

  return (  
    <section className="flex-1 px-4 dark:bg-gray-800">
      <div className={`${maxContent} py-10`}>
        <h2 className="text-center mb-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-800 dark:text-white">
          All Queries
        </h2>

        <div className="flex justify-center flex-col md:flex-row gap-4 mb-8">
          <div className="flex bg-gray-200 rounded-md">
            <span className="inline-block p-1.5 px-2 text-xl hover:opacity-80 self-center"> 
              <Search/> 
            </span>
            <input type="text" name="search" className="bg-transparent min-w-0" placeholder="search product name" />
          </div>
          <div className="justify-self-end">
            <button onClick={() => setLayout('list')} className="p-1.5 text-3xl bg-gray-200 hover:opacity-80 rounded-md mr-2"> <ListTask/> </button>
            <button onClick={() => setLayout('grid')} className="p-1.5 text-3xl bg-gray-200 hover:opacity-80 rounded-md"> <Grid/> </button>
          </div>
        </div>

        <QueryList layout={layout} />
      </div>
    </section>
  );
}

export default Queries;