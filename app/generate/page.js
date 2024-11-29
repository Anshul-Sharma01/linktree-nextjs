"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const Generate = () => {
    const [links, setLinks] = useState([{ link: "", linkText: "" }]);
    const [handle, setHandle] = useState("");
    const [poster, setPoster] = useState("");

    // Function to handle changes in link fields
    const handleChange = (index, field, value) => {
        setLinks((prevLinks) =>
            prevLinks.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        );
    };

    // Function to add a new link
    const addLink = () => {
        setLinks([...links, { link: "", linkText: "" }]);
    };

    // Function to delete a link
    const deleteLink = (index) => {
        setLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
    };

    // Function to submit all data
    const submitLinks = async () => {
        if (!handle || links.some((l) => !l.link || !l.linkText)) {
            toast.error("Please fill out all fields.");
            return;
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            handle,
            poster,
            links,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        try {
            const res = await fetch("http://localhost:3000/api/add", requestOptions);
            const result = await res.json();
            if (res.ok) {
                toast.success(result.message);
                setHandle("");
                setPoster("");
                setLinks([{ link: "", linkText: "" }]);
            } else {
                toast.error(result.message || "An error occurred!");
            }
        } catch (error) {
            toast.error("Failed to create URLTree.");
        }
    };

    return (
        <section className="bg-gradient-to-r from-cyan-200 to-cyan-500 min-h-[100vh] flex flex-row justify-center items-center">
            <section className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8 w-[80%]">
                <h1 className="font-bold text-center text-4xl text-gray-800 mb-8">
                    Generate Your Own Link Tree
                </h1>

                {/* Step 1 */}
                <div className="w-full mb-6">
                    <p className="font-medium text-lg mb-2 text-gray-700">
                        Step 1: Claim your handle
                    </p>
                    <input
                        type="text"
                        value={handle}
                        onChange={(e) => setHandle(e.target.value)}
                        placeholder="Enter the handle you want..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                {/* Step 2 */}
                <div className="w-full mb-6">
                    <p className="font-medium text-lg mb-2 text-gray-700">
                        Step 2: Enter Links
                    </p>
                    {links.map((item, index) => (
                        <div key={index} className="flex flex-wrap gap-4 mb-4 items-center">
                        <input
                            type="text"
                            value={item.linkText}
                            onChange={(e) => handleChange(index, "linkText", e.target.value)}
                            placeholder="Enter the link text"
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                        <input
                            type="text"
                            value={item.link}
                            onChange={(e) => handleChange(index, "link", e.target.value)}
                            placeholder="Enter the link"
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                        <button
                            onClick={() => deleteLink(index)}
                            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all"
                        >
                            <MdDelete />
                        </button>
                    </div>
                    ))}
                    <button
                        onClick={addLink}
                        className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-all"
                    >
                        Add Link
                    </button>
                </div>

                {/* Step 3 */}
                <div className="w-full mb-6">
                    <p className="font-medium text-lg mb-2 text-gray-700">
                        Step 3: Add poster and finalize
                    </p>
                    <input
                        type="text"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="Enter your poster link"
                    />
                    <button
                        onClick={submitLinks}
                        disabled={poster == "" || handle == "" || links[0].linkText == ""}
                        className="px-6 py-3 disabled:bg-gray-400 rounded-lg disabled:cursor-not-allowed bg-cyan-500 text-white hover:bg-cyan-600 transition-all"
                    >
                        Create Your URLTree
                    </button>
                </div>
            </section>
            <Toaster />
        </section>
    );
};

export default Generate;
