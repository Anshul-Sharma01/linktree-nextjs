"use server"
import Link from "next/link";
import { MongoClient } from "mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }){
    const handle = (await params).handle;
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    await client.connect();
    const db = client.db("urltree");
    const collection = db.collection("links");

    const item = await collection.findOne({handle});
    if(!item){
        return notFound();
    }
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-violet-500 via-purple-600 to-blue-500 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4 p-6 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md">
                {/* Profile Section */}
                <div className="flex flex-col justify-center items-center gap-2">
                <img
                    src={item?.poster}
                    alt="Poster-Avatar"
                    className="w-28 h-28 rounded-full border-4 border-white shadow-md"
                />
                <span className="font-bold text-white text-3xl">@{item?.handle || "john doe"}</span>
                </div>
        
                {/* Links Section */}
                <div className="flex flex-col w-full gap-4">
                {item?.links?.map((item, index) => (
                    <div
                    className="py-3 px-6 rounded-md text-lg font-semibold text-gray-800 bg-white hover:bg-gray-100 hover:text-blue-500 transition-all duration-300 shadow-md"
                    key={index}
                    >
                    <Link href={item?.link}>{item?.linkText}</Link>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}