import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import type { CategoryItem } from '../../types/category.ts'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css/navigation'

const categoryItems: CategoryItem[] = [
    { id: 1, name: 'Свадебное платье' },
    { id: 2, name: 'Декорация' },
    { id: 3, name: 'Рестораны' },
    { id: 4, name: 'Шоу-группы' },
    { id: 5, name: 'Цветы' },
    { id: 6, name: 'Торты' },
    { id: 7, name: 'Приглашения' },
    { id: 8, name: 'Гостиницы' },
    { id: 9, name: 'Рестораны' },
    { id: 10, name: 'Декорация' },
    { id: 11, name: 'Декораци' },
    { id: 12, name: 'Декорац' },
]

function VendorsSlider() {
    return (
        <div className="relative">
            <button className="custom-prev flex items-center justify-center w-[56px] h-[56px] absolute top-[120px] -left-12 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <ChevronLeftIcon className="text-[#FF385C] w-[24px] h-[24px]" />
            </button>
            <button className="custom-next flex items-center justify-center w-[56px] h-[56px] absolute top-[120px] -right-12 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <ChevronRightIcon className="text-[#FF385C] w-[24px] h-[24px]" />
            </button>

            <Swiper
                spaceBetween={20}
                slidesPerView={10}
                modules={[Navigation]}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next'
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {categoryItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col items-center gap-4 my-16">
                            <div
                                className="w-[113px] h-[113px] rounded-full p-4 bg-white shadow-md flex items-center justify-center"
                                style={{boxShadow: '0px 14px 30px 0px #95263A1A'}}
                            >
                                <span className="text-gray-500 text-xl">{item.name[0]}</span>
                            </div>
                            <p className="text-xs font-normal text-[#49516F] text-center cursor-pointer">{item.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default VendorsSlider