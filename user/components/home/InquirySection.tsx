"use client";

import { useState } from "react";
import { CITIES } from "@/lib/home/content";

export function InquirySection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="bg-[#0f0f0e] px-6 py-[100px] md:px-[60px]">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <div>
          <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
            Private Inquiry
          </span>
          <h2 className="font-display text-[clamp(38px,5vw,52px)] leading-[1.1] font-light">
            Request a <em className="text-[#c9a84c] not-italic">Consultation</em>
          </h2>
          <p className="mt-4 text-xs leading-8 font-light tracking-[0.1em] text-[#8a8a80]">
            Share your requirements and a senior advisor will respond within 24
            hours. All inquiries are handled with complete discretion.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center border border-[rgba(201,168,76,0.3)] bg-[#1c1c1a] p-12 text-center">
            <span className="font-display text-4xl text-[#c9a84c]">✓</span>
            <p className="font-display mt-4 text-2xl text-[#f8f5ef]">
              Thank You
            </p>
            <p className="mt-2 text-xs text-[#8a8a80]">
              Your inquiry has been received. We will be in touch shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 border border-[rgba(201,168,76,0.2)] bg-[#1c1c1a] p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First Name" name="firstName" required />
              <Field label="Last Name" name="lastName" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <div>
              <label className="mb-2 block text-[9px] tracking-[0.25em] text-[#8a8a80] uppercase">
                Market of Interest
              </label>
              <select
                name="market"
                required
                className="w-full border border-[rgba(201,168,76,0.2)] bg-[#0f0f0e] px-4 py-3 text-sm font-light text-[#f8f5ef] outline-none focus:border-[#c9a84c]"
              >
                <option value="">Select a city</option>
                {CITIES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
                <option value="both">Both Markets</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-[9px] tracking-[0.25em] text-[#8a8a80] uppercase">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full resize-none border border-[rgba(201,168,76,0.2)] bg-[#0f0f0e] px-4 py-3 text-sm font-light text-[#f8f5ef] outline-none focus:border-[#c9a84c]"
                placeholder="Tell us about your property requirements…"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#c9a84c] py-4 text-[10px] font-medium tracking-[0.25em] text-[#0f0f0e] uppercase transition-colors hover:bg-[#e8d49a]"
            >
              Submit Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[9px] tracking-[0.25em] text-[#8a8a80] uppercase">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-[rgba(201,168,76,0.2)] bg-[#0f0f0e] px-4 py-3 text-sm font-light text-[#f8f5ef] outline-none focus:border-[#c9a84c]"
      />
    </div>
  );
}
