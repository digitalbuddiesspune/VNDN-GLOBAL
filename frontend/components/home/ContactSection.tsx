import Link from "next/link";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1c1c1a] px-6 py-[100px] text-center md:px-[60px]"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(201,168,76,0.06)]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(201,168,76,0.1)]" />

      <div className="relative z-10 mx-auto max-w-[700px]">
        <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
          Begin Your Journey
        </span>
        <h2 className="font-display text-[clamp(42px,6vw,78px)] leading-[1.1] font-light">
          Find Your
          <br />
          <em className="text-[#c9a84c] not-italic">Exceptional</em> Home
        </h2>
        <p className="mx-auto mt-6 max-w-[500px] text-xs leading-8 font-light tracking-[0.1em] text-[#8a8a80]">
          Speak with a Vane & Victors advisor today. Whether in Dubai or
          Ahmedabad, we open doors to residences most will never see.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="mailto:hello@vanevictors.com"
            className="inline-block bg-[#c9a84c] px-[52px] py-[18px] text-[10px] font-medium tracking-[0.25em] text-[#0f0f0e] uppercase no-underline transition-colors hover:bg-[#e8d49a]"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="tel:+971501234567"
            className="inline-block border border-[rgba(201,168,76,0.4)] px-[52px] py-[18px] text-[10px] font-medium tracking-[0.25em] text-[#f8f5ef] uppercase no-underline transition-all hover:border-[#c9a84c] hover:bg-[rgba(201,168,76,0.05)]"
          >
            +971 50 123 4567
          </Link>
        </div>
      </div>
    </section>
  );
}
