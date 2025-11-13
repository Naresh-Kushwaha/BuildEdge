// src/pages/Contact.jsx
import { useState } from "react";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    const form = e.currentTarget;
    if (!form.checkValidity()) return;

    // Example: send data to your backend API endpoint
    try {
      const data = Object.fromEntries(new FormData(form));
      // Replace with your API call:
      // await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus({ type: "success", message: "Thanks! Your message has been sent." });
      form.reset();
      setValidated(false);
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Contact us</h1>
            <p className="text-gray-700 mt-3">
              Get in touch for quotes, site visits, or project consultations. The form uses native validation styled with Tailwind peer/invalid patterns for a clear UX. [web:21][web:24]
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Address</h3>
                <p className="text-gray-700 mt-1">2nd Floor, BUIDEDGE House, MG Road, Bengaluru, KA 560001</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Phone</h3>
                <a href="tel:+919876543210" className="text-amber-700 hover:text-amber-800">+91 98765 43210</a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Email</h3>
                <a href="mailto:contact@buidedge.com" className="text-amber-700 hover:text-amber-800">contact@buidedge.com</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border p-6 shadow-sm">
            <form noValidate onSubmit={onSubmit} className={validated ? "validated" : ""}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-900">First name</label>
                  <input
                    required
                    name="firstName"
                    className="peer mt-1 w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-200
                      [.validated_&]:invalid:border-rose-500 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-rose-200"
                    placeholder="John"
                  />
                  <p className="mt-1 hidden text-sm text-rose-600 [.validated_&]:peer-invalid:block">Please provide your first name.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Last name</label>
                  <input
                    required
                    name="lastName"
                    className="peer mt-1 w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-200
                      [.validated_&]:invalid:border-rose-500 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-rose-200"
                    placeholder="Doe"
                  />
                  <p className="mt-1 hidden text-sm text-rose-600 [.validated_&]:peer-invalid:block">Please provide your last name.</p>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="peer mt-1 w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-200
                      [.validated_&]:invalid:border-rose-500 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-rose-200"
                    placeholder="you@company.com"
                  />
                  <p className="mt-1 hidden text-sm text-rose-600 [.validated_&]:peer-invalid:block">Please enter a valid email.</p>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Phone</label>
                  <input
                    required
                    name="phone"
                    className="peer mt-1 w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-200
                      [.validated_&]:invalid:border-rose-500 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-rose-200"
                    placeholder="+91 98765 43210"
                  />
                  <p className="mt-1 hidden text-sm text-rose-600 [.validated_&]:peer-invalid:block">Please provide your phone number.</p>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-900">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="peer mt-1 w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-200
                      [.validated_&]:invalid:border-rose-500 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-rose-200"
                    placeholder="Tell us about your project..."
                  />
                  <p className="mt-1 hidden text-sm text-rose-600 [.validated_&]:peer-invalid:block">Please enter a message.</p>
                </div>
              </div>

              {status.message && (
                <div
                  className={`mt-4 rounded-lg px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-amber-600 px-5 py-3 font-medium text-white hover:bg-amber-700"
              >
                Send message
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              You can wire this form to a backend or use a service like Web3Forms; both approaches are compatible with Tailwind’s validation styles. [web:21][web:24][web:34]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
