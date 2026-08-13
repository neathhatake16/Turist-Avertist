"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";

const heroDestinations = [
  {
    id: 1,
    slug: "angkor-wat",
    location: "Siem Reap · Cambodia",
    title: "ANGKOR WAT",
    description:
      "Walk through the magnificent temples of Angkor and discover one of Southeast Asia's greatest archaeological wonders.",
    image: "/images/angkorwat.png",
    category: "Heritage",
  },
  {
    id: 2,
    slug: "koh-rong",
    location: "Sihanoukville · Cambodia",
    title: "KOH RONG",
    description:
      "Escape to crystal-clear waters, white-sand beaches, and tropical island life along Cambodia's southern coast.",
    image: "/images/kohrong.png",
    category: "Island",
  },
  {
    id: 3,
    slug: "chi-phat",
    location: "Koh Kong · Cambodia",
    title: "CHI PHAT",
    description:
      "Discover rolling hills, waterfalls, forests, and the peaceful landscapes of Cambodia's wild eastern highlands.",
    image: "/images/chiphat.png",
    category: "Nature",
  },
  {
    id: 4,
    slug: "tuol-sleng",
    location: "Phnom Penh · Cambodia",
    title: "TUOL SLENG",
    description:
      "Explore Cambodia's difficult history through an important historical site in the heart of Phnom Penh.",
    image: "/images/toulsleng.png",
    category: "History",
  },
  {
    id: 5,
    slug: "kampot",
    location: "Kampot · Cambodia",
    title: "KAMPOT",
    description:
      "Slow down beside the river, explore the countryside, and experience the relaxed charm of southern Cambodia.",
    image: "/images/kampot.jpg",
    category: "Culture",
  },
];

