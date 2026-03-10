// Heart Rate Data Module for VIS Smart Health Monitoring

// Sample Heart Rate Value (can come from API later)
let heartRate = 72;

// Heart Rate Information
const heartRateInfo = {
    normalRange: "60 - 100 bpm",
    athleteRange: "40 - 60 bpm",
    bradycardia: "< 60 bpm",
    tachycardia: "> 100 bpm"
};

// Function to analyze heart rate
function analyzeHeartRate(hr){

    let status = "";
    let message = "";

    if(hr < 60){
        status = "Low";
        message = "Bradycardia detected. Heart rate below normal range.";
    }
    else if(hr > 100){
        status = "High";
        message = "Tachycardia detected. Heart rate above normal range.";
    }
    else{
        status = "Normal";
        message = "Heart rate is within the healthy range.";
    }

    return {
        status: status,
        message: message
    };
}

// Display heart rate in dashboard
function updateHeartRate(){

    const result = analyzeHeartRate(heartRate);

    const hrElement = document.querySelector(".metric-val");

    if(hrElement){
        hrElement.textContent = heartRate;
    }

    console.log("Heart Rate:", heartRate);
    console.log("Status:", result.status);
    console.log("Message:", result.message);
}

// Simulate real-time heart rate update
function simulateHeartRate(){

    setInterval(() => {

        // generate random heart rate
        heartRate = Math.floor(Math.random() * 60) + 50;

        updateHeartRate();

    }, 3000);

}

// Run when page loads
window.onload = () => {
    updateHeartRate();
    simulateHeartRate();
};
async function loadHRModules() {

  try {

    const response = await fetch("hrData.json");
    const data = await response.json();

    const container = document.getElementById("hrModuleContainer");

    data.modules.forEach(module => {

      const card = document.createElement("div");
      card.classList.add("card", "reveal");

      card.innerHTML = `
        <div class="card-icon">${module.icon}</div>
        <h3>${module.title}</h3>
        <p>${module.description}</p>

        <div style="margin-top:1rem;font-size:0.85rem;color:var(--muted);line-height:1.6;">
          <strong>Features:</strong><br>
          ${module.features.map(f => `• ${f}<br>`).join("")}
        </div>
      `;

      container.appendChild(card);

    });

  } catch (error) {
    console.error("Error fetching HR modules:", error);
  }

}

loadHRModules();