(() => {
    const $ = (s, root = document) => root.querySelector(s), $$ = (s, root = document) => [...root.querySelectorAll(s)];
    const D = window.GREYLYT || { settings: { brand: 'GREYLYT', email: 'greylytindia@gmail.com', instagram: '#', whatsapp: '' }, projects: [], services: [], articles: [] };
    const nav = [['Home', 'index.html', 'home'], ['Works', 'works.html', 'works'], ['Services', 'services.html', 'services'], ['About', 'about.html', 'about'], ['Insights', 'insights.html', 'insights']];
    /* ---------------------------------------------------------
       SHARED SITE CHROME: HEADER AND FOOTER
       --------------------------------------------------------- */
    function header() {
        let current = document.body.dataset.page;
        $('#site-header').innerHTML = `<header class="site-header"><div class="header-inner wrap"><a class="wordmark" href="index.html" aria-label="GREYLYT home">
    <img src="assets/greylyt-logo.png" alt="GREYLYT" class="header-logo">
</a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button><nav class="main-nav" aria-label="Main navigation">${nav.map(([n, u, k]) => `<a href="${u}" class="${current === k ? 'active' : ''}">${n}</a>`).join('')}<a class="nav-cta" href="contact.html">Start a project <span>↗</span></a></nav></div></header>`;
        const toggle = $('.menu-toggle'), navEl = $('.main-nav');
        toggle.addEventListener('click', () => { let open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); navEl.classList.toggle('open', open); document.body.classList.toggle('menu-open', open); });
        navEl.addEventListener('click', e => { if (e.target.closest('a')) {
            navEl.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        } });
    }
    function footer() { let s = D.settings; $('#site-footer').innerHTML = `<footer class="site-footer"><div class="wrap footer-main"><div class="footer-brand">
<a class="wordmark" href="index.html" aria-label="GREYLYT home">
  <img class="header-logo" src="assets/greylyt-logo.png" alt="GREYLYT Lighting Design">
</a>
<p>Brilliance. Resilience. Momentum.<br></p></div><div class="footer-col"><p class="eyebrow">EXPLORE</p>${nav.map(([n, u]) => `<a href="${u}">${n}</a>`).join('')}<a href="contact.html">Contact</a></div><div class="footer-col"><p class="eyebrow">CONNECT</p><a href="mailto:${s.email}">${s.email}</a><a href="${s.instagram}" target="_blank" rel="noreferrer">Instagram ↗</a><a href="${s.whatsapp}" target="_blank" rel="noreferrer">WhatsApp ↗</a><span>${s.location}</span></div><div class="footer-cta"><p class="eyebrow">HAVE A PROJECT?</p><a class="footer-big-link" href="contact.html">Let's talk <span>↗</span></a></div></div><div class="wrap footer-bottom"><span>© ${new Date().getFullYear()} GREYLYT</span><span>BRILLIANCE. RESILIENCE. MOMENTUM.</span><a href="#top" onclick="window.scrollTo({top:0,behavior:'smooth'});return false">BACK TO TOP ↑</a></div></footer>`; }
    /* ---------------------------------------------------------
       REUSABLE HTML HELPERS AND PROJECT CARDS
       --------------------------------------------------------- */
    function image(url, alt, cls = '') { return `<img class="${cls}" src="${url}" alt="${alt || ''}" loading="eager" decoding="async" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'">`; }
    function projectCard(p, i) { return `<a class="project-card reveal ${i % 3 === 1 ? 'project-card-tall' : ''}" href="project.html?id=${encodeURIComponent(p.id)}"><div class="project-image">${image(p.image, p.alt)}<span class="image-arrow">↗</span></div><div class="project-meta"><div><p class="project-category">${p.category} <span>·</span> ${p.location.split('·')[0].trim()}</p><h3>${p.title}</h3></div><span class="project-number">0${i + 1}</span></div></a>`; }
    /* ---------------------------------------------------------
       INTERACTIVE PROJECT RAIL / CAROUSEL
       --------------------------------------------------------- */
    function setupProjectRail(grid) {
        if (!grid || !grid.children.length)
            return;
        const old = grid.parentElement?.classList.contains('project-rail-shell') ? grid.parentElement : null;
        if (old) {
            old.querySelector('.rail-controls')?.remove();
            grid.querySelectorAll('[data-rail-clone="true"]').forEach(n => n.remove());
        }
        grid.classList.add('project-rail');
        const shell = grid.parentElement?.classList.contains('project-rail-shell') ? grid.parentElement : null;
        let wrap = shell;
        if (!wrap) {
            wrap = document.createElement('div');
            wrap.className = 'project-rail-shell';
            grid.parentNode.insertBefore(wrap, grid);
            wrap.appendChild(grid);
        }
        const controls = document.createElement('div');
        controls.className = 'rail-controls';
        controls.innerHTML = '<span class="rail-hint">DRAG · SCROLL · EXPLORE</span><div class="rail-buttons"><button type="button" class="rail-btn rail-prev" aria-label="Scroll projects left">←</button><button type="button" class="rail-btn rail-next" aria-label="Scroll projects right">→</button></div>';
        wrap.appendChild(controls);
        const originals = [...grid.children];
        originals.forEach(node => { const clone = node.cloneNode(true); clone.dataset.railClone = 'true'; clone.setAttribute('aria-hidden', 'true'); clone.querySelectorAll('a,button,input').forEach(el => el.setAttribute('tabindex', '-1')); grid.appendChild(clone); });
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let paused = false, raf = 0, last = 0;
        const half = () => Math.max(1, grid.scrollWidth / 2);
        // Start at the second copy so the track can travel visually from right to left without a visible reset.
        grid.scrollLeft = half();
        function tick(t) { if (!grid.isConnected)
            return; if (!paused && !reduced) {
            if (last) {
                grid.scrollLeft -= Math.min((t - last) * .022, 1.1);
                if (grid.scrollLeft <= 0)
                    grid.scrollLeft = half();
            }
            last = t;
        }
        else
            last = 0; raf = requestAnimationFrame(tick); }
        raf = requestAnimationFrame(tick);
        wrap.addEventListener('mouseenter', () => paused = true);
        wrap.addEventListener('mouseleave', () => paused = false);
        wrap.addEventListener('focusin', () => paused = true);
        wrap.addEventListener('focusout', () => paused = false);
        controls.querySelector('.rail-prev').addEventListener('click', () => { paused = true; grid.scrollBy({ left: -Math.min(grid.clientWidth * .72, 440), behavior: 'smooth' }); setTimeout(() => paused = false, 1800); });
        controls.querySelector('.rail-next').addEventListener('click', () => { paused = true; grid.scrollBy({ left: Math.min(grid.clientWidth * .72, 440), behavior: 'smooth' }); setTimeout(() => paused = false, 1800); });
        grid.addEventListener('wheel', e => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            paused = true;
            grid.scrollBy({ left: e.deltaY, behavior: 'auto' });
            clearTimeout(grid._wheelResume);
            grid._wheelResume = setTimeout(() => paused = false, 900);
        } }, { passive: false });
        let down = false, startX = 0, startScroll = 0;
        grid.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse' && e.button !== 0)
            return; down = true; startX = e.clientX; startScroll = grid.scrollLeft; grid.classList.add('is-dragging'); paused = true; grid.setPointerCapture?.(e.pointerId); });
        grid.addEventListener('pointermove', e => { if (down)
            grid.scrollLeft = startScroll - (e.clientX - startX); });
        const endDrag = () => { if (!down)
            return; down = false; grid.classList.remove('is-dragging'); setTimeout(() => paused = false, 500); };
        grid.addEventListener('pointerup', endDrag);
        grid.addEventListener('pointercancel', endDrag);
        grid.addEventListener('keydown', e => { if (e.key === 'ArrowRight')
            grid.scrollBy({ left: 160, behavior: 'smooth' }); if (e.key === 'ArrowLeft')
            grid.scrollBy({ left: -160, behavior: 'smooth' }); });
    }
    /* ---------------------------------------------------------
       PAGE RENDERERS: HOME, WORKS, SERVICES AND INSIGHTS
       --------------------------------------------------------- */
    function renderHome() { const p = $('#home-projects'); if (p) {
        p.innerHTML = D.projects.slice(0, 5).map(projectCard).join('');
        setupProjectRail(p);
    } const s = $('#home-services'); if (s)
        s.innerHTML = D.services.slice(0, 4).map(x => `<a class="service-row reveal" href="services.html"><span class="service-number">${x.n}</span><div><h3>${x.title}</h3><p>${x.desc}</p></div><span class="service-arrow">↗</span></a>`).join(''); const proc = $('#home-process'); if (proc) {
        let steps = [['01', 'Listen', 'Understand the architecture, brief and people.'], ['02', 'Compose', 'Build the concept and lighting layers.'], ['03', 'Resolve', 'Coordinate products, calculations and drawings.'], ['04', 'Realise', 'Support execution, aiming and handover.']];
        proc.innerHTML = steps.map(x => `<article class="process-step reveal"><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('');
    } }
    function renderWorks() { let filters = $('#project-filters'), grid = $('#all-projects'); if (!filters || !grid)
        return; let cats = ['All projects', ...new Set(D.projects.map(p => p.category))]; filters.innerHTML = cats.map((c, i) => `<button class="filter-button ${i === 0 ? 'selected' : ''}" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`).join(''); function apply(c) { let list = D.projects.filter(p => c === 'All projects' || p.category === c); grid.innerHTML = list.length ? list.map(projectCard).join('') : `<div class="empty-state"><p class="eyebrow">MORE TO COME</p><h3>We're composing this category.</h3><p>Contact us to discuss a project in ${c.toLowerCase()}.</p><a class="text-link" href="contact.html">Start a conversation ↗</a></div>`; observeReveals(); } filters.addEventListener('click', e => { let b = e.target.closest('button'); if (!b)
        return; $$('button', filters).forEach(x => { x.classList.toggle('selected', x === b); x.setAttribute('aria-pressed', String(x === b)); }); apply(b.dataset.filter); }); apply('All projects'); }
    function renderServices() { let el = $('#services-expanded'); if (!el)
        return; el.innerHTML = D.services.map((s, i) => `<article class="service-detail-row reveal"><div class="service-detail-image">${image(s.image, s.title)}</div><div class="service-detail-copy"><p class="eyebrow">${s.n} / ${s.tag}</p><h3>${s.title}</h3><p>${s.desc}</p><div class="deliver-block"><span>WHAT IT DELIVERS</span><p>${s.deliver}</p></div><div class="deliver-block"><span>WHY IT MATTERS</span><p>${s.benefit}</p></div></div></article>`).join(''); }
    function renderInsights() { let el = $('#article-list'), filters = $('#article-filters'); if (!el || !filters)
        return; let cats = ['All notes', ...new Set(D.articles.map(a => a.category))]; filters.innerHTML = cats.map((c, i) => `<button class="filter-button ${i === 0 ? 'selected' : ''}" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`).join(''); function apply(c) { let list = D.articles.filter(a => c === 'All notes' || a.category === c); el.innerHTML = list.map((a, i) => `<a class="article-card reveal" href="article.html?id=${encodeURIComponent(a.id)}"><div class="article-image">${image(a.image, a.title)}<span class="image-arrow">↗</span></div><div class="article-meta"><span>${a.category}</span><span>${a.read}</span></div><h2>${a.title}</h2><p>${a.excerpt}</p><span class="article-date">${new Date(a.date + 'T12:00:00').toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span></a>`).join(''); observeReveals(); } filters.addEventListener('click', e => { let b = e.target.closest('button'); if (!b)
        return; $$('button', filters).forEach(x => { x.classList.toggle('selected', x === b); x.setAttribute('aria-pressed', String(x === b)); }); apply(b.dataset.filter); }); apply('All notes'); }
    /* ---------------------------------------------------------
       DETAIL TEMPLATES: PROJECT AND ARTICLE
       --------------------------------------------------------- */
    function renderProject() { let el = $('#project-detail'); if (!el)
        return; let id = new URLSearchParams(location.search).get('id'), p = D.projects.find(x => x.id === id) || D.projects[0]; document.title = p.title + ' — GREYLYT'; const gallery = [p.image, p.image2 || p.image, p.image3 || p.image, p.image4 || p.image, p.image5|| p.image, p.image6 ||p.image].map((src, i) => `<figure class="project-gallery-item">${image(src, `${p.title} — view ${i + 1}`)}<figcaption><span>0${i + 1}</span><span>${['ATMOSPHERE', 'MATERIALITY', 'LIGHTING DETAIL', 'SPATIAL EXPERIENCE'][i]}</span></figcaption></figure>`).join(''); el.innerHTML = `<section class="detail-hero">${image(p.image, p.alt, 'detail-hero-img')}<div class="detail-hero-shade"></div><div class="wrap detail-hero-content"><p class="eyebrow">${p.category} / ${p.year} / SAMPLE CONCEPT</p><h1 class="display">${p.title.replace(' ', '<br>')}</h1><p>${p.intro}</p></div></section><section class="section-pad detail-overview"><div class="wrap detail-overview-grid"><p class="eyebrow">01 — THE INTENT</p><div><h2 class="display">A clear idea.<br><em>A considered response.</em></h2><p>${p.intent}</p><div class="detail-spec"><span>PROJECT TYPE</span><strong>${p.type}</strong><span>LOCATION</span><strong>${p.location}</strong><span>STATUS</span><strong>Illustrative sample concept</strong></div></div></div></section><section class="project-gallery-section"><div class="wrap"><div class="project-gallery-heading"><div><p class="eyebrow">02 — PROJECT GALLERY</p><h2 class="display">Four views.<br><em>One atmosphere.</em></h2></div><p>Explore the concept through a curated set of architectural views. Replace these sample images with approved project photography when available.</p></div><div class="project-gallery-grid">${gallery}</div></div></section><section class="section-pad detail-layers"><div class="wrap detail-layers-grid"><div><p class="eyebrow">03 — THE LIGHTING LAYERS</p><h2 class="display">Build the feeling<br><em>layer by layer.</em></h2></div><ol>${p.layers.map(x => `<li>${x}</li>`).join('')}</ol></div></section><section class="technical-strip"><div class="wrap detail-tech"><p class="eyebrow">04 — FIXTURE & CONTROL STRATEGY</p><p>${p.strategy}</p></div></section><section class="detail-next section-pad"><div class="wrap"><p class="eyebrow">CONTINUE EXPLORING</p><div class="detail-next-row"><h2 class="display">Have a space<br><em>like this in mind?</em></h2><a class="button button-dark" href="contact.html">Discuss your project ↗</a></div><a class="text-link" href="works.html">← Back to all work</a></div></section>`; observeReveals(); }
    function renderArticle() { let el = $('#article-detail'); if (!el)
        return; let id = new URLSearchParams(location.search).get('id'), a = D.articles.find(x => x.id === id) || D.articles[0]; document.title = a.title + ' — GREYLYT Insights'; el.innerHTML = `<section class="article-detail-hero"><div class="wrap"><a class="text-link" href="insights.html">← All insights</a><p class="eyebrow">${a.category} / ${a.read}</p><h1 class="display">${a.title}</h1><p class="article-detail-excerpt">${a.excerpt}</p><span class="article-date">${new Date(a.date + 'T12:00:00').toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}</span></div></section><div class="article-detail-image">${image(a.image, a.title)}</div><article class="article-body">${a.body.map(([h, t]) => `<section><h2>${h}</h2><p>${t}</p></section>`).join('')}<aside class="article-disclaimer">These notes are educational starting points, not project-specific specifications. Confirm requirements, product data and applicable standards before implementation.</aside><a class="text-link" href="insights.html">← Return to insights</a></article><section class="cta-band"><div class="wrap cta-inner"><div><p class="eyebrow">PUT IDEAS INTO PRACTICE</p><h2 class="display">Let's talk about<br><em>your space.</em></h2></div><a class="button button-light" href="contact.html">Start a project ↗</a></div></section>`; }
    /* ---------------------------------------------------------
       MOTION, NAVIGATION AND PAGE INITIALIZATION
       --------------------------------------------------------- */
    function observeReveals() { let els = $$('.reveal:not([data-observed])'); if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
        els.forEach(e => e.classList.add('is-visible'));
        return;
    } let io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) {
        en.target.classList.add('is-visible');
        io.unobserve(en.target);
    } }), { threshold: .12 }); els.forEach(e => { e.dataset.observed = '1'; io.observe(e); }); }
    function initializePage() { header(); footer(); renderHome(); renderWorks(); renderServices(); renderInsights(); renderProject(); renderArticle(); observeReveals(); }
    let activePageUrl = location.href;
    
