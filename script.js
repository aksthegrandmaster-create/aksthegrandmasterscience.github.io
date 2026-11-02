const projects = [
    {
        id: 1,
        category: "electronics",
        title: "🚨 Automatic Night Light",
        desc: "Build a light that turns on automatically when the room gets dark. Perfect for learning how light sensors interact with microcontrollers.",
        materials: "Components: Arduino Uno, LDR (Light Sensor), Breadboard, Resistor, LED, Jumper Wires."
    },
    {
        id: 2,
        category: "electronics",
        title: "🌱 Smart Plant Watering Reminder",
        desc: "Create a system that alerts you with a small buzzer or flashing light when your plant's soil becomes too dry.",
        materials: "Components: Soil Moisture Sensor, 5V Buzzer, Battery Pack, Transistor."
    },
    {
        id: 3,
        category: "science",
        title: "🌋 The Classic Lemon Battery",
        desc: "Generate actual chemical electricity using lemons to power a small digital watch display or a tiny LED light.",
        materials: "Materials: 3-4 Lemons, Copper Coins, Zinc Nails, Alligator Clip Wires, Low-voltage LED."
    },
    {
        id: 4,
        category: "science",
        title: "🌪️ Mini Tornado in a Bottle",
        desc: "Explore vortex physics and fluid dynamics by connecting two plastic bottles together to create a controllable whirlpool.",
        materials: "Materials: Two 2-Liter Plastic Bottles, Water, Food Coloring, Bottle Connector (or strong tape)."
    }
];

function filterProjects(category) {
    // Update button styling
    document.getElementById("btn-electronics").className = category === 'electronics' ? 'active-btn' : '';
    document.getElementById("btn-science").className = category === 'science' ? 'active-btn' : '';

    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    // Filter and render selected category
    const filtered = projects.filter(p => p.category === category);
    
    filtered.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <div class="project-body">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <div class="materials"><strong>What you need:</strong> ${project.materials}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Initial view loads electronics projects
filterProjects('electronics');
