import { createContext, useState } from "react";

export const LanguageContext = createContext();

const initialLanguage = "en";
const translations = {
    en: {
        navbarHome: "Home",
        navbarMyself: "Myself",
        navbarProjects: "Projects",
        navbarSkills: "Skills",
        navbarButtonCV: "Resume",
        navbarButtonContact: "Contact me",
        navbarWTC: "Want to connect?",
        headerH1: "Hi everyone, I'm Franco!",
        headerH2: "Full-Stack Developer based in Buenos Aires, Argentina",
        headerSection: "Welcome to my portfolio",
        myselfH1: "I'm searching for new challenges & experiences in my very first job in IT",
        myselfP: "I'm interested in working in technology to collaborate on projects with a high social impact where I can really solve people's needs, contributing with all my knowledge in development and design, and fulfilling my dream of ideating and creating digital products in the real world.",
        myselfP2: "See my experience and formation in detail",
        myselfSection: "This is me",
        projectsSection: "Projects",
        projectsH1: "My works so far",
        projectsResponsive: "Responsive design",
        projectsNotResponsive: "Working on Responsive design",
        projectsAug: "Aug",
        skillsSection: "Skills",
        skillsH1: "This is my tech stack",
        skillsH2: "And currently learning",
        skillsH3: "Other technologies & tools",
        skillsSh1: "Coding workspace",
        skillsSh2: "Design phase",
        skillsSh3: "Organization & Follow-up",
        contactSection: "Contact me",
        contactH1: "Get in touch!",
        contactP: "Call me, write me an e-mail or a WhatsApp message, or just connect and chat with me in Linkedin.",
        contactPhone: "Phone number",
        footerCreated: "This portfolio was created with",
        footerThanks: "Thanks for watching!",
        footerUpdate: "Last update:"
    },
    es: {
        navbarHome: "Inicio",
        navbarMyself: "Sobre mi",
        navbarProjects: "Proyectos",
        navbarSkills: "Skills",
        navbarButtonCV: "Currículum",
        navbarButtonContact: "Contactame",
        navbarWTC: "Quieres conectar?",
        headerH1: "Hola a todos, soy Franco!",
        headerH2: "Desarrollador Full-Stack de Buenos Aires, Argentina",
        headerSection: "Bienvenidos a mi portfolio",
        myselfH1: "Estoy buscando un primer trabajo en IT lleno de desafíos y experiencias",
        myselfP: "Me interesa trabajar en tecnología para colaborar en proyectos de alto impacto social donde realmente pueda resolver las necesidades de las personas, aportando todo mi conocimiento en desarrollo y diseño, cumpliendo así mi sueño de idear y crear productos digitales en el mundo real.",
        myselfP2: "Mira mi experiencia y formación en detalle",
        myselfSection: "Sobre mi",
        projectsSection: "Proyectos",
        projectsH1: "Mis trabajos hasta ahora",
        projectsResponsive: "Diseño responsive",
        projectsNotResponsive: "Trabajando en Diseño responsive",
        projectsAug: "Ago",
        skillsSection: "Skills",
        skillsH1: "Este es mi stack tecnológico",
        skillsH2: "Hoy estoy aprendiendo...",
        skillsH3: "Otras tecnologías y herramientas",
        skillsSh1: "Espacio de trabajo",
        skillsSh2: "Fase de diseño",
        skillsSh3: "Organización y seguimiento",
        contactSection: "Contactame",
        contactH1: "Comunicate conmigo!",
        contactP: "Llamame, escribeme un e-mail o WhatsApp, o simplemente conectemos y hablemos por Linkedin.",
        contactPhone: "Nro. de teléfono",
        footerCreated: "Este portfolio fue creado con",
        footerThanks: "Gracias por mirar!",
        footerUpdate: "Última actualización:"
    }
}

export default function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    function handleLanguage(e) {
        if(e.target.value === "en") {
            setLanguage("en");
            setTexts(translations.en);
        } else {
            setLanguage("es");
            setTexts(translations.es);
        }
    }

    const data = {texts, handleLanguage};

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}