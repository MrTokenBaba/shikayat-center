"use client";
import { useState } from "react";

export default function ComplaintWizard() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        detail: "",
        title: "",
        brand: "",
        document: null,
    });

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
                <h2 className="text-xl font-bold">Create a Complaint</h2>
                <ul className="space-y-3">
                    {["Complaint Detail", "Title", "Brand", "Document"].map(
                        (label, index) => (
                            <li
                                key={index}
                                className={`flex items-center gap-2 ${
                                    step === index + 1
                                        ? "text-green-400 font-semibold"
                                        : "text-gray-400"
                                }`}
                            >
                <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-sm ${
                        step > index + 1
                            ? "bg-green-500 text-white"
                            : step === index + 1
                                ? "border-2 border-green-400"
                                : "border-2 border-gray-500"
                    }`}
                >
                  {step > index + 1 ? "✓" : index + 1}
                </span>
                                {label}
                            </li>
                        )
                    )}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 bg-white rounded-l-3xl shadow-lg">
                {step === 1 && (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Complaint Detail</h3>
                        <textarea
                            className="w-full border p-3 rounded-lg"
                            rows={4}
                            value={form.detail}
                            onChange={(e) => setForm({ ...form, detail: e.target.value })}
                            placeholder="Describe your complaint..."
                        />
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Title</h3>
                        <input
                            type="text"
                            className="w-full border p-3 rounded-lg"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            placeholder="Enter a short title"
                        />
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Brand</h3>
                        <input
                            type="text"
                            className="w-full border p-3 rounded-lg"
                            value={form.brand}
                            onChange={(e) => setForm({ ...form, brand: e.target.value })}
                            placeholder="Which brand is this about?"
                        />
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Document</h3>
                        <input
                            type="file"
                            className="w-full border p-3 rounded-lg"
                            onChange={(e) =>
                                setForm({ ...form, document: e.target.files[0] })
                            }
                        />
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    {step > 1 ? (
                        <button
                            onClick={prevStep}
                            className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                            Go Back
                        </button>
                    ) : (
                        <span />
                    )}

                    {step < 4 ? (
                        <button
                            onClick={nextStep}
                            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        >
                            Continue
                        </button>
                    ) : (
                        <button
                            onClick={() => alert("Complaint submitted!")}
                            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </main>
        </div>
    );
}
