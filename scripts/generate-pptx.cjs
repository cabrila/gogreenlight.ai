const pptxgen = require("pptxgenjs");

// Brand colors
const C = {
  bg: "0A0A0A",
  card: "111111",
  primary: "2E9551",
  accent: "78D12F",
  text: "FAFAFA",
  muted: "A3A3A3",
  border: "262626",
};

const FONT_TITLE = "Calibri";
const FONT_BODY = "Calibri";

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";

function addBackground(slide) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%",
    fill: { color: C.bg }, line: { type: "none" },
  });
  for (let i = 0; i <= 14; i++) {
    slide.addShape(pptx.ShapeType.line, {
      x: i * 0.95, y: 0, w: 0, h: 7.5,
      line: { color: "1A2E1F", width: 0.5 },
    });
  }
  for (let j = 0; j <= 8; j++) {
    slide.addShape(pptx.ShapeType.line, {
      x: 0, y: j * 0.94, w: 13.33, h: 0,
      line: { color: "1A2E1F", width: 0.5 },
    });
  }
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 0.5, y: 0.5, w: 5, h: 5,
    fill: { type: "solid", color: "1A3D24", transparency: 85 },
    line: { type: "none" },
  });
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 8.5, y: 3, w: 4, h: 4,
    fill: { type: "solid", color: "2B4A1A", transparency: 88 },
    line: { type: "none" },
  });
}

function addTitle(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x ?? 1, y: opts.y ?? 0.6, w: opts.w ?? 11.33, h: opts.h ?? 1.4,
    fontSize: opts.fontSize ?? 40, bold: true, color: C.accent,
    fontFace: FONT_TITLE, align: opts.align ?? "center", isTextBox: true,
  });
}

function addBody(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x ?? 1, y: opts.y ?? 2.2, w: opts.w ?? 11.33, h: opts.h ?? 0.6,
    fontSize: opts.fontSize ?? 16, color: opts.color ?? C.muted,
    fontFace: FONT_BODY, align: opts.align ?? "center", wrap: true, isTextBox: true,
  });
}

function addCard(slide, x, y, w, h, opts = {}) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.12,
    fill: { color: opts.fill ?? C.card },
    line: { color: opts.border ?? C.primary, width: 1 },
  });
  if (opts.accentBar !== false) {
    slide.addShape(pptx.ShapeType.rect, {
      x, y, w, h: 0.06,
      fill: { color: opts.barColor ?? C.primary },
      line: { type: "none" },
    });
  }
}

function addBadge(slide, text, x, y) {
  const w = 2.4;
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h: 0.35, rectRadius: 0.17,
    fill: { color: "1A3D24" }, line: { color: C.primary, width: 1 },
  });
  slide.addText(text, {
    x, y, w, h: 0.35,
    fontSize: 10, color: C.primary, bold: true, fontFace: FONT_BODY, align: "center",
  });
}

// ─── SLIDE 1: HERO ────────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  addBackground(slide);
  slide.addText("GoGreenlight", {
    x: 1, y: 0.5, w: 11.33, h: 0.5,
    fontSize: 14, color: C.muted, align: "center", fontFace: FONT_BODY,
  });
  slide.addText("Unleash creativity,\nexponentially.", {
    x: 1.5, y: 1.8, w: 10.33, h: 2.8,
    fontSize: 56, bold: true, color: C.accent, fontFace: FONT_TITLE, align: "center",
  });
  slide.addText("Building the AI-native infrastructure for the future of creation.", {
    x: 2, y: 4.8, w: 9.33, h: 0.7,
    fontSize: 20, color: C.muted, align: "center", fontFace: FONT_BODY,
  });
  slide.addShape(pptx.ShapeType.line, {
    x: 5.17, y: 4.65, w: 3, h: 0,
    line: { color: C.primary, width: 1.5 },
  });
}

