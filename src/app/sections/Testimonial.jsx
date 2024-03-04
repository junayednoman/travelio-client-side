"use client"

import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import TestimonialCard from '@/components/TestimonialCard';

const Testimonial = () => {
    const testimonials = [
        {
            "id": 1,
            "name": "Emily Johnson",
            "text": "Absolutely loved my stay! The room was spacious and clean, and the staff was incredibly friendly and helpful.",
            "rating": 5,
            "image": "https://i.postimg.cc/SxS8X3QD/young-bearded-man-with-striped-shirt-1-35.jpg"
        },
        {
            "id": 2,
            "name": "Michael Smith",
            "text": "Great experience overall. Comfortable accommodations and excellent service. Will definitely be back!",
            "rating": 4,
            "image": "https://i.postimg.cc/SxS8X3QD/young-bearded-man-with-striped-shirt-1-35.jpg"
        },
        {
            "id": 3,
            "name": "Jessica Brown",
            "text": "Had a wonderful time at the hotel. The staff went above and beyond to ensure we had everything we needed.",
            "rating": 5,
            "image": "https://i.postimg.cc/SxS8X3QD/young-bearded-man-with-striped-shirt-1-35.jpg"
        },
        {
            "id": 4,
            "name": "David Wilson",
            "text": "The hotel exceeded my expectations. Clean rooms, great amenities, and friendly staff. Highly recommend!",
            "rating": 5,
            "image": "https://i.postimg.cc/SxS8X3QD/young-bearded-man-with-striped-shirt-1-35.jpg"
        },
        {
            "id": 5,
            "name": "Jennifer Lee",
            "text": "Enjoyed every moment of my stay. The room was cozy, and the view from the balcony was breathtaking.",
            "rating": 5,
            "image": "https://i.postimg.cc/SxS8X3QD/young-bearded-man-with-striped-shirt-1-35.jpg"
        },
        {
            "id": 6,
            "name": "Christopher Taylor",
            "text": "Had a pleasant stay at the hotel. The room was comfortable, and the staff was courteous and attentive.",
            "rating": 4,
            "image": "https://i.postimg.cc/SxS8X3QD/young-bearded-man-with-striped-shirt-1-35.jpg"
        },
        {
            "id": 7,
            "name": "Sarah Martinez",
            "text": "The hotel provided a relaxing and enjoyable experience. The facilities were clean, and the service was top-notch.",
            "rating": 5,
            "image": "https://i.postimg.cc/SxS8X3QD/young-bearded-man-with-striped-shirt-1-35.jpg"
        },
        {
            "id": 8,
            "name": "Daniel Harris",
            "text": "Highly impressed with the level of service. The staff was friendly and accommodating. Will definitely return.",
            "rating": 4,
            "image": "https://i.postimg.cc/SxS8X3QD/young-bearded-man-with-striped-shirt-1-35.jpg"
        }
    ]

    return (
        <div className='md:mb-20 mb-14 px-6'>
            <SectionTitle heading="Guest Testimonials"></SectionTitle>
            <Swiper
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    670: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    1450: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    }
                }}
                pagination={{
                    clickable: true,
                }}
                speed={1000}
                autoplay={{
                    delay: 2400,
                    disableOnInteraction: false,

                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    testimonials.map(item => <SwiperSlide key={item.id} >
                        <TestimonialCard name={item.name} text={item.text} rating={item.rating} image={item.image}></TestimonialCard>
                    </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    );
};

export default Testimonial;