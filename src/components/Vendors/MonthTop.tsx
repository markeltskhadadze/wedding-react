import Vendor from './Verdor.tsx'
import type { Vendors } from '../../types/category.ts'

const restaurantsMock: Vendors[] = [
    {
        id: 1,
        name: 'Ресторан “Shohona”',
        rating: 4.5,
        location: 'г. Ташкента Чиланзарский р.',
        priceFrom: '120 000 UZS'
    },
    {
        id: 2,
        name: 'Ресторан “Sherdor”',
        rating: 4.5,
        location: 'г. Ташкента Чиланзарский р.',
        priceFrom: '120 000 UZS'
    },
    {
        id: 3,
        name: 'Ресторан “Yakkasaroy”',
        rating: 4.5,
        location: 'г. Ташкента Чиланзарский р.',
        priceFrom: '120 000 UZS'
    }
]

function MonthTop() {
    return (
        <div className="flex flex-col gap-9">
            <h2 className="text-[#49516F] text-2xl font-medium">Топ за месяц</h2>
            <div className="flex flex-wrap gap-8">
                {restaurantsMock.map((restaurant) => (
                    <Vendor key={restaurant.id} restaurant={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default MonthTop