// ─── SLIDE 2: THE ROAD TO 2045 ────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTitle(slide, "The Road to 2045", { fontSize: 38 });

  const points = [
    "By 2045, $1,000 will buy compute equivalent to the combined intelligence of all humanity. (Kurzweil, Ray. The Singularity Is Near, 2005)",
    "As human merges with AI, interaction latency approaches zero. The boundary between our intent and AI generation dissolves.",
  ];
  points.forEach((pt, i) => {
    const y = 2.1 + i * 1.1;
    addCard(slide, 1, y, 11.33, 0.9, { accentBar: false, border: C.border });
    slide.addShape(pptx.ShapeType.ellipse, {
      x: 1.2, y: y + 0.35, w: 0.12, h: 0.12,
      fill: { color: C.primary }, line: { type: "none" },
    });
    slide.addText(pt, {
      x: 1.5, y: y + 0.12, w: 10.6, h: 0.7,
      fontSize: 12.5, color: C.text, fontFace: FONT_BODY, wrap: true, isTextBox: true,
    });
  });

  addCard(slide, 1, 4.5, 5.4, 1.5, { border: C.primary });
  slide.addText("THE CHALLENGE", { x: 1.15, y: 4.56, w: 3, h: 0.3, fontSize: 9, bold: true, color: C.primary, fontFace: FONT_BODY });
  slide.addText("Our biologically limited brains cannot manage the infinite creation that becomes possible. We need new interfaces.", {
    x: 1.15, y: 4.9, w: 5.1, h: 0.9,
    fontSize: 12, color: C.text, fontFace: FONT_BODY, wrap: true, isTextBox: true,
  });

  addCard(slide, 6.9, 4.5, 5.43, 1.5, { border: C.accent, barColor: C.accent });
  slide.addText("THE URGENCY", { x: 7.05, y: 4.56, w: 3, h: 0.3, fontSize: 9, bold: true, color: C.accent, fontFace: FONT_BODY });
  slide.addText("We must build the underlying infrastructure to curate the world's creative assets before the singularity hits.", {
    x: 7.05, y: 4.9, w: 5.1, h: 0.9,
    fontSize: 12, color: C.text, fontFace: FONT_BODY, wrap: true, isTextBox: true,
  });
}

// ─── SLIDE 3: WE ARE AS GODS ──────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  addBackground(slide);
  slide.addText('"We are as gods and might as well get good at it."', {
    x: 1.5, y: 0.6, w: 10.33, h: 1.4,
    fontSize: 32, bold: true, italic: true, color: C.text,
    fontFace: FONT_TITLE, align: "center",
  });
  slide.addText("— Brand, Stewart. Whole Earth Catalog, 1968", {
    x: 1.5, y: 2.0, w: 10.33, h: 0.4,
    fontSize: 13, color: C.muted, align: "center", fontFace: FONT_BODY,
  });

  const pts = [
    "The Power: As AI brings infinite compute to our fingertips, humans are gaining god-like creative abilities.",
    "The Threat: But without the right infrastructure, humans will lose oversight. AI will simply outpace us, and a true Human-AI merge will fail.",
  ];
  pts.forEach((pt, i) => {
    const y = 2.6 + i * 1.0;
    addCard(slide, 1, y, 11.33, 0.85, { accentBar: false, border: C.border });
    slide.addShape(pptx.ShapeType.ellipse, {
      x: 1.2, y: y + 0.33, w: 0.12, h: 0.12,
      fill: { color: C.primary }, line: { type: "none" },
    });
    slide.addText(pt, {
      x: 1.5, y: y + 0.1, w: 10.6, h: 0.65,
      fontSize: 13, color: C.text, fontFace: FONT_BODY, wrap: true, isTextBox: true,
    });
  });

  addCard(slide, 1, 4.8, 11.33, 1.5, { fill: "0D2618", border: C.primary, accentBar: false });
  addBadge(slide, "The Guide", 1.15, 4.65);
  slide.addText(
    "GoGreenlight is the infrastructure that preserves human control. We empower creators to manage this infinite power, replacing chaos with absolute Clarity of Intent.",
    { x: 1.2, y: 5.05, w: 10.9, h: 1.1, fontSize: 14, color: C.text, fontFace: FONT_BODY, bold: true, wrap: true, isTextBox: true }
  );
}