async function softNavigate(href, addHistory = true) {
    const target = new URL(href, location.href);

    if (target.origin !== location.origin) return;

    if (target.href === activePageUrl) {
        if (target.hash) {
            document.querySelector(target.hash)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
        return;
    }

    try {
        const response = await fetch(target.href, {
            headers: { 'X-GREYLYT-Navigation': '1' }
        });

        if (!response.ok) {
            throw new Error('Navigation failed');
        }

        const html = await response.text();
        const parsed = new DOMParser().parseFromString(html, 'text/html');

        const incoming = parsed.querySelector('main');
        const current = document.querySelector('main');

        if (!incoming || !current) {
            throw new Error('Page content unavailable');
        }

        const updatePage = () => {
            current.replaceWith(incoming);

            document.body.dataset.page =
                parsed.body.dataset.page || 'home';

            document.title = parsed.title || 'GREYLYT';

            const desc = parsed.querySelector(
                'meta[name="description"]'
            );

            if (desc) {
                let live = document.querySelector(
                    'meta[name="description"]'
                );

                if (!live) {
                    live = document.createElement('meta');
                    live.name = 'description';
                    document.head.appendChild(live);
                }

                live.content = desc.content;
            }

            if (addHistory) {
                history.pushState({}, '', target.href);
            }

            activePageUrl = target.href;

            document.body.classList.remove('menu-open');

            initializePage();

            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        };

        if (document.startViewTransition) {
            const transition = document.startViewTransition(updatePage);
            await transition.finished;
        } else {
            updatePage();
        }

    } catch (err) {
        location.href = target.href;
    }
}

    document.addEventListener('click', e => { const a = e.target.closest('a[href]'); if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank' || a.hasAttribute('download'))
        return; const url = new URL(a.href, location.href); if (url.origin !== location.origin || !url.pathname.match(/\.html$/) || a.getAttribute('href')?.startsWith('#'))
        return; e.preventDefault(); softNavigate(url.href, true); });
    window.addEventListener('popstate', () => softNavigate(location.href, false));
    initializePage();
})();

