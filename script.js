function getHeartRate() {

fetch("http://localhost:3000/api/heartrate")
.then(response => response.json())
.then(data => {

document.getElementById("result").innerHTML = `
<h3>Normal Range: ${data.normalRange}</h3>
<p>Athletes: ${data.athletes}</p>
<p>Children: ${data.children}</p>
<p>Bradycardia: ${data.bradycardia}</p>
<p>Tachycardia: ${data.tachycardia}</p>
<p>${data.description}</p>
`;

})
.catch(error => {
console.log("Error fetching API:", error);
});

}