// ─── SLIDE 4: AI MEETS CREATIVE ASSETS ───────────────────────────────────────
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTitle(slide, "This is the moment. AI meets creative assets.", { fontSize: 34 });
  addBody(slide, "For the first time in history, AI can truly understand and work with images, video, and audio. This changes everything.", { y: 1.9, fontSize: 14 });

  addCard(slide, 0.6, 2.6, 5.8, 2.3, { fill: "0D2618", border: C.primary });
  addBadge(slide, "The Netflix Parallel", 0.75, 2.42);
  slide.addText(
    "Netflix harvested the exponentially cheaper supply of internet bandwidth and disrupted the video industry. GoGreenlight harvests the exponentially cheaper supply of AI-generated creative assets.",
    { x: 0.75, y: 2.95, w: 5.5, h: 1.8, fontSize: 12, color: C.text, fontFace: FONT_BODY, wrap: true, isTextBox: true }
  );

  addCard(slide, 6.9, 2.6, 5.83, 2.3, { fill: "0D2A10", border: C.accent, barColor: C.accent });
  addBadge(slide, "Our Unique Position", 7.05, 2.42);
  slide.addText(
    "We capture creative DECISIONS, not content. Users keep their assets. We learn from how they curate creative assets — training AI to augment creative work, all mapped to OMC methodology.",
    { x: 7.05, y: 2.95, w: 5.5, h: 1.8, fontSize: 12, color: C.text, fontFace: FONT_BODY, wrap: true, isTextBox: true }
  );

  addCard(slide, 1, 5.15, 11.33, 0.9, { fill: "0D2618", border: C.primary, accentBar: false });
  slide.addText("Content belongs to creators.  ·  Decisions power the future of AI-augmented creativity.", {
    x: 1.1, y: 5.3, w: 11.1, h: 0.6,
    fontSize: 15, bold: true, color: C.text, align: "center", fontFace: FONT_BODY,
  });
}

// ─── SLIDE 5: BEACHHEAD (CASTING) ─────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTitle(slide, "Step One: Revolutionizing Casting", { fontSize: 36 });
  addBody(slide, "To build the ultimate creative infrastructure, we start with the most complex asset: Human talent and characters.", { y: 1.9, fontSize: 14 });

  slide.addShape(pptx.ShapeType.roundRect, {
    x: 2.5, y: 2.8, w: 3.5, h: 0.65, rectRadius: 0.12,
    fill: { color: C.primary }, line: { type: "none" },
  });
  slide.addText("Casting Beta is Live", {
    x: 2.5, y: 2.8, w: 3.5, h: 0.65,
    fontSize: 15, bold: true, color: "FFFFFF", align: "center", fontFace: FONT_BODY,
  });

  slide.addShape(pptx.ShapeType.roundRect, {
    x: 7.3, y: 2.8, w: 3.5, h: 0.65, rectRadius: 0.12,
    fill: { color: C.primary }, line: { type: "none" },
  });
  slide.addText("Watch Platform Prototype", {
    x: 7.3, y: 2.8, w: 3.5, h: 0.65,
    fontSize: 15, bold: true, color: "FFFFFF", align: "center", fontFace: FONT_BODY,
  });

  addCard(slide, 1, 3.7, 11.33, 1.5, { accentBar: false, border: C.accent });
  slide.addText("By solving the complex curation of actors and roles today, we are building the underlying data engine for all creative assets tomorrow.", {
    x: 1.2, y: 3.85, w: 10.9, h: 1.1,
    fontSize: 14, color: C.text, align: "center", fontFace: FONT_BODY, wrap: true, isTextBox: true,
  });

  slide.addShape(pptx.ShapeType.line, { x: 4.67, y: 5.45, w: 4, h: 0, line: { color: C.primary, width: 1 } });
  slide.addText("Curate the World's Creative Assets", {
    x: 1, y: 5.55, w: 11.33, h: 0.5,
    fontSize: 22, bold: true, color: C.primary, align: "center", fontFace: FONT_TITLE,
  });
}

