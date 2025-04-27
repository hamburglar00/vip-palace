'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import config from '@/constants/config.json';
import { getImagePath } from '../../utils/imagePath';

const promotions = config.promotions;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3500,
  centerMode: true,
  centerPadding: "0px",
};

export default function PromotionsCarousel() {
  return (
    <>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-8 relative">
        <Slider {...settings}>
          {promotions.map((promo) => (
            <a
              key={promo.id}
              href={promo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none"
            >
              <div
                className="relative flex items-center justify-center rounded-2xl bg-black shadow-lg overflow-hidden"
                style={{ width: "100%", height: "120px" }}
              >
                {promo.image && (
                  <Image
                    src={getImagePath(promo.image)}
                    alt={''}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover", opacity: 0.7, width: "100%", height: "100%" }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                )}
                <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold z-10 text-center px-2">
                  {promo.text}
                </span>
              </div>
            </a>
          ))}
        </Slider>
      </div>
      <style jsx global>{`
        .slick-dots {
          display: flex !important;
          justify-content: center;
          align-items: center;
          flex-direction: row !important;
          margin-top: 0.5rem;
        }
        .slick-dots li {
          margin: 0 0.25rem;
        }
        .slick-dots li button:before {
          color: #a3a3a3 !important;
          opacity: 1 !important;
          font-size: .8rem !important;
        }
        .slick-dots li.slick-active button:before {
          color: #fff !important;
          opacity: 1 !important;
          font-size: .8rem !important;
        }
      `}</style>
    </>
  );
}
