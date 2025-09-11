export default function Rating(props) {
    return (
        <div className="flex flex-col items-center gap-10 px-6 py-10 md:gap-8">
            <h2 className="copy-h1-alt text-center">Xolvie in numbers</h2>
            <div className="grid w-full grid-cols-1 md:w-auto md:grid-cols-4  gap-5 ">
                <div className="w-full text-center">
                    <p className="copy-h2 text-[42px]">13,512,241</p>
                    <p className="copy-h3-alt">Number of Individual Members</p>
                </div>
                <div className="w-full text-center">
                    <p  className="copy-h2 text-[42px]">241,560</p>
                    <p className="copy-h3-alt">Registered Brand</p>
                </div>
                <div className="copy-h2 w-full text-center text-[42px]">
                    <div className="inline-flex items-baseline space-x-2"><span>3,910,075</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"  className="h-[28px] w-[28px]">
                            <path
                                d="M9.94 1.342c.239-.737 1.282-.737 1.521 0l1.866 5.742a.8.8 0 0 0 .76.553h6.04c.774 0 1.097.992.47 1.448l-4.886 3.549a.8.8 0 0 0-.29.894l1.866 5.743c.24.737-.604 1.35-1.231.895l-4.886-3.55a.8.8 0 0 0-.94 0l-4.885 3.55c-.627.455-1.47-.158-1.231-.895l1.866-5.743a.8.8 0 0 0-.29-.894L.803 9.084c-.627-.455-.305-1.447.47-1.447h6.039a.8.8 0 0 0 .76-.552L9.94 1.341z"
                                fill="#230B59"></path>
                        </svg>
                    </div>
                    <p className="copy-h3-alt">Resolved Complaint</p>
                </div>
                <div className="copy-h2 w-full border-b-[1px] text-center text-[42px] md:border-b-0">
                    <div className="inline-flex items-baseline space-x-2"><span>23,298,948</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"
                             className="h-[28px] w-[28px]">
                            <path
                                d="M9.94 1.342c.239-.737 1.282-.737 1.521 0l1.866 5.742a.8.8 0 0 0 .76.553h6.04c.774 0 1.097.992.47 1.448l-4.886 3.549a.8.8 0 0 0-.29.894l1.866 5.743c.24.737-.604 1.35-1.231.895l-4.886-3.55a.8.8 0 0 0-.94 0l-4.885 3.55c-.627.455-1.47-.158-1.231-.895l1.866-5.743a.8.8 0 0 0-.29-.894L.803 9.084c-.627-.455-.305-1.447.47-1.447h6.039a.8.8 0 0 0 .76-.552L9.94 1.341z"
                                fill="#230B59"></path>
                        </svg>
                    </div>
                    <p className="copy-h3-alt">Visitors in the Last 30 Days </p>
                </div>
            </div>

        </div>
    )
}
