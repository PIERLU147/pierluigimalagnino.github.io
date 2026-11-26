/* =========================================================
   Pierluigi Malagnino - Bilingual (IT/EN), Theme & Contact Form
   ========================================================= */

const translations = {
  it: {
    // Navigation
    nav_about: "Chi sono",
    nav_education: "Formazione",
    nav_experience: "Esperienze",
    nav_skills: "Competenze",
    nav_interests: "Interessi",
    nav_contact: "Contatti",
    back_home: "← Torna a Chi sono",

    // Home / Chi sono
    status_badge: "Disponibile per ruoli Junior IT Support & Help Desk",
    hero_subtitle: "Studente di Ingegneria Informatica · Junior IT Support & Technical Specialist",
    about_p1: "Ho 19 anni, sono diplomato in Informatica e Telecomunicazioni e attualmente frequento il primo anno di Ingegneria Informatica presso l’Università del Salento. Sto cercando la mia prima esperienza professionale nel settore IT dove poter mettere a frutto le mie basi tecniche e continuare a crescere sul campo.",
    about_p2: "Ho un approccio molto intuitivo ai sistemi: mi riesce naturale riconoscere schemi ricorrenti (pattern recognition) e risalire alla causa di un malfunzionamento con metodo e rapidità. Quando qualcosa non funziona, non mi limito a cercare una toppa temporanea, ma voglio capire perché è successo.",
    about_p3: "Sono una persona gentile, disponibile e abituata al contatto diretto con il pubblico. Nei miei precedenti lavori tra accoglienza e manutenzione tecnica ho imparato a gestire le priorità con calma, comunicare in modo chiaro anche in inglese (livello B2) e collaborare con i colleghi per risolvere i problemi senza perdere tempo.",
    btn_linkedin: "Profilo LinkedIn",
    btn_cv: "Scarica il CV (PDF)",
    explore_label: "Esplora le sezioni",

    // Home Section Cards
    card_edu_title: "Formazione",
    card_edu_desc: "Laurea in corso in Ingegneria Informatica, diploma tecnico e corsi Cisco Networking Academy.",
    card_exp_title: "Esperienze",
    card_exp_desc: "Esperienze lavorative tra front-office, assistenza agli utenti e manutenzione tecnica sul campo.",
    card_skills_title: "Competenze",
    card_skills_desc: "Reti TCP/IP, sistemi operativi, hardware, programmazione, database e troubleshooting assistito da AI.",
    card_int_title: "Interessi",
    card_int_desc: "HomeLab e progetti al PC, pallavolo, videogiochi e narrativa fiction.",
    card_cont_title: "Contatti",
    card_cont_desc: "Scrivimi direttamente tramite il modulo online oppure trova i miei recapiti diretti.",

    // Formazione Page
    edu_page_title: "Formazione e Certificazioni",
    edu_page_sub: "Il mio percorso di studi tecnici, universitari e le certificazioni conseguite.",
    edu_uni_title: "Corso di Laurea in Ingegneria Informatica",
    edu_uni_org: "Università del Salento – Lecce",
    edu_uni_date: "2026 – In corso (1° anno)",
    edu_uni_desc: "Approfondimento delle basi di programmazione, architettura degli elaboratori e analisi matematica, affiancando lo studio teorico alla pratica personale su reti e sistemi.",
    edu_hs_title: "Diploma Tecnico in Informatica e Telecomunicazioni",
    edu_hs_org: "Istituto Tecnico Tecnologico Mucci",
    edu_hs_date: "Conseguito nel 2026",
    edu_hs_desc: "Percorso quinquennale incentrato su architetture di rete, sistemi operativi, programmazione orientata agli oggetti, progettazione di database relazionali, elettronica e manutenzione hardware.",
    cisco_section_title: "Corsi Cisco Networking Academy & Lingue",
    cisco_iot_title: "Cisco: Introduction to IoT",
    cisco_iot_desc: "Fondamenti delle architetture Internet of Things, sensori, dispositivi connessi e comunicazione su rete.",
    cisco_gc_title: "Cisco: Get Connected",
    cisco_gc_desc: "Competenze fondamentali sui sistemi informatici, configurazione di rete e sicurezza digitale di base.",
    lang_cert_title: "Certificazione Cambridge English B2",
    lang_cert_desc: "Comprensione e produzione scritta e orale di livello intermedio-avanzato, utile per consultare documentazione tecnica e fornire supporto IT anche a utenti internazionali.",

    // Esperienze Page
    exp_page_title: "Esperienze Lavorative",
    exp_page_sub: "Esperienze sul campo che hanno formato il mio approccio al customer care, alla diagnostica e al lavoro di squadra.",
    exp1_title: "Receptionist & Front Desk Analyst",
    exp1_org: "Blu Salento – Gallipoli (LE)",
    exp1_date: "Giugno 2026 – Luglio 2026",
    exp1_li1: "Primo punto di contatto per clientela italiana e internazionale, con gestione diretta delle segnalazioni e risoluzione rapida delle richieste.",
    exp1_li2: "Utilizzo quotidiano di software gestionali alberghieri per check-in/check-out, registrazione dati e verifica delle pratiche.",
    exp1_li3: "Assistenza in lingua inglese (B2), gestione delle priorità nelle fasce di massimo afflusso e coordinamento continuo con i reparti operativi.",
    exp2_title: "Addetto alla Portineria e Accoglienza",
    exp2_org: "Camping Riva di Ugento – Ugento (LE)",
    exp2_date: "Luglio 2024 – Ottobre 2024 & Giugno 2025 – Luglio 2025",
    exp2_li1: "Supporto diretto agli ospiti (Customer Service) con prima analisi delle problematiche logistiche o tecniche segnalate.",
    exp2_li2: "Gestione delle procedure di registrazione e controllo prenotazioni tramite applicativi informatici aziendali.",
    exp2_li3: "Comunicazione tempestiva con il personale tecnico e operativo per garantire tempi di risposta rapidi.",
    exp3_title: "Aiuto Manutentore Tecnico",
    exp3_org: "Parco dei Principi Hotel",
    exp3_date: "Giugno 2023 – Agosto 2023",
    exp3_li1: "Individuazione, segnalazione e diagnosi pratica di guasti e anomalie sugli impianti della struttura.",
    exp3_li2: "Esecuzione di piccoli interventi di riparazione e manutenzione ordinaria/preventiva con strumentazione tecnica.",
    exp3_li3: "Collaborazione quotidiana con i tecnici senior per mantenere la continuità operativa dei servizi.",

    // Competenze Page
    skills_page_title: "Competenze Tecniche e Trasversali",
    skills_page_sub: "Strumenti, tecnologie e metodologie che utilizzo nello studio e nei miei progetti pratici.",
    sk_os_title: "Sistemi Operativi",
    sk_os_desc: "Installazione pulita, configurazione ambienti utente, partizionamento e gestione driver.",
    sk_hw_title: "Hardware & Diagnostica",
    sk_hw_desc: "Assemblaggio PC desktop, sostituzione componenti (RAM, SSD, schede), configurazione periferiche, troubleshooting hardware/software e gestione di un piccolo HomeLab domestico.",
    sk_net_title: "Reti & Telecomunicazioni",
    sk_net_desc: "Configurazione modem/router Wi-Fi, cablaggio Ethernet e diagnostica della connettività locale.",
    sk_dev_title: "Programmazione & Web",
    sk_dev_desc: "Logica algoritmica, programmazione strutturata e a oggetti, sviluppo di pagine web e script.",
    sk_db_title: "Database",
    sk_db_desc: "Progettazione concettuale (modello ER), logica e implementazione pratica di basi di dati relazionali.",
    sk_soft_title: "Software & Strumenti",
    sk_soft_desc: "Pacchetto Office, Desktop Remoto (RDP / teleassistenza), software gestionali e utilizzo avanzato di strumenti AI per velocizzare troubleshooting e analisi dei problemi.",
    soft_skills_title: "Approccio e Competenze Trasversali",
    soft_skills_desc: "Quello che porto nel team oltre alle conoscenze tecniche:",
    ss_1: "Pattern recognition & Problem solving",
    ss_2: "Approccio pratico e intuitivo",
    ss_3: "Orientamento all'utente (Customer Care)",
    ss_4: "Apprendimento rapido sul campo",
    ss_5: "Gestione delle priorità",
    ss_6: "Lavoro in team e comunicazione chiara",
    ss_7: "Italiano (Madrelingua) · Inglese B2 (Cambridge)",

    // Interessi Page
    int_page_title: "Interessi e Passioni",
    int_page_sub: "Cosa mi appassiona nel tempo libero e come alimenta il mio modo di ragionare.",
    int1_title: "Smanettare al PC & HomeLab",
    int1_desc: "La soddisfazione più grande per me è costruire qualcosa di mio al computer: configurare servizi in rete locale nel mio piccolo HomeLab, provare nuove soluzioni software, ottimizzare sistemi e sperimentare con l'Intelligenza Artificiale per risolvere problemi concreti.",
    int2_title: "Sport e Pallavolo",
    int2_desc: "Pratico sport con regolarità, in particolare la pallavolo. È uno sport in cui non esiste il singolo isolato: servono lettura rapida dell'azione, comunicazione costante con i compagni e prontezza nel reagire in una frazione di secondo.",
    int3_title: "Videogiochi",
    int3_desc: "Mi appassionano i videogiochi, sia come momento di svago sia per la componente strategica e tecnica. Analizzare meccaniche complesse, ottimizzare le prestazioni hardware e capire come funzionano i sistemi dietro le quinte fa parte della mia curiosità naturale.",
    int4_title: "Fiction e Narrazione",
    int4_desc: "Seguo con interesse serie, film e opere di fiction. Mi piacciono le storie ben costruite che stimolano l'immaginazione e offrono punti di vista diversi su tecnologia, società e risoluzione di situazioni complesse.",

    // Contatti Page
    cont_page_title: "Contatti",
    cont_page_sub: "Vuoi propormi un colloquio o farmi una domanda? Compila il modulo qui sotto: il messaggio arriverà direttamente nella mia casella email.",
    form_name_label: "Nome e Cognome *",
    form_name_ph: "Es. Marco Rossi",
    form_email_label: "La tua Email *",
    form_email_ph: "Es. marco.rossi@azienda.it",
    form_subject_label: "Oggetto",
    form_subject_ph: "Es. Opportunità Junior IT Support",
    form_msg_label: "Messaggio *",
    form_msg_ph: "Scrivi qui il tuo messaggio...",
    form_submit: "Invia messaggio",
    form_sending: "Invio in corso...",
    form_success: "Messaggio inviato con successo! Ti risponderò il prima possibile.",
    form_error: "Si è verificato un problema nell'invio. Puoi scrivermi direttamente a pierluigimalagninoo@gmail.com.",
    side_email_label: "Email diretta",
    side_copy_btn: "Copia email",
    side_copied: "Copiata!",
    side_loc_label: "Domicilio",
    side_loc_val: "Ugento (LE), Puglia – Italia",
    side_links_label: "Profilo e Curriculum",

    // Footer
    footer_text: "© 2026 Pierluigi Malagnino · Realizzato per candidature in ambito IT & Telecomunicazioni."
  },

  en: {
    // Navigation
    nav_about: "About me",
    nav_education: "Education",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_interests: "Interests",
    nav_contact: "Contact",
    back_home: "← Back to About me",

    // Home / About
    status_badge: "Open to Junior IT Support & Help Desk roles",
    hero_subtitle: "Computer Engineering Student · Junior IT Support & Technical Specialist",
    about_p1: "I am 19 years old, hold a technical high school diploma in Computer Science and Telecommunications, and am currently a first-year Computer Engineering student at Università del Salento. I am looking for my first professional opportunity in the IT sector where I can apply my technical foundation and grow hands-on.",
    about_p2: "I take a very intuitive approach to systems: I naturally spot recurring patterns and trace technical issues back to their root cause methodically. When something breaks, I don't just look for a temporary workaround—I want to understand why it happened.",
    about_p3: "I am polite, approachable, and comfortable dealing directly with people. Through previous roles in hospitality front-desk operations and technical maintenance, I learned how to prioritize under pressure, communicate clearly in English (B2 certified), and collaborate effectively with teammates to solve issues quickly.",
    btn_linkedin: "LinkedIn Profile",
    btn_cv: "Download CV (PDF)",
    explore_label: "Explore sections",

    // Home Section Cards
    card_edu_title: "Education",
    card_edu_desc: "Ongoing Computer Engineering degree, technical diploma, and Cisco Networking Academy courses.",
    card_exp_title: "Experience",
    card_exp_desc: "Hands-on experience across front-desk user assistance, management software, and field maintenance.",
    card_skills_title: "Skills",
    card_skills_desc: "TCP/IP networking, operating systems, PC hardware, programming, databases, and AI-assisted troubleshooting.",
    card_int_title: "Interests",
    card_int_desc: "HomeLab tinkering and PC projects, volleyball, video games, and fiction.",
    card_cont_title: "Contact",
    card_cont_desc: "Send me a direct message via the online form or find my direct contact details.",

    // Education Page
    edu_page_title: "Education & Certifications",
    edu_page_sub: "My academic background, technical diploma, and completed networking courses.",
    edu_uni_title: "B.Sc. in Computer Engineering (Ingegneria Informatica)",
    edu_uni_org: "Università del Salento – Lecce, Italy",
    edu_uni_date: "2026 – Present (1st Year)",
    edu_uni_desc: "Building foundations in programming, computer architecture, and applied mathematics while continuing practical experimentation on home networks and systems.",
    edu_hs_title: "Technical High School Diploma in Computer Science & Telecommunications",
    edu_hs_org: "Istituto Tecnico Tecnologico Mucci",
    edu_hs_date: "Graduated 2026",
    edu_hs_desc: "Five-year technical program covering computer networks, operating systems, object-oriented programming, relational database design, electronics, and PC hardware.",
    cisco_section_title: "Cisco Networking Academy & Languages",
    cisco_iot_title: "Cisco: Introduction to IoT",
    cisco_iot_desc: "Fundamentals of Internet of Things architectures, connected devices, and network communication.",
    cisco_gc_title: "Cisco: Get Connected",
    cisco_gc_desc: "Core skills in computer systems, network configuration, and foundational digital security.",
    lang_cert_title: "Cambridge English B2 Certificate",
    lang_cert_desc: "Upper-intermediate written and spoken proficiency, enabling technical documentation reading and IT support for international users.",

    // Experience Page
    exp_page_title: "Work Experience",
    exp_page_sub: "Field experiences that shaped my customer care mindset, practical diagnostics, and teamwork.",
    exp1_title: "Receptionist & Front Desk Analyst",
    exp1_org: "Blu Salento – Gallipoli (LE), Italy",
    exp1_date: "June 2026 – July 2026",
    exp1_li1: "First point of contact for national and international guests, handling inquiries and resolving issues promptly.",
    exp1_li2: "Daily operation of property management software for check-in/check-out workflows, data entry, and record verification.",
    exp1_li3: "Provided support in English (B2), managed priorities during peak hours, and coordinated closely with operational departments.",
    exp2_title: "Front Desk & Guest Services Associate",
    exp2_org: "Camping Riva di Ugento – Ugento (LE), Italy",
    exp2_date: "July 2024 – October 2024 & June 2025 – July 2025",
    exp2_li1: "Delivered direct customer support and initial triage of technical and logistical requests reported by guests.",
    exp2_li2: "Managed registration procedures and booking checks using internal enterprise software.",
    exp2_li3: "Maintained timely communication with technical and operational staff to ensure fast resolution times.",
    exp3_title: "Technical Maintenance Assistant",
    exp3_org: "Parco dei Principi Hotel",
    exp3_date: "June 2023 – August 2023",
    exp3_li1: "Identified, reported, and diagnosed faults and anomalies across facility systems and equipment.",
    exp3_li2: "Performed minor repairs as well as routine and preventive maintenance using technical tools.",
    exp3_li3: "Worked alongside senior technicians to maintain continuous operational availability.",

    // Skills Page
    skills_page_title: "Technical & Soft Skills",
    skills_page_sub: "Tools, technologies, and methodologies I use in my studies and personal projects.",
    sk_os_title: "Operating Systems",
    sk_os_desc: "Clean OS installations, user environment setup, disk partitioning, and driver management.",
    sk_hw_title: "Hardware & Diagnostics",
    sk_hw_desc: "Desktop PC assembly, component replacement (RAM, SSD, expansion cards), peripheral setup, hardware/software troubleshooting, and managing a small personal HomeLab.",
    sk_net_title: "Networking & Telecom",
    sk_net_desc: "Wi-Fi modem/router configuration, Ethernet cabling, and local connectivity diagnostics.",
    sk_dev_title: "Programming & Web",
    sk_dev_desc: "Algorithmic logic, structured and object-oriented programming, web page and script development.",
    sk_db_title: "Databases",
    sk_db_desc: "Conceptual design (ER modeling), logical schema design, and practical relational database implementation.",
    sk_soft_title: "Software & Tools",
    sk_soft_desc: "Microsoft Office, Remote Desktop (RDP), management software, and advanced use of AI tools to accelerate troubleshooting and root-cause analysis.",
    soft_skills_title: "Approach & Soft Skills",
    soft_skills_desc: "What I bring to a team beyond technical knowledge:",
    ss_1: "Pattern recognition & Problem solving",
    ss_2: "Practical & intuitive mindset",
    ss_3: "Customer-first orientation",
    ss_4: "Fast hands-on learner",
    ss_5: "Priority management",
    ss_6: "Teamwork & clear communication",
    ss_7: "Italian (Native) · English B2 (Cambridge)",

    // Interests Page
    int_page_title: "Interests & Passions",
    int_page_sub: "What I enjoy in my free time and how it shapes the way I think.",
    int1_title: "PC Tinkering & HomeLab",
    int1_desc: "Nothing beats the satisfaction of building something of my own on a computer—setting up local network services in my small HomeLab, testing new software stacks, optimizing systems, and experimenting with AI tools to solve practical problems.",
    int2_title: "Sports & Volleyball",
    int2_desc: "I play sports regularly, especially volleyball. It is a fast-paced team game where nobody wins alone: reading the play early, communicating constantly with teammates, and reacting in a split second make all the difference.",
    int3_title: "Video Games",
    int3_desc: "I enjoy video games both to unwind and for their strategic and technical depth. Analyzing complex mechanics, tuning hardware performance, and understanding how systems work behind the scenes comes naturally to me.",
    int4_title: "Fiction & Storytelling",
    int4_desc: "I enjoy watching and reading fiction. Well-crafted stories spark imagination and offer fresh perspectives on technology, human behavior, and navigating complex problems.",

    // Contact Page
    cont_page_title: "Contact",
    cont_page_sub: "Want to schedule an interview or ask a question? Fill out the form below—your message will be forwarded straight to my email inbox.",
    form_name_label: "Full Name *",
    form_name_ph: "e.g. John Smith",
    form_email_label: "Your Email *",
    form_email_ph: "e.g. john.smith@company.com",
    form_subject_label: "Subject",
    form_subject_ph: "e.g. Junior IT Support Opportunity",
    form_msg_label: "Message *",
    form_msg_ph: "Write your message here...",
    form_submit: "Send message",
    form_sending: "Sending...",
    form_success: "Message sent successfully! I will get back to you as soon as possible.",
    form_error: "Something went wrong while sending. You can email me directly at pierluigimalagninoo@gmail.com.",
    side_email_label: "Direct Email",
    side_copy_btn: "Copy email",
    side_copied: "Copied!",
    side_loc_label: "Location",
    side_loc_val: "Ugento (LE), Puglia – Italy",
    side_links_label: "Profile & Resume",

    // Footer
    footer_text: "© 2026 Pierluigi Malagnino · Built for IT & Telecommunications applications."
  }
};

