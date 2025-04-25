import React, { useState } from "react"; 
import Head from 'next/head';

const examples = {
  fitness: [
    {
      title: "Words that convert",
      content: "From flex to full bookings — writing that builds your client base."
    },
    {
      title: "Services for you",
      content: "• Sales emails for personal training programs\n• Captions that motivate\n• Video scripts for workouts\n• Lead magnets\n• Website and landing page copy\n• Brand voice development\n• Testimonials & case study copy"
    }
  ],
  influencer: [
    {
      title: "Words that convert",
      content: "Brand deals, bio links & sold-out merch — all in the wording"
    },
    {
      title: "Services for you",
      content: "• Email sequences for product drops\n• Social captions that sound like you\n• Merch launch copy\n• YouTube/IG video scripts\n• Brand pitch templates\n• Profile bios\n• CTA optimization"
    }
  ],
  software: [
    {
      title: "Words that convert",
      content: "Explained clearly. Sold smoothly. Built to scale."
    },
    {
      title: "Services for you",
      content: "• Product launch emails\n• Feature release notes\n• App store descriptions\n• Landing page copy\n• Explainer video scripts\n• Blog posts & newsletters"
    }
  ],
  coaches: [
    {
      title: "Words that convert",
      content: "Your wisdom, their breakthrough — words that build trust & sell."
    },
    {
      title: "Services for you",
      content: "• ECourse landing pages\n• Webinar email funnels\n• Sales pages for workshops\n• Certificate blurbs\n• Student testimonials\n• Curriculum descriptions"
    }
  ],
  realestate: [
    {
      title: "Words that convert",
      content: "From listing to closing — copy that moves properties fast."
    },
    {
      title: "Services for you",
      content: "• Listing descriptions\n• Email drip campaigns\n• Open house invites\n• Realtor bios\n• Slogan/USP creation\n• Property brochure copy"
    }
  ],
  cookbook: [
    {
      title: "Words that convert",
      content: "Deliciously written. Clicked, cooked, and shared."
    },
    {
      title: "Services for you",
      content: "• Recipe intros & instructions\n• Email launches for cookbooks\n• Sales copy for products\n• Captions for reels\n• Scripted kitchen demos\n• Book back cover blurbs"
    }
  ],
  instagram: [
    {
      title: "Words that convert",
      content: "Captions that stop the scroll & spark the follow."
    },
    {
      title: "Services for you",
      content: "• Daily caption writing\n• Hook ideas\n• Carousel text\n• Reels/TikTok scripts\n• DMs that convert\n• Hashtag strategy"
    }
  ],
  gmail: [
    {
      title: "Words that convert. Headlines that hook.",
      content: "Emails they open. Offers they click. Results you see.\nCrafted for clicks, built for results."
    },
    {
      title: "Services for you",
      content: "• Product launch emails\n• Cold outreach emails\n• Sales sequences\n• Promotional emails\n• Welcome series\n• Lead magnet funnels\n• Newsletter copy"
    }
  ],
  general: [
    {
      title: "Words that convert",
      content: "By someone who gets what your audience wants.\nLet’s turn your passion into profit."
    },
    {
      title: "Services for you",
      content: "• Email marketing\n• Oneliners & captions\n• Product descriptions\n• Ad copy\n• Sales pages\n• Brand story & tone of voice\n• Video scripts"
    }
  ],
};

const categoryEmojis = {
  fitness: "💪",
  influencer: "📸",
  software: "💻",
  coaches: "🎓",
  realestate: "🏡",
  cookbook: "📖",
  instagram: "📷",
  gmail: "✉️",
  general: "🚀"
};

export default function Home() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <Head>
        <title>Lipnik – Copywriting</title>
        <meta name="description" content="Words that convert\nFree examples of marketing copy.\nBoost your sales with better captions and writing." />
        <meta name="keywords" content="copywriting, writing examples, marketing, sales copy, website copy, trainer, influencer, ads" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.lipnik-copywriting.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lipnik – Copywriting" />
        <meta property="og:description" content="Words that convert\nFree examples of marketing copy.\nBoost your sales with better captions and writing." />
        <meta property="og:image" content="https://lipnik-copywriting.com/images/preview.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lipnik-copywriting.com" />
        <meta property="twitter:url" content="https://www.lipnik-copywriting.com/" />
        <meta name="twitter:title" content="Lipnik – Copywriting" />
        <meta name="twitter:description" content="Words that convert\nFree examples of marketing copy.\nBoost your sales with better captions and writing." />
        <meta name="twitter:image" content="https://lipnik-copywriting.com/images/preview.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero-banner">
        <h1>Lipnik – Copywriting</h1>
        <p>Words that convert ✨</p>
      </div>
    
      <div className="page-container">
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

        <div className="about-me">
          <h2>Why Me?</h2>
          <p>
            I've got the academic creds — ranked top of my high school class, top 10 in my generation, and nationally recognized for English essay writing. But what matters more? I get real results.
           </p>
          <p>
            I helped a YouTuber double their subscribers in just one month, and grew a gym owner's business 4x with strategic, persuasive writing.
          </p>
    		  <p>
    			In my free time, I’m an avid climber, volleyball player, skier, regular at the gym and a lifelong learner (yes, even mastered the Rubik’s cube). I pick up new niches fast, dive deep into the details, and turn complex ideas into clear, compelling writing that sells.
    		  </p>
    		  <p>
    			From fun, slangy Gen Z vibes to professional tone for serious products — I can do it all. But I especially love crafting emails, captions, and video scripts that connect and convert.
    		  </p>
    		  <p>
    			Let’s create something that clicks.
    		  </p>
        </div>

        <div className="contact-form">
          <h2>📬 Get in Touch</h2>
          <form action="https://formspree.io/f/xovdqgew" method="POST">
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
