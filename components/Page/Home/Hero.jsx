import Image from "next/dist/client/image"
import { HiArrowNarrowRight } from 'react-icons/hi'

// const firstSetIcons = [
//     '/icons/hotel.png',
//     '/icons/pay.png',
//     '/icons/group.png',

// ]

const firstSetIcons = [
    {
        link: '/icons/hotel.png',
        title: 'PHYSICAL NFT HOTEL & HOSTEL'
    },
    {
        link: '/icons/pay.png',
        title: 'CRYPTO BOOKING PLATFORM'
    },
    {
        link: '/icons/hotel.png',
        title: 'NFTS AS MEMBERSHIP DAO ACCESS'
    },
]

const secondSetIcons = [
    {
        link: '/icons/tag.png',
        title: 'Up to 30% Discounts for Rooms & Drinks'
    },
    {
        link: '/icons/hand.png',
        title: 'Profits Added to DAO treasury. Holders Rewarded'
    },
    {
        link: '/icons/coin.png',
        title: 'Seed Tokens Allocation'
    },
    {
        link: '/icons/cycle.png',
        title: 'Cashback Travel Rewards'
    },
]

const Hero = () => {
    return <section className="w-full flex flex-col items-center bg-dark_bg text-white  px-5 pt-8 pb-16 font-exo">
        <h1 className="text-4xl font-semibold text-center text-[#ECF7FD] ">THE 1ST NFT HOTEL & HOSTEL CHAIN </h1>
        <p className="text-3xl text-center py-10 font-medium md:w-9/12 text-[#ECF7FD] ">Palmverse builds technologies that help people connect IRL, join communities, and bridge the web2 travel experience to web3.</p>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-evenly items-center md:py-5 py-10 w-[80%] mx-auto" >

            <div className="flex flex-col items-center">
                <Image src='/icons/hotel.png' alt='PHYSICAL NFT HOTEL & HOSTEL' height={156} width={156} layout={"fixed"} />
                <h1 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">PHYSICAL NFT <br /> HOTEL & HOSTEL</h1>
            </div>
            <div className="flex justify-evenly w-screen md:w-auto md:space-x-20 items-start px-4 ">

                <div className="flex flex-col items-center">
                    <Image src='/icons/pay.png' alt='PHYSICAL NFTHOTEL & HOSTEL' height={156} width={156} layout={"fixed"} />
                    <h1 className="text-2xl text-[#ECF7FD] font-bold md:w-full text-center py-2">CRYPTO <br /> BOOKING PLATFORM</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src='/icons/group.png' alt='PHYSICAL NFTHOTEL & HOSTEL' height={156} width={156} layout={"fixed"} />
                    <h1 className="text-2xl text-[#ECF7FD] font-bold md:w-full text-center py-2">NFTS AS MEMBERSHIP <br /> DAO ACCESS</h1>
                </div>
            </div>

        </div>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-evenly items-center w-[90%] mx-auto py-16">
            <div className="md:w-[50%] md:mx-auto md:px-4">

                <Image src='/icons/groot.png' alt='palmverse-groot' height={400} width={400} layout="fixed" />
            </div>
            <h1 className="text-3xl text-center font-medium text-[#ECF7FD]">Whether you’re a travel addict, digital nomad, <span className="text-green_text">an NFT wanderer</span>, or a surfer looking for paradise, <span className="underline underline-offset-4" >you’ve come to the right place.</span></h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4 py-16 " >
            <div className="flex flex-col">
                <h1 className="text-3xl font-medium text-[#ECF7FD]  text-center py-6">
                    NFT UTILITIES - TRAVEL 2 EARN</h1>
                <div className="grid grid-cols-2 gap-4 py-4">
                    {
                        secondSetIcons.map(icon => (
                            <div key={icon.link} className="flex flex-col items-center">
                                <Image src={icon.link} alt={icon.link} height={130} width={130} layout={"fixed"} />
                                <h1 className="text-2xl text-[#ECF7FD] font-medium w-[90%] text-center py-2">{icon.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col justify-end items-center py-4 md:py-0" >

                <Image src='/images/laptop.png' alt='laptop palverse' width={771} height={432} />
                <h1 className="text-3xl font-medium text-center py-2 text-[#ECF7FD]">

                    FUNCTIONAL BOOKING PLATFORM
                </h1>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center py-16 space-y-10 md:space-y-0" >
            <h1 className="text-3xl font-semibold md:w-[70%] mx-auto text-center text-[#ECF7FD] ">We refurbish old buildings and leverage our unique property conversion model to turn them into the Palmverse brand. </h1>
            <div className="scale-110 md:scale-100">

                <Image src='/images/hotel1.png' alt='palmverse hotel' width={1000} height='560' />
            </div>
            <div className="flex justify-center items-center" >
                <button className="rounded-full px-12 py-4 font-semibold btn tracking-widest hover:btn-rev transition-all duration-500 ease-in-out flex items-center  " >Learn More                 <HiArrowNarrowRight className="text-2xl ml-2 " /></button>

            </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-14 pb-8" >
            <h1 className="text-3xl text-[#ECF7FD] font-semibold w-[70%] mx-auto text-center ">
                HOW IT WORKS </h1>
            <Image src='/images/map.png' alt='palmverse hotel' width={1100} height='600' />

        </div>

    </section>
}

export default Hero