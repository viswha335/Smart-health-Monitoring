async function loadModules() {

const response = await fetch("data.json");
const data = await response.json();

const container = document.getElementById("moduleContainer");

data.modules.forEach(module => {

const card = document.createElement("div");
card.classList.add("card", "reveal");

card.innerHTML = `
<div class="card-icon">${module.icon}</div>
<h3>${module.title}</h3>
<p>${module.description}</p>

<div style="margin-top:1rem;font-size:0.85rem;color:var(--muted);line-height:1.6;">
<strong>Capabilities:</strong><br>
${module.features.map(f => `• ${f}<br>`).join("")}
</div>
`;

container.appendChild(card);

});

}

loadModules();