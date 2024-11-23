import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <section className="text-center bg-green-500 text-white py-20">
        <h1 className="text-5xl font-bold">
          Simplify Your Links with <span className="text-yellow-400">LinkTree</span>
        </h1>
        <p className="mt-4 text-lg">
          Share all your important links with one simple URL. Perfect for creators, businesses, and everyone in between.
        </p>
        <button className="mt-6 bg-yellow-400 text-green-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition">
          Get Started
        </button>
      </section>

      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Features</h2>
          <p className="text-gray-600 mt-2">
            Why choose LinkTree? Here are some of the awesome features we offer.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-500">Customizable Links</h3>
              <p className="mt-2 text-gray-600">
                Personalize your links with custom designs and colors.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-500">Analytics</h3>
              <p className="mt-2 text-gray-600">
                Track clicks and engagement with built-in analytics.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-500">Mobile Friendly</h3>
              <p className="mt-2 text-gray-600">
                Your links look great on all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center bg-gray-800 text-white py-16">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-gray-300">
          Sign up today and start sharing your links with ease.
        </p>
        <button className="mt-6 bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-400 transition">
          Create Your LinkTree
        </button>
      </section>


      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} LinkTree. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
