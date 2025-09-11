import Image from "next/image";
import Subscribe from "@/components/Subscribe";
import TopCompany from "@/components/TopCompany";
import HeroSection from "@/components/home/HeroSection";
import FourSteps from "@/components/home/FourSteps";
import ComplaintSteps from "@/components/home/ComplaintSteps";
import ReviewCard from "@/components/home/ReviewCard";
import Rating from "@/components/home/Rating";
import CompanyList from "@/components/home/CompanyList";

export default function Home() {
    return (
        <>
            <HeroSection/>

            <FourSteps/>

            {/*<div data-sc="mobile-modules-nav"
                     className="sticky top-0 z-30 h-[90px] border-b-[1px] border-lunar bg-pebble lg:hidden">
                    <button data-testid="mobile-menu-title"
                            className="flex h-full w-full items-center justify-between px-6 text-left"
                            name="cash-module">
                        <div><p
                            className="copy-caption text-[13px] xl:text-[15px] 2xl:text-[16px]">“Now” money</p><p
                            className="copy-h3 text-[21px] font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px]">Cash
                            Account</p></div>
                        <img height="18" width="37" className="float-right block h-[15px] w-auto" alt="arrow"
                             loading="lazy"
                             src="/next/contenthash/next/svg/optimized/arrow-down.contenthash.47a3b3b4414bb6d976121aee4d2161d88a6ff913.svg"/>
                    </button>
                </div>*/}
            <ComplaintSteps/>

            <div data-sc="homepage-reviews-module"
                 className="py-[5rem] flex flex-col items-center justify-center gap-y-4 overflow-hidden border-t-[1px] border-eggplant border-opacity-40 bg-pebble ">
                <ReviewCard/>
                <Rating/>
            </div>


            <div data-sc={'list-company'}  className={'bg-[#1f1f2e] text-white min-h-screen flex flex-col items-center py-10'}>
                <CompanyList />
            </div>
        </>

    );
}