// ─── SLIDE 6: MOVIELABS ───────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTitle(slide, "Making MovieLabs' 2030 Vision Operational", { fontSize: 34 });
  addBody(slide, "Data must be structured to survive an exponential future.", { y: 1.85, fontSize: 15 });

  const pts = [
    "We are building natively on MovieLabs' Ontology for Media Creation (OMC v2.8) from Day 1.",
    "We are mapping our core engine to scale across the entire OMC ontology - starting with Characters and Participants, but built for everything.",
  ];
  pts.forEach((pt, i) => {
    const y = 2.5 + i * 1.2;
    addCard(slide, 1, y, 11.33, 1.0, { border: C.primary, accentBar: false });
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 1.2, y: y + 0.28, w: 0.42, h: 0.42,
      rectRadius: 0.06, fill: { color: "1A3D24" }, line: { type: "none" },
    });
    slide.addText(`${i + 1}`, {
      x: 1.2, y: y + 0.28, w: 0.42, h: 0.42,
      fontSize: 14, bold: true, color: C.primary, align: "center", fontFace: FONT_BODY,
    });
    slide.addText(pt, {
      x: 1.75, y: y + 0.18, w: 10.4, h: 0.65,
      fontSize: 13, color: C.text, fontFace: FONT_BODY, wrap: true, isTextBox: true,
    });
  });

  addCard(slide, 1, 4.95, 11.33, 0.85, { fill: "0D2618", border: C.primary, accentBar: false });
  slide.addText("We are not just adopting MovieLabs' 2030 Vision; we are building the execution engine to make it a reality.", {
    x: 1.2, y: 5.05, w: 10.9, h: 0.65,
    fontSize: 13, italic: true, color: C.text, align: "center", fontFace: FONT_BODY, wrap: true, isTextBox: true,
  });

  addBadge(slide, "OMC v2.8 Native", 5.47, 6.05);
}

// ─── SLIDE 7: THE MOAT ────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTitle(slide, "Data is no longer the new gold. Intelligence is.", { fontSize: 34 });

  slide.addText("We do not want to scrape or own our users' creative content (scripts, videos, IP).", {
    x: 1, y: 1.8, w: 11.33, h: 0.4,
    fontSize: 13, color: C.muted, align: "center", fontFace: FONT_BODY,
  });
  slide.addText("We capture the creative decision-making process.", {
    x: 1, y: 2.2, w: 11.33, h: 0.4,
    fontSize: 15, bold: true, color: C.primary, align: "center", fontFace: FONT_BODY,
  });
  slide.addText("By natively using the MovieLabs OMC schema, we are building an engine trained on high-level human oversight.", {
    x: 1, y: 2.6, w: 11.33, h: 0.4,
    fontSize: 13, color: C.muted, align: "center", fontFace: FONT_BODY,
  });

  addCard(slide, 0.6, 3.15, 5.8, 2.8, { fill: "0D2618", border: C.primary });
  addBadge(slide, "The Tech", 0.75, 2.97);
  slide.addText(
    'A deterministic "Code-to-AI Compiler". Unlike basic AI wrappers that hallucinate, our system dynamically translates UI structures, codebases, and human creative decisions into machine-readable skills. Built to scale from Film & TV to any industry.',
    { x: 0.75, y: 3.5, w: 5.5, h: 2.3, fontSize: 11.5, color: C.text, fontFace: FONT_BODY, wrap: true, isTextBox: true }
  );

  addCard(slide, 6.9, 3.15, 5.83, 2.8, { fill: "0D2A10", border: C.accent, barColor: C.accent });
  addBadge(slide, "The Intelligence", 7.05, 2.97);
  slide.addText(
    "Native integration with MovieLabs OMC v2.8. Every Casting interaction we process today trains the proprietary intelligence engine for tomorrow's Hollywood standard. You can't fake or fast-track this architecture.",
    { x: 7.05, y: 3.5, w: 5.5, h: 2.3, fontSize: 11.5, color: C.text, fontFace: FONT_BODY, wrap: true, isTextBox: true }
  );

  addBadge(slide, "Defensible by Design", 5.47, 6.2);
}

