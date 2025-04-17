import React from "react";

const examples = {
  fitness: [
    {
      title: "Instagram objava",
      content:
        "🔥 Nova tedenska priložnost.\nNe rabiš biti perfekten, rabiš biti dosleden.\nTrening danes? ✔️ 30 min ✔️ Znoj ✔️ Napredek\nDM 'START' za plan."
    },
    {
      title: "Spletna stran",
      content:
        "8-tedenski program, ki te spravi v formo.\n✅ Trening po meri ✅ Prilagojena prehrana ✅ Podpora 24/7\nPrijavi se zdaj!"
    }
  ],
  influencer: [
    {
      title: "Instagram caption",
      content:
        "Nova kolekcija je tukaj 👟🔥\nKatera barva je tvoja?👇\n#moda2025 #outfitinspo"
    },
    {
      title: "Story CTA",
      content:
        "Swipe up za -20% danes samo do 20h! 💥\nLink v bio 🛒"
    }
  ],
  software: [
    {
      title: "Landing page header",
      content:
        "Automate your workflow in minutes 🚀\nOur tool saves you 10+ hours per week."
    },
    {
      title: "Ad copy",
      content:
        "Manual work? Nah.\n⚡️ Try our software and get 14 days free."
    }
  ],
  general: [
    {
      title: "Email subject line",
      content:
        "🎁 Tvoj 10% popust čaka!"
    },
    {
      title: "Product description",
      content:
        "Naš novi blender: tišji, hitrejši, močnejši. 🥤\nZa domače smutije brez nereda."
    }
  ]
};

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>AI Copywriting Primeri</h1>
      <p style={{ marginBottom: '1.5rem', color: '#555' }}>
        Hitri primeri prodajnih besedil za različne tipe strank – fitnes trenerje, influencerje, SaaS podjetja in več.
      </p>
      {Object.entries(examples).map(([key, items]) => (
        <div key={key} style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', textTransform: 'capitalize' }}>{key}</h2>
          {items.map((item, idx) => (
            <div key={idx} style={{ marginTop: '0.5rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
              <strong>{item.title}</strong>
              <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.9rem', marginTop: '0.5rem' }}>{item.content}</pre>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}