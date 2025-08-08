import MenuNav from "./MenuNav"

export default function Header() {
    return (
        <div className='flex bg-gray-100 p-4'>
            <h1 className='text-xl font-bold'>Travel Journal App</h1>
            <MenuNav />
        </div>
    )
}