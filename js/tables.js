//Ce script ajoute un listener d'événements pour exécuter du code une fois que le DOM est chargé. 
//Il crée et affiche des tables de multiplication de 1 à 10 dans un élément conteneur. 
//Pour chaque table, il génère un div avec un titre et 10 cellules, chacune affichant le produit d'une multiplication (i x j).
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