export default function DestinationHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = heroDestinations[active];

  // =====================================================
  // AUTOMATIC SLIDER
  // =====================================================

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((currentIndex) =>
        currentIndex === heroDestinations.length - 1 ? 0 : currentIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  // =====================================================
  // NEXT SLIDE
  // =====================================================

  function nextSlide() {
    setActive((currentIndex) =>
      currentIndex === heroDestinations.length - 1 ? 0 : currentIndex + 1,
    );
  }

  // =====================================================
  // PREVIOUS SLIDE
  // =====================================================

  function previousSlide() {
    setActive((currentIndex) =>
      currentIndex === 0 ? heroDestinations.length - 1 : currentIndex - 1,
    );
  }

  return (
    <section
      className="
        relative
        h-[calc(100vh-72px)]
        min-h-[650px]
        overflow-hidden
        bg-black
        text-white
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* =====================================================
          BACKGROUND IMAGES
      ===================================================== */}

      {heroDestinations.map((destination, index) => (
        <div
          key={destination.id}
          className={`
            absolute
            inset-0
            transition-opacity
            duration-1000
            ${index === active ? "opacity-100" : "opacity-0"}
          `}
        >
          <Image
            src={destination.image}
            alt={destination.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`
              object-cover
              transition-transform
              duration-[6000ms]
              ${index === active ? "scale-105" : "scale-100"}
            `}
          />
        </div>
      ))}

      {/* =====================================================
          OVERLAYS
      ===================================================== */}

      {/* General dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Left dark gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/75
          via-black/35
          to-black/10
        "
      />

      {/* Bottom dark gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-transparent
          to-black/20
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          h-full
          max-w-7xl
          px-5
          md:px-8
        "
      >
        <div className="flex h-full items-center">
          <div
            className="
              w-full
              max-w-xl
              pb-24
              pt-16
              lg:max-w-2xl
            "
          >
            <div
              key={`content-${current.id}`}
              className="animate-[heroFade_0.7s_ease-out]"
            >
              {/* =================================================
                  LOCATION
              ================================================= */}

              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-yellow-400" />

                <p
                  className="
                    text-sm
                    font-medium
                    tracking-wide
                    text-white/80
                  "
                >
                  {current.location}
                </p>
              </div>

              {/* =================================================
                  TITLE
              ================================================= */}

              <h1
                className="
                  font-display
                  text-5xl
                  font-bold
                  leading-[0.9]
                  tracking-tight
                  text-white
                  sm:text-7xl
                  lg:text-8xl
                "
              >
                {current.title}
              </h1>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                className="
                  mt-7
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/70
                  sm:text-base
                  sm:leading-7
                "
              >
                {current.description}
              </p>

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {/* Discover button */}

                <Link
                  href={`/destinations/${current.slug}`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-yellow-500
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-black
                    transition
                    hover:-translate-y-0.5
                    hover:bg-yellow-400
                  "
                >
                  <MapPin size={16} />

                  <span>Discover Location</span>
                </Link>

                {/* Save button */}

                <button
                  type="button"
                  aria-label="Save destination"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-white/10
                    text-white
                    backdrop-blur
                    transition
                    hover:border-yellow-400
                    hover:text-yellow-400
                  "
                >
                  <Star size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SMALL DESTINATION CARDS
        ===================================================== */}

        <div
          className="
            absolute
            bottom-24
            left-5
            right-0
            lg:left-auto
            lg:right-8
          "
        >
          <div
            className="
              flex
              gap-2
              overflow-x-auto
              overflow-y-visible
              pb-3
              scrollbar-hide
            "
          >
            {heroDestinations.map((destination, index) => {
              const isActive = index === active;

              return (
                <button
                  key={destination.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show ${destination.title}`}
                  className={`
                    group
            relative
            h-[155px]
            w-[100px]
            shrink-0
            overflow-hidden
            rounded-lg
            border
            text-left
            shadow-lg
            transition-all
            duration-500

            sm:h-[175px]
            sm:w-[115px]

            lg:h-[190px]
            lg:w-[125px]

                    ${
                      isActive
                        ? `
                          -translate-y-3
                          scale-105
                          border-yellow-400
                          shadow-yellow-500/20
                        `
                        : `
                          border-white/20
                          opacity-75
                          hover:-translate-y-2
                          hover:opacity-100
                        `
                    }
                  `}
                >
                  {/* =================================================
                      CARD IMAGE
                  ================================================= */}

                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    sizes="165px"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* =================================================
                      CARD OVERLAY
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/90
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* =================================================
                      CARD TEXT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      p-3
                    "
                  >
                    <p
                      className="
                        mb-1
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        text-yellow-300
                      "
                    >
                      {destination.category}
                    </p>

                    <h2
                      className="
                        font-display
                        text-xs
                        font-bold
                        leading-tight
                        text-white
                        sm:text-sm
                      "
                    >
                      {destination.title}
                    </h2>
                  </div>

                  {/* =================================================
                      ACTIVE INDICATOR
                  ================================================= */}

                  {isActive && (
                    <div
                      className="
                        absolute
                        left-3
                        top-3
                        h-1
                        w-6
                        rounded-full
                        bg-yellow-400
                      "
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CONTROLS
        ===================================================== */}

        <div
          className="
            absolute
            bottom-7
            left-5
            right-5
            flex
            items-center
            justify-between
            lg:left-8
            lg:right-8
          "
        >
          {/* =================================================
              ARROWS
          ================================================= */}

          <div className="flex gap-3">
            {/* Previous */}

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous destination"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/10
                text-white
                backdrop-blur
                transition
                hover:border-yellow-400
                hover:text-yellow-400
              "
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next destination"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/10
                text-white
                backdrop-blur
                transition
                hover:border-yellow-400
                hover:text-yellow-400
              "
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* =================================================
              PROGRESS
          ================================================= */}

          <div
            className="
              flex
              flex-1
              items-center
              justify-end
              gap-4
              pl-8
            "
          >
            {/* Progress line */}

            <div
              className="
                hidden
                h-[2px]
                max-w-md
                flex-1
                overflow-hidden
                bg-white/20
                sm:block
              "
            >
              <div
                className="
                  h-full
                  bg-yellow-400
                  transition-all
                  duration-500
                "
                style={{
                  width: `${((active + 1) / heroDestinations.length) * 100}%`,
                }}
              />
            </div>

            {/* Current number */}

            <span
              className="
                font-mono
                text-sm
                font-medium
                text-white
              "
            >
              {String(active + 1).padStart(2, "0")}
            </span>

            {/* Total */}

            <span
              className="
                text-sm
                text-white/40
              "
            >
              / {String(heroDestinations.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
