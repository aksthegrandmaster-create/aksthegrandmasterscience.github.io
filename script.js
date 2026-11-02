const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Hardcoded project dataset (acts as a bulletproof, read-only database)
const projects = [
    {
        title: "Smart Irrigation System",
        category: "Electronics & IoT",
        difficulty: "Medium",
        components: "Arduino Uno, Soil Moisture Sensor, 5V Relay, Water Pump",
        description: "An automated system that detects soil dryness and waters plants automatically without human intervention."
    },
    {
        title: "DIY Solar Phone Charger",
        category: "Renewable Energy",
        difficulty: "Easy",
        components: "6V Solar Panel, 5V Voltage Regulator, USB Port, Connecting Wires",
        description: "A portable, eco-friendly charging station that captures solar energy to power standard mobile devices safely."
    },
    {
        title: "Home Automation with Bluetooth",
        category: "Electronics",
        difficulty: "Hard",
        components: "Arduino, HC-05 Bluetooth Module, 4-Channel Relay, Android/iOS App",
        description: "Control high-voltage home appliances like lights and fans wirelessly using smartphone app commands."
    }
];

// Serve the frontend web page directly
app.get('/', (req, res) => {
    // Generate individual project cards dynamically
    const projectCards = projects.map(project => `
        <div class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-gray-900">${project.title}</h3>
                <span class="px-3 py-1 text-xs font-semibold rounded-full ${
                    project.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    project.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }">${project.difficulty}</span>
            </div>
            <p class="text-xs font-medium uppercase tracking-wider text-indigo-600 mb-2">${project.category}</p>
            <p class="text-gray-600 text-sm mb-4">${project.description}</p>
            <div class="border-t border-gray-100 pt-3">
                <span class="text-xs font-bold text-gray-500 uppercase tracking-wide">Required Components:</span>
                <p class="text-gray-700 text-xs mt-1 italic">${project.components}</p>
            </div>
        </div>
    `).join('');

    // Complete HTML Blueprint
    const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Science & Electronics Project Hub</title>
        <script src="https://tailwindcss.com"></script>
    </head>
    <body class="bg-gray-50 font-sans text-gray-900 antialiased min-h-screen">
        <!-- Header -->
        <header class="bg-indigo-900 text-white shadow-md">
            <div class="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
                <h1 class="text-2xl font-black tracking-tight">Project<span class="text-indigo-400">Hub</span></h1>
                <p class="text-sm font-medium text-indigo-200">Science & Electronics Repository</p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="max-w-6xl mx-auto px-4 py-12">
            <div class="text-center max-w-2xl mx-auto mb-12">
                <h2 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">Explore Tested Engineering Frameworks</h2>
                <p class="text-lg text-gray-500">Comprehensive layout instructions, hardware requirements, and software definitions for innovators.</p>
            </div>

            <!-- Grid Container -->
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                ${projectCards}
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-gray-200 mt-24 py-8">
            <div class="max-w-6xl mx-auto px-4 text-center text-sm text-gray-400">
                &copy; ${new Date().getFullYear()} ProjectHub. Designed for stability and performance.
            </div>
        </footer>
    </body>
    </html>
    `;

    res.send(htmlResponse);
});

// JSON API Endpoint (for raw network data fetching if needed)
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// Start the production engine
app.listen(PORT, () => {
    console.log(`Server is running seamlessly on http://localhost:${PORT}`);
});
