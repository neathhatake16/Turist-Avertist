"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "Lot No. 3A, Street 169, Veal Vong Sangkat, Prampir Makara Khan, Phnom Penh",
    href: "https://www.google.com/maps/search/?api=1&query=Lot+No.+3A,+Street+169,+Phnom+Penh",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "(+855) 016 474 859",
    href: "tel:+85516474859",
  },
  {
    icon: Mail,
    label: "Email",
    value: "domner@tourism.com",
    href: "mailto:domner@tourism.com",
  },
];

const initialForm = {
  name: "",
  email: "",
  subject: "Planning a trip",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: "",
      }));
    }

    setSubmitted(false);
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validate();

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-200 dark:bg-background-dark dark:text-slate-100">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[480px] overflow-hidden bg-jungle-950 text-sandstone-100">
        {/* Background Image */}
        <img
          src="/images/contactHero.png"
          alt="Cambodia travel"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-jungle-950/75" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-jungle-950/95 via-jungle-950/70 to-jungle-950/40" />

        {/* Decorative Circles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-blue-400" />

          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-blue-400" />

          <div className="absolute bottom-[-150px] left-[-100px] h-80 w-80 rounded-full border border-blue-400" />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono-data text-xs uppercase tracking-[0.3em] text-gold-400">
              Get in touch
            </p>

            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Feedback something
              <span className="block text-gold-400">for us?</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-sandstone-300/90 sm:text-lg">
              Planning your next journey through Cambodia? Send us a message,
              ask about a destination, or share your feedback with us.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT SECTION
      ====================================================== */}
      <section className="bg-slate-50 transition-colors duration-200 dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* =================================================
              SUCCESS MESSAGE
          ================================================== */}
          {submitted && (
            <div className="mb-10 rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                  <Send size={18} />
                </div>

                <div>
                  <h3 className="font-semibold text-green-700 dark:text-green-400">
                    Message sent successfully
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Thanks for messaging us. We will get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* =================================================
              MAIN GRID

              LEFT  = 6 columns
              RIGHT = 4 columns
          ================================================== */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-10">
            {/* =================================================
                LEFT — MESSAGE FORM
            ================================================== */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg sm:p-8 lg:p-10 dark:border-slate-700 dark:bg-slate-800">
                {/* Form Header */}
                <div className="mb-8">
                  <p className="font-mono-data text-xs uppercase tracking-[0.25em] text-gold-600 dark:text-gold-400">
                    Send a message
                  </p>

                  <h2 className="mt-3 font-display text-3xl text-slate-900 dark:text-white sm:text-4xl">
                    How can we help?
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Fill out the form below and tell us what you&apos;d like to
                    know.
                  </p>
                </div>

                {/* =================================================
                    FORM
                ================================================== */}
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* NAME + EMAIL */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block font-mono-data text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(event) => update("name", event.target.value)}
                        placeholder="Your name"
                        className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-slate-900 dark:text-white ${
                          errors.name
                            ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                            : "border-slate-200 focus:border-gold-500 focus:ring-gold-500/20 dark:border-slate-700"
                        }`}
                      />

                      {errors.name && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-mono-data text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(event) =>
                          update("email", event.target.value)
                        }
                        placeholder="you@example.com"
                        className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-slate-900 dark:text-white ${
                          errors.email
                            ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                            : "border-slate-200 focus:border-gold-500 focus:ring-gold-500/20 dark:border-slate-700"
                        }`}
                      />

                      {errors.email && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block font-mono-data text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400"
                    >
                      Subject
                    </label>

                    <select
                      id="subject"
                      value={form.subject}
                      onChange={(event) =>
                        update("subject", event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    >
                      <option>Planning a trip</option>

                      <option>Question about a destination</option>

                      <option>Feedback on this site</option>

                      <option>Something else</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-mono-data text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows={7}
                      value={form.message}
                      onChange={(event) =>
                        update("message", event.target.value)
                      }
                      placeholder="Tell us about your question, trip, or feedback..."
                      className={`w-full resize-none rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-slate-900 dark:text-white ${
                        errors.message
                          ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                          : "border-slate-200 focus:border-gold-500 focus:ring-gold-500/20 dark:border-slate-700"
                      }`}
                    />

                    {errors.message && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* SUBMIT */}
                  <div className="flex flex-col gap-5 border-t border-slate-100 pt-6 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-5 text-slate-400">
                      We respect your privacy and will only use your information
                      to respond to your message.
                    </p>

                    <button
                      type="submit"
                      className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-medium text-jungle-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
                    >
                      Send message
                      <Send
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* =================================================
                RIGHT — CONTACT INFORMATION
            ================================================== */}
            <div className="space-y-8 lg:col-span-4">
              {/* =================================================
                  CONTACT INFORMATION CARD
              ================================================== */}
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-8">
                  <p className="font-mono-data text-xs uppercase tracking-[0.25em] text-gold-600 dark:text-gold-400">
                    Contact Information
                  </p>

                  <h2 className="mt-3 font-display text-3xl text-slate-900 dark:text-white">
                    Let&apos;s connect.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Reach out through any of the channels below. We&apos;re here
                    to help make your Cambodia journey easier.
                  </p>
                </div>

                {/* CONTACT ITEMS */}
                <div className="space-y-7">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.label === "Address" ? "_blank" : undefined}
                        rel={
                          item.label === "Address" ? "noreferrer" : undefined
                        }
                        className="group flex items-start gap-4"
                      >
                        {/* ICON */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-jungle-950 dark:text-gold-400">
                          <Icon size={20} strokeWidth={1.8} />
                        </div>

                        {/* TEXT */}
                        <div className="min-w-0 flex-1">
                          <p className="font-mono-data text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                            {item.label}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">
                            {item.value}
                          </p>
                        </div>

                        {/* ARROW */}
                        <ArrowUpRight
                          size={17}
                          className="mt-1 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold-500"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  QUICK HELP CARD
              ================================================== */}
              <div className="rounded-2xl border border-gold-600/20 bg-gold-500/5 p-6">
                <div className="flex gap-4">
                  <MessageCircle
                    className="mt-1 shrink-0 text-gold-600 dark:text-gold-400"
                    size={21}
                  />

                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-dark">
                      Need quick help?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-dark-400">
                      Include your destination and travel dates in your message
                      so we can give you a more useful answer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CONTACT STRIP
      ====================================================== */}
      <section className="border-t border-white/10 bg-jungle-950 py-12 text-sandstone-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-mono-data text-xs uppercase tracking-[0.25em] text-gold-400">
              Cambodia Travel Guide
            </p>

            <p className="mt-2 text-sm text-sandstone-300/60">
              Discover places, stories, food, and unforgettable routes.
            </p>
          </div>

          <a
            href="mailto:domner@tourism.com"
            className="inline-flex items-center gap-2 text-sm text-gold-400 transition-colors hover:text-gold-300"
          >
            domner@tourism.com
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
