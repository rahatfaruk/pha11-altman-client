import { Grid, ListTask, Search } from "react-bootstrap-icons";

function SearchLayout({setLayout, searchQueries}) {
  const handleChange = e => {
    const search = e.target.value 
    searchQueries(search); 
  }

  return (
    <div className="flex justify-center flex-col md:flex-row gap-4 md:gap-8 mb-8">
      <div className="flex-1 flex bg-gray-200 rounded-md">
        <input type="text" name="search" onChange={handleChange} className="flex-1 bg-transparent min-w-0 py-1 px-3" placeholder="search product name" />
        <button type="submit" className="inline-block py-2 px-3 text-xl hover:opacity-80 bg-gray-300 rounded-r-md"><Search/></button>
      </div>
      <div className="justify-self-end">
        <button onClick={() => setLayout('list')} className="p-1.5 text-3xl bg-gray-200 hover:opacity-80 rounded-md mr-2" title="list view"> <ListTask /> </button>
        <button onClick={() => setLayout('grid')} className="p-1.5 text-3xl bg-gray-200 hover:opacity-80 rounded-md" title="grid view"> <Grid /> </button>
      </div>
    </div>
  );
}

export default SearchLayout;