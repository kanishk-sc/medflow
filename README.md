# MedFlow

MedFlow is a front-end interface prototype exploring how administrative healthcare work could be organized across scheduling, conversation notes, and hospital operations.

> **Prototype only:** MedFlow is not a medical device, clinical application, or production service. It contains no patient data, makes no medical recommendations, and is not connected to authentication, AI, storage, or hospital systems. Every preview is synthetic.

## What is implemented

- A responsive React and TypeScript landing page
- Three clearly labeled, synthetic workflow previews
- Semantic page structure, a skip link, visible keyboard focus, and reduced-motion support
- Honest scope and non-clinical disclaimers in the interface

The previous interface described authentication, voice capture, automation, and integrations that were not implemented. Those claims and the nonfunctional login control have been removed.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide icons

## Run locally

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Verify

```bash
npm run lint
npm run typecheck
npm run build
npm audit --omit=dev
```

## Limitations

MedFlow is intentionally limited to a static interaction-design concept. Authentication, voice processing, LLM functionality, persistence, scheduling, notifications, integrations, and clinical validation are not implemented.
