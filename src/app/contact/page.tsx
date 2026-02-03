"use client";

import BrandHeader from "@/components/BrandHeader";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactPage: React.FC = () => {
  const phoneNumber = "+91 91110 00757";

  return (
    <div className="bg-gray-50 min-h-screen dark:bg-gray-900">
        <section className="bg-gray-50 dark:bg-white">
            <BrandHeader
        logo="/logos/lapx-logo.avif"
        brandName="LapX Service Center"
        tagline="Premium Laptop Repair in Indore"
        />
        </section>

      {/* Main Contact Container */}
      <section className="py-16 px-4 flex justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl max-w-7xl w-full p-8 sm:p-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Contact Info */}
            <div className="flex flex-col justify-center gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Phone
                </h3>
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-2 text-white bg-gray-900 dark:bg-gray-700 py-3 px-6 rounded-lg font-semibold hover:opacity-80 w-max transition"
                >
                  <FaPhoneAlt /> {phoneNumber}
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/919111000757`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white bg-green-500 dark:bg-green-600 py-3 px-6 rounded-lg font-semibold hover:opacity-80 w-max transition"
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Address
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Lower Ground Floor, LG-31, Orbit Mall (Arbitto Mall) <br />
                  Near C21 &amp; Malhar Mall, AB Road Vijay Nagar <br />
                  Indore 452010
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Working Hours
                </h3>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Sunday: 10:00 AM - 9:30 PM</li>
                  <li>Monday: 10:00 AM - 9:30 PM</li>
                  <li>Tuesday: 10:00 AM - 9:30 PM</li>
                  <li>Wednesday: 10:00 AM - 9:30 PM</li>
                  <li>Thursday: 10:00 AM - 9:30 PM</li>
                  <li>Friday: 10:00 AM - 9:30 PM</li>
                  <li>Saturday: 10:00 AM - 9:30 PM</li>
                </ul>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-md h-96 sm:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14718.009394360883!2d75.88335035619549!3d22.746731277476243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6694767983%3A0x3b3ba4c4dcde4fd1!2sLapX%20-%20Laptop%20Repair%20Service%20Center%20DELL%20%7C%20HP%20%7C%20ASUS%20CENTER!5e0!3m2!1sen!2sin!4v1765802437315!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
