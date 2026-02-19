// script.js - BY PHONE PROFESSIONAL EDITION + AI ASSISTANT

class ByPhoneApp {
    constructor() {
        this.currentFilter = 'all';
        this.products = [];
        this.currentPage = 1;
        this.productsPerPage = 6;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupCurrentYear();
            this.setupNavigation();
            this.setupProducts();
            this.setupFilters();
            this.setupForm();
            this.setupAnimations();
            this.setupWhatsAppButton();
            this.setupPerformanceOptimizations();
            this.initializeAIAssistant();
        });
    }

    // ==================== CONFIGURACIÓN INICIAL ====================
    
    setupCurrentYear() {
        const yearElement = document.getElementById('year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    setupPerformanceOptimizations() {
        this.preloadCriticalImages();
        this.setupLazyLoading();
        this.setupPerformanceMonitoring();
    }

    preloadCriticalImages() {
        const criticalImages = [
            'assets/logo.png',
            'assets/iphone17.jpg',
            'assets/samsung_s24.jpg',
            'assets/xiaomi_14t.jpg'
        ];

        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const lazyImageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        lazyImageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                lazyImageObserver.observe(img);
            });
        }
    }

    setupPerformanceMonitoring() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    console.log(`${entry.name}: ${entry.value}`);
                });
            });

            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        }
    }

    // ==================== NAVEGACIÓN MEJORADA ====================

    setupNavigation() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupActiveNavLinks();
    }

    setupMobileMenu() {
        const menuBtn = document.getElementById('menuBtn');
        const mobileNav = document.getElementById('mobileNav');

        if (menuBtn && mobileNav) {
            menuBtn.addEventListener('click', () => {
                const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
                this.toggleMobileMenu(!isExpanded, menuBtn, mobileNav);
            });

            document.addEventListener('click', (e) => {
                if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
                    this.toggleMobileMenu(false, menuBtn, mobileNav);
                }
            });

            mobileNav.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    this.toggleMobileMenu(false, menuBtn, mobileNav);
                });
            });

            menuBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.toggleMobileMenu(false, menuBtn, mobileNav);
                }
            });
        }
    }

    toggleMobileMenu(show, menuBtn, mobileNav) {
        if (show) {
            mobileNav.style.display = 'flex';
            mobileNav.setAttribute('aria-hidden', 'false');
            menuBtn.setAttribute('aria-expanded', 'true');
            menuBtn.classList.add('active');
        } else {
            mobileNav.style.display = 'none';
            mobileNav.setAttribute('aria-hidden', 'true');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.classList.remove('active');
        }
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    history.pushState(null, null, anchor.getAttribute('href'));
                }
            });
        });
    }

    setupActiveNavLinks() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-80px 0px -20% 0px'
        });

        sections.forEach(section => observer.observe(section));
    }

    // ==================== SISTEMA DE PRODUCTOS ====================

    setupProducts() {
        this.products = [
            {
                id: 1,
                brand: 'iphone',
                name: 'iPhone 17 Pro Max',
                description: 'Super Retina XDR • A19 Pro • 256GB',
                price: '$7.500.000 COP',
                image: 'assets/iphone17.jpg',
                features: ['Pantalla 6.9"', 'Cámara 48MP', '5G', 'Face ID'],
                inStock: true
            },
            {
                id: 2,
                brand: 'samsung',
                name: 'Samsung Galaxy S24 Ultra',
                description: 'Dynamic AMOLED • 12GB • 512GB',
                price: '$6.200.000 COP',
                image: 'assets/samsung_s24.jpg',
                features: ['S-Pen incluido', 'Cámara 200MP', 'Snapdragon 8 Gen 3'],
                inStock: true
            },
            {
                id: 3,
                brand: 'xiaomi',
                name: 'Xiaomi 14T Pro',
                description: 'Snapdragon 8 Gen 3 • 16GB • 512GB',
                price: '$3.800.000 COP',
                image: 'assets/xiaomi_14t.jpg',
                features: ['Pantalla AMOLED', 'Carga 120W', 'Leica Camera'],
                inStock: true
            },
            {
                id: 4,
                brand: 'iphone',
                name: 'iPhone 16 Pro',
                description: 'Super Retina XDR • A18 Pro • 128GB',
                price: '$5.800.000 COP',
                image: 'assets/iphone16.jpg',
                features: ['Pantalla 6.1"', 'Cámara 48MP', '5G', 'Face ID'],
                inStock: false
            },
            {
                id: 5,
                brand: 'samsung',
                name: 'Samsung Galaxy Z Fold6',
                description: 'Foldable AMOLED • 16GB • 1TB',
                price: '$12.000.000 COP',
                image: 'assets/samsung_fold.jpg',
                features: ['Pantalla plegable', 'S-Pen', 'Cámara triple'],
                inStock: true
            },
            {
                id: 6,
                brand: 'xiaomi',
                name: 'Xiaomi 13 Lite',
                description: 'AMOLED • 8GB • 256GB',
                price: '$2.200.000 COP',
                image: 'assets/xiaomi_13lite.jpg',
                features: ['Diseño delgado', 'Cámara selfie dual', 'Carga rápida'],
                inStock: true
            }
        ];

        this.renderProducts();
        this.setupLoadMore();
    }

    renderProducts(filteredProducts = null) {
        const catalog = document.getElementById('catalog');
        if (!catalog) return;

        const productsToRender = filteredProducts || this.getPaginatedProducts();
        
        catalog.innerHTML = productsToRender.map(product => this.createProductCard(product)).join('');
        this.setupProductInteractions();
    }

    createProductCard(product) {
        const featuresHTML = product.features.map(feature => 
            `<span class="product-feature">${feature}</span>`
        ).join('');

        return `
            <div class="card" data-brand="${product.brand}" data-id="${product.id}" role="listitem">
                <div class="product-badge ${!product.inStock ? 'out-of-stock' : 'in-stock'}">
                    ${product.inStock ? '🟢 Disponible' : '🔴 Agotado'}
                </div>
                <img src="${product.image}" 
                     alt="${product.name} - ${product.description}" 
                     class="product-img"
                     loading="lazy"
                     onerror="this.src='assets/placeholder.jpg'">
                <div class="info">
                    <div class="title">${product.name}</div>
                    <div class="desc">${product.description}</div>
                    <div class="product-features">${featuresHTML}</div>
                    <div class="price">${product.price}</div>
                </div>
                <div class="actions">
                    <button class="btn ghost consult-btn" 
                            data-product="${product.name}"
                            ${!product.inStock ? 'disabled' : ''}
                            aria-label="Consultar sobre ${product.name}">
                        <span class="btn-icon">💬</span>
                        Consultar
                    </button>
                    ${product.inStock ? `
                    <button class="btn primary buy-btn" 
                            data-product="${product.name}"
                            aria-label="Comprar ${product.name}">
                        <span class="btn-icon">🛒</span>
                        Comprar
                    </button>
                    ` : ''}
                </div>
            </div>
        `;
    }

    setupProductInteractions() {
        document.querySelectorAll('.consult-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productName = e.target.closest('.consult-btn').dataset.product;
                this.openProductConsultation(productName);
            });
        });

        document.querySelectorAll('.buy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productName = e.target.closest('.buy-btn').dataset.product;
                this.openProductPurchase(productName);
            });
        });
    }

    openProductConsultation(productName) {
        const message = `Hola, me interesa obtener más información sobre: ${productName}`;
        const whatsappUrl = `https://wa.me/573103767574?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    openProductPurchase(productName) {
        const message = `Hola, quiero comprar el siguiente equipo: ${productName}`;
        const whatsappUrl = `https://wa.me/573103767574?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    // ==================== SISTEMA DE FILTROS ====================

    setupFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.applyFilter(filter, e.target);
            });
        });
    }

    applyFilter(filter, clickedButton) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        clickedButton.classList.add('active');

        this.currentFilter = filter;
        this.currentPage = 1;

        const filteredProducts = filter === 'all' 
            ? this.products 
            : this.products.filter(product => product.brand === filter);

        this.renderProducts(filteredProducts);
        this.animateFilterTransition();
    }

    animateFilterTransition() {
        const catalog = document.getElementById('catalog');
        catalog.style.opacity = '0';
        
        setTimeout(() => {
            catalog.style.opacity = '1';
            catalog.style.transition = 'opacity 0.3s ease';
        }, 50);
    }

    // ==================== PAGINACIÓN ====================

    setupLoadMore() {
        const loadMoreBtn = document.getElementById('loadMore');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreProducts();
            });
        }
    }

    getPaginatedProducts() {
        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        
        const filteredProducts = this.currentFilter === 'all' 
            ? this.products 
            : this.products.filter(product => product.brand === this.currentFilter);

        return filteredProducts.slice(0, endIndex);
    }

    loadMoreProducts() {
        this.currentPage++;
        const moreProducts = this.getPaginatedProducts();
        
        if (moreProducts.length >= this.products.length) {
            document.getElementById('loadMore').style.display = 'none';
        }
        
        this.renderProducts(moreProducts);
    }

    // ==================== FORMULARIO AVANZADO ====================

    setupForm() {
        const form = document.getElementById('consultaForm');
        if (!form) return;

        this.setupFormValidation(form);
        this.setupFormSubmission(form);
        this.setupCharacterCounter();
        this.setupConsultationTypeHandler();
    }

    setupFormValidation(form) {
        const fields = form.querySelectorAll('input, select, textarea');
        
        fields.forEach(field => {
            field.addEventListener('blur', () => {
                this.validateField(field);
            });

            field.addEventListener('input', () => {
                this.clearFieldError(field);
                this.updateWhatsAppLink();
            });

            if (field.hasAttribute('required')) {
                field.addEventListener('invalid', (e) => {
                    e.preventDefault();
                    this.validateField(field);
                });
            }
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';

        switch(field.type) {
            case 'text':
                if (!value && field.required) {
                    isValid = false;
                    message = 'Este campo es requerido';
                } else if (value.length < 2) {
                    isValid = false;
                    message = 'Mínimo 2 caracteres';
                }
                break;

            case 'tel':
                if (!value && field.required) {
                    isValid = false;
                    message = 'Teléfono requerido';
                } else if (value && !/^[\d\s\+\-\(\)]{10,}$/.test(value.replace(/\s/g, ''))) {
                    isValid = false;
                    message = 'Formato de teléfono inválido';
                }
                break;

            case 'email':
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    isValid = false;
                    message = 'Formato de email inválido';
                }
                break;

            case 'textarea':
                if (!value && field.required) {
                    isValid = false;
                    message = 'Este campo es requerido';
                } else if (value.length < 10) {
                    isValid = false;
                    message = 'Mínimo 10 caracteres';
                } else if (value.length > 500) {
                    isValid = false;
                    message = 'Máximo 500 caracteres';
                }
                break;

            case 'select-one':
                if (!value && field.required) {
                    isValid = false;
                    message = 'Selecciona una opción';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, message);
        } else {
            this.showFieldSuccess(field);
        }

        return isValid;
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        
        field.classList.add('error');
        field.classList.remove('success');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.setAttribute('role', 'alert');
        
        field.parentNode.appendChild(errorElement);
        field.focus();
    }

    showFieldSuccess(field) {
        this.clearFieldError(field);
        field.classList.remove('error');
        field.classList.add('success');
    }

    clearFieldError(field) {
        field.classList.remove('error', 'success');
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }

    setupCharacterCounter() {
        const messageField = document.getElementById('message');
        const charCounter = document.getElementById('charCount');

        if (messageField && charCounter) {
            messageField.addEventListener('input', () => {
                const length = messageField.value.length;
                charCounter.textContent = length;

                if (length > 450) {
                    charCounter.parentElement.classList.add('warning');
                } else {
                    charCounter.parentElement.classList.remove('warning');
                }

                if (length > 500) {
                    charCounter.parentElement.classList.add('error');
                } else {
                    charCounter.parentElement.classList.remove('error');
                }
            });
        }
    }

    setupConsultationTypeHandler() {
        const consultationType = document.getElementById('consultationType');
        if (consultationType) {
            consultationType.addEventListener('change', (e) => {
                this.updateFormBasedOnConsultationType(e.target.value);
            });
        }
    }

    updateFormBasedOnConsultationType(type) {
        // Lógica adicional basada en el tipo de consulta
        console.log('Tipo de consulta seleccionado:', type);
    }

    setupFormSubmission(form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (this.validateForm()) {
                await this.submitForm(form);
            }
        });
    }

    validateForm() {
        const form = document.getElementById('consultaForm');
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    async submitForm(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        try {
            submitBtn.innerHTML = '<div class="loading-spinner"></div> Enviando...';
            submitBtn.disabled = true;

            await this.simulateFormSubmission(form);
            this.showSuccessModal();
            form.reset();
            this.updateWhatsAppLink();

        } catch (error) {
            this.showNotification('Error al enviar el formulario. Por favor, inténtalo de nuevo.', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    async simulateFormSubmission(form) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() > 0.1 ? resolve() : reject(new Error('Simulated error'));
            }, 2000);
        });
    }

    // ==================== WHATSAPP INTEGRATION ====================

    setupWhatsAppButton() {
        this.updateWhatsAppLink();
        
        const whatsappBtn = document.getElementById('whatsappBtn');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', (e) => {
                if (!whatsappBtn.href || whatsappBtn.href === '#') {
                    e.preventDefault();
                    this.showNotification('Por favor, completa los campos requeridos primero', 'warning');
                }
            });
        }
    }

    updateWhatsAppLink() {
        const whatsappBtn = document.getElementById('whatsappBtn');
        if (!whatsappBtn) return;

        const form = document.getElementById('consultaForm');
        if (!form) return;

        const name = form.querySelector('#name')?.value || '';
        const phone = form.querySelector('#phone')?.value || '';
        const device = form.querySelector('#device')?.value || '';
        const consultationType = form.querySelector('#consultationType')?.value || '';
        const message = form.querySelector('#message')?.value || '';

        if (name && phone && message) {
            const consultationText = consultationType === 'express' ? 'Consulta Express ($3 USD)' : 'Consulta Básica ($1 USD)';
            const deviceText = device ? `Dispositivo: ${device}\n` : '';
            
            const text = `Hola, soy ${name}.\nTeléfono: ${phone}\n${deviceText}Tipo: ${consultationText}\n\nConsulta: ${message}`;
            
            whatsappBtn.href = `https://wa.me/573103767574?text=${encodeURIComponent(text)}`;
            whatsappBtn.classList.remove('disabled');
        } else {
            whatsappBtn.href = '#';
            whatsappBtn.classList.add('disabled');
        }
    }

    // ==================== ANIMACIONES Y EFECTOS ====================

    setupAnimations() {
        this.setupScrollAnimations();
        this.setupCounterAnimations();
        this.setupHoverEffects();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    entry.target.style.opacity = '1';
                    
                    if (entry.target.classList.contains('stat-number')) {
                        this.animateCounter(entry.target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card, .service-card, .testimonial-card, .stat-number').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }

    setupCounterAnimations() {
        // Los contadores se animan cuando son observados
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }

    setupHoverEffects() {
        // Efectos hover mejorados se manejan via CSS
    }

    setupStatsCounter() {
        // Los stats se animan cuando son visibles
    }

    // ==================== MODAL SYSTEM ====================

    showSuccessModal() {
        this.showNotification('¡Consulta enviada con éxito! Te contactaremos pronto.', 'success');
    }

    // ==================== NOTIFICATION SYSTEM ====================

    showNotification(message, type = 'success') {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideInRight 0.3s ease reverse forwards';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }

    // ==================== AI ASSISTANT INTEGRATION ====================

    initializeAIAssistant() {
        // El AI Assistant se inicializa automáticamente cuando se carga el script
        console.log('AI Assistant inicializado');
    }

    // ==================== UTILIDADES ====================

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ==================== AI ASSISTANT CLASS ====================

class ByPhoneAIAssistant {
    constructor() {
        this.isOpen = false;
        this.conversationHistory = [];
        this.currentDiagnosticStep = 1;
        this.diagnosticData = {};
        this.initializeAssistant();
    }

    initializeAssistant() {
        this.createOverlay();
        this.setupEventListeners();
        this.loadConversationHistory();
        this.setupVoiceRecognition();
    }

    createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.className = 'ai-overlay';
        document.body.appendChild(this.overlay);
    }

    setupEventListeners() {
        // AI Assistant Button
        document.getElementById('aiAssistantButton').addEventListener('click', () => {
            this.toggleAssistant();
        });

        // Close buttons
        document.querySelector('.ai-close').addEventListener('click', () => {
            this.closeAssistant();
        });

        document.querySelector('.wizard-close').addEventListener('click', () => {
            this.closeDiagnosticWizard();
        });

        document.querySelector('.estimator-close').addEventListener('click', () => {
            this.closePriceEstimator();
        });

        // Send message
        document.getElementById('sendMessage').addEventListener('click', () => {
            this.sendUserMessage();
        });

        document.getElementById('aiInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendUserMessage();
            }
        });

        // Quick actions
        document.querySelectorAll('.quick-action').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                this.handleQuickAction(action);
            });
        });

        // Suggestion chips
        document.querySelectorAll('.suggestion-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                const message = e.currentTarget.dataset.message;
                this.addUserMessage(message);
                this.processMessage(message);
            });
        });

        // Feature buttons
        document.querySelectorAll('.feature-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const feature = e.currentTarget.dataset.feature;
                this.handleFeature(feature);
            });
        });

        // Diagnostic wizard
        this.setupDiagnosticWizard();

        // Overlay click
        this.overlay.addEventListener('click', () => {
            this.closeAllModals();
        });
    }

    toggleAssistant() {
        this.isOpen = !this.isOpen;
        const assistant = document.getElementById('aiAssistant');
        
        if (this.isOpen) {
            assistant.setAttribute('aria-hidden', 'false');
            this.overlay.classList.add('active');
            document.getElementById('aiInput').focus();
            this.animateAppearance();
        } else {
            this.closeAssistant();
        }
    }

    closeAssistant() {
        this.isOpen = false;
        document.getElementById('aiAssistant').setAttribute('aria-hidden', 'true');
        this.overlay.classList.remove('active');
    }

    closeAllModals() {
        this.closeAssistant();
        this.closeDiagnosticWizard();
        this.closePriceEstimator();
        this.overlay.classList.remove('active');
    }

    animateAppearance() {
        const assistant = document.getElementById('aiAssistant');
        assistant.style.transform = 'scale(0.9)';
        assistant.style.opacity = '0';
        
        requestAnimationFrame(() => {
            assistant.style.transition = 'all 0.3s ease';
            assistant.style.transform = 'scale(1)';
            assistant.style.opacity = '1';
        });
    }

    // ==================== MESSAGE SYSTEM ====================

    addUserMessage(message) {
        this.addMessage(message, 'user');
        this.addToHistory({ type: 'user', content: message });
    }

    addAIMessage(message, delay = 1000) {
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            this.addMessage(message, 'ai');
            this.addToHistory({ type: 'ai', content: message });
            this.scrollToBottom();
        }, delay);
    }

    addMessage(content, type) {
        const messagesContainer = document.getElementById('aiMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const timestamp = new Date().toLocaleTimeString('es-CO', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${content}</p>
            </div>
            <div class="message-time">${timestamp}</div>
        `;

        const quickActions = messagesContainer.querySelector('.quick-actions-grid');
        if (quickActions) {
            quickActions.remove();
        }

        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('aiMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai-message';
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.parentElement.remove();
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('aiMessages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    sendUserMessage() {
        const input = document.getElementById('aiInput');
        const message = input.value.trim();
        
        if (message) {
            this.addUserMessage(message);
            this.processMessage(message);
            input.value = '';
        }
    }

    // ==================== AI PROCESSING ====================

    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        if (this.detectIntent(lowerMessage, ['diagnóstico', 'diagnostico', 'revisar', 'problema'])) {
            this.startDiagnosticWizard();
        }
        else if (this.detectIntent(lowerMessage, ['precio', 'cuesta', 'valor', 'cuánto'])) {
            this.showPriceEstimator();
        }
        else if (this.detectIntent(lowerMessage, ['reparar', 'arreglar', 'solución'])) {
            this.handleRepairRequest(message);
        }
        else if (this.detectIntent(lowerMessage, ['hola', 'buenas', 'hi', 'hello'])) {
            this.greetUser();
        }
        else if (this.detectIntent(lowerMessage, ['gracias', 'thanks', 'agradecido'])) {
            this.respondToThanks();
        }
        else {
            this.generateAIResponse(message);
        }
    }

    detectIntent(message, keywords) {
        return keywords.some(keyword => message.includes(keyword));
    }

    generateAIResponse(message) {
        const responses = {
            pantalla: "Comprendo que tienes problemas con la pantalla. ¿Podrías describir el daño? Por ejemplo: ¿está rota, tiene líneas, no responde al tacto?",
            batería: "Entiendo el problema con la batería. ¿Carga lentamente, se descarga rápido o no carga en absoluto?",
            agua: "¡Importante! Si tu dispositivo tuvo contacto con agua: 1. Apágalo inmediatamente 2. No lo cargues 3. Tráelo para limpieza profesional. ¿Cuándo ocurrió esto?",
            lento: "Para dispositivos lentos, podemos hacer: limpieza de software, optimización o actualización. ¿Qué modelo es tu dispositivo?",
            default: "Entiendo tu consulta. Como asistente especializado, puedo ayudarte con: diagnóstico de problemas, cotización de reparaciones, asesoría técnica o agendar una cita. ¿En qué te puedo asistir específicamente?"
        };

        let response = responses.default;
        
        for (const [key, value] of Object.entries(responses)) {
            if (message.toLowerCase().includes(key)) {
                response = value;
                break;
            }
        }

        this.addAIMessage(response);
    }

    // ==================== QUICK ACTIONS ====================

    handleQuickAction(action) {
        switch(action) {
            case 'diagnostic':
                this.startDiagnosticWizard();
                break;
            case 'price':
                this.showPriceEstimator();
                break;
            case 'repair':
                this.scheduleRepair();
                break;
            case 'technical':
                this.provideTechnicalAdvice();
                break;
        }
    }

    startDiagnosticWizard() {
        this.closeAssistant();
        this.diagnosticData = {};
        this.currentDiagnosticStep = 1;
        this.updateDiagnosticProgress();
        document.getElementById('diagnosticWizard').setAttribute('aria-hidden', 'false');
        this.overlay.classList.add('active');
    }

    showPriceEstimator() {
        this.closeAssistant();
        document.getElementById('priceEstimator').setAttribute('aria-hidden', 'false');
        this.overlay.classList.add('active');
    }

    scheduleRepair() {
        this.addAIMessage("Perfecto, para agendar tu reparación necesito algunos datos. ¿Prefieres que te contactemos por WhatsApp o prefieres llenar nuestro formulario de servicio?", 500);
        
        setTimeout(() => {
            this.addQuickResponseOptions();
        }, 1500);
    }

    provideTechnicalAdvice() {
        this.addAIMessage("Como técnico especializado, puedo ayudarte con: troubleshooting, optimización, mantenimiento preventivo y recomendaciones de uso. ¿Qué aspecto te gustaría mejorar en tu dispositivo?", 500);
    }

    addQuickResponseOptions() {
        const messagesContainer = document.getElementById('aiMessages');
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'quick-actions-grid';
        optionsDiv.innerHTML = `
            <button class="quick-action" data-action="whatsapp">
                <span>💬</span>
                Contactar por WhatsApp
            </button>
            <button class="quick-action" data-action="form">
                <span>📝</span>
                Llenar formulario
            </button>
        `;
        
        messagesContainer.appendChild(optionsDiv);
        this.scrollToBottom();

        optionsDiv.querySelectorAll('.quick-action').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                if (action === 'whatsapp') {
                    window.open('https://wa.me/573103767574', '_blank');
                } else {
                    document.querySelector('#consultas').scrollIntoView({ behavior: 'smooth' });
                    this.closeAssistant();
                }
            });
        });
    }

    // ==================== DIAGNOSTIC WIZARD ====================

    setupDiagnosticWizard() {
        document.querySelectorAll('.device-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.diagnosticData.device = e.currentTarget.dataset.device;
                this.nextDiagnosticStep();
            });
        });

        document.querySelectorAll('.problem-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.diagnosticData.problem = e.currentTarget.dataset.problem;
                this.nextDiagnosticStep();
            });
        });

        document.querySelector('.wizard-next').addEventListener('click', () => {
            this.nextDiagnosticStep();
        });

        document.querySelector('.wizard-prev').addEventListener('click', () => {
            this.previousDiagnosticStep();
        });
    }

    nextDiagnosticStep() {
        this.currentDiagnosticStep++;
        this.updateDiagnosticProgress();
        this.showCurrentStep();
    }

    previousDiagnosticStep() {
        this.currentDiagnosticStep--;
        this.updateDiagnosticProgress();
        this.showCurrentStep();
    }

    updateDiagnosticProgress() {
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        const percentage = (this.currentDiagnosticStep / 5) * 100;
        
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `Paso ${this.currentDiagnosticStep} de 5`;

        const prevBtn = document.querySelector('.wizard-prev');
        const nextBtn = document.querySelector('.wizard-next');
        
        prevBtn.disabled = this.currentDiagnosticStep === 1;
        nextBtn.textContent = this.currentDiagnosticStep === 5 ? 'Finalizar' : 'Siguiente';
    }

    showCurrentStep() {
        document.querySelectorAll('.wizard-step').forEach(step => {
            step.classList.remove('active');
        });
        
        const currentStep = document.querySelector(`[data-step="${this.currentDiagnosticStep}"]`);
        if (currentStep) {
            currentStep.classList.add('active');
        }

        if (this.currentDiagnosticStep === 5) {
            this.generateDiagnosticReport();
        }
    }

    generateDiagnosticReport() {
        const report = this.createDiagnosticReport();
        
        setTimeout(() => {
            this.closeDiagnosticWizard();
            this.toggleAssistant();
            this.addAIMessage(report, 0);
            this.addAIMessage("¿Te gustaría agendar una cita para la reparación o necesitas más información?", 1500);
        }, 1000);
    }

    createDiagnosticReport() {
        const device = this.diagnosticData.device || 'tu dispositivo';
        const problem = this.diagnosticData.problem || 'el problema reportado';
        
        const reports = {
            screen: `🔍 **Diagnóstico completado**\n\nBasado en la información:\n• Dispositivo: ${device}\n• Problema: Pantalla dañada\n\n**Recomendación:** Cambio de pantalla\n**Tiempo estimado:** 1-2 horas\n**Garantía:** 6 meses\n\n¿Te gustaría recibir una cotización exacta?`,
            battery: `🔍 **Diagnóstico completado**\n\nBasado en la información:\n• Dispositivo: ${device}\n• Problema: Batería defectuosa\n\n**Recomendación:** Cambio de batería\n**Tiempo estimado:** 45 minutos\n**Garantía:** 12 meses\n\nLa batería nueva mejorará significativamente tu autonomía.`,
            water: `🔍 **Diagnóstico completado**\n\nBasado en la información:\n• Dispositivo: ${device}\n• Problema: Contacto con líquidos\n\n**⚠️ URGENTE:** Trae tu dispositivo inmediatamente para limpieza interna y prevenir daños permanentes.\n\n**Servicio:** Limpieza ultrasónica\n**Tiempo:** 2-4 horas`
        };

        return reports[this.diagnosticData.problem] || `🔍 **Diagnóstico completado**\n\nHemos analizado la información de ${device} y el problema reportado. Nuestros técnicos necesitan una revisión física para dar un diagnóstico preciso y cotización.\n\n¿Podrías traer tu dispositivo para una evaluación gratuita?`;
    }

    closeDiagnosticWizard() {
        document.getElementById('diagnosticWizard').setAttribute('aria-hidden', 'true');
    }

    closePriceEstimator() {
        document.getElementById('priceEstimator').setAttribute('aria-hidden', 'true');
    }

    // ==================== VOICE RECOGNITION ====================

    setupVoiceRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'es-ES';

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                document.getElementById('aiInput').value = transcript;
                this.sendUserMessage();
            };

            this.recognition.onerror = (event) => {
                console.error('Error en reconocimiento de voz:', event.error);
            };
        }
    }

    startVoiceRecognition() {
        if (this.recognition) {
            this.recognition.start();
        } else {
            this.addAIMessage("Lo siento, el reconocimiento de voz no está disponible en tu navegador.");
        }
    }

    // ==================== FEATURE HANDLERS ====================

    handleFeature(feature) {
        switch(feature) {
            case 'voice':
                this.startVoiceRecognition();
                break;
            case 'camera':
                this.triggerCamera();
                break;
            case 'schedule':
                this.scheduleAppointment();
                break;
        }
    }

    triggerCamera() {
        this.addAIMessage("Puedes enviarnos fotos del problema por WhatsApp para una mejor evaluación. ¿Te gustaría que te redirija?");
        
        setTimeout(() => {
            this.addQuickResponseOptions();
        }, 1000);
    }

    scheduleAppointment() {
        const now = new Date();
        const options = [];
        
        for (let i = 1; i <= 3; i++) {
            const date = new Date(now);
            date.setDate(now.getDate() + i);
            
            options.push({
                date: date.toLocaleDateString('es-CO'),
                times: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM']
            });
        }

        let message = "📅 **Horarios disponibles:**\n\n";
        options.forEach(option => {
            message += `**${option.date}:** ${option.times.join(', ')}\n`;
        });
        
        message += "\n¿Te gustaría reservar alguno de estos horarios?";
        
        this.addAIMessage(message);
    }

    // ==================== CONVERSATION MANAGEMENT ====================

    addToHistory(message) {
        this.conversationHistory.push({
            ...message,
            timestamp: new Date().toISOString()
        });
        
        if (this.conversationHistory.length > 50) {
            this.conversationHistory = this.conversationHistory.slice(-50);
        }
        
        this.saveConversationHistory();
    }

    saveConversationHistory() {
        localStorage.setItem('byphone_ai_conversation', JSON.stringify(this.conversationHistory));
    }

    loadConversationHistory() {
        try {
            const saved = localStorage.getItem('byphone_ai_conversation');
            if (saved) {
                this.conversationHistory = JSON.parse(saved);
            }
        } catch (error) {
            console.error('Error loading conversation history:', error);
        }
    }

    // ==================== RESPONSE TEMPLATES ====================

    greetUser() {
        const greetings = [
            "¡Hola! Soy tu asistente especializado en reparación de smartphones. ¿En qué puedo ayudarte hoy?",
            "¡Bienvenido! Estoy aquí para ayudarte con cualquier problema de tu dispositivo móvil. ¿Qué necesitas?",
            "¡Hola! Como técnico virtual, puedo asistirte con diagnósticos, cotizaciones y asesoría técnica. ¿Cuál es tu consulta?"
        ];
        
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        this.addAIMessage(randomGreeting, 500);
    }

    respondToThanks() {
        const responses = [
            "¡De nada! Estoy aquí para ayudarte cuando lo necesites. ¿Hay algo más en lo que pueda asistirte?",
            "¡Fue un placer ayudarte! Recuerda que puedes consultarme cualquier duda técnica en cualquier momento.",
            "¡Gracias a ti por confiar en By Phone! No dudes en contactarme si necesitas más ayuda."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        this.addAIMessage(randomResponse, 500);
    }

    handleRepairRequest(message) {
        this.addAIMessage("Entiendo que necesitas una reparación. Para darte la mejor solución, necesito saber:\n\n1. ¿Qué modelo es tu dispositivo?\n2. ¿Cuál es el problema específico?\n3. ¿Cuándo comenzó el problema?", 500);
    }
}

// ==================== INICIALIZACIÓN GLOBAL ====================

// Inicializar la aplicación principal
const byPhoneApp = new ByPhoneApp();

// Inicializar el asistente AI
const byPhoneAI = new ByPhoneAIAssistant();

// Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Manejo de errores global
window.addEventListener('error', (e) => {
    console.error('Error global:', e.error);
});

// Animar el botón del asistente después de un tiempo
setTimeout(() => {
    const aiButton = document.getElementById('aiAssistantButton');
    if (aiButton) {
        aiButton.style.animation = 'float 3s ease-in-out infinite';
    }
}, 3000);

// Exportar para uso global
window.ByPhoneApp = ByPhoneApp;
window.ByPhoneAIAssistant = ByPhoneAIAssistant;