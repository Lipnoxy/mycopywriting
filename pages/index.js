import React, { useState } from "react";
import Head from 'next/head';

const examples = {
  fitness: [
    {
      title: "Instagram Post",
      content:
        "🔥 Weekly motivation drop.\
You don't need to be perfect, just consistent.\nToday's workout? ✔️ 30 min ✔️ Sweat ✔️ Progress\nDM 'START' to begin."
    },
    {
      title: "Website Banner",
      content:
        "8-week program to get you in shape.\n✅ Custom workouts ✅ Personalized meal plans ✅ 24/7 support\nJoin now!"
    }
  ],
  influencer: [
    {
      title: "Instagram Caption",
      content:
        "The new collection is here 👟🔥\nWhich color is yours?👇\n#fashion2025 #outfitinspo"
    },
    {
      title: "Story CTA",
      content:
        "Swipe up for 20% off – today only until 8PM! 💥\nLink in bio 🛒"
    }
  ],
  software: [
    {
      title: "Landing Page Header",
      content:
        "Automate your workflow in minutes 🚀\nOur tool saves you 10+ hours per week."
    },
    {
      title: "Ad Copy",
      content:
        "Manual work? Nah.\n⚡️ Try our software and get 14 days free."
    }
  ],
  general: [
    {
      title: "Email Subject Line",
      content:
        "🎁 Your 10% discount is waiting!"
    },
    {
      title: "Product Description",
      content:
        "Our new blender: quieter, faster, stronger. 🥤\nFor homemade smoothies without the mess."
    },
    {
      title: "General Slogan",
      content:
        "Words that convert.\nMessaging that moves."
    }
  ],
  realestate: [
    {
      title: "Property Ad",
      content:
        "✨ NEW: 3-bedroom apartment in downtown Ljubljana!\n✔️ 92 m² ✔️ Balcony ✔️ Garage\nPerfect for couples or investment. Call now!"
    }
  ],
  cookbook: [
    {
      title: "Cookbook Email",
      content:
        "🍲 New cookbook 'Homestyle & Healthy' is here!\n✓ 100+ recipes ✓ Easy ✓ Local\nOrder now and get a FREE kitchen measurer!"
    }
  ],
  instagram: [
    {
      title: "Instagram Bio",
      content:
        "Words that convert.\nCaptions that stop the scroll & spark the follow."
    }
  ],
  gmail: [
    {
      title: "Gmail Newsletter",
      content:
        "Words that convert.\nEmails they open. Offers they click. Results you see."
    }
  ]
};

const categoryEmojis = {
  fitness: "💪",
  influencer: "📸",
  software: "💻",
  general: "🛍️",
  realestate: "🏡",
  cookbook: "📖",
  instagram: "📷",
  gmail: "✉️"
};

export default function Home() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <Head>
        <title>Lipnik – Copywriting</title>
        <meta
          name="description"
          content="Words that convert
      Free examples of marketing copy.
      Boost your sales with better captions and writing."
        />
        <meta name="keywords" content="copywriting, writing examples, marketing, sales copy, website copy, trainer, influencer, ads" />
      
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.lipnik-copywriting.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lipnik – Copywriting" />
        <meta
          property="og:description"
          content="Words that convert
      Free examples of marketing copy.
      Boost your sales with better captions and writing."
        />
        <meta property="og:image" content="https://lipnik-copywriting.com/images/preview.png" />
      
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lipnik-copywriting.com" />
        <meta property="twitter:url" content="https://www.lipnik-copywriting.com/" />
        <meta name="twitter:title" content="Lipnik – Copywriting" />
        <meta
          name="twitter:description"
          content="Words that convert
      Free examples of marketing copy.
      Boost your sales with better captions and writing."
        />
        <meta name="twitter:image" content="https://lipnik-copywriting.com/images/preview.png" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <div className="page-container">
        <h1 className="title">Lipnik – Copywriting</h1>
        <p className="subtitle">
          Words that convert ✨
        </p>
        <div className="grid">
          {Object.entries(examples).map(([key, items]) => (
            <div
              key={key}
              className={`card ${expanded === key ? "expanded" : ""}`}
              onClick={() => setExpanded(expanded === key ? null : key)}
            >
              <div className="card-header">
                <span className="emoji">{categoryEmojis[key]}</span>
                <h2>{key}</h2>
              </div>
              <div className="card-content">
                {items.map((item, idx) => (
                  <div key={idx} className="example">
                    <strong>{item.title}</strong>
                    <pre>{item.content}</pre>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-form">
          <h2>📬 Get in Touch</h2>
          <form
            action="mailto:lipniktim@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Email address" required />
            <textarea name="message" placeholder="Message..." required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
