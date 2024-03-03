import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';



const sponsorList = [
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/2560px-Google_logo_%282013-2015%29.svg.png",
    },
    {
        imgUrl: "https://cdn.freebiesupply.com/images/large/2x/nestle-logo-black-and-white.png",
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/1280px-Disney_wordmark.svg.png",
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Grab_%28application%29_logo.svg/2560px-Grab_%28application%29_logo.svg.png",
    },
    {
        imgUrl: "https://ongpng.com/wp-content/uploads/2023/04/7.Netflix-Logo-1728x734-1.png",
    },
];

function Sponsor() {
    return (
        <div className="sponsor-section section-bg">
            <div className="container">
                <div className="section-wrapper">
                    <div className="sponsor-slider">

                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false
                            }
                            }
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                           {
                            sponsorList.map((val,i) =>
                            <SwiperSlide key={i}>
                                <div className="sponsor-item">
                                    <div className="sponsor-thumb">
                                        <img src={val.imgUrl} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            )
                           }

                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sponsor