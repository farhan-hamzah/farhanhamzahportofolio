import type { Competition } from "@/lib/types";

export const competitions: Competition[] = [
  {
    id: "uec-logikaui-2026",
    title: "ClassCover: Class-Conditional Conformal Prediction for Multi-Label 12-Lead ECG",
    event: "University Essay Competition (UEC) — LOGIKA UI 2026",
    organizer: "HMD Matematika FMIPA Universitas Indonesia",
    award: "3rd Place Winner",
    period: "Nov 2026",
    teamName: "izinkompe",
    teammates: ["Farhan Hamzah", "M Rifqi Dzaky Azhad"],
    description:
      "Proposed ClassCover, a label-conditional (Mondrian) split conformal prediction framework that provides finite-sample, distribution-free per-class coverage guarantees for multi-label 12-lead ECG classification on PTB-XL.",
    highlights: [
      "Trained ResNet1D-18 with 2.5s random cropping & 7-window TTA across 5 seeds with strict patient-level splitting (zero patient overlap).",
      "Maintained 0.90 sensitivity on the hardest cardiac superclass (HYP) at α = 0.10, whereas Conformal Risk Control (CRC) dropped to 0.74.",
      "Characterized finite-sample calibration variability analytically via Beta-Binomial distribution and verified monotonic calibration invariance.",
    ],
    metrics: ["Macro-AUROC 0.926", "HYP Sens. 0.90", "Final Score 80.15"],
    skills: ["PyTorch", "Conformal Prediction", "ResNet1D", "PTB-XL", "Calibration"],
    color: "peach",
    repo: "https://github.com/farhan-hamzah/LOGIKAUI-2026-UEC-izinkompe",
    images: [
      "/images/competitions/uec-logikaui-2026/winner-farhan.jpeg",
      "/images/competitions/uec-logikaui-2026/certificate.jpeg",
      "/images/competitions/uec-logikaui-2026/winner-rifqi.jpeg",
    ],
  },
  {
    id: "dsc-logikaui-2026",
    title: "PRISM: Prior-Informed Structural Repayment Modeling for 90-DPD Credit Default",
    event: "Data Science Competition (DSC) — LOGIKA UI 2026",
    organizer: "HMD Matematika FMIPA Universitas Indonesia",
    award: "National Finalist (5th Place)",
    period: "Nov 2026",
    teamName: "Datadataan",
    teammates: ["Farhan Hamzah", "Adison Simanullang", "Nazal Putra Pindha Dharmawara"],
    description:
      "Built an end-to-end 90-DPD credit default prediction pipeline across 6 relational tables combining Empirical-Bayes Markov Chain repayment modeling with a 21-model GBDT and linear ensemble.",
    highlights: [
      "Engineered 462 leakage-free temporal features (fin_sh2) spanning customer profiles, bureau reports, account mutations, and e-commerce bursts.",
      "Designed a universal prior θ from universally available covariates to strengthen predictions for ~34% cold-start applicants without repayment history.",
      "Combined LightGBM (leaves7, Extra-Trees, interaction-constrained, structural-offset), XGBoost, CatBoost, and Quantile-Normal LR via nested rank-normal blending.",
    ],
    metrics: ["Nested CV KS 0.5346", "OOF AUC 0.8506", "Public LB 0.57449"],
    skills: ["LightGBM", "XGBoost", "CatBoost", "Empirical-Bayes", "Feature Engineering"],
    color: "sky",
    repo: "https://github.com/farhan-hamzah/LOGIKAUI-2026-DSC-Datadataan",
    images: [
      "/images/competitions/dsc-logikaui-2026/certificate.jpeg",
      "/images/competitions/dsc-logikaui-2026/leaderboard.png",
    ],
  },
  {
    id: "minetoday-ipb-2026",
    title: "AI Course Advisor: Multi-Modal Recommendation Engine for Personalized Learning Paths",
    event: "MineToday 2026 — National Data Mining Competition (IT-Today)",
    organizer: "HIMALKOM IPB University × Intelligo.id",
    award: "3rd Place Winner",
    period: "2026",
    teamName: "Datadataan",
    teammates: ["Farhan Hamzah", "Adison Simanullang", "Nazal Putra Pindha Dharmawara"],
    description:
      "Developed a multi-modal Top-5 learning module recommendation engine fusing noisy self-assessment tabular scores with informal Indonesian chat history logs.",
    highlights: [
      "Reverse-engineered chat templates, slang aliases, decoy keywords (+0.010 NDCG@5 via empirical Lift filtering), and intent-redirection patterns.",
      "Structured 68,000 long-format (user × module) pairs validated with leak-free 10-Fold GroupKFold strictly grouped by user_id.",
      "Blended 4 paradigms — Pooled LightGBM Regression, LambdaRank, 17× Per-Module LightGBM, and PyTorch ListNet MLP — achieving 0.67201 CV NDCG@5.",
    ],
    metrics: ["CV NDCG@5 0.67201", "10-Fold GroupKFold", "4-Model Blend"],
    skills: ["LightGBM", "PyTorch", "ListNet", "NLP / Regex", "Learning-to-Rank"],
    color: "teal",
    repo: "https://github.com/farhan-hamzah/MineToday-Data-Mining-Competition-3rd-Winner",
    images: [
      "/images/competitions/minetoday-ipb-2026/team-photo.png",
      "/images/competitions/minetoday-ipb-2026/certificate.png",
    ],
  },
];
