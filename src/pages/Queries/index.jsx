import { Grid, ListTask } from "react-bootstrap-icons";
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

        <div className="flex gap-2 justify-center mb-8">
          <button onClick={() => setLayout('list')} className="p-1.5 text-3xl bg-cyan-100 hover:opacity-80 rounded-md"> <ListTask/> </button>
          <button onClick={() => setLayout('grid')} className="p-1.5 text-3xl bg-cyan-100 hover:opacity-80 rounded-md"> <Grid/> </button>
        </div>

        <QueryList layout={layout} />
      </div>
    </section>
  );
}

export default Queries;