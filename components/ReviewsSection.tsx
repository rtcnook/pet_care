import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    owner: "奶盖的主人",
    meta: "比熊 / 定期美容",
    title: "修得干净，也不会过头",
    text: "脸型整理很自然，耳朵和脚底这些平时容易忽略的地方也照顾到了，洗完摸起来特别松软。"
  },
  {
    owner: "栗子的主人",
    meta: "英短 / 猫咪专场",
    title: "猫咪紧张感比以前少很多",
    text: "预约的是安静时段，过程节奏很稳，店员会提前说清楚每一步，大人和猫都更有安全感。"
  },
  {
    owner: "阿福的主人",
    meta: "金毛 / 长毛护理",
    title: "换毛期也能打理得很利落",
    text: "护毛之后顺了很多，回家掉毛量也少一些，而且会告诉我后面几天怎么梳更省力。"
  }
];

export function ReviewsSection() {
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
            回头客大多在意两件事: 宠物进店时会不会紧张，洗完之后能不能真的保持舒服和整洁。
          </p>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal
              key={review.owner}
              className="surface-panel rounded-[24px] p-6"
              delay={60 + index * 40}
            >
              <div className="mb-[18px] flex items-center justify-between gap-3">
                <div>
                  <strong className="mb-1 block text-base">{review.owner}</strong>
                  <span className="text-[13px] text-[var(--muted)]">{review.meta}</span>
                </div>
                <div className="tracking-[1px] text-[#ffb14a]">★★★★★</div>
              </div>
              <h3 className="mb-2.5 text-xl font-semibold">{review.title}</h3>
              <p className="text-sm leading-7 text-[var(--muted)]">{review.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
