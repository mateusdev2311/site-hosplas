const translations = {
    pt: {
        nav_home: "Início",
        nav_about: "Sobre",
        nav_specialties: "Especialidades",
        nav_doctors: "Médicos",
        nav_contact: "Entre em Contato",
        hero_subtitle: "BEM VINDO AO HOSPITAL DA PLÁSTICA",
        hero_title: "Excelência em saúde com o<br>conforto de um hotel cinco<br>estrelas",
        specialties_title: "Especialidades",
        doctors_title: "Médicos",
        doctors_subtitle: "Agende uma visita ao Hospital da Plástica",
        doctors_desc: "O Hospital da Plástica está de portas abertas para médicos que desejam conhecer nossos centros cirúrgicos, unidades de internação, consultórios e demais áreas de apoio.",
        location_title: "Nossa Localização",
        location_subtitle: "Venha nos visitar e conheça nossa estrutura",
        footer_desc: "O atendimento é personalizado com a segurança que você precisa e o conforto que você merece.",
        footer_slogan: "Segurança • Conforto • Experiência",
        btn_gallery: "Acesse nossa Galeria Completa",
        btn_schedule: "Agendar Visita Técnica",
        btn_how_to_get: "Como Chegar"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_specialties: "Specialties",
        nav_doctors: "Doctors",
        nav_contact: "Contact Us",
        hero_subtitle: "WELCOME TO PLASTIC SURGERY HOSPITAL",
        hero_title: "Excellence in health with the<br>comfort of a five-star<br>hotel",
        specialties_title: "Specialties",
        doctors_title: "Doctors",
        doctors_subtitle: "Schedule a visit to the Plastic Surgery Hospital",
        doctors_desc: "The Plastic Surgery Hospital is open to doctors who wish to visit our surgical centers, inpatient units, offices, and other support areas.",
        location_title: "Our Location",
        location_subtitle: "Come visit us and see our facilities",
        footer_desc: "Personalized care with the safety you need and the comfort you deserve.",
        footer_slogan: "Safety • Comfort • Experience",
        btn_gallery: "Access Full Gallery",
        btn_schedule: "Schedule Technical Visit",
        btn_how_to_get: "Get Directions"
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_specialties: "Especialidades",
        nav_doctors: "Médicos",
        nav_contact: "Contáctenos",
        hero_subtitle: "BIENVENIDO AL HOSPITAL DE PLÁSTICA",
        hero_title: "Excelencia en salud con la<br>comodidad de un hotel cinco<br>estrellas",
        specialties_title: "Especialidades",
        doctors_title: "Médicos",
        doctors_subtitle: "Programe una visita al Hospital de Plástica",
        doctors_desc: "El Hospital de Plástica está abierto a médicos que deseen conocer nuestros quirófanos, unidades de internación, consultorios y otras áreas de apoyo.",
        location_title: "Nuestra Ubicación",
        location_subtitle: "Ven a visitarnos y conoce nuestras instalaciones",
        footer_desc: "Atención personalizada con la seguridad que necesitas y el confort que mereces.",
        footer_slogan: "Seguridad • Confort • Experiencia",
        btn_gallery: "Acceder a la Galería Completa",
        btn_schedule: "Agendar Visita Técnica",
        btn_how_to_get: "Cómo Llegar"
    }
};

function setLanguage(lang) {
    // Update Dropdown Text
    const langNames = {
        pt: 'BR Português',
        en: 'US English',
        es: 'ES Español'
    };
    
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = langNames[lang];
    }

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if element has child nodes that shouldn't be overwritten (like icons)
            // Ideally we wrap text in span, but for simplicity we assume full replacement 
            // OR checks for specific structure.
            // For buttons with icons, we might need a specific structure or target a span inside.
            
            // Simple innerHTML replacement (allows <br>)
            element.innerHTML = translations[lang][key]; 
        }
    });

    // Special handling for buttons with icons if needed, 
    // but the translation strings do not include icons, so icons might be lost if we replace innerHTML of the button directly.
    // Strategy: Use a span for the text inside buttons in the HTML.
}
