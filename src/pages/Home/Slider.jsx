import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { maxContent } from '../../App';

function Banner() {
  const slidesData = [
    {id:'1', image: 'https://i.postimg.cc/5tf6Ftmr/questions.jpg', title: 'Find your alternative product'},
    {id:'2', image: 'https://i.postimg.cc/YC6v9FQg/boxes-3.jpg', title: 'Get recommendation from others'},
    {id:'3', image: 'https://i.postimg.cc/FH5fNpkN/suggest.jpg', title: 'Help others to find alternative product'},
  ]

  return (  
    <section className="px-4 dark:bg-gray-800">
      <div className={`${maxContent} py-6 md:py-10`}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{clickable: true}}
          autoplay={true}
        >
          {slidesData.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className='relative'>
                <figure>
                  <img src={slide.image} alt="" className='w-full h-96 md:h-[600px]  object-cover rounded-lg' /> 
                </figure>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-1 rounded-md text-center text-cyan-300 py-6 px-10 md:px-16 bg-[rgba(0,0,0,.7)]'>
                  <h3 className='text-3xl md:text-6xl mb-3 md:leading-tight'>
                    {slide.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Banner;