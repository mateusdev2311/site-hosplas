// This script adds data-i18n attributes to elements that need translation
// Run this in the browser console to automatically add attributes

const i18nMappings = [
    // Services
    { selector: '.services-grid .service-card:nth-child(1) h3', key: 'service_surgery' },
    { selector: '.services-grid .service-card:nth-child(1) p', key: 'service_surgery_desc' },
    { selector: '.services-grid .service-card:nth-child(2) h3', key: 'service_hospitalization' },
    { selector: '.services-grid .service-card:nth-child(2) p', key: 'service_hospitalization_desc' },
    { selector: '.services-grid .service-card:nth-child(3) h3', key: 'service_exams' },
    { selector: '.services-grid .service-card:nth-child(3) p', key: 'service_exams_desc' },

    // About
    { selector: '.about-section .section-subtitle', key: 'about_subtitle' },
    { selector: '.about-section .section-title', key: 'about_title' },
    { selector: '.about-description p', key: 'about_desc' },

    // Stats
    { selector: '.stat-item:nth-child(1) .stat-label', key: 'stat_foundation' },
    { selector: '.stat-item:nth-child(2) .stat-label', key: 'stat_beds' },
    { selector: '.stat-item:nth-child(3) .stat-label', key: 'stat_rooms' },

    // Values
    { selector: '.values-list li:nth-child(1) strong', key: 'values_purpose' },
    { selector: '.values-list li:nth-child(1) p', key: 'values_purpose_text' },
    { selector: '.values-list li:nth-child(2) strong', key: 'values_mission' },
    { selector: '.values-list li:nth-child(2) p', key: 'values_mission_text' },
    { selector: '.values-list li:nth-child(3) strong', key: 'values_vision' },
    { selector: '.values-list li:nth-child(3) p', key: 'values_vision_text' },
    { selector: '.values-list li:nth-child(4) strong', key: 'values_values' },
    { selector: '.values-list li:nth-child(4) p', key: 'values_values_text' },

    // Infrastructure
    { selector: '.infrastructure-section .section-subtitle', key: 'infra_subtitle' },
    { selector: '.infrastructure-section .section-title', key: 'infra_title' },
    { selector: '.infra-desc', key: 'infra_desc' },

    // Location
    { selector: '#contato h3', key: 'location_hospital_name' },
    { selector: '#contato .contact-item:nth-child(1) h4', key: 'location_address_label' },
    { selector: '#contato .contact-item:nth-child(2) h4', key: 'location_phone_label' },
    { selector: '#contato .contact-item:nth-child(3) h4', key: 'location_email_label' },

    // Footer
    { selector: '.footer-desc', key: 'footer_desc' },
    { selector: '.footer h3:nth-of-type(1)', key: 'footer_quick_links' },
    { selector: '.footer h3:nth-of-type(2)', key: 'footer_contact' },
    { selector: '.footer h3:nth-of-type(3)', key: 'footer_hours' },
];

i18nMappings.forEach(mapping => {
    const element = document.querySelector(mapping.selector);
    if (element) {
        element.setAttribute('data-i18n', mapping.key);
        console.log(`Added data-i18n="${mapping.key}" to`, element);
    } else {
        console.warn(`Element not found for selector: ${mapping.selector}`);
    }
});

console.log('Finished adding data-i18n attributes!');
