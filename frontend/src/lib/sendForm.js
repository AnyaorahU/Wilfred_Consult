// Delivers a form submission by email via Formspree — no backend required.
//
// SETUP (one time):
//   1. Create a free form at https://formspree.io and point it at the mailbox
//      that should receive submissions.
//   2. Copy the form id (looks like "xrgبznyk" / "mzbqwxyz").
//   3. Create a file `frontend/.env` with:  VITE_FORMSPREE_ID=your_form_id
//   4. Restart `npm run dev` (Vite only reads env at startup).
//
// The destination email address lives in the Formspree dashboard, not in code,
// so it can be changed without a redeploy.

import { siteConfig } from "./config";

const FORMSPREE_ID = siteConfig.formspreeId;

export async function sendForm(payload) {
  // Not configured yet: don't silently pretend it was emailed.
  if (!FORMSPREE_ID) {
    console.warn(
      "[sendForm] VITE_FORMSPREE_ID is not set — the submission was NOT emailed.",
      payload,
    );
    // Small delay so the UI's loading/success flow matches production behaviour.
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { ok: true, delivered: false };
  }

  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(
      data?.errors?.[0]?.message || "Something went wrong. Please try again.",
    );
  }

  return { ok: true, delivered: true };
}
