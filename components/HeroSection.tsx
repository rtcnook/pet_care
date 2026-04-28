import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "8 年", text: "宠物洗护经验，熟悉幼宠和敏感宠护理节奏" },
  { value: "98%", text: "回访满意度，按宠物状态调整烘干与梳理方式" },
  { value: "1 对 1", text: "独立洗护台，减少排队和陌生环境应激" }
];

export function HeroSection() {
  return (
    <section className="px-0 pb-7 pt-10">
      <div className="page-shell grid items-stretch gap-7 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="glass-panel rounded-[34px] p-6 sm:p-10" delay={20}>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[rgba(111,207,151,0.16)] px-4 py-2 text-[13px] font-bold text-[#356b4c]">
            安心洗护 · 温柔护理 · 全程可视
          </span>
          <h1 className="max-w-[10ch] text-[42px] leading-[0.98] font-bold tracking-normal text-[var(--ink)] sm:text-[56px] lg:text-[68px]">
            让毛孩子洗个香香澡，也顺手放个心
          </h1>
          <p className="mt-5 max-w-[58ch] text-base leading-7 text-[var(--muted)]">
            泡泡爪爪专注宠物洗护、美容修剪和皮毛护理，按照犬猫体型、毛量和敏感度定制洗护流程。洗前评估、洗中安抚、洗后整理，每一步都更细一点。
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <a
              href="#booking"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-deep)] px-6 text-sm font-bold text-white shadow-[0_16px_28px_rgba(239,111,57,0.28)] transition hover:-translate-y-0.5"
            >
              预约今天的空位
            </a>
            <a
              href="#pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(43,38,34,0.08)] bg-white/75 px-6 text-sm font-bold text-[var(--ink)] transition hover:-translate-y-0.5"
            >
              查看项目价格
            </a>
          </div>
          <div className="mt-8 grid gap-3.5 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.value}
                className="rounded-[20px] border border-[rgba(43,38,34,0.06)] bg-white/74 p-[18px]"
              >
                <strong className="mb-1 block text-2xl">{item.value}</strong>
                <span className="text-[13px] leading-5 text-[var(--muted)]">{item.text}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4">
          <Reveal className="relative overflow-hidden rounded-[34px] shadow-[var(--shadow)]" delay={90}>
            <Image
              src="/images/hero-main.svg"
              alt="高级宠物洗护门店主视觉"
              width={1200}
              height={900}
              className="h-[430px] w-full object-cover"
              priority
            />
            <div className="absolute right-[18px] bottom-[18px] max-w-[240px] rounded-[20px] bg-[rgba(43,38,34,0.5)] p-[18px] text-white backdrop-blur-[10px]">
              <strong className="mb-2 block text-lg">本周热门</strong>
              <span className="block text-[13px] leading-6 text-white/80">
                小型犬精致洗护套餐含修爪、耳部清洁、香波护理与蓬松造型整理。
              </span>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal className="surface-panel rounded-[24px] p-[22px]" delay={120}>
              <h3 className="mb-2.5 text-lg font-semibold">洁净也要舒服</h3>
              <p className="text-sm leading-7 text-[var(--muted)]">
                采用分肤质洗护用品，减少过度清洁带来的干涩和掉毛问题。
              </p>
            </Reveal>
            <Reveal className="surface-panel rounded-[24px] p-[22px]" delay={150}>
              <h3 className="mb-2.5 text-lg font-semibold">到店节奏轻一点</h3>
              <p className="text-sm leading-7 text-[var(--muted)]">
                预约制接待，留出适应时间，不把宠物推进拥挤高噪音的流程里。
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
