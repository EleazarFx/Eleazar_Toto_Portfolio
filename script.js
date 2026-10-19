const projects = [
    {
        title: "AI Assisted Job Search and Recommendation Platform",
        category: "Full-stack web app",
        summary: "A job discovery system with personalized recommendations, employer verification, and an admin dashboard.",
        description: "A role-based job platform concept with candidate recommendations, employer verification, and admin monitoring. The final case study can include the real stack, user roles, recommendation logic, screenshots, and measurable outcomes.",
        tags: ["Django", "AI", "Dashboard"],
        images: ["images/project-images/job-search.png"],
        links: [
            { label: "GitHub", url: "https://github.com/EleazarFx/job_recommender_platform.git" },
            /*{ label: "Live Demo", url: "#", secondary: true }*/
        ]
    },


    
    {
        title: "Responsive website registration form",
        category: "website frontend",
        summary: "A university redesigned form",
        description: "This is a redesigned registration form for DMI University. This form has improved styling and flexible on different screen sizes such as smartphones, Desktop,and Tablet phone.",
        tags: ["Html", "Css", "JavaScript"],
        images: ["images/project-images/dmi-form.png"],
        links: [
            { label: "GitHub", url: "https://github.com/EleazarFx/Dmi-form.git" },
            { label: "Live Demo", url: "https://eleazarfx.github.io/Dmi-form/" }
        ]
    },

    
    

    {
        title: "Machine learning system for detecting SMS scams",
        category: "Machine Learning",
        summary: " A machine learning system for detecting SMS scams in Chichewa and Malawian English.",

        description: "A machine learning system for detecting SMS scams in Chichewa and Malawian English, tuned for the local mobile money fraud landscape (Airtel Money, TNM Mpamba, fake NGO relief, miracle money cults, and transporter/parcel scams. Mobile phone scams are one of the fastest-growing forms of fraud in Malawi. Every day, thousands of Malawians receive SMS messages claiming they have: *Won a prize from (Premier Bet, Premier Lotto, or FESA), *Been selected to receive MK 75,000 from JB Foundation / Mtukula Pakhomo, *A parcel held at a border(ndine transporter, katundu wa m'bale wanu…) that requires a transport fee, *A blocked Airtel Money / TNM Mpamba account that must be unblocked by calling a number, *An invitation to a Miracle Money satanic church promising millions. Most of these messages arrive in Chichewa, English, or mixed (Chichewa & English). This project builds on a mixed dataset and trains a supervised classifier on it.",

        tags: ["Python", "HTML", "CSS"],
        images: ["images/project-images/malawi-sms-scam-detector.png"],
        links: [
            { label: "GitHub", url: "https://github.com/EleazarFx/malawi-sms-scam-detector.git"}
        ]
    },


    {
        title: "Malawi Household Electricity Predictor",
        category: "Machine Learning",
        summary: "Unsupervised learning to discover household electricity archetypes + supervised forecasting of next-hour consumption.",

        description: "Malawi has one of the lowest electrification rates in the world (~11% grid-connected). As the country races toward universal access, ESCOM needs to understand who its customers actually are — not just urban vs rural, but behavioral archetypes that matter for grid planning, tariff design, and demand forecasting. This project: *Simulates 200 realistic Malawian households using a bottom - up appliance model, *Calibrates simulated consumption to real ESCOM targets(rural 47 kWh / mo, urban 160 kWh / mo), *Discovers 4 household archetypes(evening_peak_rural, high_use_urban, spiky_low, flat_daytime) using K - Means clustering on 1.75M hourly records, *Predicts next - hour consumption  using a RandomForest - showing that cluster labels improve prediction, *Serves everything through a live web dashboard built with FastAPI. Headline result: *Adding unsupervised cluster labels to the prediction model improved MAE by 1.9 % and R² by 11.4 % relative — showing behavioral archetypes carry signal beyond raw time - series features.",


        tags: ["Python", "HTML", "CSS"],
        images: ["images/project-images/malawi-power-predictor.png"],
        links: [
            { label: "GitHub", url: "https://github.com/EleazarFx/malawi-power-predictor.git" }
        ]
    },




    /*
    {
        title: "Personal Finance Tracker",
        category: "Web application",
        summary: "A budgeting app with expense categories, summaries, charts, and monthly goals.",
        description: "A personal budgeting interface for recording expenses, reviewing categories, and tracking monthly goals. Later, include authentication, charts, database structure, and screenshots.",
        tags: ["HTML", "CSS", "JavaScript"],
        images: [placeholderImage("Finance Tracker", "#17201b", "#73c48f"), "images/Eleazar in Black.png", "images/project-admin-dashboard.jpg"],
        links: [
            { label: "GitHub", url: "#" }
        ]
    },
    {
        title: "Restaurant Ordering Website",
        category: "Responsive website",
        summary: "A responsive ordering interface with menus, cart flow, and customer checkout.",
        description: "A responsive food ordering website concept with menu browsing, cart review, and checkout flow. Add real customer pages, admin screens, and ordering screenshots when available.",
        tags: ["UI Design", "Checkout", "Responsive"],
        images: [placeholderImage("Food Ordering", "#261d16", "#d7aa69"), "images/project-admin-dashboard.jpg", "images/github.png"],
        links: [
            { label: "Live Site", url: "#" }
        ]
    },
    {
        title: "Learning Management Dashboard",
        category: "Education platform",
        summary: "A learning portal concept for courses, student progress, quizzes, and certificates.",
        description: "An education dashboard concept for courses, student progress, quizzes, and certificates. You can later add lesson screens, assessment pages, admin tools, and certificate samples.",
        tags: ["Dashboard", "Education", "UX"],
        images: [placeholderImage("LMS Dashboard", "#171b2c", "#91a8ff"), "images/Eleazar in Black.png", "images/project-admin-dashboard.jpg"],
        links: [
            { label: "GitHub", url: "#" },
            { label: "Case Study", url: "#", secondary: true }
        ]
    },
    {
        title: "Real Estate Listing Platform",
        category: "Marketplace",
        summary: "A property listing site with search filters, property detail pages, and agent contact flows.",
        description: "A property marketplace concept with listing search, detail pages, saved properties, and agent contact flows. Later, include maps, inquiry tracking, and listing management screens.",
        tags: ["Search", "Listings", "Forms"],
        images: [placeholderImage("Real Estate", "#1b2427", "#9fc5c9"), "images/project-admin-dashboard.jpg", "images/github.png"],
        links: [
            { label: "Live Demo", url: "#" }
        ]
    },
    {
        title: "Health Appointment Scheduler",
        category: "Healthcare app",
        summary: "A scheduling workflow for patients, doctors, appointment slots, and reminders.",
        description: "A healthcare scheduling workflow for patients, doctors, appointment slots, and reminders. Replace with real booking, calendar, patient dashboard, and admin screenshots.",
        tags: ["Scheduling", "Forms", "Admin"],
        images: [placeholderImage("Health Scheduler", "#15201f", "#75d0bd"), "images/Eleazar in Black.png", "images/project-admin-dashboard.jpg"],
        links: [
            { label: "GitHub", url: "#" }
        ]
    },
    {
        title: "Portfolio Website Redesign",
        category: "Personal brand",
        summary: "A modern portfolio concept focused on projects, skills, contact, and storytelling.",
        description: "A living case study for this portfolio redesign, covering content hierarchy, responsive behavior, project presentation, and future improvements.",
        tags: ["HTML", "CSS", "JavaScript"],
        images: [placeholderImage("Portfolio", "#211a1a", "#b74b4b"), "images/project-admin-dashboard.jpg", "images/Eleazar in Black.png"],
        links: [
            { label: "GitHub", url: "#" }
        ]
    },
    {
        title: "Event Ticketing System",
        category: "Web app",
        summary: "A ticketing flow with event pages, seat categories, QR tickets, and attendee reports.",
        description: "An event ticketing system concept with event pages, ticket categories, QR ticket ideas, and organizer reporting screens.",
        tags: ["Payments", "QR", "Events"],
        images: [placeholderImage("Ticketing", "#231b26", "#d29adf"), "images/project-admin-dashboard.jpg", "images/github.png"],
        links: [
            { label: "Case Study", url: "#" }
        ]
    },
    {
        title: "Customer Support Helpdesk",
        category: "SaaS dashboard",
        summary: "A helpdesk interface with tickets, priorities, team assignment, and response metrics.",
        description: "A support dashboard concept for managing customer tickets, priorities, assignments, and response metrics across a team.",
        tags: ["SaaS", "Dashboard", "Support"],
        images: [placeholderImage("Helpdesk", "#161d25", "#74a8d8"), "images/Eleazar in Black.png", "images/project-admin-dashboard.jpg"],
        links: [
            { label: "GitHub", url: "#" }
        ]
    }

    */


];

