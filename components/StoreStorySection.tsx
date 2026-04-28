import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const notes = [
  {
    title: "进店先观察",
    text: "先看精神状态、耳部、眼周、指甲和毛结情况，再决定合适的洗护顺序。"
  },
  {
    title: "分区更安稳",
    text: "接待、洗护、烘干、等待区域分开，减少陌生宠物之间的互相打扰。"
  },
  {
    title: "用品透明",
    text: "香波、护毛素和耳部清洁用品按需求使用，可提前备注无香或敏感护理需求。"
  },
  {
    title: "离店有反馈",
    text: "洗护后会说明皮毛状态、是否有轻微红点或打结情况，以及后续家庭护理建议。"
  }
];

export function StoreStorySection() {
  return (
    <section id="space" className="py-11">
      <div className="page-shell grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="overflow-hidden rounded-[30px] shadow-[var(--shadow)]" delay={20}>
          <div className="relative">
            <Image
              src="/images/store-story.svg"
              alt="宠物洗护店到店护理流程配图"
              width={1200}
              height={1400}
              className="h-full min-h-[440px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-5 bottom-5 grid gap-3 sm:grid-cols-2">
              {notes.slice(0, 2).map((note) => (
                <div key={note.title} className="rounded-[18px] bg-white/84 p-4 backdrop-blur-[8px]">
                  <div className="text-sm font-bold text-[var(--ink)]">{note.title}</div>
                  <div className="mt-1 text-xs leading-5 text-[var(--muted)]">{note.text}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {notes.map((note, index) => (
            <Reveal
              key={note.title}
              className="surface-panel rounded-[24px] p-6"
              delay={70 + index * 35}
            >
              <h3 className="mb-2.5 text-xl font-semibold">{note.title}</h3>
              <p className="text-sm leading-7 text-[var(--muted)]">{note.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
