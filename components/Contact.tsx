"use client";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

/**
 * The Contact component displays a contact form and contact information.
 */

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    const payload = {
      name: "ShuleSmart Website Contact Form",
      subject: subject,
      message: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      topicId: 86,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFullName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="relative bg-white">
      {/* The background */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-green-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        {/* The contact information */}
        <div className="bg-green-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Let’s talk about smarter systems that simplify operations improve
              visibility and help your school grow sustainably with confidence.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>4th Floor, Parkfield Place.</p>
                  <p>Muthangari Drive.</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+254 111 131 000</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">
                    customercare@edpartnersafrica.com
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {/* The contact form */}
        <div className="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
                  placeholder="Message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === "Submitting..."}
                  className="inline-flex justify-center rounded-md border border-transparent bg-[#39e114] py-3 px-6 text-base font-medium text-white shadow-sm  focus:outline-none"
                >
                  {status === "Submitting..." ? "Submitting..." : "Submit"}
                </button>
              </div>
              {status && <p className="mt-2 text-sm text-gray-500">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}