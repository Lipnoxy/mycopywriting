import React, { useState } from "react";
import Head from 'next/head';

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
  ],
  realestate: [
    {
      title: "Oglas za nepremičnino",
      content:
        "✨ NOVO: 3-sobno stanovanje v centru Ljubljane!\n✔️ 92 m² ✔️ balkon ✔️ garaža\nIdealno za mlade pare ali investicijo. Pokliči zdaj!"
    }
  ],
  cookbook: [
    {
      title: "Email za prodajo knjige z recepti",
      content:
        "🍲 Nova knjiga receptov 'Domače & Zdravo' je tukaj!\n✓ 100+ receptov ✓ Enostavno ✓ Lokalno\nNaroči danes in prejmi GRATIS kuhinjsko merico!"
    }
  ]
};

const categoryEmojis = {
  fitness: "💪",
  influencer: "📸",
  software: "💻",
  general: "🛍️",
  realestate: "🏡",
  cookbook: "📖"
};

export default function Home() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <Head>
        <title>Lipnik – Copywriting primeri</title>
        <meta name="description" content="Copywriting primeri za influencerje, trenerje, software, nepremičnine in več. Povečaj prodajo s pravimi besedami." />
        <meta name="keywords" content="copywriting, primeri besedil, marketing, prodajna besedila, spletna prodaja, trener, influencer, oglaševanje" />
        <meta property="og:title" content="Lipnik – Copywriting primeri" />
        <meta property="og:description" content="Poglej si brezplačne primere marketinških besedil." />
        <meta property="og:image" content="/images/preview.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <div className="page-container">
      <h1 className="title">Lipnik – Copywriting primeri</h1>
      <p className="subtitle">
        Klikni na kategorijo za primere besedil ✨
      </p>
      <div className="grid">
        {Object.entries(examples).map(([key, items]) => (
          <div
            key={key}
            className="card"
            onClick={() => setExpanded(expanded === key ? null : key)}
          >
            <div className="card-header">
              <span className="emoji">{categoryEmojis[key]}</span>
              <h2>{key}</h2>
            </div>
            {expanded === key && (
              <div className="card-content">
                {items.map((item, idx) => (
                  <div key={idx} className="example">
                    <strong>{item.title}</strong>
                    <pre>{item.content}</pre>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="contact-form">
        <h2>📬 Pošlji povpraševanje</h2>
        <form
          action="mailto:lipniktim@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="ime" placeholder="Tvoje ime" required />
          <input type="email" name="email" placeholder="Email naslov" required />
          <textarea name="sporocilo" placeholder="Sporočilo..." required />
          <button type="submit">Pošlji</button>
        </form>
      </div>
    </div>
  </>
  );
}
