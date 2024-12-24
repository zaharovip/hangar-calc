document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const costPerMeter = parseFloat(document.getElementById('cost-per-meter').value);

    if (!length || !width || !costPerMeter) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    // Рассчитываем общую площадь
    const area = length * width;

    // Форматируем площадь с разделителями
    const formattedArea = area.toLocaleString('ru-RU') + ' м²';

    // Рассчитываем общую стоимость
    const totalCost = area * costPerMeter;

    // Форматируем стоимость с разделителями
    const formattedTotalCost = totalCost.toLocaleString('ru-RU') + ' руб.';

    // Формируем результат
    document.getElementById('result').innerHTML = `
        Общая площадь ангара: ${formattedArea}<br />
        Стоимость ангара: ${formattedTotalCost}.
    `;
});