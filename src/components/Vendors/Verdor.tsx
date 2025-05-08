import type { Vendors } from '../../types/category.ts'
import { StarFilledIcon, HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'

function Vendor(props: { restaurant: Vendors }) {
    const { restaurant } = props

    return (
        <div className="flex flex-col gap-4 w-[258px] cursor-pointer">
            <div className="w-full h-[258px] bg-amber-400 rounded-2xl relative group">
                <HeartIcon
                    className="absolute top-4 right-4 w-[24px] h-[24px] group-hover:opacity-0 transition-opacity duration-200"/>
                <HeartFilledIcon
                    className="absolute top-4 right-4 w-[24px] h-[24px] text-[#FF385C] opacity-0 group-hover:opacity-100 transition-opacity duration-200"/>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="text-base font-medium text-[#49516F]">{restaurant.name}</p>
                    <div className="flex items-center gap-0.5">
                        <StarFilledIcon className="text-[#FF385C] w-[13px] h-[13px]"/>
                        <p className="text-base font-medium text-[#49516F80]">{restaurant.rating}</p>
                    </div>
                </div>
                <p className="text-base font-medium text-[#49516F80]">{restaurant.location}</p>
                <p className="text-base font-medium text-[#49516F80]">
                    От:
                    <span className="text-base font-bold text-[#49516F] ml-1">{restaurant.priceFrom}</span>
                </p>
            </div>
        </div>
    )
}

export default Vendor