import { BookingSection } from "@/components/BookingSection";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SpaceCarousel } from "@/components/SpaceCarousel";
import { StoreStorySection } from "@/components/StoreStorySection";

const carouselSlides = [
  {
    src: "/images/ai-store-space-1.png",
    title: "独立洗护区",
    description: "独立浴台、暖光镜面和透明操作动线，适合做高净值感的精洗服务。",
    alt: "高级宠物洗护店的独立洗护区"
  },
  {
    src: "/images/ai-store-space-2.png",
    title: "低噪烘干整理区",
    description: "烘干与修整分开布置，保留安静氛围，让长毛梳理和造型整理更从容。",
    alt: "高级宠物洗护店的烘干整理区"
  },
  {
    src: "/images/ai-store-space-3.png",
    title: "接待等待区",
    description: "进店先有缓冲和安抚空间，宠物和主人都能先把节奏放慢一点。",
    alt: "高级宠物洗护店的接待等待区"
  },
  {
    src: "/images/ai-store-space-4.png",
    title: "精细护理区",
    description: "耳部清洁、修爪、护毛和洗后整理都在更整洁明亮的护理台完成。",
    alt: "高级宠物洗护店的精细护理区"
  }
];

const navItems = [
  { href: "#services", label: "服务项目" },
  { href: "#space", label: "门店环境" },
  { href: "#pricing", label: "洗护套餐" },
  { href: "#reviews", label: "顾客评价" }
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[rgba(43,38,34,0.06)] bg-[rgba(255,250,243,0.75)] backdrop-blur-[14px]">
        <div className="page-shell flex flex-wrap items-center justify-between gap-6 py-4">
          <a href="#top" className="flex items-center gap-3 font-bold tracking-normal">
            <span className="grid h-[42px] w-[42px] place-items-center rounded-[14px] bg-gradient-to-br from-[#ffd19f] to-[#ff9c6a] text-[22px] shadow-[0_12px_22px_rgba(255,143,91,0.28)]">
              🐾
            </span>
            <span>泡泡爪爪宠物洗护</span>
          </a>
          <nav className="flex w-full flex-wrap items-center justify-between gap-3 text-sm text-[var(--muted)] md:w-auto md:justify-end md:gap-[22px]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[var(--brand-deep)]">
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-deep)] px-6 font-bold text-white shadow-[0_16px_28px_rgba(239,111,57,0.28)] transition hover:-translate-y-0.5"
            >
              在线预约
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <HeroSection />
        <ServicesSection />
        <StoreStorySection />
        <PricingSection />
        <SpaceCarousel slides={carouselSlides} />
        <ReviewsSection />
        <BookingSection />
      </main>

      <footer className="px-0 pb-[34px] pt-[26px] text-sm text-[var(--muted)]">
        <div className="page-shell flex flex-col items-start justify-between gap-4 border-t border-[rgba(43,38,34,0.08)] pt-[22px] sm:flex-row sm:items-center">
          <span>泡泡爪爪宠物洗护</span>
          <span>温柔一点，干净一点，也让等待的人放心一点。</span>
        </div>
      </footer>
    </>
  );
}
