'use client';
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import Link from "next/link";


export default function LoginView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password
        });

        if (res?.ok) {

            router.replace("/dashboard/");

        } else if (res?.status === 401) {
            setError('Invalid Credentials');
            setPending(false);
        } else {
            setError("Something went wrong");
        }
    };

    return (
        <div className="container-fluid">
            <div className="h-screen md:overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 ">
                    <div className="relative z-50 col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4">
                        <div className="w-full p-10 bg-white xl:p-12 dark:bg-zinc-800">
                            <div className="flex h-[90vh] flex-col">
                                <div className="mx-auto mb-12">
                                    <Link href="" className="">
                                        <img src="./" alt="" className="inline h-7"/> <span
                                        className="text-xl font-medium align-middle ltr:ml-1.5 rtl:mr-1.5 dark:text-white">Minia</span>
                                    </Link>
                                </div>

                                <div className="my-auto">
                                    <div className="text-center">
                                        <h5 className="font-medium text-gray-700 dark:text-gray-100">Welcome Back !</h5>
                                        <p className="mt-2 mb-4 text-gray-500 dark:text-gray-100/60">Sign in to continue
                                            to Minia.</p>
                                        <p className={'bg-danger'}>
                                            {!!error && (
                                                <div
                                                    className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                                                    <p>{error}</p>
                                                </div>
                                            )}
                                        </p>
                                    </div>

                                    <form className="pt-2" onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-100">Email
                                                <input
                                                    type="email"
                                                    placeholder="Enter Email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    disabled={pending}
                                                    className="w-full input"
                                                />
                                            </label>
                                        </div>
                                        <div className="mb-3">
                                            <label className="block mb-2 font-medium text-gray-600 dark:text-gray-100">Password
                                                <input
                                                    type="password"
                                                    placeholder="Enter password"
                                                    value={password}
                                                    disabled={pending}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="w-full input"
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <div className="ltr:ml-auto rtl:mr-auto">
                                                <a href="/forgot-password"
                                                   className="text-gray-500 dark:text-gray-100">Forgot password?</a>
                                            </div>
                                            <button
                                                className="px-4 border rounded border-gray-50 bg-gray-50 ltr:rounded-l-none rtl:rounded-r-none ltr:border-l-0 rtl:border-r-0 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100"
                                                type="button" id="password-addon"><i
                                                className="mdi mdi-eye-outline"></i></button>
                                        </div>
                                        <div className="mb-6 row">
                                            <div className="col">
                                                <div>
                                                    <input type="checkbox"
                                                           className="w-4 h-4 mt-1 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded cursor-pointer checked:bg-blue-600 checked:border-blue-600 focus:outline-none ltr:float-left rtl:float-right ltr:mr-2 rtl:ml-2 focus:ring-offset-0"
                                                           id=""/>
                                                    <label
                                                        className="font-medium text-gray-600 align-middle dark:text-gray-100">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="mb-3">
                                            <button
                                                disabled={pending}
                                                className={"w-full py-2 text-white border-transparent shadow-md btn bg-violet-500 w-100 waves-effect waves-light shadow-violet-200"}
                                                type="submit"> Sign In
                                            </button>
                                        </div>
                                    </form>

                                    <div className="pt-2 mt-5 text-center">
                                        <div>
                                            <h6 className="mb-3 font-medium text-gray-500 text-14 dark:text-gray-100">-Sign in with -</h6>
                                        </div>

                                        <div className="flex justify-center gap-3">
                                            <Link href="" className="w-8 h-8 leading-8 rounded-full bg-violet-500">
                                                <i className="text-sm text-white mdi mdi-facebook"></i>
                                            </Link>
                                            <Link href="" className="w-8 h-8 leading-8 rounded-full bg-sky-500">
                                                <i className="text-sm text-white mdi mdi-twitter"></i>
                                            </Link>
                                            <Link href="" className="w-8 h-8 leading-8 bg-red-400 rounded-full">
                                                <i className="text-sm text-white mdi mdi-google"></i>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="mt-12 text-center">
                                        <p className="text-gray-500 dark:text-gray-100">Don't have an account ? <Link
                                            href="/signup" className="font-semibold text-violet-500"> Signup
                                            now </Link></p>
                                    </div>
                                </div>

                                <div className="text-center ">
                                    <p className="relative text-gray-500 dark:text-gray-100">© 2025 Minia . Crafted with <i className="text-red-400 mdi mdi-heart"></i> by Themesbrand
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-9">
                        <div className="h-screen bg-cover relative p-5 bg-[url('/img/bg1.jpg')] ">
                            <div className="absolute inset-0 bg-violet-500/90"></div>

                            <ul className="absolute top-0 left-0 w-full h-full overflow-hidden bg-bubbles animate-square">
                                <li className="h-10 w-10 rounded-3xl bg-white/10 absolute left-[10%] "></li>
                                <li className="h-28 w-28 rounded-3xl bg-white/10 absolute left-[20%]"></li>
                                <li className="h-10 w-10 rounded-3xl bg-white/10 absolute left-[25%]"></li>
                                <li className="h-20 w-20 rounded-3xl bg-white/10 absolute left-[40%]"></li>
                                <li className="h-24 w-24 rounded-3xl bg-white/10 absolute left-[70%]"></li>
                                <li className="h-32 w-32 rounded-3xl bg-white/10 absolute left-[70%]"></li>
                                <li className="h-36 w-36 rounded-3xl bg-white/10 absolute left-[32%]"></li>
                                <li className="h-20 w-20 rounded-3xl bg-white/10 absolute left-[55%]"></li>
                                <li className="h-12 w-12 rounded-3xl bg-white/10 absolute left-[25%]"></li>
                                <li className="h-36 w-36 rounded-3xl bg-white/10 absolute left-[90%]"></li>
                            </ul>

                            <div className="flex items-center justify-center h-screen">
                                <div className="w-full md:max-w-4xl lg:px-9">
                                    <div
                                        className="swiper login-slider swiper-initialized swiper-horizontal swiper-backface-hidden">
                                        <div className="swiper-wrapper" id="swiper-wrapper-47dd0b5108bc7500a">
                                            <div className="swiper-slide swiper-slide-active">
                                                <i className="text-5xl text-green-600 bx bxs-quote-alt-left"></i>
                                                <h3 className="mt-4 text-white text-22">“I feel confident imposing
                                                    change on throw curve balls.”</h3>
                                                <div className="flex pt-4 mt-6 mb-10">
                                                    <img src="./" className="w-12 h-12 rounded-full" alt="..."/>
                                                    <div className="flex-1 mb-4 ltr:ml-3 rtl:mr-3">
                                                        <h5 className="text-white font-size-18">Ilse R. Eaton</h5>
                                                        <p className="mb-0 text-white/50">Manager </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide swiper-slide-next">
                                                <i className="text-5xl text-green-600 bx bxs-quote-alt-left"></i>
                                                <h3 className="mt-4 text-white text-22">“I feel confident imposing
                                                    change on throw curve balls.”</h3>
                                                <div className="flex pt-4 mt-6 mb-10">
                                                    <img src="./" className="w-12 h-12 rounded-full" alt="..."/>
                                                    <div className="flex-1 mb-4 ltr:ml-3 rtl:mr-3">
                                                        <h5 className="text-white font-size-18">Mariya Willam</h5>
                                                        <p className="mb-0 text-white/50">Designer </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <i className="text-5xl text-green-600 bx bxs-quote-alt-left"></i>
                                                <h3 className="mt-4 text-white text-22">“I feel confident imposing
                                                    change on throw curve balls.”</h3>
                                                <div className="flex pt-4 mt-6 mb-10">
                                                    <img src="./" className="w-12 h-12 rounded-full" alt="..."/>
                                                    <div className="flex-1 mb-4 ltr:ml-3 rtl:mr-3">
                                                        <h5 className="text-white font-size-18">Jiya Jons</h5>
                                                        <p className="mb-0 text-white/50">Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                                            <span
                                                className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                                            <span className="swiper-pagination-bullet"></span>
                                            <span className="swiper-pagination-bullet"></span>
                                        </div>
                                        <span className="swiper-notification"></span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