// ─── SLIDE 8: EXPANSION ───────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTitle(slide, "Film & TV is Just the Beachhead", { fontSize: 38 });

  const pts = [
    { title: "The Ultimate Proving Ground", description: "We start with Film & TV because it is the most complex industry for creating and managing entire worlds. If we can solve Hollywood, we can solve anything." },
    { title: "The Platform Expansion", description: "GoGreenlight is not just an application; it is an underlying infrastructure platform." },
    { title: "The End Goal", description: 'We will license our core ontology and AI-engine to other domains. Imagine a "GoGreenlight for Fashion," "GoGreenlight for Architecture," and eventually for personal creative lives.' },
    { title: "The 2045 Imperative", description: "Only by expanding globally across all industries can we truly curate the world's creative assets and be ready for the Singularity." },
  ];
  pts.forEach((pt, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 6.5;
    const y = 1.9 + row * 2.4;
    addCard(slide, x, y, 6.1, 2.1, { border: C.primary });
    slide.addText(pt.title, {
      x: x + 0.15, y: y + 0.2, w: 5.8, h: 0.45,
      fontSize: 14, bold: true, color: C.primary, fontFace: FONT_TITLE,
    });
    slide.addText(pt.description, {
      x: x + 0.15, y: y + 0.65, w: 5.8, h: 1.3,
      fontSize: 11.5, color: C.text, fontFace: FONT_BODY, wrap: true, isTextBox: true,
    });
  });

  slide.addText("From Hollywood to the World", {
    x: 1, y: 7.1, w: 11.33, h: 0.35,
    fontSize: 16, bold: true, color: C.text, align: "center", fontFace: FONT_TITLE,
  });
}

// ─── SLIDE 9: THE $10M ASK ────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTitle(slide, "The $10M Strategic Ask", { fontSize: 40 });
  addBody(slide, "We are raising $10M to cross the chasm and establish the global infrastructure for AI creation.", { y: 1.85, fontSize: 14 });

  const pts = [
    { title: "$1M: AI Infrastructure & Compute", description: "Powering our proprietary Code-to-AI engine." },
    { title: "$4M: Platform Abstraction (R&D)", description: "Our architecture handles Film & TV. These funds abstract the engine for any industry domain." },
    { title: "$2M: Go-To-Market (Enterprise & AI-Automated PLG)", description: 'Scaling our "Beachhead" by aggressively penetrating Hollywood studios and automating long-tail adoption.' },
    { title: "$3M: Strategic Acceleration Fund", description: "Our war chest to scale aggressively at market inflection points." },
  ];
  pts.forEach((pt, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 6.5;
    const y = 2.6 + row * 2.0;
    addCard(slide, x, y, 6.1, 1.75, { border: C.primary });
    slide.addText(pt.title, {
      x: x + 0.15, y: y + 0.18, w: 5.8, h: 0.45,
      fontSize: 13, bold: true, color: C.primary, fontFace: FONT_TITLE,
    });
    slide.addText(pt.description, {
      x: x + 0.15, y: y + 0.65, w: 5.8, h: 0.9,
      fontSize: 12, color: C.text, fontFace: FONT_BODY, wrap: true, isTextBox: true,
    });
  });

  slide.addShape(pptx.ShapeType.roundRect, {
    x: 4.42, y: 6.75, w: 4.5, h: 0.6, rectRadius: 0.3,
    fill: { color: "1A3D24" }, line: { color: C.primary, width: 1.5 },
  });
  slide.addText("$10M  ·  to build the future of creation", {
    x: 4.42, y: 6.75, w: 4.5, h: 0.6,
    fontSize: 15, bold: true, color: C.accent, align: "center", fontFace: FONT_BODY,
  });
}

// ─── WRITE FILE ───────────────────────────────────────────────────────────────
pptx.writeFile({ fileName: "GoGreenlight-PitchDeck.pptx" }).then(() => {
  console.log("✓ GoGreenlight-PitchDeck.pptx generated successfully.");
});
