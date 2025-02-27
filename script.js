document.getElementById('costCalculator').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos
    const materialCost = parseFloat(document.getElementById('materialCost').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const time = parseFloat(document.getElementById('time').value);
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const wearAndTear = parseFloat(document.getElementById('wearAndTear').value);
    const electricityCost = parseFloat(document.getElementById('electricityCost').value);
    const consumption = parseFloat(document.getElementById('consumption').value);
    const profitMargin = parseFloat(document.getElementById('

