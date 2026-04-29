"use client";

import { useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    owner: "奶盖的主人",
    pet: "比熊 / 定期美容",
    visit: "连续护理 8 个月",
    title: "修得干净，也不会过头",
    text: "脸型整理得很自然，耳朵和脚底这些平时容易忽略的地方也照顾到了。洗完摸起来很松软，回家两三天都还是香香的。",
    tag: "回购护理",
  },
  {
    owner: "栗子的主人",
    pet: "英短 / 猫咪专场",
    visit: "安静时段预约",
    title: "猫咪紧张感比以前少很多",
    text: "预约的是安静时段，过程节奏很稳。店员会提前说清楚每一步，大人和猫都更有安全感，洗完没有躲很久。",
    tag: "猫咪友好",
  },
  {
    owner: "阿福的主人",
    pet: "金毛 / 长毛护理",
    visit: "换毛季护理",
    title: "换毛期也能打理得很利落",
    text: "护毛之后顺了很多，回家掉毛量也少一些。店里还会告诉我后面几天怎么梳更省力，对长毛狗家庭很实用。",
    tag: "长毛犬推荐",
  },
  {
    owner: "布丁的主人",
    pet: "柯基 / 洗护套餐",
    visit: "周末固定预约",
    title: "每次接回家都像换了一只小狗",
    text: "柯基底毛厚，以前洗完很容易潮。这里吹得很透，肚皮和尾巴周围也处理得干净，接回家精神又清爽。",
    tag: "洗护细致",
  },
  {
    owner: "豆豆的主人",
    pet: "泰迪 / 造型修剪",
    visit: "造型沟通服务",
    title: "能听懂我想要的自然圆润感",
    text: "不会一上来就剪得很短，会先确认长度和脸型。最后效果很软萌，眼睛周围也清爽，拍照特别上镜。",
    tag: "造型稳定",
  },
  {
    owner: "小满的主人",
    pet: "边牧 / 深层清洁",
    visit: "运动犬护理",
    title: "运动后异味改善很明显",
    text: "小满经常去草地，身上味道重。做完深层清洁后皮毛蓬松很多，店员也提醒了耳朵和脚趾缝的日常检查。",
    tag: "清洁到位",
  },
];

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = reviews.length;

  const activeReview = useMemo(() => reviews[activeIndex], [activeIndex]);
  const sideReviews = useMemo(
    () => [
      reviews[(activeIndex + 1) % total],
      reviews[(activeIndex + 2) % total],
    ],
    [activeIndex, total],
  );

  useEffect(() => {
    if (isPaused || total <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 4600);

    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  const goToReview = (nextIndex: number) => {
    setActiveIndex((nextIndex + total) % total);
  };

  return (
    <section id="reviews" className="py-11">
      <div className="page-shell">
        <Reveal
          className="mb-6 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end"
          delay={10}
        >
          <h2 className="max-w-[10ch] text-[32px] leading-[1.05] font-bold sm:text-[40px] lg:text-[44px]">
            顾客怎么说
          </h2>
          <p className="max-w-[54ch] text-base leading-7 text-[var(--muted)]">
            回头客大多在意两件事：宠物进店时会不会紧张，洗完之后能不能真的保持舒服和整洁。
          </p>
        </Reveal>

        <Reveal
          className="overflow-hidden rounded-[30px] border border-[var(--line)] bg-white/72 p-4 shadow-[var(--shadow)] backdrop-blur md:p-5"
          delay={60}
        >
          <div
            className="grid gap-4 lg:grid-cols-[1.24fr_0.76fr]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <article className="relative min-h-[360px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#fff8ef_0%,#ffffff_48%,#f0fff5_100%)] p-6 sm:p-8">
              <div
                key={activeReview.owner}
                className="animate-review-fade flex h-full flex-col justify-between gap-8"
              >
                <div>
                  <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-[rgba(255,143,91,0.14)] px-3.5 py-2 text-[13px] font-bold text-[var(--brand-deep)]">
                      {activeReview.tag}
                    </span>
                    <span className="tracking-[2px] text-[#ffb14a]">★★★★★</span>
                  </div>
                  <h3 className="mb-4 max-w-[16ch] text-[28px] leading-tight font-bold sm:text-[34px]">
                    {activeReview.title}
                  </h3>
                  <p className="max-w-[60ch] text-base leading-8 text-[var(--muted)] sm:text-lg">
                    {activeReview.text}
                  </p>
                </div>

                <div className="flex flex-col gap-4 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <strong className="mb-1 block text-lg">{activeReview.owner}</strong>
                    <span className="text-sm text-[var(--muted)]">{activeReview.pet}</span>
                  </div>
                  <span className="w-fit rounded-full border border-[var(--line)] bg-white/70 px-3.5 py-2 text-[13px] font-bold text-[var(--muted)]">
                    {activeReview.visit}
                  </span>
                </div>
              </div>
            </article>

            <div className="flex flex-col gap-4">
              {sideReviews.map((review) => (
                <button
                  key={review.owner}
                  type="button"
                  onClick={() => goToReview(reviews.indexOf(review))}
                  className="surface-panel group rounded-[22px] p-5 text-left transition hover:-translate-y-0.5 hover:border-[rgba(255,143,91,0.34)]"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-[13px] font-bold text-[var(--brand-deep)]">{review.tag}</span>
                    <span className="text-[12px] text-[#ffb14a]">★★★★★</span>
                  </div>
                  <h4 className="mb-2 text-lg font-semibold">{review.title}</h4>
                  <p className="line-clamp-2 text-sm leading-7 text-[var(--muted)]">{review.text}</p>
                  <span className="mt-4 block text-sm font-bold text-[var(--ink)]">
                    {review.owner}
                  </span>
                </button>
              ))}

              <div className="mt-auto flex items-center justify-between gap-3 rounded-[22px] bg-[rgba(43,38,34,0.04)] p-3">
                <div className="flex gap-2">
                  {reviews.map((review, index) => (
                    <button
                      key={review.owner}
                      type="button"
                      aria-label={`查看第 ${index + 1} 条评价`}
                      onClick={() => goToReview(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeIndex === index
                          ? "w-7 bg-[var(--brand-deep)]"
                          : "w-2.5 bg-[rgba(43,38,34,0.18)] hover:bg-[rgba(43,38,34,0.28)]"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="上一条评价"
                    onClick={() => goToReview(activeIndex - 1)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white text-lg shadow-sm transition hover:-translate-y-0.5"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label="下一条评价"
                    onClick={() => goToReview(activeIndex + 1)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-[var(--ink)] text-lg text-white shadow-sm transition hover:-translate-y-0.5"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
