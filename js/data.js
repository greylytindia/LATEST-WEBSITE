/* =========================================================
   CENTRAL WEBSITE CONTENT
   Edit this file to update projects, services, articles and settings.
   ========================================================= */
window.GREYLYT = {
    // Global contact and brand details. Replace these before publishing.
    settings: { brand: 'GREYLYT', email: 'greylytindia@gmail.com', instagram: 'https://www.instagram.com/greylyt/', whatsapp: 'https://wa.me/917397727979', location: 'Chennai, India' },
    // Each project uses image + image2 + image3 + image4 for its four-image gallery.
    // Keep sample: true for concepts or demonstration projects.
    projects: [
        
{
    id: 'the-grand-luxe',
    title: 'The Grand Luxe',
    category: 'Residential',
    location: 'Chennai',
    type: 'Residential Lighting Design',
    sample: false,
    year: '2026',

    image: 'assets/Projects/RESIDENTIAL/THE GRAND LUXE/01.jpg',
    image2: 'assets/Projects/RESIDENTIAL/THE GRAND LUXE/02.jpg',
    image3: 'assets/Projects/RESIDENTIAL/THE GRAND LUXE/03.jpg',
    image4: 'assets/Projects/RESIDENTIAL/THE GRAND LUXE/04.jpg',
    image5: 'assets/Projects/RESIDENTIAL/THE GRAND LUXE/05.jpg',
    image6: 'assets/Projects/RESIDENTIAL/THE GRAND LUXE/06.jpg',

    alt: 'Completed residential interior lighting project in Chennai',

    intro: 'The Grand Luxe is a completed residential lighting project in Chennai, designed to bring together architectural character, visual comfort and carefully considered illumination.',

    intent: 'The lighting design aims to create a balanced residential environment through considered illumination, visual comfort and a coordinated lighting approach.',

    layers: [
        'Ambient lighting establishes the overall atmosphere.',
        'Task lighting supports everyday residential activities.',
        'Accent lighting highlights architectural and interior details.'
    ],

    strategy: 'A coordinated lighting approach balances ambient, task and accent illumination to support the character and functionality of the residence.'
},

{
    id: 'the-salon',
    title: 'T&G Salon',
    category: 'Retail',
    location: 'Coimbatore',
    type: 'Salon Lighting Design',
    sample: false,
    year: '2025',

    image: 'assets/Projects/RETAIL/T&G SALON/01.jpg',
    image2: 'assets/Projects/RETAIL/T&G SALON/02.jpg',
    image3: 'assets/Projects/RETAIL/T&G SALON/03.jpg',
    image4: 'assets/Projects/RETAIL/T&G SALON/04.jpg',
    image5: 'assets/Projects/RETAIL/T&G SALON/05.jpg',
    image6: 'assets/Projects/RETAIL/T&G SALON/06.jpg',

    alt: 'Completed premium salon interior lighting design in Chennai',

    intro: 'A thoughtfully designed salon lighting scheme that balances visual comfort, functional illumination and a refined customer experience. The lighting enhances the interior materials while creating an inviting and sophisticated atmosphere.',

    intent: 'The lighting intent is to create a visually comfortable grooming environment with accurate facial illumination, balanced colour rendering and a welcoming ambience. Each lighting layer is coordinated to support the different activities and experiences within the salon.',

    layers: [
        'Ambient lighting establishes a comfortable and consistent atmosphere throughout the salon.',
        'Task lighting provides balanced, glare-controlled illumination at mirrors and styling stations for grooming activities.',
        'Accent lighting highlights architectural features, material textures, display elements and interior details.'
    ],

    strategy: 'A layered lighting approach combines controlled general illumination, functional mirror lighting and carefully positioned accent lighting. Fixture selection, colour temperature, colour rendering and glare control are considered to maintain visual comfort while enhancing the salon experience.'
}

    ],
    // Services shown on the Services page and homepage.
    services: [
        { n: '01', title: 'Architectural lighting design', tag: 'Intent → atmosphere', desc: 'A complete lighting direction aligned with the architecture, interior palette, user experience and project ambition.', deliver: 'Lighting concept, layered strategy, design narrative and coordinated layouts.', benefit: 'A coherent visual language rather than a collection of unrelated fittings.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85' },
        { n: '02', title: 'Concept & mood development', tag: 'Feeling → direction', desc: 'Early-stage visual exploration that translates the brief into a clear, shared point of view.', deliver: 'Mood boards, reference imagery, lighting scenes and design intent notes.', benefit: 'Faster alignment between client, architect and interior design team.', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85' },
        { n: '03', title: 'Lighting layouts & technical drawings', tag: 'Intent → documentation', desc: 'Clear fixture layouts and technical documentation prepared for coordination and execution.', deliver: 'CAD lighting layouts, switching logic, fixture references and drawing revisions.', benefit: 'A more coordinated hand-off between design intent and site teams.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85' },
        { n: '04', title: 'DIALux simulation', tag: 'Assumption → evidence', desc: 'Lighting calculations and visualisation to help assess performance against defined project requirements.', deliver: 'Calculation model, illuminance results and simulation views where inputs allow.', benefit: 'Better-informed decisions before installation; results depend on model assumptions and verified product data.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85' },
        { n: '05', title: 'Luminaire selection & specifications', tag: 'Design → product', desc: 'Fixture recommendations grounded in beam distribution, output, colour quality, glare, finish and installation constraints.', deliver: 'Luminaire schedule, technical parameters and product coordination notes.', benefit: 'Products are chosen for how they perform in the space, not only how they look.', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85' },
        { n: '06', title: 'Controls, BOQ & site support', tag: 'Plan → built result', desc: 'Practical support for quantities, dimming strategies, controls coordination and on-site interpretation.', deliver: 'Bill of quantities, DALI / DMX / Casambi planning where applicable, site reviews and handover notes.', benefit: 'A clearer route from the intended atmosphere to the installed and commissioned system.', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85' }
    ],
    // Editorial content for the Insights listing and article detail template.
    articles: [
        { id: 'layers-of-light', title: 'The three layers of lighting', category: 'Fundamentals', date: '2026-10-01', read: '5 min read', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85', excerpt: 'Ambient, task and accent light are not competing ideas. They are different tools for building a complete visual experience.', body: [['Start with the whole', 'Ambient lighting establishes the general visibility and comfort of a space. It may come from indirect cove lighting, well-distributed downlights, wall lighting or daylight. The right solution depends on the architecture and how the room is used.'], ['Give activities their own light', 'Task lighting supports specific activities such as reading, cooking, grooming or working. A good task layer puts useful light where it is needed while managing glare and shadows.'], ['Add focus and depth', 'Accent lighting draws attention to a surface, object or architectural feature. It works through contrast, direction and restraint. Too many competing highlights can make a room feel visually noisy.'], ['Design the layers together', 'The strongest schemes coordinate all three layers, then use switching or dimming to adapt to different moments. These categories are a useful design framework, not a rigid formula.']] },
        { id: 'cct-and-comfort', title: 'Colour temperature is a design decision', category: 'Visual comfort', date: '2026-09-18', read: '4 min read', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85', excerpt: 'Correlated colour temperature changes the character of a space — but it is only one part of colour quality and comfort.', body: [['What CCT tells you', 'Correlated colour temperature (CCT), expressed in kelvin, describes whether a nominally white light appears warmer or cooler. It does not by itself tell you how accurately the source renders colours.'], ['Start with context', 'Material palette, daylight, task, operating hours and desired atmosphere all matter. A single colour temperature across a whole project can be appropriate, but it should be a deliberate choice rather than a default.'], ['Consider consistency', 'When several luminaires illuminate the same field of view, mismatched CCT can become distracting. Review product data and, where possible, samples under realistic conditions.'], ['Comfort is bigger than CCT', 'Glare, brightness, distribution, dimming behaviour and contrast often matter just as much. Make the decision as part of the complete lighting design.']] },
        { id: 'cri-r9', title: 'CRI, R9 and the way materials read', category: 'Technical notes', date: '2026-09-04', read: '6 min read', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85', excerpt: 'A single colour-rendering number cannot describe every material response. Here is what to look for when reviewing a specification.', body: [['CRI in brief', 'The general colour rendering index (Ra) is a commonly used indicator of how a light source renders a defined set of test colours compared with a reference. It is useful, but it is not a complete description of perceived colour.'], ['Why R9 gets attention', 'R9 refers to saturated red in the commonly referenced test set and is not included in the general Ra average. It can be relevant where skin tones, food, timber, artwork or red materials are important.'], ['Read the whole specification', 'Compare the metrics available, check the source and test method, and review samples in context. Two products with similar Ra can still render particular materials differently.'], ['Avoid a single-number rule', 'Choose colour quality in relation to the application, budget, availability and overall scheme. Where colour is critical, mock-ups are more informative than a specification alone.']] },
        { id: 'beam-and-glare', title: 'Beam angle is only the beginning', category: 'Technical notes', date: '2026-08-21', read: '5 min read', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85', excerpt: 'Distribution, distance, aiming and source visibility all shape the result. A beam-angle label cannot do the whole job.', body: [['Understand distribution', 'Beam angle is one way to describe a luminaire’s intensity distribution, often based on a defined portion of peak intensity. It does not describe every part of the beam or the quality of its edge.'], ['Geometry changes the result', 'Mounting height, distance to the target, surface reflectance and aiming angle affect the illuminated area and intensity. Review photometric data rather than selecting from angle alone.'], ['Control glare at the source', 'Shielding, cutoff, placement and viewing angle all influence whether the source is comfortable to look toward. A narrow beam can still create discomfort if the bright source is visible.'], ['Test important moments', 'For feature walls, artwork or textured surfaces, a mock-up can reveal scalloping, unevenness and material response that a simple label cannot.']] },
        { id: 'dali-dmx-casambi', title: 'DALI, DMX and Casambi: different tools', category: 'Controls', date: '2026-08-07', read: '7 min read', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85', excerpt: 'The right control system depends on the behaviour required, the project scale, commissioning approach and compatible equipment.', body: [['DALI', 'DALI is a digital lighting control protocol commonly used for addressable luminaires and control devices in building applications. System design depends on the relevant DALI version, device capabilities and topology.'], ['DMX', 'DMX is widely used where responsive, channel-based control is needed, including entertainment and dynamic colour effects. It requires a clear plan for addressing, data distribution and programming.'], ['Casambi', 'Casambi offers Bluetooth Low Energy-based wireless lighting control products and ecosystems. Compatibility, network design, user experience and local operating requirements should be checked for each project.'], ['Choose by behaviour', 'Do not choose a protocol by popularity alone. Define scenes, user control, integration, fallback behaviour, commissioning and maintenance first, then verify product compatibility with the controls specialist.']] },
        { id: 'simulation-purpose', title: 'What a lighting simulation can — and cannot — tell you', category: 'Process', date: '2026-07-24', read: '5 min read', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85', excerpt: 'A model helps test a design against its assumptions. Its value depends on input quality, clear targets and thoughtful interpretation.', body: [['A useful design tool', 'Lighting simulation can estimate illuminance and visualise distribution using the geometry, reflectances, luminaire photometry and calculation settings provided.'], ['Inputs matter', 'Incorrect dimensions, unverified photometric files, unrealistic reflectances or missing obstructions can change results. Treat the model as a representation of the proposed conditions, not a guarantee of the installed outcome.'], ['Read results in context', 'Average illuminance alone does not capture glare, modelling, colour, atmosphere or every visual task. Combine calculations with the brief, layout review, product information and mock-ups where appropriate.'], ['Close the loop', 'As the design develops, update the model when the layout, product or architecture changes. Record assumptions so the team can understand what the results do and do not represent.']] }
    ]
};

