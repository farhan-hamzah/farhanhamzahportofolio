import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    hash: "suvarna-media-informatika",
    org: "PT. Suvarna Media Informatika · Developer Department",
    role: "Data Analyst & Machine Learning Intern",
    period: "Jul 2026 — Sept 2026",
    color: "rose",
    images: [
      "/images/experience/suvarna/surat-keterangan-pkl.jpg",
      "/images/experience/suvarna/team-suvarna-1.jpg",
      "/images/experience/suvarna/team-suvarna-2.jpg",
    ],
    description:
      "Selama program Praktik Kerja Lapangan (PKL) di Department Developer PT. Suvarna Media Informatika, saya berkontribusi langsung dalam perancangan dan pengembangan solusi machine learning untuk time-series predictive analytics pada data skala enterprise. Fokus pekerjaan mencakup pemrosesan data berskala besar (large-scale data processing), perancangan feature engineering berbasis waktu (lag features, rolling statistics, seasonality decomposition), serta optimasi model prediktif. Saya mengeksplorasi dan mengevaluasi berbagai pendekatan pemodelan untuk menghasilkan sistem prediksi yang akurat, tangguh, dan andal untuk kebutuhan bisnis perusahaan.",
    highlights: [
      "Worked on the development of a machine learning solution for time-series predictive analytics, focusing on large-scale data processing, feature engineering, and model optimization.",
      "Explored and evaluated multiple modeling approaches (LightGBM, Scikit-learn, statistical baselines) to develop an effective and reliable predictive solution.",
      "Membangun pipeline data preprocessing dan feature extraction time-series (temporal lags, rolling window aggregations, trend & seasonality) dari dataset berskala besar.",
      "Melakukan evaluasi performa model dan cross-validation berbasis waktu (TimeSeriesSplit) guna meminimalkan look-ahead bias dan menjaga stabilitas metrik (RMSE, MAE, MAPE).",
      "Menyelesaikan seluruh rangkaian tugas magang Data Analyst dengan predikat baik dan terverifikasi melalui Surat Keterangan PKL resmi No. 01/SMI-DEV/SKK-HRD/IX/2026 dari Direktur Utama PT. Suvarna Media Informatika.",
    ],
    skills: [
      "Machine Learning",
      "Time-Series Analysis",
      "Predictive Analytics",
      "Feature Engineering",
      "Large-Scale Data Processing",
      "Model Optimization",
      "Python",
      "LightGBM",
      "Scikit-learn",
      "Pandas",
    ],
  },
  {
    hash: "ai-x-softdev",
    org: "AI X SoftDev · Bootcamp GDGoC Telkom University",
    role: "Best Participant · Bootcamp Member",
    period: "Aug 2025 — Sept 2025",
    color: "violet",
    images: [
      "/images/experience/fitbot/WhatsApp Image 2026-07-16 at 20.08.49.jpeg",
      "/images/experience/fitbot/Screenshot 2026-07-16 203611.png",
      "/images/experience/fitbot/WhatsApp Image 2026-07-16 at 20.08.50.jpeg",
    ],
    description:
      "Selama bootcamp intensif ini, saya membangun FitBot  asisten kebugaran personal berbasis Gemini API yang mampu menyusun rencana latihan secara real-time, disesuaikan dengan kondisi tubuh dan target masing-masing pengguna. Yang membuat proyek ini berbeda dari chatbot fitness kebanyakan adalah kemampuan tool-calling: bot ini terhubung langsung ke Google Calendar lewat Google Cloud API, sehingga jadwal latihan yang dihasilkan otomatis masuk ke kalender pengguna tanpa perlu input manual berulang. Untuk menjaga akurasi rekomendasi (bukan sekadar jawaban generik dari LLM), saya mengimplementasikan lapisan Retrieval-Augmented Generation menggunakan framework LangChain, yang menarik referensi dari basis pengetahuan fitness sebelum menyusun jawaban akhir. Hasil akhir dari proses ini membawa saya meraih predikat Best Participant di antara seluruh peserta bootcamp.",
    highlights: [
      "Merancang system prompt & schema tool-calling Gemini API agar rencana latihan menyesuaikan otomatis dengan kondisi tubuh dan target pengguna.",
      "Mengintegrasikan Google Calendar API sehingga jadwal latihan langsung ter-generate ke kalender pengguna secara otomatis.",
      "Membangun pipeline retrieval berbasis LangChain (RAG) untuk menekan halusinasi jawaban dan menjaga relevansi terhadap literatur fitness.",
      "Meraih predikat Best Participant dari seluruh peserta atas hasil akhir produk dan presentasi teknis.",
    ],
    skills: ["Gemini API", "LangChain", "RAG", "Google Calendar API", "Tool Calling", "Prompt Engineering"],
  },
  {
    hash: "computing-lab",
    org: "Computing Laboratory",
    role: "Head of Competitions",
    period: "Oct 2025 — Present",
    color: "teal",
    images: [ "/images/experience/aslab/Screenshot 2026-07-16 203416.png",
      "/images/experience/aslab/Screenshot 2026-07-16 203425.png",
      "/images/experience/aslab/Screenshot 2026-07-16 203442.png",],
    description:
      "Sebagai Head of Competitions, tanggung jawab saya bergeser dari sekadar mengerjakan soal menjadi merancang bagaimana seluruh divisi bersiap menghadapi kompetisi tingkat nasional. Saya menyusun roadmap pelatihan yang mencakup competitive programming, data science, hingga hackathon, sekaligus melakukan seleksi dan pembentukan tim berdasarkan kekuatan masing-masing anggota ada yang lebih kuat di problem solving, ada yang lebih kuat di implementasi cepat atau presentasi. Selain menyusun strategi, saya juga turun langsung sebagai mentor dalam sesi simulasi kompetisi dan code review sebelum hari pelaksanaan, serta membangun sistem evaluasi progres tim supaya kesiapan bisa diukur secara konkret, bukan berdasarkan asumsi semata.",
    highlights: [
      "Menyusun roadmap pelatihan (competitive programming, data science, hackathon) untuk seluruh anggota lab tiap semester.",
      "Melakukan seleksi & pembentukan tim kompetisi berdasarkan kekuatan individu masing-masing anggota.",
      "Menjadi mentor teknis dalam sesi simulasi kompetisi dan code review sebelum hari pelaksanaan.",
      "Membangun sistem evaluasi progres tim agar kesiapan terukur secara objektif.",
    ],
    skills: ["Team Leadership", "Competitive Programming", "Mentoring", "Curriculum Design", "Public Speaking"],
  },
  {
    hash: "ai-eng-division",
    org: "Computing Laboratory · AI Engineering Division",
    role: "Active Member",
    period: "Oct 2025 — May 2026",
    color: "sky",
    images: [
        "/images/experience/computingLab/Screenshot 2026-07-16 203554.png",
    ],
    description:
      "Di AI Engineering Division, saya terlibat dalam siklus pengembangan sistem AI secara menyeluruh mulai dari data preprocessing dan feature engineering, eksperimen training serta fine-tuning model, sampai proses evaluasi metrik dan iterasi arsitektur berdasarkan hasil yang didapat. Kolaborasi lintas tim jadi bagian penting di sini: kami rutin berbagi progres lewat dokumentasi teknis dan sesi knowledge-sharing internal, termasuk workshop seputar MLOps dan strategi deployment model ke lingkungan produksi. Pengalaman ini membentuk pemahaman saya bahwa membangun model yang akurat hanyalah separuh pekerjaan separuh lainnya adalah memastikan model itu bisa dipakai dan dipelihara secara andal di dunia nyata.",
    highlights: [
      "Melakukan data preprocessing & feature engineering untuk beberapa use case riset internal lab.",
      "Berpartisipasi dalam eksperimen training dan fine-tuning model, termasuk evaluasi metrik dan iterasi arsitektur.",
      "Mengikuti workshop internal seputar MLOps dan strategi deployment model ke produksi.",
      "Menyusun dokumentasi teknis dan berkolaborasi lintas tim dalam sesi knowledge-sharing.",
    ],
    skills: ["MLOps", "Model Deployment", "Data Preprocessing", "PyTorch", "Cross-functional Collaboration"],
  },
  {
    hash: "ai-lab",
    org: "Artificial Intelligence Laboratory",
    role: "Active Member",
    period: "Oct 2025 — March 2026",
    color: "sage",
    images: [
      "/images/experience/aiLab/Screenshot 2026-07-16 203603.png",
       "/images/experience/aiLab/Screenshot 2026-07-16 205311.png",
        "/images/experience/aiLab/Screenshot 2026-07-16 205319.png",
    ],
    description:
      "Selama menjadi anggota aktif di lab ini, fokus saya berada di riset terapan bidang Machine Learning dan Computer Vision. Saya membangun pipeline AI end-to-end mulai dari pengumpulan dan pembersihan data, proses training model, evaluasi performa, hingga tahap deployment sebuah alur kerja kolaboratif yang menuntut komunikasi teknis yang jelas antar anggota tim. Selain riset teknis, saya juga berkontribusi dalam penyusunan draf publikasi ilmiah dan aktif dalam diskusi internal, termasuk menyampaikan presentasi seputar topik-topik AI terkini kepada sesama anggota lab sebagai bagian dari budaya knowledge-sharing yang dijaga di sini.",
    highlights: [
      "Melakukan riset terapan di bidang Machine Learning dan Computer Vision bersama tim lab.",
      "Membangun pipeline AI end-to-end: pengumpulan data, training, evaluasi, hingga deployment.",
      "Berkontribusi dalam penyusunan draf publikasi ilmiah dan diskusi teknis internal.",
      "Menyampaikan presentasi internal seputar topik AI terkini kepada sesama anggota lab.",
    ],
    skills: ["Computer Vision", "Research Writing", "Model Evaluation", "Python", "Scikit-learn"],
  },
  {
    hash: "practicum-assistant",
    org: "Practicum Assistant",
    role: "Teaching Assistant",
    period: "Feb 2026 — Present",
    color: "peach",
    images: [
      "/images/experience/asprak/WhatsApp Image 2026-07-16 at 20.07.13.jpeg",
      "/images/experience/asprak/WhatsApp Image 2026-07-16 at 20.07.13 (1).jpeg",
      "/images/experience/asprak/WhatsApp Image 2026-07-16 at 20.07.13 (2).jpeg",
    ],
    description:
      "Sebagai asisten praktikum, saya mendampingi lebih dari 20 mahasiswa setiap minggunya dalam sesi pemrograman Go, memberikan dukungan debugging secara langsung dan masukan optimasi kode saat sesi berlangsung. Fokus utama pengajaran saya adalah konsep dasar struktur data dan algoritma rekursi, array, sorting, dan searching yang saya sampaikan lewat pendekatan studi kasus agar lebih mudah dicerna dibanding penjelasan teoretis semata. Lebih dari sekadar mengajarkan sintaks, saya melatih mahasiswa untuk memecah masalah kompleks menjadi langkah-langkah implementasi yang lebih terstruktur, menggunakan kerangka berpikir problem-solving yang sistematis.",
    highlights: [
      "Mendampingi lebih dari 20 mahasiswa dalam sesi praktikum pemrograman Go setiap minggunya.",
      "Memberikan dukungan debugging langsung serta masukan optimasi kode secara real-time.",
      "Membimbing pemahaman struktur data & algoritma dasar (rekursi, array, sorting, searching) lewat studi kasus.",
      "Melatih mahasiswa memecah masalah kompleks menjadi langkah implementasi yang lebih terstruktur.",
    ],
    skills: ["Go (Golang)", "Data Structures & Algorithms", "Teaching", "Debugging", "Mentoring"],
  },
];