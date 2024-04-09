import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price , bg_color }) => {
  return (
    <div className='shadow-xl lg:w-[95.2%] mt-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
    <div className='bg-white rounded-t-md px-6 py-8 flex flex-col items-center '>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px] rounded-2xl '
      />
      </div>
      <div className='rounded-b-md px-[50px] py-1'
      style={{ backgroundColor: `${bg_color}`}}>
        <div className="flex gap-2">
        <img src={star} alt='rating icon' width={24} height={24} className="text-[#96b85d]" />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p></div>
     
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 mb-6 font-semibold font-montserrat text-[#96b85d] text-2xl leading-normal'>
        {price}
      </p>
      </div>
    </div>
    
  );
};

export default PopularProductCard;
