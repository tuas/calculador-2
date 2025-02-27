document.getElementById('costCalculator').addEventListener('submit', function(event) {
    event.preventDefault();

    const materialCost = parseFloat(document.getElementById('materialCost').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const time = parseFloat(document.getElementById('time').value);
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);

    const materialTotal = materialCost * weight;
    const laborTotal = hourlyRate * time;
    const totalCost = materialTotal + laborTotal;

    document.getElementById('totalCost').innerText = `Costo Total: $${totalCost.toFixed(2)}`;
});
