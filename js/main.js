/* Climax Hosiery - Production Website Styles */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --primary-red: #D32F2F;
  --primary-red-light: #FF5722;
  --primary-red-dark: #B71C1C;
  --black: #000000;
  --white: #FFFFFF;
  --neutral-100: #F5F5F5;
  --neutral-200: #EFEFEF;
  --neutral-300: #E0E0E0;
  --neutral-600: #757575;
  --neutral-800: #424242;
  --neutral-900: #212121;
  
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  
  --spacing-1: 0.5rem;
  --spacing-2: 1rem;
  --spacing-3: 1.5rem;
  --spacing-4: 2rem;
  --spacing-5: 2.5rem;
  --spacing-6: 3rem;
  --spacing-8: 4rem;
  --spacing-10: 5rem;
  --spacing-12: 6rem;
  
  --max-width: 1200px;
  --border-radius: 12px;
  --border-radius-lg: 18px;
  
  --shadow-sm: 0 2px 4px rgba(211, 47, 47, 0.1);
  --shadow-md: 0 4px 12px rgba(211, 47, 47, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 24px rgba(211, 47, 47, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 16px 48px rgba(211, 47, 47, 0.25), 0 8px 16px rgba(0, 0, 0, 0.15);
  
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

*{margin:0;padding:0;box-sizing:border-box}

html{scroll-behavior:smooth}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--neutral-800);
  background-color: var(--white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
  color: var(--neutral-900);
  margin-bottom: var(--spacing-2);
}

h1 { font-size: 3rem; font-weight: 700; }
h2 { font-size: 2.5rem; }
h3 { font-size: 2rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

p {
  margin-bottom: var(--spacing-2);
  line-height: 1.6;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-3);
}

.grid {
  display: grid;
  gap: var(--spacing-4);
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

.flex {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.flex-col {
  flex-direction: column;
}

.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.items-center { align-items: center; }
.text-center { text-align: center; }

.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--neutral-200);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: var(--transition);
}

.header.scrolled {
  background: var(--white);
  box-shadow: var(--shadow-md);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-2) 0;
}

.logo {
  height: 60px;
  width: auto;
  transition: var(--transition);
}

.nav {
  display: flex;
  gap: var(--spacing-4);
}

.nav-link {
  color: var(--neutral-800);
  text-decoration: none;
  font-weight: 500;
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: 6px;
  transition: var(--transition);
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-red);
  background: rgba(211, 47, 47, 0.1);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary-red);
  transform: translateX(-50%);
  transition: var(--transition);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav {
  display: flex;
  gap: var(--spacing-4);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.nav.open {
  max-height: 300px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-red) transparent;
}

.nav.open::-webkit-scrollbar {
  width: 4px;
}

.nav.open::-webkit-scrollbar-thumb {
  background: var(--primary-red);
  border-radius: 2px;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--neutral-800);
  cursor: pointer;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2) var(--spacing-4);
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--primary-red);
  color: var(--white);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  background: var(--primary-red-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-outline {
  background: transparent;
  color: var(--primary-red);
  border-color: var(--primary-red);
}

.btn-outline:hover {
  background: var(--primary-red);
  color: var(--white);
  transform: translateY(-2px);
}

.btn-large {
  padding: var(--spacing-3) var(--spacing-6);
  font-size: 1.125rem;
}

.card {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  cursor: pointer;
}

.card:hover{transform:translateY(-8px) scale(1.02);box-shadow:0 16px 32px rgba(0,0,0,0.2);z-index:10}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
  opacity: 0;
  transition: var(--transition);
  z-index: 1;
}

.card:hover::before{opacity:1}

.card-content{position:relative;z-index:2;transition:var(--transition)}
.card:hover .card-content{transform:translateY(-2px)}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-3);
  transition: var(--transition);
  position: relative;
  z-index: 2;
}

.card:hover .card-image{transform:scale(1.05);filter:brightness(1.1) contrast(1.1)}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--neutral-900);
  margin-bottom: var(--spacing-1);
}

.card-text {
  color: var(--neutral-600);
  font-size: 0.9rem;
  transition: var(--transition);
  position: relative;
  z-index: 2;
}

.card:hover .card-text{color:var(--neutral-800);transform:translateY(-1px)}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, var(--neutral-100) 0%, var(--white) 100%);
  padding-top: 80px;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: var(--spacing-3);
  background: linear-gradient(135deg, var(--neutral-900), var(--primary-red));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-tagline {
  font-size: 1.5rem;
  color: var(--neutral-600);
  margin-bottom: var(--spacing-6);
  font-weight: 300;
}

.hero-cta {
  display: flex;
  gap: var(--spacing-3);
  justify-content: center;
  flex-wrap: wrap;
}

.section {
  padding: var(--spacing-10) 0;
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-8);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -var(--spacing-2);
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: var(--primary-red);
  border-radius: 2px;
}

.stats {
  background: var(--primary-red);
  color: var(--white);
  padding: var(--spacing-8) 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
  text-align: center;
}

.stat-item h3 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: var(--spacing-1);
}

.stat-item p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.featured-products {
  background: var(--neutral-100);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-4);
  margin-top: var(--spacing-6);
}

.markets-marquee {
  background: var(--neutral-900);
  color: var(--white);
  padding: var(--spacing-4) 0;
  overflow: hidden;
}

