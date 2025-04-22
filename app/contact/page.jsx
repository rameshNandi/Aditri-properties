import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Let's Talk Project - Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
        <div className="bg-white rounded-md shadow-md overflow-hidden max-w-3xl w-full mx-auto flex">
          {/* Left Section */}
          <div className="bg-sky-500 text-white p-8 w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Let's talk about your project</h2>
            <p className="text-sm mb-4">Fill out the form or contact us directly. Our team will get back to you within 24 hours.</p>
            <div>
              <p className="text-sm font-semibold mb-1">EMAIL US:</p>
              <p className="text-sm mb-2">info@theclickcatalysts.com</p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">CALL US:</p>
              <p className="text-sm mb-2">+91 9038372666</p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">VISIT US:</p>
              <address className="text-sm not-italic mb-2">
                Unit 641, 6th floor<br />
                PS ABACUS, NH12,<br />
                Action Area IIE, New Town,<br />
                Kolkata, West Bengal 700157
              </address>
              <a href="#" className="text-xs underline">Directions on Google Maps</a>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold mb-1">FIND US:</p>
              <div className="flex space-x-2">
                <a href="#" className="text-white hover:opacity-80">
                  {/* You can replace these with actual icon components or SVG */}
                  <span className="text-xl">f</span>
                </a>
                <a href="#" className="text-white hover:opacity-80">
                  <span className="text-xl">X</span>
                </a>
                <a href="#" className="text-white hover:opacity-80">
                  <span className="text-xl">in</span>
                </a>
                <a href="#" className="text-white hover:opacity-80">
                  <span className="text-xl">@</span>
                </a>
                <a href="#" className="text-white hover:opacity-80">
                  <span className="text-xl">W</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-8 w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <form className="space-y-4">
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">Your First Name</label>
                  <input type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Your Last Name</label>
                  <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Your Mobile</label>
                <input type="tel" id="mobile" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                <input type="text" id="company" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-gray-700 text-sm font-bold mb-2">Inquiry</label>
                <select id="inquiry" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option>Select an option</option>
                  {/* Add your inquiry options here */}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
                <textarea id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <button type="submit" className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}