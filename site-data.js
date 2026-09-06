/*
=========================================================
JAEYEON CHUNG WEBSITE — MAIN EDITING FILE
=========================================================
For most routine updates, edit THIS file only.

You can update:
- title / bio
- social & university links
- research projects
- publications
- courses
- teaching evaluations
- highlights / awards / speaking items

The HTML files control layout; this file controls content.
*/

window.SITE_DATA = {
  profile: {
    name: "Jaeyeon (Jae) Chung",
    title: "William S. Mackey Jr. Distinguished Assistant Professor",
    affiliation: "Marketing · Rice University",
    emailDisplay: "jc134 [at] rice.edu",
    location: "Houston, Texas",
    award: "MSI Young Scholar · 2025",
    hero:
      "I study how technology-mediated environments shape consumer identity, value, and choice. My research combines experiments with natural shocks, marketplace data, and large-scale digital traces.",
    shortBio:
      "I am the William S. Mackey Jr. Distinguished Assistant Professor of Marketing at Rice University. My research examines how consumers behave in digital and emerging markets, especially when technology changes the signals people use to judge quality, credibility, value, and social influence.",
    links: {
      riceBusiness: "https://business.rice.edu/person/jaeyeon-jae-chung",
      riceFaculty: "https://profiles.rice.edu/faculty/jaeyeon-jae-chung",
      googleScholar: "https://scholar.google.com/citations?hl=en&user=r5wBbHMAAAAJ",
      linkedin: "https://www.linkedin.com/in/jaeyeon-jae-chung-0b37a83a",
      researchGate: "https://www.researchgate.net/profile/Jaeyeon-Chung-3"
    }
  },

  research: [
    {
      id: "youtube",
      brand: "YouTube",
      icon: "▶",
      iconClass: "logo-youtube",
      title: "Reliance on Personalized Recommendations",
      subtitle: "Recommendation algorithms & platform trust",
      description:
        "Research on how reliance on recommended content shapes trust in the platform and belief in the information carried on that platform.",
      tags: ["Algorithms", "Trust", "Information belief"]
    },
    {
      id: "instagram",
      brand: "Instagram",
      icon: "◎",
      iconClass: "logo-instagram",
      title: "I Really Know You",
      subtitle: "Influencers, self-presentation & engagement",
      description:
        "Research on how personal relationship content versus professionalized content shapes engagement with influencers.",
      tags: ["Influencers", "Relationships", "Engagement"]
    },
    {
      id: "opensea",
      brand: "OpenSea / NFTs",
      icon: "⛵",
      iconClass: "logo-opensea",
      title: "How Social Cues Drive Popularity in NFT Art Markets",
      subtitle: "Digital ownership & attention",
      description:
        "Research on how visible attention and social signals shape value in digital product markets where quality is difficult to judge.",
      tags: ["NFTs", "Social cues", "Valuation"]
    },
    {
      id: "polymarket",
      brand: "Polymarket",
      icon: "↗↘",
      iconClass: "logo-polymarket",
      title: "Upward vs. Downward Trend",
      subtitle: "Trend following & market behavior",
      description:
        "Research showing that traders follow upward momentum more readily than comparable downward movement, with implications for returns and market efficiency.",
      tags: ["Prediction markets", "Momentum", "Mental simulation"]
    },
    {
      id: "vr",
      brand: "Virtual Reality",
      icon: "VR",
      iconClass: "logo-vr",
      title: "Virtual Experiences and Subsequent Consumption",
      subtitle: "Immersion & psychological needs",
      description:
        "Research on how immersive virtual experiences can satisfy psychological needs and shape later interest in related real-world consumption.",
      tags: ["VR", "Experience", "Need fulfillment"]
    },
    {
      id: "airbnb",
      brand: "Airbnb",
      icon: "⌂",
      iconClass: "logo-airbnb",
      title: "Mining Consumer Minds",
      subtitle: "Platforms & motivation",
      description:
        "Research on how intrinsic versus monetary motivation predicts ratings, retention, pricing, and lifetime value in the sharing economy.",
      tags: ["Airbnb", "Motivation", "Marketplace performance"]
    }
  ],

  publications: [
    {
      year: "2026",
      title: "How Social Cues Drive Popularity in NFT Art Markets",
      venue: "Journal of Marketing"
    },
    {
      year: "2024",
      title: "Generative AI and the Creative Process",
      venue: "Nature Human Behaviour"
    },
    {
      year: "2023",
      title: "I Really Know You",
      venue: "Journal of Consumer Research"
    },
    {
      year: "2022",
      title: "Mining Consumer Minds",
      venue: "Journal of Consumer Research"
    }
  ],

  courses: [
    {
      code: "BUSI 380",
      title: "Marketing",
      audience: "Undergraduate",
      description:
        "This undergraduate course introduces the core principles of marketing strategy, including customer analysis, segmentation, targeting, positioning, and the marketing mix. Students learn to connect consumer insights with managerial decisions and apply marketing frameworks to real business problems."
    },
    {
      code: "MGMT 688",
      title: "Consumer Insights",
      audience: "MBA",
      description:
        "This graduate course focuses on how firms can develop deeper insight into consumer behavior and use those insights to improve decision making. The course integrates behavioral science, research methods, and applied analysis to help students identify what consumers want, why they behave as they do, and how firms can respond effectively."
    },
    {
      code: "BUSI 470",
      title: "Ads and Digital Marketing",
      audience: "Undergraduate",
      description:
        "This course examines how firms attract, convert, and retain customers through digital channels. Students work with contemporary topics such as paid advertising, recommendation systems, analytics, attribution, privacy, AI, and platform strategy, while also gaining hands-on exposure to industry tools and certifications."
    }
  ],

  highlights: [
    {
      category: "Recognition",
      title: "MSI Young Scholar 2025",
      caption: "Recognized as part of the Marketing Science Institute's 2025 cohort of emerging marketing scholars.",
      image: "assets/msi-young-scholar-2025.webp"
    },
    {
      category: "Speaking",
      title: "TEDxRiceU Speaker",
      caption: "Speaking at the 2022 TEDxRiceU Spring Conference.",
      image: "assets/tedx-riceu.webp"
    },
    {
      category: "Conference",
      title: "Research Presentations",
      caption: "Presenting research on social-media influencers and consumer engagement.",
      image: "assets/conference-presentation.webp"
    },
    {
      category: "Media",
      title: "Fox 26 News",
      caption: "Featured as a behavioral-science and consumer-behavior expert.",
      image: "assets/fox26-interview.webp"
    }
  ]
};
