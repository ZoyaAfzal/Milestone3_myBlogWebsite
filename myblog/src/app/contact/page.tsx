import Image from 'next/image';
import contactpage from '../../../public/images/contactpage.jpg';
import React from 'react';

function ContactPage() {
  return (
    <div className="max-w-screen-xl w-full lg:h-[1110px] sm:h-[1090px] xs:h-[1240px] mx-auto px-4">
      {/* Banner Section */}
      <div className="w-full h-[352px] flex flex-col justify-center items-center gap-8">
        <Image
          src={contactpage}
          alt="contactbanner"
          height={352}
          width={1260}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Form Section */}
      <section className="bg-secondaryColor py-8 px-4 space-y-8">
        <div className="max-w-screen-lg mx-auto space-y-6">
          <h2 className="text-center text-4xl font-bold text-white">
            Contact Us
          </h2>
          <p className="text-center text-xl font-semibold text-white">
            Please, feel yourself comfortable to fill in our contact form
          </p>

          <form className="bg-white shadow-md rounded-lg p-6 space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 text-white bg-secondaryColor rounded-md hover:bg-[#418697] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;

