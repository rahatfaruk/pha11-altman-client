import Banner from "./Banner";
import Features from "./Features";
import RecentQueries from "./RecentQueries";
import Slider from "./Slider";

function Home() {
  return (  
    <div>
      <Slider />
      <Banner />
      <RecentQueries />
      <Features />
    </div>
  );
}

export default Home;