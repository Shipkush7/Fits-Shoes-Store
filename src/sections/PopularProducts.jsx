/* eslint-disable no-undef */
import { products } from "../constants";
import { PopularProductCard } from "../components";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000},
      items: 3,
  },
  desktop: {
   breakpoint: { max: 3000, min: 1024},
   items: 3, 
  }, 
  tablet: {
   breakpoint: { max: 1024, min: 464},
   items: 2,
  },
  module: {
  breakpoint: { max: 464, min: 0 },
  items: 1,
  },
};

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-[#96b85d]'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div>
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite
        showDots
        autoPlay={true}
        arrows={true}
        keyBoardControl={true}
        customTransition="all.5"
        transitionDuration={500}
        >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}

        </Carousel>
      </div>
    </section>
  );
};

export default PopularProducts;
