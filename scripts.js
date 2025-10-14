       // Referencias a elementos
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const closeSidebar = document.getElementById('closeSidebar');

        // Abrir sidebar
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
            menuToggle.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevenir scroll del body
        });

        // Cerrar sidebar (botón X)
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = ''; // Restaurar scroll
        });

        // Cerrar sidebar (click en overlay)
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Acordeones de categorías principales
        const categoryHeaders = document.querySelectorAll('.category-header');
        categoryHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const categoryMain = header.parentElement;
                const isActive = categoryMain.classList.contains('active');
                
                // Cerrar todas las categorías principales
                document.querySelectorAll('.category-main').forEach(cat => {
                    cat.classList.remove('active');
                });
                
                // Abrir la seleccionada si no estaba activa
                if (!isActive) {
                    categoryMain.classList.add('active');
                }
            });
        });

        // Acordeones de subcategorías
        const subcategoryHeaders = document.querySelectorAll('.subcategory-header');
        subcategoryHeaders.forEach(header => {
            header.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevenir que se cierre la categoría principal
                const subcategoryItem = header.parentElement;
                const isActive = subcategoryItem.classList.contains('active');
                
                // Cerrar todas las subcategorías del mismo nivel
                const parentCategory = subcategoryItem.closest('.subcategories');
                parentCategory.querySelectorAll('.subcategory-item').forEach(sub => {
                    sub.classList.remove('active');
                });
                
                // Abrir la seleccionada si no estaba activa
                if (!isActive) {
                    subcategoryItem.classList.add('active');
                }
            });
        });

        // ========== ANIMACIÓN SCROLL - CATEGORÍAS ==========
document.addEventListener('DOMContentLoaded', function() {
    
    const categoryCards = document.querySelectorAll('.category-card');
    
    // Configurar Intersection Observer
    const observerOptions = {
        root: null,
        threshold: 0.2, // Se activa cuando el 20% es visible
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar después de animar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar cada card
    categoryCards.forEach(card => {
        observer.observe(card);
    });
    
});