function getInitialLang() {
  const saved = localStorage.getItem("site_lang");
  if (saved === "it" || saved === "en") return saved;
  const browserLang = (navigator.language || navigator.userLanguage || "it").toLowerCase();
  return browserLang.startsWith("en") ? "en" : "it";
}

function applyLanguage(lang) {
  localStorage.setItem("site_lang", lang);
  document.documentElement.lang = lang;
  const dict = translations[lang] || translations.it;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = lang === "it" ? "EN" : "IT";
    langBtn.setAttribute("title", lang === "it" ? "Switch to English" : "Passa all'Italiano");
  }
}

function getInitialTheme() {
  const saved = localStorage.getItem("site_theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  localStorage.setItem("site_theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    themeBtn.setAttribute("aria-label", theme === "dark" ? "Light mode" : "Dark mode");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Theme & Language
  let currentTheme = getInitialTheme();
  applyTheme(currentTheme);

  let currentLang = getInitialLang();
  applyLanguage(currentLang);

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "it" ? "en" : "it";
      applyLanguage(currentLang);
    });
  }

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
    });
  }

  // Mobile Menu Toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Copy Email Button on Contact Page
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("pierluigimalagninoo@gmail.com").then(() => {
        const dict = translations[currentLang] || translations.it;
        copyBtn.textContent = dict.side_copied;
        setTimeout(() => {
          copyBtn.textContent = dict.side_copy_btn;
        }, 2000);
      });
    });
  }

  // Contact Form Submission via FormSubmit AJAX
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dict = translations[currentLang] || translations.it;
      const submitBtn = document.getElementById("form-submit-btn");
      const statusBox = document.getElementById("form-status");

      const name = document.getElementById("sender-name").value.trim();
      const email = document.getElementById("sender-email").value.trim();
      const subject = document.getElementById("sender-subject").value.trim() || "Nuovo messaggio dal sito portfolio";
      const message = document.getElementById("sender-message").value.trim();
      const honey = document.getElementById("honeypot").value;

      if (honey) return; // Bot trap

      submitBtn.disabled = true;
      submitBtn.textContent = dict.form_sending;
      statusBox.className = "form-status";
      statusBox.style.display = "none";

      try {
        const response = await fetch("https://formsubmit.co/ajax/pierluigimalagninoo@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _subject: subject,
            message: message
          })
        });

        if (response.ok) {
          statusBox.textContent = dict.form_success;
          statusBox.className = "form-status success";
          contactForm.reset();
        } else {
          throw new Error("FormSubmit error");
        }
      } catch (err) {
        statusBox.textContent = dict.form_error;
        statusBox.className = "form-status error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = dict.form_submit;
      }
    });
  }
});