.marquee-content {
  display: flex;
  animation: marquee 30s linear infinite;
  gap: var(--spacing-8);
}

.marquee-item {
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: 500;
}

@keyframes marquee {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}

.footer {
  background: var(--neutral-900);
  color: var(--white);
  padding: var(--spacing-8) 0 var(--spacing-4);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-6);
}

.footer-section h4 {
  color: var(--white);
  margin-bottom: var(--spacing-3);
  font-size: 1.2rem;
}

.footer-section p,
.footer-section a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  line-height: 1.8;
}

.footer-section a:hover {
  color: var(--primary-red-light);
}

.footer-bottom {
  border-top: 1px solid var(--neutral-600);
  padding-top: var(--spacing-4);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

.form-group {
  margin-bottom: var(--spacing-3);
}

.form-label {
  display: block;
  margin-bottom: var(--spacing-1);
  font-weight: 500;
  color: var(--neutral-800);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: var(--spacing-2);
  border: 2px solid var(--neutral-300);
  border-radius: var(--border-radius);
  font-family: var(--font-body);
  font-size: 1rem;
  transition: var(--transition);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-red);
  box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.timeline {
  position: relative;
  padding-left: var(--spacing-6);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary-red);
}

.timeline-item {
  position: relative;
  padding-bottom: var(--spacing-6);
  cursor: pointer;
  transition: var(--transition);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -26px;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-red);
  border: 3px solid var(--white);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.timeline-item:hover::before{background:var(--black);transform:scale(1.2)}

.timeline-content {
  background: var(--white);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  margin-left: var(--spacing-3);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.timeline-item:hover .timeline-content{transform:translateY(-4px) scale(1.02);box-shadow:0 12px 24px rgba(0,0,0,0.2)}

.timeline-content h4,.timeline-content p{position:relative;z-index:2;transition:var(--transition)}

.timeline-item:hover .timeline-content h4{color:var(--black)}
.timeline-item:hover .timeline-content p{color:var(--neutral-800)}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
  margin-top: var(--spacing-6);
}

.process-step {
  text-align: center;
  padding: var(--spacing-4);
  background: var(--white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  position: relative;
}

.process-step::before {
  content: attr(data-step);
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: var(--primary-red);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
}

.process-step:hover{transform:translateY(-8px);box-shadow:var(--shadow-lg)}

.process-icon {
  font-size: 3rem;
  color: var(--primary-red);
  margin-bottom: var(--spacing-2);
  transition: var(--transition);
  position: relative;
  z-index: 2;
}

.process-step:hover .process-icon{color:var(--black);transform:scale(1.1) translateY(-2px)}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-6);
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--spacing-2) var(--spacing-4);
  background: var(--white);
  border: 2px solid var(--neutral-300);
  border-radius: 30px;
  color: var(--neutral-600);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--primary-red);
  border-color: var(--primary-red);
  color: var(--white);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-3);
  margin-top: var(--spacing-4);
}

.gallery-item {
  aspect-ratio: 1;
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  box-shadow: var(--shadow-sm);
}

.gallery-item:hover{transform:scale(1.05) translateY(-2px);box-shadow:0 8px 16px rgba(0,0,0,0.15);z-index:10}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
  position: relative;
  z-index: 1;
}

.gallery-item:hover img {
  transform: scale(1.1);
  filter: brightness(1.05) contrast(1.05);
}

.contact-form {
  background: var(--white);
  padding: var(--spacing-6);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3);
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

.loader {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--white);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  :root {
    --spacing-10: 3rem;
    --spacing-12: 4rem;
  }
  
  .container {
    padding: 0 var(--spacing-2);
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-tagline {
    font-size: 1.25rem;
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    padding: var(--spacing-3);
    box-shadow: var(--shadow-lg);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    max-height: 60vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: var(--primary-red) var(--neutral-200);
  }
  
  .nav.open {
    display: flex;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.5rem; }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .stat-item h3 {
    font-size: 2.2rem;
  }
}

@media print {
  .header,.footer,.btn{display:none}
  
  .hero{min-height:auto;padding:var(--spacing-4) 0}
  
  *{box-shadow:none!important}
}

@media (prefers-reduced-motion: reduce) {
  *{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important}
  
  .marquee-content{animation:none}
}

.btn:focus,
.nav-link:focus,
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: 3px solid var(--primary-red);
  outline-offset: 2px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.text-red { color: var(--primary-red); }
.text-gray { color: var(--neutral-600); }
.bg-red { background-color: var(--primary-red); }
.bg-gray { background-color: var(--neutral-100); }

.mt-2 { margin-top: var(--spacing-2); }
.mt-4 { margin-top: var(--spacing-4); }
.mb-4 { margin-bottom: var(--spacing-4); }
.mb-6 { margin-bottom: var(--spacing-6); }

.badge{display:inline-block;padding:4px 8px;border-radius:12px;font-size:0.75rem;font-weight:500}
.bg-red{background:var(--primary-red);color:var(--white)}
.bg-gray{background:var(--neutral-300);color:var(--neutral-800)}
.ml-2{margin-left:8px}
.mt-4{margin-top:var(--spacing-4)}
.opacity-80 { opacity: 0.8; }
.opacity-60 { opacity: 0.6; }