export default function ComplaintSteps() {
    return (
        <section
            className="bg-[linear-gradient(114deg,#7DC9F2_40.20%,#1699DF_68.100%)] lg:flex flex-col justify-center gap-6 overflow-hidden
                text-zinc-900 text-opacity-80 py-8 sm:gap-10 lg:items-center lg:py-20 lg:px-[4rem]">
            <div className="relative pb-4  lg:pt-0">
                <img
                    className="absolute top-0 right-1/2 translate-x-1/2 lg:translate-x-0 xl:top-6 lg:-right-20 xl:-right-40 w-[160px] xl:w-[200px] h-auto"
                    src="https://ubis.aydin.edu.tr/cdn/ubis/Themes/Feedback/Image/cash-airplane.png" alt=""/>
                    <h2 className=" px-6 pt-16 text-center lg:py-8 xl:py-6 text-[30px] lg:text-[3rem]  font-[800] leading-1 ">
                        GeriBildirim İnceleme ve Değerlendirme Süreci.</h2>
            </div>

            <div
                className="hide-scrollbar max-w-full snap-x snap-mandatory overflow-scroll scroll-smooth px-8 lg:max-w-[2024px] xl:px-16 ">
                <div className="grid min-w-[1100px] grid-cols-4 gap-6 md:max-w-full lg:w-full lg:min-w-full lg:gap-4 ">
                    <div className="flex snap-center flex-col gap-2 xl:gap-4">
                        <i className="fa-solid fa-1 text-[2.4rem]"></i>
                        <h3 className="text-[20px] lg:text-[1.7rem] 2xl:text-[1.4rem] font-bold">Receipt of Your
                            Application</h3>
                        <p className="max-w-[325px] text-[14px] lg:text-[1.2rem] 2xl:text-[1rem]">When your feedback reaches
                            us, a notification message
                            confirming the receipt of your application will be sent to you.</p>

                    </div>
                    <div className="flex snap-center flex-col gap-2 xl:gap-4">
                        <i className="fa-solid fa-2 text-[2.4rem]"></i>
                        <h3 className="text-[20px] lg:text-[1.7rem] 2xl:text-[1.4rem] font-bold">Evaluation of Your
                            Application</h3>
                        <p className="max-w-[325px] text-[14px] lg:text-[1.2rem] 2xl:text-[1rem]">The Feedback Management
                            System Administrator thoroughly
                            examines the feedback you provided and directs it to the relevant department for
                            resolution..</p>

                    </div>
                    <div className="flex snap-center flex-col gap-2 xl:gap-4">
                        <i className="fa-solid fa-3 text-[2.4rem]"></i>
                        <h3 className="text-[20px] lg:text-[1.7rem] 2xl:text-[1.4rem] font-bold">Forwarding to Relevant
                            Departments</h3>
                        <p className=" max-w-[325px] text-[14px] lg:text-[1.2rem] 2xl:text-[1rem]">Your feedback is
                            forwarded to the most relevant departments,
                            and the resolution process begins.</p>
                    </div>

                    <div className="flex snap-center flex-col gap-2 xl:gap-4">
                        <i className="fa-solid fa-4 text-[2.4rem]"></i>
                        <h3 className="text-[20px] lg:text-[1.7rem] font-bold 2xl:text-[1.4rem] ">Sending Evaluation
                            Survey</h3>
                        <p className="max-w-[325px] text-[14px] lg:text-[1.2rem] 2xl:text-[1rem]">After your feedback, a
                            brief evaluation survey will be sent to
                            you to assess your satisfaction and to understand how we can improve our process.</p>
                    </div>

                </div>
                <img className="-mt-10 h-full min-w-[1100px] object-cover lg:w-full lg:min-w-full lg:max-w-full"
                     width="1881"
                     height="309" src="https://ubis.aydin.edu.tr/cdn/ubis/Themes/Feedback/Image/risk-linechart.svg" alt=""/>
            </div>

            <div className="flex w-full justify-center gap-2 sm:hidden">
                <button name="cash-card">
                    <span className="h-[10px] w-[10px] rounded-[50%] bg-blurple"></span>
                </button>
                <button name="bond-card">
                    <span className="h-[10px] w-[10px] rounded-[50%] bg-blurple"></span>
                </button>
                <button name="investing-card">
                    <span className="h-[10px] w-[10px] rounded-[50%] bg-blurple"></span>
                </button>
                <button name="stock-card">
                    <span className="h-[10px] w-[10px] rounded-[50%] bg-blurple"></span>
                </button>
            </div>
        </section>

)

}