import './Header.css'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import Modal from '../ui/Modal/Modal.tsx'

type NavItem = {
    label: string
    href: string
}

const navItems: NavItem[] = [
    { label: 'Главная', href: '/' },
    { label: 'Вендоры', href: '/about' },
    { label: 'Блог', href: '/contact' },
    { label: 'Ивент', href: '/contact' },
    { label: 'Избранное', href: '/contact' },
]

function Header() {

    return (
        <header className="header-container w-full h-[460px] bg-white shadow px-4 py-3 items-center justify-center">
            <div className="flex justify-between items-center w-full fixed z-20">
                <div className="text-xl font-bold text-blue-600">MyApp</div>
                <nav className="flex gap-4">
                    {navItems.map(({label, href}) => (
                        <a
                            key={href}
                            href={href}
                            className="text-[#49516FB2] text-lg hover:text-[#49516F] transition-colors hover:underline hover:decoration-red-500 hover:decoration-2 hover:underline-offset-4"
                        >
                            {label}
                        </a>
                    ))}
                </nav>
                <Modal
                    title="Редактировать профиль"
                    description="Измени данные"
                    trigger={
                        <button
                            className="bg-[#FF385C] rounded-[12px] w-[118px] h-[56px] py-4 px-8 text-white text-lg"
                            style={{boxShadow: '0px 16px 32px 0px #FF385C3D'}}
                        >
                            Войти
                        </button>
                    }
                >
                    <form className="flex flex-col gap-4 mt-4">
                        <input type="text" placeholder="Имя" className="border p-2 rounded" />
                        <input type="text" placeholder="Email" className="border p-2 rounded" />
                    </form>
                </Modal>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                    <input type="text" placeholder="Поиск" className="h-[68px] w-[1128px] rounded-2xl bg-[#F9F9F9]"/>
                    <button
                        className="bg-[#FF385C] absolute right-[5px] top-1.5 rounded-[12px] w-[137px] h-[56px] py-4 px-6 flex items-center justify-between"
                        style={{boxShadow: '0px 16px 32px 0px #FF385C3D'}}
                    >
                        <MagnifyingGlassIcon className="w-[18px] h-[18px] text-white"/>
                        <p className="text-white text-lg">Поиск</p>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