const menuButton = document.querySelector(".Menu_Icon");
const siteNav = document.querySelector("nav");

if (siteNav) {
    const currentPageName = window.location.pathname.split("/").pop() || "index.html";

    siteNav.querySelectorAll("a").forEach(link => {
        const linkPageName = link.getAttribute("href");
        link.classList.toggle("active", linkPageName === currentPageName);
    });
}

if (menuButton && siteNav) {
    menuButton.addEventListener("click", () => {
        siteNav.classList.toggle("active");
    });

    siteNav.addEventListener("click", event => {
        if (event.target.closest("a")) {
            siteNav.classList.remove("active");
        }
    });
}



const projectsPerPage = 10;
let currentPage = 1;
let currentSlide = 0;
let sliderTimer;

const featuredSlider = document.getElementById("featuredSlider");
const featuredDots = document.getElementById("featuredDots");
const projectGrid = document.getElementById("projectGrid");
const pageIndicator = document.getElementById("pageIndicator");
const projectCount = document.getElementById("projectCount");
const projectModal = document.getElementById("projectModal");

if (featuredSlider && projectGrid) {
    renderSlider();
    renderProjects();
    bindProjectControls();
    startSlider();
}

function placeholderImage(title, background, accent) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
            <rect width="1200" height="750" fill="${background}"/>
            <rect x="90" y="95" width="1020" height="560" rx="34" fill="#f7f7f7"/>
            <rect x="130" y="145" width="360" height="48" rx="12" fill="${accent}"/>
            <rect x="130" y="235" width="250" height="150" rx="18" fill="${accent}" opacity="0.92"/>
            <rect x="415" y="235" width="250" height="150" rx="18" fill="#202020" opacity="0.9"/>
            <rect x="700" y="235" width="250" height="150" rx="18" fill="${accent}" opacity="0.62"/>
            <rect x="130" y="430" width="820" height="24" rx="12" fill="#d0d0d0"/>
            <rect x="130" y="485" width="680" height="24" rx="12" fill="#d0d0d0"/>
            <text x="130" y="590" fill="#202020" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="700">${title}</text>
        </svg>`;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderSlider() {
    const featuredProjects = projects.slice(0, 3);

    featuredSlider.innerHTML = featuredProjects.map((project, index) => `
        <article class="featured_slide">
            <div class="featured_slide_inner">
                <img src="${project.images[0]}" alt="${project.title} preview" loading="lazy">
                <div class="featured_slide_content">
                    <span class="project_category">${project.category}</span>
                    <div class="project_tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
                    <h2>${project.title}</h2>
                    <p>${project.summary}</p>
                    <button class="primary_button" type="button" data-project-index="${index}">View case study</button>
                </div>
            </div>
        </article>
    `).join("");

    featuredDots.innerHTML = featuredProjects.map((_, index) => `
        <button type="button" aria-label="Show featured project ${index + 1}" data-slide-index="${index}"></button>
    `).join("");

    updateSlider();
}

function updateSlider() {
    const totalSlides = Math.min(3, projects.length);
    featuredSlider.style.transform = `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll("[data-slide-index]").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
}

