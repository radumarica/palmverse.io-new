import Image from "next/dist/client/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import Typical from "react-typical";
import { Typewriter } from 'react-simple-typewriter'

const firstSetIcons = [
  {
    link: "/icons/hotel.png",
    title: "PHYSICAL NFT HOTEL & HOSTEL",
  },
  {
    link: "/icons/pay.png",
    title: "CRYPTO BOOKING PLATFORM",
  },
  {
    link: "/icons/hotel.png",
    title: "NFTS AS MEMBERSHIP DAO ACCESS",
  },
];

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center bg-dark_bg text-white px-5 pt-5 pb-16 font-exo">
      <div className="hidden md:block">
        <div className=" flex flex-col items-center">
          <strong className="md:text-[46px] text-[28px] py-4 font-bold  text-[#ECF7FD] ">
            Book
            <Typewriter
              words={[' Hotels', ' Hostels', ' Resorts']}
              loop={Infinity}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            /> - Pay With Web3 Wallet
          </strong>

          <div className="flex flex-col justify-end items-center py-4 md:py-0">
            <div className=" mt-16  md:scale-125">
              <Image
                src="/images/laptop.png"
                alt="laptop palverse"
                width={550}
                height={370}
              />
            </div>
            <h1 className="text-[26px] font-bold text-center pt-6  text-[#ECF7FD]">
              BETA VERSION IS <span className="text-green_text" >LIVE</span>
            </h1>
          </div>

          <p className=" hidden md:flex text-[28px]  md:text-[30px] leading-9 text-center pb-10 pt-5 px-4 md:w-[70rem] text-[#ECF7FD]  ">
            Palmverse builds technologies that help people connect IRL,{" "}
            <br className="md:hidden" /> join communities,
            <br className="hidden md:block" /> and bridge the web2 travel
            experience to web3.
          </p>



          <div className="w-screen overflow-x-auto md:hidden">
            <p className="md:text-[32px]  text-[22px] text-center py-10 font-bold md:w-9/12 text-[#ECF7FD]  ">
              {"Palmverse builds technologies that help people connect IRL join communities, and bridge the web2 travel experience to web4."
                .split(" ")
                .map((word, index) => (
                  <span key={index}>{`${word} `}.</span>
                ))}
            </p>
          </div>
          <div className="grid grid-cols-2  md:w-[80rem] md:grid md:grid-cols-3 md:gap-6 space-y-10 md:space-y-0 justify-evenly items-center md:py-5 py-10 w-[80%] mx-auto">
            <div className="flex flex-col items-center justift-center">
              <Image
                src="/icons/3d/agreement2.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Zero Payment Fees
              </h1>
              <p className="text-lg text-center">
                Cost of online oayment reduced to 0
              </p>
            </div>
            <div className="flex flex-col items-center justift-center">
              <Image
                src="/icons/pay.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                No Log-ins
              </h1>
              <p className="text-lg text-center">
                Pay with a Web3 wallet. No sign-ups
              </p>
            </div>
            <div className="flex flex-col items-center justift-center">
              <Image
                src="/icons/3d/money_bag2.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Cashback Travel Rewards
              </h1>
              <p className="text-lg text-center">
                Earn rewards while travelling
              </p>
            </div>

            <div className="flex flex-col pt-12  items-center justift-center">
              <Image
                src="/icons/group.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                NFTs As Memebership
              </h1>
              <p className="text-lg text-center">
                Verify NFT ownership to apply <br /> discounts
              </p>
            </div>
            <div className="flex flex-col items-center justift-center">
              <Image
                src="/icons/3d/agreement2.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Escrow Guarantee
              </h1>
              <p className="text-lg text-center">
                Smart Contracts based escrow which <br /> cant be manipulated in any way.
              </p>
            </div>
            <div className="flex flex-col items-center justift-center">
              <Image
                src="/icons/3d/agreement2.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Transparency
              </h1>
              <p className="text-lg text-center">
                Automated dispute system and <br /> reputation stored on the blockchain
              </p>
            </div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-10 md:w-[92rem]  md:space-y-0 justify-evenly items-center w-[90%] mx-auto pt-10">
          <div className="   scale-75 md:scale-100">
            <Image
              src="/icons/groot.png"
              alt="palmverse-groot"
              height={400}
              width={400}
              layout="fixed"
            />
          </div>

          <div className="flex flex-col pt-24 mr-[90px] ">
            <h1 className="md:text-3xl text-2xl text-center pb-4  text-[#ECF7FD]">
              The first PALMVERSE NFT Hotel was rented in Tamarindo, <br /> a
              beach town in Costa Rica.
            </h1>
            <h1 className="md:text-3xl text-2xl text-center  text-[#ECF7FD]">
              Whether you’re a travel addict, digital nomad,{" "}
              <span className="text-green_text">an NFT wanderer</span>,
              <br className="hidden md:block" /> or a surfer looking for
              paradise,{" "}
              <span className="underline underline-offset-4">
                you’ve come to the right place.
              </span>
            </h1>
          </div>
        </div>
        <div className="grid place-items-center gap-4 py-5 md:w-[84rem] md:mx-auto ">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-[#ECF7FD]  text-center py-10">
              NFT UTILITIES - TRAVEL 2 EARN
            </h1>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex flex-col items-center">
                <Image
                  src="/icons/3d/discount2.png"
                  alt="tag"
                  height={130}
                  width={130}
                  layout={"fixed"}
                />
                <h1 className="md:text-[26px] text-[20px leading-9 text-[#ECF7FD] md:font-medium w-[90%] text-center py-2">
                  Up to 25% Discounts for Rooms{" "}
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/icons/3d/save_money3.png"
                  alt="tag"
                  height={130}
                  width={130}
                  layout={"fixed"}
                />
                <h1 className="md:text-[26px] text-[20px]  leading-9 text-[#ECF7FD] md:font-medium  text-center py-2">
                  Profits Added to DAO treasury. <br /> Holders Rewarded
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/icons/3d/coin_stack2.png"
                  alt="tag"
                  height={130}
                  width={130}
                  layout={"fixed"}
                />
                <h1 className="md:text-[26px] text-[20px]  leading-9 text-[#ECF7FD] md:font-medium w-[90%] text-center py-2">
                  Seed Tokens Allocation{" "}
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/icons/3d/money_bag2.png"
                  alt="tag"
                  height={130}
                  width={130}
                  layout={"fixed"}
                />
                <h1 className="md:text-[26px] text-[20px]  leading-9 text-[#ECF7FD] md:font-medium w-[90%] text-center py-2">
                  Cashback Travel Rewards
                </h1>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-center justify-center pb-10 pt-4  space-y-10 md:space-y-0">
          <div className="text-3xl relative  md:w-[60%] mx-auto text-center text-[#ECF7FD] pb-4 ">
            <div className="absolute z-50 -top-3 -left-2 lg:left-0">
              <Image src="/images/palm.png" alt="palm" height="45" width="35" />
            </div>
            <p>
              We refurbish old buildings and leverage our unique property
              conversion model to turn them into the Palmverse brand.{" "}
            </p>
          </div>
          <div className="scale-110 md:scale-y-110 md:scale-x-125 md:pt-10">
            <Image
              src="/images/less-height.png"
              alt="palmverse hotel"
              width={1000}
              height="560"
            />
          </div>
          <div className="flex justify-center items-center md:pt-8">
            <Link href="/first-location">
              <button className="rounded-full px-12 py-4 font-semibold btn tracking-widest hover:btn-rev transition-all duration-500 ease-in-out flex items-center  ">
                Learn More <HiArrowNarrowRight className="text-2xl ml-2 " />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-14 pb-8">
          <h1 className="text-3xl text-[#ECF7FD] font-bold w-[70%] mx-auto text-center pb-10">
            HOW IT WORKS{" "}
          </h1>
          <Image
            src="/images/utili.png"
            alt="palmverse hotel"
            width={1100}
            height="600"
          />
        </div>
      </div>
      <div className="md:hidden">
        <div className=" flex flex-col items-center">
          <strong className="md:text-[46px] text-[28px] text-center font-bold  text-[#ECF7FD] ">
            Book
            <Typewriter
              words={[' Hotels', ' Hostels', ' Resorts']}
              loop={Infinity}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            /> <br /> Pay With Web3 Wallet
          </strong>
          <p className="md:text-[32px] hidden md:flex text-[18px] text-center pb-5 mt-6 px-4 font-extralight md:w-9/12 text-[#ECF7FD]  ">
            Palmverse builds technologies that help people connect IRL{" "}
            <br className="md:hidden" /> join communities, and bridge the web2
            travel experience to web3.
          </p>
          <div className=" mt-5  md:mt-0 md:scale-100">
            <Image
              src="/images/laptop.png"
              alt="laptop palverse"
              width={550}
              height={370}
            />
          </div>
          <div className="bg-[#ECF7FD] text-black py-2 w-screen my-2">
            <h1 className="text-[26px] font-bold text-center ">
              BETA VERSION IS <span className="text-green_text" >LIVE</span>
            </h1>
          </div>
          <div className="w-[90%] overflow-x-auto md:hidden">
            <p className="md:text-[32px]  text-[22px] text-center pb-10 pt-4  leading-7 font-light md:w-9/12 text-[#ECF7FD]  ">
              Palmverse builds technologies that help people connect IRL, join
              communities, and bridge the web2 travel experience to web3.
            </p>
          </div>


          <div className="grid grid-cols-2 gap-4  md:w-[80rem] md:grid md:grid-cols-3 md:gap-6 space-y-10 md:space-y-0 justify-evenly items-center md:py-5 py-10 w-[80%] mx-auto">
            <div className="flex flex-col items-center justify-start">
              <Image
                src="/icons/3d/agreement2.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-lg text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Zero Payment Fees
              </h1>
              <p className=" text-center">
                Cost of online oayment reduced to 0
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Image
                src="/icons/pay.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-lg text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                No Log-ins
              </h1>
              <p className=" text-center">
                Pay with a Web3 wallet. No sign-ups
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Image
                src="/icons/3d/money_bag2.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-lg text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Cashback Travel Rewards
              </h1>
              <p className=" text-center">
                Earn rewards while travelling
              </p>
            </div>

            <div className="flex flex-col pt-12  items-center justify-start">
              <Image
                src="/icons/group.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-lg text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                NFTs As Memebership
              </h1>
              <p className=" text-center">
                Verify NFT ownership to apply <br /> discounts
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Image
                src="/icons/3d/agreement2.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-lg text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Escrow Guarantee
              </h1>
              <p className=" text-center">
                Smart Contracts based escrow which <br /> cant be manipulated in any way.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Image
                src="/icons/3d/agreement2.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              <h1 className="text-lg text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Transparency
              </h1>
              <p className=" text-center">
                Automated dispute system and <br /> reputation stored on the blockchain
              </p>
            </div>

          </div>


        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-evenly items-center w-[90%] mx-auto py-10 ">
          <div className="md:w-[50%] md:mx-auto md:px-4 scale-100 md:scale-100">
            <div className="">
              <Image
                src="/icons/groot.png"
                alt="palmverse-groot"
                height={280}
                width={280}
                layout="fixed"
              />
            </div>
          </div>
          <h1 className="md:text-3xl text-[22px] text-center font-light leading-7 text-[#ECF7FD]">
            The 1st PALMVERSE NFT Hotel was rented in Tamarindo, a beach town in
            Costa Rica.
          </h1>
          <h1 className="md:text-3xl text-[22px] text-center font-light leading-7 text-[#ECF7FD]">
            Whether you’re a travel addict, digital nomad,{" "}
            <span className="text-green_text">an NFT wanderer</span>, or a
            surfer looking for paradise,{" "}
            <span className="underline underline-offset-4">
              you’ve come to the right place.
            </span>
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4 py-5 ">
          <div className="flex flex-col">
            <h1 className="text-[24px] font-bold text-[#ECF7FD]  text-center pt-6">
              NFT UTILITIES - TRAVEL 2 EARN
            </h1>
            <div className="grid grid-cols-1  gap-4 pt-4">
              <div
                className={`flex flex-row-reverse justify-between items-center px-2  `}
              >
                <Image
                  src="/icons/3d/discount2.png"
                  alt="tag"
                  height={140}
                  width={180}
                  layout={"fixed"}
                />
                <h1 className="text-[24px] font-light leading-[24px] text-[#ECF7FD]   w-[90%] text-center py-2">
                  Up to 30% Discounts <br /> for Rooms{" "}
                </h1>
              </div>
              <div className={`flex  justify-between items-center px-2  `}>
                <Image
                  src="/icons/3d/save_money3.png"
                  alt="tag"
                  height={140}
                  width={180}
                  layout={"fixed"}
                />
                <h1 className="text-[24px] font-light leading-[24px] text-[#ECF7FD]  w-[90%] text-center py-2 -ml-4">
                  Profits Added to <br /> DAO treasury. <br /> Holders Rewarded
                </h1>
              </div>
              <div
                className={`flex flex-row-reverse justify-between items-center px-2  `}
              >
                <Image
                  src="/icons/3d/coin_stack2.png"
                  alt="tag"
                  height={140}
                  width={165}
                  layout={"fixed"}
                />
                <h1 className="text-[24px] font-light leading-[24px] text-[#ECF7FD]  w-[90%] text-center py-2 -mr-14">
                  Seed Tokens <br /> Allocation
                </h1>
              </div>
              <div className={`flex  justify-between items-center px-2  `}>
                <Image
                  src="/icons/3d/money_bag2.png"
                  alt="tag"
                  height={140}
                  width={180}
                  layout={"fixed"}
                />
                <h1 className="text-[24px] font-light leading-[24px] text-[#ECF7FD]  w-[90%] text-center pt-2 -ml-8">
                  Cashback Travel <br /> Rewards
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-screen pt-4  flex-col items-center justify-center   space-y-6 md:space-y-0">
          <h1 className="text-[22px] leading-7 font-light md:w-[70%]  mx-auto text-center text-[#ECF7FD] relative ">
            {" "}
            <div className="absolute z-50 -top-4 left-2 lg:left-0"></div>We
            refurbish old buildings and leverage our unique property conversion
            model to turn them <br /> into the Palmverse brand.{" "}
          </h1>
          <div className=" py-4 ">
            <Image
              src="/images/hotel1.png"
              alt="palmverse hotel"
              width={1000}
              height={640}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/first-location">
            <button className="rounded-full px-12 py-4 font-semibold btn tracking-widest hover:btn-rev transition-all duration-500 ease-in-out flex items-center  ">
              Learn More <HiArrowNarrowRight className="text-2xl ml-2 " />
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center pt-8">
          <h1 className="text-3xl text-[#ECF7FD] font-bold w-[70%] mx-auto pb-4 text-center ">
            HOW IT WORKS{" "}
          </h1>
          <div className="hidden md:block">
            <Image
              src="/images/hotel.png"
              alt="palmverse hotel"
              width={1100}
              height={750}
            />
          </div>
          <div className=" md:hidden">
            <Image
              src="/images/map-mobile.png"
              alt="palmverse hotel"
              width={1100}
              height={750}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
