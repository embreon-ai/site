"use client";

import { useId, useState } from "react";
import type { Dict } from "@/lib/dict";

type State = "idle" | "sending" | "done" | "invalid" | "failed" | "closed";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function WaitlistForm({ d, source }: { d: Dict; source: string }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const f = d.form;

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const trap = (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";
    if (!EMAIL.test(email.trim())) {
      setState("invalid");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), lang: d.lang, source, website: trap }),
      });
      if (res.ok) setState("done");
      else if (res.status === 400) setState("invalid");
      else if (res.status === 503) setState("closed");
      else setState("failed");
    } catch {
      setState("failed");
    }
  }

  if (state === "done") {
    return (
      <p className="form-done" role="status">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="m5 12 4.5 4.5L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {f.done}
      </p>
    );
  }

  const message = state === "invalid" ? f.invalid : state === "failed" ? f.failed : state === "closed" ? f.closed : "";

  return (
    <form className="waitlist" onSubmit={submit} noValidate>
      <label htmlFor={`${id}-email`} className="sr-only">
        {f.label}
      </label>
      <div className="waitlist-row">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder={f.placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state !== "idle" && state !== "sending") setState("idle");
          }}
          aria-invalid={state === "invalid"}
          aria-describedby={message ? `${id}-msg` : `${id}-note`}
        />
        <button type="submit" disabled={state === "sending"}>
          {state === "sending" ? f.sending : f.submit}
        </button>
      </div>
      <div className="trap" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {message ? (
        <p id={`${id}-msg`} className="form-msg" role="alert">
          {message}
        </p>
      ) : (
        <p id={`${id}-note`} className="form-note">
          {f.note} <a href={d.footer.privacyHref}>{f.privacyLink}</a>
        </p>
      )}
    </form>
  );
}
