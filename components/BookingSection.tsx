"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";

const defaultButtonText = "提交预约";

export function BookingSection() {
  const [buttonText, setButtonText] = useState(defaultButtonText);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setButtonText("预约信息已收到");

    window.setTimeout(() => {
      form.reset();
      setButtonText(defaultButtonText);
      setIsSubmitting(false);
    }, 1800);
  };

  return (
    <section id="booking" className="py-11">
      <div className="page-shell grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal className="surface-panel overflow-hidden rounded-[30px]" delay={30}>
          <div className="relative h-full min-h-[380px]">
            <Image
              src="/images/booking-side.svg"
              alt="门店接待与预约咨询区域"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.9)] via-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.96)]" />
            <div className="relative z-10 p-6">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[rgba(111,207,151,0.16)] px-4 py-2 text-[13px] font-bold text-[#356b4c]">
                门店信息
              </span>
              <h2 className="text-[32px] leading-[1.05] font-bold sm:text-[40px]">
                留个预约，我们把时间给毛孩子空出来
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                营业时间 10:00 - 20:00，建议至少提前半天预约。第一次到店可以在备注里写上宠物年龄、体重、性格和特殊护理需求。
              </p>
              <div className="mt-[18px] grid items-start gap-4 xl:grid-cols-[0.78fr_1.22fr]">
                <ul className="grid gap-2.5 text-sm leading-7 text-[var(--muted)]">
                  <li className="flex gap-2.5">
                    <span className="font-bold text-[var(--brand-deep)]">•</span>
                    <span>地址: 上海市静安区南京西路 889 号</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold text-[var(--brand-deep)]">•</span>
                    <span>电话: 400-888-2026</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold text-[var(--brand-deep)]">•</span>
                    <span>支持微信预约与到店咨询</span>
                  </li>
                </ul>

                <div className="overflow-hidden rounded-[24px] border border-[rgba(43,38,34,0.08)] bg-white/82 shadow-[var(--shadow)]">
                  <a
                    href="https://www.openstreetmap.org/?mlat=31.231&mlon=121.445#map=17/31.231/121.445"
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <Image
                      src="/images/ai-store-map.png"
                      alt="泡泡爪爪宠物洗护门店地图"
                      width={1200}
                      height={680}
                      className="block h-[220px] w-full object-cover xl:h-[190px]"
                    />
                  </a>
                  <div className="flex flex-col items-start justify-between gap-3 px-[18px] py-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center xl:flex-col xl:items-start 2xl:flex-row 2xl:items-center">
                    <span>地图定位到门店周边，方便到店前先看路线。</span>
                    <a
                      href="https://www.openstreetmap.org/?mlat=31.231&mlon=121.445#map=17/31.231/121.445"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-[var(--brand-deep)]"
                    >
                      在新窗口打开地图
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="glass-panel rounded-[30px] p-6" delay={80}>
          <h2 className="text-[32px] leading-[1.05] font-bold sm:text-[40px]">在线预约</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            填写基础信息后，我们会尽快联系确认时间。
          </p>
          <form className="mt-[18px]" onSubmit={handleSubmit}>
            <div className="grid gap-3.5 sm:grid-cols-2">
              <Field label="主人称呼" htmlFor="owner">
                <input id="owner" name="owner" type="text" placeholder="例如: 陈女士" className={inputClassName} />
              </Field>
              <Field label="宠物名字" htmlFor="pet">
                <input id="pet" name="pet" type="text" placeholder="例如: 糯米" className={inputClassName} />
              </Field>
              <Field label="宠物类型" htmlFor="type">
                <select id="type" name="type" className={inputClassName}>
                  <option>狗狗</option>
                  <option>猫咪</option>
                  <option>其他小型宠物</option>
                </select>
              </Field>
              <Field label="预约项目" htmlFor="service">
                <select id="service" name="service" className={inputClassName}>
                  <option>基础洗护</option>
                  <option>美容修剪</option>
                  <option>皮毛护理</option>
                  <option>猫咪专属洗护</option>
                </select>
              </Field>
              <Field label="预约日期" htmlFor="date">
                <input id="date" name="date" type="date" className={inputClassName} />
              </Field>
              <Field label="预约时间" htmlFor="time">
                <input
                  id="time"
                  name="time"
                  type="time"
                  min="10:00"
                  max="20:00"
                  step="1800"
                  className={inputClassName}
                />
              </Field>
              <Field label="联系电话" htmlFor="phone">
                <input id="phone" name="phone" type="tel" placeholder="请输入手机号码" className={inputClassName} />
              </Field>
              <Field label="备注需求" htmlFor="notes" fullWidth>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="例如: 容易紧张、怕吹风、第一次洗护、需要轻度修毛"
                  className={`${inputClassName} min-h-[120px] resize-y`}
                />
              </Field>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-deep)] px-6 text-sm font-bold text-white shadow-[0_16px_28px_rgba(239,111,57,0.28)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-80"
            >
              {buttonText}
            </button>
            <p className="mt-3 text-[13px] leading-6 text-[var(--muted)]">
              演示页面中的表单不会真正提交到后台，可以继续接入你自己的预约系统或企业微信表单。
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputClassName =
  "w-full rounded-2xl border border-[rgba(43,38,34,0.12)] bg-white/92 px-4 py-3.5 text-sm text-[var(--ink)] outline-none transition focus:border-[rgba(239,111,57,0.46)] focus:shadow-[0_0_0_4px_rgba(255,143,91,0.12)]";

function Field({
  label,
  htmlFor,
  fullWidth = false,
  children
}: {
  label: string;
  htmlFor: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`grid gap-2 ${fullWidth ? "sm:col-span-2" : ""}`}>
      <label htmlFor={htmlFor} className="text-sm font-bold">
        {label}
      </label>
      {children}
    </div>
  );
}