function startSlider() {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(() => {
        currentSlide = (currentSlide + 1) % Math.min(3, projects.length);
        updateSlider();
    }, 5000);
}

function renderProjects() {
    const start = (currentPage - 1) * projectsPerPage;
    const visibleProjects = projects.slice(start, start + projectsPerPage);
    const totalPages = getTotalPages();

    projectGrid.innerHTML = visibleProjects.map((project, index) => {
        const projectIndex = start + index;
        return `
            <button class="project_card" type="button" data-project-index="${projectIndex}">
                <span class="project_image_wrap">
                    <img src="${project.images[0]}" alt="${project.title} thumbnail" loading="lazy">
                </span>
                <div class="project_card_content">
                    <span class="project_category">${project.category}</span>
                    <div class="project_tags">${project.tags.slice(0, 2).map(tag => `<span>${tag}</span>`).join("")}</div>
                    <h3>${project.title}</h3>
                    <p>${project.summary}</p>
                    <span class="project_card_link">View case study</span>
                </div>
            </button>
        `;
    }).join("");

    pageIndicator.textContent = currentPage;
    projectCount.textContent = `${projects.length} projects`;
    document.getElementById("firstPage").disabled = currentPage === 1;
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage === totalPages;
    document.getElementById("lastPage").disabled = currentPage === totalPages;
}

