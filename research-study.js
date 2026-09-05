(function () {
  const studies = {
    nft: {
      eyebrow: "DIGITAL MARKETS · JOURNAL OF MARKETING",
      title: "Early attention becomes a lasting marketplace advantage.",
      argument: "Visible social attention can turn small early differences into durable popularity advantages in NFT markets.",
      image: "assets/research-nft-figure.png",
      alt: "Graphs showing how visible attention and view-count rank predict the accumulation of favorites for NFT artworks",
      caption: "Adapted from Figure 2. Higher-ranked NFTs accumulated favorites more rapidly, and popularity accelerated as visible attention increased.",
      method: "The research combines 9,957 Bored Ape NFTs tracked over 150 days with a longitudinal study and six controlled experiments.",
      doi: "https://doi.org/10.1177/00222429261460019"
    },
    seesaw: {
      eyebrow: "OWNERSHIP & IDENTITY · JOURNAL OF MARKETING RESEARCH",
      title: "Possessions can activate one identity—and suppress another.",
      argument: "Making ownership salient activates identities tied to the owned object while suppressing competing identities, improving performance only when the task matches the activated self.",
      image: "assets/research-seesaw-figure.png",
      alt: "Experimental results comparing quiz performance after calculator and art-piece ownership",
      caption: "Adapted from Figure 4. Performance improved when the task matched the identity activated by the owned object—and declined when it did not.",
      method: "Five randomized experiments varied ownership and task framing while holding the performance task constant.",
      doi: "https://doi.org/10.1177/0022243718793885"
    },
    "found-time": {
      eyebrow: "TIME ALLOCATION · JOURNAL OF CONSUMER RESEARCH",
      title: "Unexpected free time changes how consumers spend it.",
      argument: "Unexpected free time feels more expendable than planned time, leading consumers to spend it on pleasure rather than utility.",
      image: "assets/research-found-time-chart.png",
      alt: "Bar chart showing greater allocation to hedonic activities when free time is unexpected",
      caption: "Visualization based on reported results from Study 4. The preference for hedonic consumption weakens when consumers feel especially busy.",
      method: "Five laboratory and field studies tested how unexpectedness, perceived busyness, and duration shape time allocation.",
      doi: "https://doi.org/10.1093/jcr/ucac032"
    },
    instagram: {
      eyebrow: "SOCIAL MEDIA · JOURNAL OF CONSUMER RESEARCH",
      title: "Influencers gain engagement by showing close relationships—not simply larger crowds.",
      argument: "Influencers generate more engagement when they reveal close relationships, especially small-group ties, rather than presenting themselves alone or in larger crowds.",
      image: "assets/research-instagram-chart.png",
      alt: "Charts showing higher Instagram engagement for close-tie references and photographs with one or two other people",
      caption: "Visualization based on Table 1. Close-tie references increased engagement, while photographs with one or two other people outperformed solo and larger-group images.",
      method: "The analysis combines 55,631 Instagram posts with text and image analysis, human validation, and three controlled experiments.",
      doi: "https://doi.org/10.1093/jcr/ucad019",
      relatedTitle: "Research: For Influencers, Showing Your Inner Circle Can Boost Engagement",
      relatedUrl: "https://hbr.org/2024/09/research-for-influencers-showing-your-inner-circle-can-boost-engagement"
    },
    ai: {
      eyebrow: "GENERATIVE AI · NATURE HUMAN BEHAVIOUR",
      title: "ChatGPT can improve creative output by making ideas more coherent.",
      argument: "ChatGPT raises judged creativity primarily by helping people develop more coherent and articulate ideas, rather than by increasing novelty alone.",
      image: "assets/research-ai-chart.png",
      alt: "Bar chart comparing creativity ratings for ChatGPT-assisted ideas and ideas created using web search or no technological assistance",
      caption: "Visualization based on reported experimental means. The effect generalized across creative tasks and independent evaluator samples.",
      method: "Five randomized experiments used multiple creative tasks, independent evaluators, expert judges, and mediation analysis.",
      doi: "https://doi.org/10.1038/s41562-024-01953-1"
    }
  };
  const key = new URLSearchParams(window.location.search).get("paper") || "instagram";
  const study = studies[key] || studies.instagram;
  const setText = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
  setText("study-eyebrow", study.eyebrow); setText("study-title", study.title); setText("study-argument", study.argument);
  setText("study-caption", study.caption); setText("study-method", study.method);
  const image = document.getElementById("study-image"); image.src = study.image; image.alt = study.alt;
  const doi = document.getElementById("study-doi"); doi.href = study.doi;
  if (study.relatedUrl) { const box = document.getElementById("related-article"); const link = document.getElementById("related-link"); box.hidden = false; link.href = study.relatedUrl; link.textContent = study.relatedTitle + " ↗"; }
  document.title = study.title + " | Jaeyeon Chung";
})();
