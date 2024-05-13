import AddQueryBanner from "./AddQueryBanner";
import MyQueryList from "./MyQueryList";

function MyQueries() {
  return (  
    <div className="flex-1 dark:bg-gray-800">
      <AddQueryBanner />
      <MyQueryList />
    </div>
  );
}

export default MyQueries;