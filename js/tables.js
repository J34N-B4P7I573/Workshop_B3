document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('multiplication-tables');

    for (let i = 1; i <= 10; i++) {
        const table = document.createElement('div');
        table.className = 'table';
        table.innerHTML = `<h3>Table de ${i}</h3>`;

        for (let j = 1; j <= 10; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerText = `${i} x ${j} = ${i * j}`;
            table.appendChild(cell);
        }

        container.appendChild(table);
    }
});
