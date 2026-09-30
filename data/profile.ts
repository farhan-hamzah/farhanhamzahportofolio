export const profile = {
  name: "Farhan Hamzah",
  tagline: "AI/ML Engineer • Data Science • Software",
  location: "Bandung, ID",
  bio: "I'm passionate about crafting AI and data experiences that are thoughtful, useful, and human-centered from intelligent products to research-driven systems that turn complex ideas into real impact.",
  email: "farhanhamzah125@gmail.com",
  github: "https://github.com/farhan-hamzah",
  linkedin: "https://www.linkedin.com/in/farhan-hamzah/",
  cvUrl: "/CV Farhan Hamzah English Version.pdf",
  photo: {
    primary: "/images/about/photo/Formal.jpg",
    candid: [
      "/images/about/photo/WhatsApp Image 2026-07-17 at 08.31.36.jpeg",
      "/images/about/photo/WhatsApp Image 2026-07-17 at 08.32.25.jpeg",
    ],
  },
  quickFacts: [
    "Semester 5, Informatika. Fakultas Informatika, Telkom University.",
    "Mantan Data Analyst & ML Intern di PT. Suvarna Media Informatika (Department Developer), mengembangkan solusi predictive analytics untuk data time-series skala besar.",
    "Sedang menggarap riset Vision-Language Model untuk perbandingan citra medis longitudinal (chest X-ray & skin monitoring). Melacak kondisi pasien lintas kunjungan seperti cara dokter membaca progres.",
    "Head of Competitions di Computing Laboratory, sekaligus anggota aktif di AI Engineering Division & Artificial Intelligence Laboratory.",
    "Fun fact: pernah menghabiskan berhari-hari debugging CUDA/DataLoader issue di Windows gara-gara RTX 5060 Ti pakai arsitektur Blackwell yang belum sepenuhnya kompatibel dengan library ML standar.",
  ],
  skills: [
    { group: "Languages", items: ["Computer Vision", "Language Model", "Agentic AI", "AI", "Visual Language Model", "Machine Learning", "Deep Learning", "Algorithms"] },
    {
      group: "ML/AI",
      items: ["PyTorch", "Scikit-learn", "LightGBM", "HuggingFace", "Time-Series", "Feature Engineering"],
    },
    { group: "Backend", items: ["Spring Boot", "FastAPI", "PostgreSQL"] },
    { group: "Frontend", items: ["React", "Next.js", "Tailwind"] },
  ],
} as const;