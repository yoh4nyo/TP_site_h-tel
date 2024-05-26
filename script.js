// Button ajouter
function addition(id) {
    const input = document.getElementById(id);
    const currentValue = parseInt(input.value);
    input.value = currentValue + 1;

    if (id === 'enfant_nombre') {
        age_enfant();
    }
}

// Button enlever
function soustraction(id) {
    const input = document.getElementById(id);
    const currentValue = parseInt(input.value);
    if (currentValue > 0) {
        input.value = currentValue - 1;
    }

    if (id === 'enfant_nombre') {
        age_enfant();
    }
}

// Ajout enfant
function age_enfant() {
    const enfantNombre = parseInt(document.getElementById('enfant_nombre').value);
    const enfantAgesContainer = document.getElementById('enfant-ages');
    enfantAgesContainer.innerHTML = '';

    if (enfantNombre > 0) {
        for (let i = 1; i <= enfantNombre; i++) {
            const ageLabel = document.createElement('label');
            ageLabel.innerHTML = `Âge de l'enfant ${i}: `;
            const ageInput = document.createElement('input');
            ageInput.type = 'number';
            ageInput.id = `enfant_age_${i}`;
            ageInput.min = 0;
            ageInput.max = 18;
            enfantAgesContainer.appendChild(ageLabel);
            enfantAgesContainer.appendChild(ageInput);
            enfantAgesContainer.appendChild(document.createElement('br'));
        }
    }
}

// Button effacer
function effacer() {
    document.getElementById("sejour").value = null;
    document.getElementById("depart").value = null;
    document.getElementById("arrivee").value = null;
    document.getElementById("adulte_nombre").value = 0;
    document.getElementById("enfant_nombre").value = 0;
    document.getElementById("chambre_nombre").value = 0;
    document.getElementById("travail").checked = false;
    document.getElementById("recapitulatif").innerHTML = "";
    document.getElementById("enfant-ages").innerHTML = "";
}

// Récapitulatif réservation
document.getElementById("btn_rechercher").addEventListener("click", function() {
    const sejour = document.getElementById("sejour").value;
    const depart = document.getElementById("depart").value;
    const arrivee = document.getElementById("arrivee").value;
    const adulteNombre = document.getElementById("adulte_nombre").value;
    const enfantNombre = document.getElementById("enfant_nombre").value;
    const chambreNombre = document.getElementById("chambre_nombre").value;
    const travail = document.getElementById("travail").checked ? "Oui" : "Non";

    // vérification date
    const departDate = new Date(depart);
    const arriveeDate = new Date(arrivee);

    if (departDate >= arriveeDate) {
        alert("La date de départ doit être antérieure à la date d'arrivée.");
        return;
    }

    let childAges = '';
    for (let i = 1; i <= enfantNombre; i++) {
        const age = document.getElementById(`enfant_age_${i}`).value;
        childAges += `<p><strong>Âge de l'enfant ${i}:</strong> ${age} ans</p> </br>`;
    }

    const recapitulatif = `
        <p><strong>Lieu de séjour:</strong> ${sejour}</p> </br>
        <p><strong>Départ:</strong> ${depart}</p> </br>
        <p><strong>Arrivée:</strong> ${arrivee}</p> </br>
        <p><strong>Nombre d'adultes:</strong> ${adulteNombre}</p> </br>
        <p><strong>Nombre d'enfants:</strong> ${enfantNombre}</p> </br>
        ${childAges}
        <p><strong>Nombre de chambres:</strong> ${chambreNombre}</p> </br>
        <p><strong>Voyage pour le travail:</strong> ${travail}</p> </br>
    `;

    document.getElementById("recapitulatif").innerHTML = recapitulatif;
});
