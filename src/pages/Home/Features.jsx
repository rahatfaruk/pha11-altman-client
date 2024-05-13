import { People, Search, Share } from "react-bootstrap-icons";
import { maxContent } from "../../App";
import SectionTitle from "../../comps/SectionTitle";

const whyUsList = [
  {id:'1', icon: <Search/>, title: 'Find Your Alternative Product easily', desc: 'This website will make your life easier. Just post your product query with details. Someone might suggest you something alternative.'},
  {id:'2', icon: <Share/>, title: 'Share your knowledge with others', desc: 'You can share your knowledge about a product by suggesting alternatives to others. You can also comment if any product is not good.'},
  {id:'3', icon: <People/>, title: 'Bigger community', desc: 'There are more than 2000+ member active in this website. So, it is highly possible that you will find your alternative product.'},
]

function Features() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className={`${maxContent} px-6 py-10`}>
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-10 lg:w-1/2 ">
            <SectionTitle title={'Why choose Us'} />

            {whyUsList.map(item => (
              <div key={item.id} className="border p-4 rounded-md md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-2xl text-cyan-600 bg-cyan-100 rounded-xl md:mx-4 dark:text-white dark:bg-cyan-500">
                  {item.icon}
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{item.title}</h1>
                  <p className="mt-3 text-gray-500 dark:text-gray-300">{item.desc} </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://i.postimg.cc/tTZnrrm6/share-idea.png" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;