function bindProjectControls() {
    document.querySelector(".slider_prev").addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + Math.min(3, projects.length)) % Math.min(3, projects.length);
        updateSlider();
        startSlider();
    });

    document.querySelector(".slider_next").addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % Math.min(3, projects.length);
        updateSlider();
        startSlider();
    });

    featuredDots.addEventListener("click", event => {
        const dot = event.target.closest("[data-slide-index]");
        if (!dot) return;
        currentSlide = Number(dot.dataset.slideIndex);
        updateSlider();
        startSlider();
    });

    document.addEventListener("click", event => {
        const projectButton = event.target.closest("[data-project-index]");
        if (projectButton) {
            openProject(Number(projectButton.dataset.projectIndex));
        }
    });

    document.getElementById("firstPage").addEventListener("click", () => goToPage(1));
    document.getElementById("prevPage").addEventListener("click", () => goToPage(currentPage - 1));
    document.getElementById("nextPage").addEventListener("click", () => goToPage(currentPage + 1));
    document.getElementById("lastPage").addEventListener("click", () => goToPage(getTotalPages()));

    projectModal.addEventListener("click", event => {
        if (event.target.matches("[data-close-modal]")) {
            closeProject();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && projectModal.classList.contains("open")) {
            closeProject();
        }
    });
}

function goToPage(page) {
    currentPage = Math.min(Math.max(page, 1), getTotalPages());
    renderProjects();
    projectGrid.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getTotalPages() {
    return Math.ceil(projects.length / projectsPerPage);
}

function openProject(projectIndex) {
    const project = projects[projectIndex];
    const modalHero = document.getElementById("modalHero");
    const modalThumbnails = document.getElementById("modalThumbnails");

    modalHero.src = project.images[0];
    modalHero.alt = `${project.title} screenshot`;
    document.getElementById("modalCategory").textContent = project.category;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalDescription").textContent = project.description;
    document.getElementById("modalMeta").innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
    document.getElementById("modalLinks").innerHTML = project.links.map(link => `
        <a href="${link.url}" class="${link.secondary ? "secondary_link" : ""}" target="_blank" rel="noopener">${link.label}</a>
    `).join("");

    modalThumbnails.innerHTML = project.images.map((image, index) => `
        <button class="${index === 0 ? "active" : ""}" type="button" data-image-index="${index}">
            <img src="${image}" alt="${project.title} screenshot ${index + 1}" loading="lazy">
        </button>
    `).join("");

    modalThumbnails.onclick = event => {
        const thumbnail = event.target.closest("[data-image-index]");
        if (!thumbnail) return;

        const imageIndex = Number(thumbnail.dataset.imageIndex);
        modalHero.src = project.images[imageIndex];
        modalThumbnails.querySelectorAll("button").forEach(button => button.classList.remove("active"));
        thumbnail.classList.add("active");
    };

    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal_locked");
}

function closeProject() {
    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal_locked");
}
