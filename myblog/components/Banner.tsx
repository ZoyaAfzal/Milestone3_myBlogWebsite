import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import bannerfashion from "../public/images/bannerfashion.jpg";
import travelblog from "../public/images/travelblog.png"
import bannertravel from "../public/images/bannertravel.jpg";
import bannerImgThree from "../public/images/bannerImgThree.jpg";
import bannerImgFour from "../public/images/bannerImgFour.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function SampleNextArrow(props: any){
    const { onClick } = props;
    return (
        <div className="w-44 h-8 absolute bottom-32 z-30 right-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden"
        onClick = { onClick }
        >
            <div className='w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-end cursor-pointer group'>
                <span className="absolute -translate-x-28 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
                    next
                </span>
                <span className="absolute -translate-x-28 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
                    next
               </span>
               <span className="text-lg">
              <FaChevronRight />
              </span>
            </div>
        </div>
    )
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="w-44 h-8 absolute bottom-32 z-30 left-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden"
        onClick={onClick}
      >
        <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-between cursor-pointer group  ">
          <span className="text-lg">
            <FaChevronLeft />
          </span>
          <span className="absolute translate-x-24 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
            previous
          </span>
          <span className="absolute translate-x-24 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
            previous
          </span>
        </div>
      </div>
    );
}

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
  return (
    <div className='w-full h-auto md:h-[650px] relative'>
        <Slider {...settings} >
            <div>
              <div className="flex justify-center items-center">
              <h1 className="lg:text-7xl absolute text-white md:text-5xl text-3xl text-center gap-y-12 font-titleFont font-semibold lg:mb-20">Leave your mark on<br /> all over the world</h1>
            <Image 
            className="w-full  md:h-[650px] h-[590px] object-cover"
            src={travelblog}
            loading={"eager"}
            alt="bannertravel"
            />
            </div>
          </div>
          <div>
         <div className="flex justify-center items-center">
          <h2 className="lg:text-5xl absolute text-white md:text-3xl text-2xl text-center gap-y-12 font-titleFont font-semibold lg:mb-20">Whether it&apos;s a local getaway <br /> or a global adventure, <br /> Traveling enriches your soul.</h2>
            <Image 
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannertravel}
            loading={"lazy"}
            alt="bannertravel"
            />
            </div>
            </div>
            <div>
            <div className="flex justify-center items-center">
              <h3 className="lg:text-5xl absolute text-white md:text-3xl text-2xl text-center font-titleFont font-semibold lg:mb-20">This fashion blog is your <br /> go-to guide for the latest trends, <br /> style tips, and outfit inspiration.</h3>
            <Image 
               className="w-full h-auto md:h-[650px] object-cover"
               src={bannerfashion}
               loading={"lazy"}
               alt="bannerfashion"
               />   
               </div>
            </div>
            <div>
            <div className="flex justify-center items-center">
              <h4 className="lg:text-6xl absolute text-white md:text-3xl text-2xl text-center font-titleFont font-semibold lg:mb-20">Explore diverse cuisines <br /> and savor the art of cooking.</h4>
            <Image 
               className="w-full h-auto md:h-[650px] object-cover"
               src={bannerImgThree}
               loading={"lazy"}
               alt="bannerImgThree"
               />
               </div>
            </div>     
           <div>
            <div className="flex justify-center items-center">
              <h5 className="lg:text-5xl absolute text-white md:text-3xl text-2xl text-center font-titleFont font-semibold lg:mb-20">A delicious journey, sharing recipes, <br /> cooking tips, and culinary adventures.</h5>
            <Image 
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgFour}
            loading={"lazy"}
            alt="bannerImgFour"
            />
            </div>        
            </div>
        </Slider>
            </div>
  )
}

export default Banner;