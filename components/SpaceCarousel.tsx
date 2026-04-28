"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";

type Slide = {
  src: string;
  title: string;
  description: string;
  alt: string;
};

type SpaceCarouselProps = {
  slides: Slide[];
};

export function SpaceCarousel({ slides }: SpaceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = slides.length;
  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex, slides]);

  useEffect(() => {
    if (isPaused || total <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  const goToSlide = (nextIndex: number) => {
    setActiveIndex((nextIndex + total) % total);
  };

  return (
    <section className="py-11">
      <div className="page-shell">
        <Reveal
          className="mb-6 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end"
          delay={10}
        >
          <h2 className="max-w-[10ch] text-[32px] leading-[1.05] font-bold sm:text-[40px] lg:text-[44px]">
            店里是什么样
          </h2>
          <p className="max-w-[54ch] text-base leading-7 text-[var(--muted)]">
            这里展示的是门店环境本身：洗护区、烘干整理区、接待等待区和精细护理区，右侧说明会和当前环境模块一一对应。
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal
            className="relative min-h-[420px] overflow-hidden rounded-[30px] bg-[#ead9ca] shadow-[var(--shadow)] lg:min-h-[520px]"
            delay={60}
          >
            <div
              className="absolute inset-0"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeIndex === index ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(43,38,34,0.06)] via-[rgba(43,38,34,0.08)] to-[rgba(43,38,34,0.34)]" />
                </div>
              ))}
            </div>

            <div className="absolute top-[18px] right-[18px] z-10 flex gap-2.5">
              <button
                type="button"
                aria-label="上一张"
                onClick={() => goToSlide(activeIndex - 1)}
                className="grid h-[46px] w-[46px] place-items-center rounded-full bg-[rgba(43,38,34,0.34)] text-white backdrop-blur-[10px] transition hover:-translate-y-0.5 hover:bg-[rgba(43,38,34,0.5)]"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="下一张"
                onClick={() => goToSlide(activeIndex + 1)}
                className="grid h-[46px] w-[46px] place-items-center rounded-full bg-[rgba(43,38,34,0.34)] text-white backdrop-blur-[10px] transition hover:-translate-y-0.5 hover:bg-[rgba(43,38,34,0.5)]"
              >
                →
              </button>
            </div>

            <div className="absolute right-[22px] bottom-[22px] left-[22px] z-10 flex flex-col gap-4 text-white sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-[35ch]">
                <strong className="mb-2 block text-2xl">{activeSlide.title}</strong>
                <span className="block text-sm leading-7 text-white/90">{activeSlide.description}</span>
              </div>
              <div className="inline-flex w-fit rounded-full border border-white/14 bg-white/18 px-3.5 py-2 text-[13px] font-bold backdrop-blur-[8px]">
                {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            {slides.map((slide, index) => (
              <Reveal
                key={slide.title}
                className={`rounded-[24px] p-6 transition ${
                  activeIndex === index
                    ? "surface-panel ring-2 ring-[rgba(255,143,91,0.34)]"
                    : "surface-panel"
                }`}
                delay={100 + index * 40}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2.5 text-xl font-semibold">{slide.title}</h3>
                    <p className="text-sm leading-7 text-[var(--muted)]">{slide.description}</p>
                  </div>
                  <button
                    type="button"
                    aria-label={`查看${slide.title}`}
                    onClick={() => goToSlide(index)}
                    className={`mt-1 h-3 w-3 shrink-0 rounded-full ${
                      activeIndex === index ? "bg-[var(--brand-deep)]" : "bg-[rgba(43,38,34,0.14)]"
                    }`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
