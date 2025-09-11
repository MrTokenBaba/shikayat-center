export default function ReviewCard(props) {
    return (
        <div className="relative w-[300px] pb-2 sm:w-[300px] md:w-auto">
            {/*<h2 className="copy-h1-alt text-center">Don’t just take our word for it.</h2>*/}

            <div
                className="hide-scrollbar w-full max-w-[1550px] snap-x snap-mandatory overflow-scroll px-8 py-8 sm:pl-40 sm:pr-52 md:px-6 lg:px-20 xl:px-28">
                <div
                    className="grid-rows-auto grid w-[1300px] grid-cols-4 gap-4 sm:w-[1450px] sm:grid-cols-[1.5fr,1fr,1fr,1fr] md:w-auto md:grid-cols-3 ">
                    <div id="hero-review-card"
                         className="flex snap-center flex-col items-center gap-4 rounded-standard bg-[#C3CDF4] p-large shadow-card md:col-span-3">
                        <p className="copy-h2 sm:copy-h1 max-w-[450px] text-center font-bold lg:max-w-full"> Wealthfront
                            takes the crown for best overall platform on the market</p>

                    </div>
                    <div id="review-one-card">
                        <div
                            className="flex h-full snap-center snap-always flex-col justify-between gap-4 rounded-standard bg-white p-large shadow-card">
                            <p className="copy-h3 pb-2 font-bold">The best way for me to maximize every one
                                of
                                my hard earned dollars.</p>
                            <div className="flex gap-2">
                                <div
                                    className="h-[50px] w-[50px] shrink-0 rounded-[50%] border-[1px] border-solid border-content-divider bg-gradient-to-b from-day-start to-day-end"></div>
                                <div className="pt-1"><p className="copy-body font-bold">Stanley R</p><p
                                    className="copy-body">Cash Account</p></div>
                            </div>
                        </div>
                    </div>
                    <div id="review-two-card">
                        <div
                            className="flex h-full snap-center snap-always flex-col justify-between gap-4 rounded-standard bg-white p-large shadow-card">
                            <p className="copy-h3 pb-2 font-bold">The single best resource for investing,
                                managing retirement and seeing my entire financial picture.</p>
                            <div className="flex gap-2">
                                <div
                                    className="h-[50px] w-[50px] shrink-0 rounded-[50%] border-[1px] border-solid border-content-divider bg-gradient-to-b from-soft-start to-soft-end"></div>
                                <div className="pt-1"><p className="copy-body font-bold">Joshua B</p><p
                                    className="copy-body">Automated Investing Account</p></div>
                            </div>
                        </div>
                    </div>
                    <div id="review-three-card">
                        <div
                            className="flex h-full snap-center snap-always flex-col justify-between gap-4 rounded-standard bg-white p-large shadow-card">
                            <p className="copy-h3 pb-2 font-bold">I LOVE Wealthfront and have moved almost
                                all
                                of my finances there.</p>
                            <div className="flex gap-2">
                                <div
                                    className="h-[50px] w-[50px] shrink-0 rounded-[50%] border-[1px] border-solid border-content-divider bg-gradient-to-b from-vibrant-start to-vibrant-end"></div>
                                <div className="pt-1"><p className="copy-body font-bold">Daniel C</p><p
                                    className="copy-body">Automated Bond Portfolio</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}