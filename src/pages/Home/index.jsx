import Banner from "./Banner";
import Features from "./Features";
import RecentQueries from "./RecentQueries";
import Reviews from "./Reviews";
import Slider from "./Slider";

function Home() {
  return (  
    <div>
      <Slider />
      <Banner />
      <RecentQueries />
      <Features />
      <Reviews />
    </div>
  );
}

export default Home;