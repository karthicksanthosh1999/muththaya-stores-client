import { RefreshCcw } from 'lucide-react'

const WhyChoose = () => {

    let list = [
        {
            id: 0,
            icon: RefreshCcw,
            title: 'Return Policy',
            description: 'Purchasing from select family farmers who farm organically.'

        },
        {
            id: 1,
            icon: RefreshCcw,
            title: '100% Fresh',
            description: 'Purchasing from select family farmers who farm organically.'

        },
        {
            id: 2,
            icon: RefreshCcw,
            title: 'Support 24/7',
            description: 'Purchasing from select family farmers who farm organically.'

        },
        {
            id: 3,
            icon: RefreshCcw,
            title: 'Secured Payment',
            description: 'Purchasing from select family farmers who farm organically.'

        },
    ]

    return (
        <div className='mx-auto container grid lg:grid-cols-2 grid-cols-1 md:py-20 lg:gap-0 gap-10 py-10 place-items-center justify-center'>
            <div className='sm:w-lg grid place-items-center justify-center sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                    list.map((item) => (
                        <div key={item.id} className="bg-white group hover:bg-green-500 h-52 w-60 shadow-2xl transition duration-300 ease-in-out flex flex-col items-center justify-between">
                            <div className="flex items-center justify-center mt-3">
                                <div className=" bg-gray-200 group-hover:bg-green-400 p-3 rounded-full">
                                    <div className=" bg-green-500 group-hover:bg-white rounded-full p-2">
                                        <item.icon size={45} className='group-hover:text-green-500 text-white p-1' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center flex-col p-3">
                                <h3 className='group-hover:text-white text-black text-[20px] font-semibold'>{item.title}</h3>
                                <p className='group-hover:text-white text-black text-sm font-normal text-center'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className="pb-4">
                    <span className="inline-flex items-center rounded-2xl bg-green-200 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-lime-700">Why Choose Us?</span>
                </div>
                <div className="max-w-lg space-y-5 mx-5">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 xl:text-4xl font-serif ">
                        We have awesome team member to support.
                    </h1>
                    <p className='text-sm font-normal tracking-wider'>Purchasing from select family farmers who farm organically because they believe in it and so we do. We are conscious of air miles and our carbon footprint so a lot of our produce comes from Egypt.</p>
                    <p className='text-sm font-normal tracking-wider'>Purchasing from select family farmers who farm organically because they believe in it and so we do. We are conscious of air miles and our carbon footprint so a lot of our produce comes from Egypt.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose
