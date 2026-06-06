"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { useLanguage } from "../../context/language-context";

export function ContactForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-h-[480px] flex-col items-center justify-center text-center"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          ✓
        </p>
        <h2 className="text-display mt-8 text-3xl text-foreground">
          {t.contact.success.title}
        </h2>
        <p className="text-editorial mt-4 max-w-md text-muted-light">
          {t.contact.success.message}
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-surface/50 px-4 py-3 text-foreground placeholder:text-muted/50 outline-none transition-colors duration-300 focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30";

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-10 rounded-xl p-8 lg:p-10">
      <motion.div className="grid gap-10 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {t.contact.form.name}
          </span>
          <input
            required
            type="text"
            name="name"
            placeholder={t.contact.form.namePlaceholder}
            className={`${inputClass} mt-2`}
          />
        </label>
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {t.contact.form.company}
          </span>
          <input
            required
            type="text"
            name="company"
            placeholder={t.contact.form.companyPlaceholder}
            className={`${inputClass} mt-2`}
          />
        </label>
      </motion.div>

      <label className="block">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {t.contact.form.email}
        </span>
        <input
          required
          type="email"
          name="email"
          placeholder={t.contact.form.emailPlaceholder}
          className={`${inputClass} mt-2`}
        />
      </label>

      <label className="block">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {t.contact.form.phone}
        </span>
        <input
          type="tel"
          name="phone"
          placeholder={t.contact.form.phonePlaceholder}
          className={`${inputClass} mt-2`}
        />
      </label>

      <label className="block">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {t.contact.form.projectType}
        </span>
        <select
          required
          name="projectType"
          className={`${inputClass} mt-2 cursor-pointer appearance-none`}
          defaultValue=""
        >
          <option value="" disabled>
            —
          </option>
          {t.contact.form.projectTypes.map((type) => (
            <option key={type} value={type} className="bg-charcoal">
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {t.contact.form.message}
        </span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder={t.contact.form.messagePlaceholder}
          className={`${inputClass} mt-2 resize-none`}
        />
      </label>

      <button
        type="submit"
        className="border border-foreground px-10 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
      >
        {t.contact.form.submit}
      </button>

      <p className="font-mono text-[10px] text-muted">{t.contact.form.consent}</p>
    </form>
  );
}
