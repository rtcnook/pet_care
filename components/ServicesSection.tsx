import { Reveal } from "@/components/Reveal";

const services = [
  {
    icon: "🛁",
    title: "基础洗护",
    description: "按体型和毛量选择洗护方案，包含洁毛、吹干、梳理、基础修脚底毛。",
    points: ["温和香波分宠选用", "重点部位二次清洁", "吹整后蓬松定型"]
  },
  {
    icon: "✂️",
    title: "美容修剪",
    description: "针对比熊、贵宾、博美等造型需求较高的品种，提供细节修剪与面部整理。",
    points: ["局部修圆和脸型整理", "尾部与胸线平衡修饰", "预约沟通偏好风格"]
  },
  {
    icon: "🌿",
    title: "皮毛护理",
    description: "适合毛躁、静电、轻微打结和换毛期宠物，增加毛发顺滑和皮肤舒适感。",
    points: ["精华护理与顺毛梳开", "敏感部位低刺激处理", "换季掉毛护理建议"]
  },
  {
    icon: "🐱",
    title: "猫咪专属",
    description: "降低声响和操作节奏，尽量缩短紧张时长，重点照顾猫咪的安全感与边界感。",
    points: ["安静时段单独预约", "快速吹干减轻刺激", "细致梳毛防打结"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-11">
      <div className="page-shell">
        <Reveal
          className="mb-6 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end"
          delay={10}
        >
          <h2 className="max-w-[10ch] text-[32px] leading-[1.05] font-bold sm:text-[40px] lg:text-[44px]">
            洗护不只洗澡
          </h2>
          <p className="max-w-[54ch] text-base leading-7 text-[var(--muted)]">
            把洗净、护理、整理和观察整合进一次到店流程里，既照顾外观，也照顾情绪和舒适度。
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              className="surface-panel rounded-[24px] p-6"
              delay={60 + index * 40}
            >
              <div className="mb-[18px] grid h-[54px] w-[54px] place-items-center rounded-[18px] bg-gradient-to-br from-[rgba(255,143,91,0.16)] to-[rgba(111,207,151,0.2)] text-2xl">
                {service.icon}
              </div>
              <h3 className="mb-2.5 text-xl font-semibold">{service.title}</h3>
              <p className="text-sm leading-7 text-[var(--muted)]">{service.description}</p>
              <ul className="mt-3.5 grid gap-2.5 text-sm leading-7 text-[var(--muted)]">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="font-bold text-[var(--brand-deep)]">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
