'use client';
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function RegisterFormView() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);
        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            setError("Please fill all fields");
            setPending(false);
            return;
        }

        const res = await fetch("/api/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json", Authorization: `Bearer testtest`},
            body: JSON.stringify(form)
        })
        const data = await res.json();
        if (res.ok) {
            setPending(false);
            router.push("/signin");
        } else if (res.status === 400) {
            setError(data.message);
            setPending(false);
        } else if (res.status === 500) {
            setError(data.message || "Something went wrong");
            setPending(false);
        }

    }

    return (
        <div className="container-fluid">
            <div className="h-screen md:overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 ">
                    <div className="relative z-50 col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4">
                        <div className="w-full p-10 bg-white xl:p-12 dark:bg-zinc-800">
                            <div className="flex h-[100vh] flex-col">
                                <div className="mx-auto mb-12">
                                    <Link href="" className="">
                                        <span
                                            className="text-xl font-medium align-middle ltr:ml-1.5 rtl:mr-1.5 dark:text-white"> TREE </span>
                                    </Link>
                                </div>

                                <div
                                    className="my-auto">
                                    <div className="text-center">
                                        <h5 className="font-medium text-gray-700 dark:text-gray-100"> Welcome Back
                                            ! </h5>
                                        <p className="mt-2 mb-4 text-gray-500 dark:text-gray-100/60"> SignUp in to
                                            continue</p>
                                        <p
                                            className={'bg-danger'}>
                                            {!!
                                                error && (
                                                <div
                                                    className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                                                    <p>{error} </p>
                                                </div>
                                            )
                                            }
                                        </p>
                                    </div>
                                    <form className="pt-2" onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label
                                                className="block mb-2 font-medium text-gray-700 dark:text-gray-100"> Full
                                                Name
                                                <input
                                                    type="text"
                                                    disabled={pending}
                                                    placeholder="Full Name"
                                                    onChange={(e) => setForm({...form, name: e.target.value})}
                                                    value={form.name}
                                                    required
                                                    className="w-full input"
                                                />
                                            </label>
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                className="block mb-2 font-medium text-gray-700 dark:text-gray-100"> Email
                                                <input
                                                    type="email"
                                                    disabled={pending}
                                                    placeholder="Enter Email"
                                                    onChange={(e) => setForm({...form, email: e.target.value})}
                                                    value={form.email}
                                                    required
                                                    className="w-full input"
                                                />
                                            </label>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                className="block mb-2 font-medium text-gray-600 dark:text-gray-100"> Password

                                                {/*  <div className="ltr:ml-auto rtl:mr-auto">
                                                    <a href="/forgot-password" className="text-gray-500 dark:text-gray-100">Forgot password?</a>
                                                </div>*/
                                                }
                                                <input
                                                    type="password"
                                                    placeholder="Enpasswordter password"
                                                    value={form.password}
                                                    onChange={(e) => setForm({...form, password: e.target.value})}
                                                    className="w-full input"
                                                    disabled={pending}
                                                    required
                                                /> </label>

                                        </div>
                                        <div
                                            className="mb-3">
                                            <label
                                                className="block mb-2 font-medium text-gray-600 dark:text-gray-100"> Confirm
                                                Password
                                                <input
                                                    type="password"
                                                    placeholder="Confrom password"
                                                    value={form.confirmPassword}
                                                    onChange={(e) => setForm({
                                                        ...form,
                                                        confirmPassword: e.target.value
                                                    })}
                                                    className="w-full input"
                                                    disabled={pending}
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div
                                            className="mb-3">
                                            <button
                                                className="px-4 border rounded border-gray-50 bg-gray-50 ltr:rounded-l-none rtl:rounded-r-none ltr:border-l-0 rtl:border-r-0 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100"
                                                type="button"
                                                id="password-addon"><i
                                                className="mdi mdi-eye-outline"> </i></button>
                                        </div>
                                        <div
                                            className="mb-3">
                                            <button
                                                className={`w-full py-2 text-white border-transparent shadow-md btn bg-violet-500 w-100 waves-effect waves-light shadow-violet-200`
                                                }
                                                type="submit"> Sign
                                                In

                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    className="text-center">
                                    <p className="relative text-gray-500 dark:text-gray-100">©
                                        2025.Crafted
                                        with <i className="text-red-400 mdi mdi-heart"> </i> by Three
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-9">
                        <div className="h-screen bg-cover relative p-5 bg-[url('/img/bg1.jpg')] ">
                            <div className="absolute inset-0 bg-violet-500/90"></div>

                            <ul
                                className="absolute top-0 left-0 w-full h-full overflow-hidden bg-bubbles animate-square">
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

                            <div
                                className="flex items-center justify-center h-screen">
                                <div className="w-full md:max-w-4xl lg:px-9">
                                    <div
                                        className="swiper login-slider swiper-initialized swiper-horizontal swiper-backface-hidden">
                                        <div className="swiper-wrapper" id="swiper-wrapper-47dd0b5108bc7500a">
                                            <div className="swiper-slide swiper-slide-active">
                                                <i className="text-5xl text-green-600 bx bxs-quote-alt-left"> </i>
                                                <h3 className="mt-4 text-white text-22">“I feel confident imposing
                                                    change on throw curve balls.”</h3>
                                                <div
                                                    className="flex pt-4 mt-6 mb-10">
                                                    <img src="./" className="w-12 h-12 rounded-full" alt="..."/>
                                                    <div className="flex-1 mb-4 ltr:ml-3 rtl:mr-3">
                                                        <h5 className="text-white font-size-18"> Ilse R.Eaton </h5>
                                                        <p className="mb-0 text-white/50"> Manager </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

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




