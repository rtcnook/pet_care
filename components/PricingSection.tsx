import { Reveal } from "@/components/Reveal";

const plans = [
  {
    tag: "轻松到店",
    title: "小体型宠物",
    description: "适合体型轻、小型犬和大多数短毛猫。",
    price: "¥88",
    features: [
      ["基础洗护", "含吹干梳理"],
      ["修爪护理", "含脚底毛整理"],
      ["耳部清洁", "基础护理"]
    ]
  },
  {
    tag: "热门预约",
    title: "中体型宠物",
    description: "适合柯基、柴犬、边牧幼龄阶段等常见中型犬。",
    price: "¥158",
    featured: true,
    features: [
      ["深层洗护", "双重洁净流程"],
      ["蓬松护理", "减轻毛躁静电"],
      ["局部修整", "脸部和臀部整理"]
    ]
  },
  {
    tag: "定制护理",
    title: "大体型或长毛",
    description: "适合萨摩、金毛、阿拉斯加及长毛量较大的宠物。",
    price: "¥238",
    features: [
      ["长毛梳开", "按打结情况评估"],
      ["护毛精华", "提升顺滑度"],
      ["全身整理", "延长清爽状态"]
    ]
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-11">
      <div className="page-shell">
        <Reveal
          className="mb-6 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end"
          delay={10}
        >
          <h2 className="max-w-[10ch] text-[32px] leading-[1.05] font-bold sm:text-[40px] lg:text-[44px]">
            价格清楚一点
          </h2>
          <p className="max-w-[54ch] text-base leading-7 text-[var(--muted)]">
            以下为常见体型参考价，实际费用会根据毛量、打结程度和是否需要造型修剪微调。
          </p>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.title}
              className={`rounded-[26px] p-6 ${
                plan.featured
                  ? "border border-[rgba(239,111,57,0.18)] bg-gradient-to-b from-[#fff1e8] to-[#fffefc] shadow-[var(--shadow)]"
                  : "surface-panel"
              }`}
              delay={60 + index * 45}
            >
              <span className="mb-3.5 inline-flex rounded-full bg-[rgba(255,143,91,0.18)] px-3 py-1.5 text-xs font-bold text-[#874323]">
                {plan.tag}
              </span>
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{plan.description}</p>
              <div className="my-[18px] text-[40px] font-extrabold">
                {plan.price} <small className="text-sm font-semibold text-[var(--muted)]">起</small>
              </div>
              <div>
                {plan.features.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-3 border-b border-dashed border-[rgba(43,38,34,0.08)] py-3.5 last:border-b-0 last:pb-0"
                  >
                    <strong>{label}</strong>
                    <span className="text-sm text-[var(--muted)]">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
