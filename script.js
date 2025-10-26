// --- Définition du Programme de Musculation Complet (Exemple de 2 semaines) ---
const program = [
    { 
        name: "Fondation (B1)", 
        sessions: [
            { day: "Dimanche", name: "Dos + Jambes Lourdes", exercises: 4 },
            { day: "Lundi", name: "Repos Actif (Marche/Étirements)", exercises: 0 },
            { day: "Mardi", name: "Pectoraux + Biceps", exercises: 5 },
            { day: "Mercredi", name: "Cardio Modéré (Course à pied ou Natation)", exercises: 1 },
            { day: "Jeudi", name: "Épaules + Triceps + Abdominaux", exercises: 6 },
            { day: "Vendredi", name: "Repos Complet", exercises: 0 },
            { day: "Samedi", name: "Jambes Légères + Fessiers", exercises: 3 }
        ]
    },
    { 
        name: "Force (B2)", 
        sessions: [
            // Ces données devraient idéalement être utilisées pour générer le HTML dynamiquement
            { day: "Dimanche", name: "Pectoraux Lourd + Épaules", exercises: 5 },
            { day: "Lundi", name: "Repos", exercises: 0 },
            { day: "Mardi", name: "Dos Lourd + Bras", exercises: 6 },
            { day: "Mercredi", name: "HIIT Court", exercises: 1 },
            { day: "Jeudi", name: "Jambes Lourd + Abdominaux", exercises: 7 },
            { day: "Vendredi", name: "Repos", exercises: 0 },
            { day: "Samedi", name: "Full Body Léger", exercises: 5 }
        ]
    },
    // Vous pouvez continuer le programme ici jusqu'à 51 semaines
];

let currentWeek = 1;
const totalWeeks = program.length;

// --- Fonctions de l'Application ---

/**
 * Met à jour les éléments d'affichage de la semaine actuelle et du nom de bloc.
 */
function updateDisplay() {
    const weekIndex = currentWeek - 1;
    
    // Vérifie que l'index est valide
    if (weekIndex >= 0 && weekIndex < totalWeeks) {
        document.getElementById('weekDisplay').textContent = currentWeek;
        document.getElementById('blockName').textContent = program[weekIndex].name;
        
        // BONUS: Afficher les jours de la semaine dynamiquement (nécessiterait plus de code HTML)
    }
}

/**
 * Change la semaine affichée par incrément (+1 ou -1).
 * @param {number} direction - 1 pour la semaine suivante, -1 pour la précédente.
 */
function changeWeek(direction) {
    let newWeek = currentWeek + direction;
    
    if (newWeek >= 1 && newWeek <= totalWeeks) {
        currentWeek = newWeek;
        updateDisplay();
    } else {
        alert("Vous êtes au début ou à la fin du programme de " + totalWeeks + " semaines !");
    }
}

/**
 * Fonction appelée lors du clic sur une carte de session.
 * @param {string} dayName - Le nom du jour de la session.
 */
function startWorkout(dayName) {
    const weekIndex = currentWeek - 1;
    const session = program[weekIndex].sessions.find(s => s.day.toLowerCase().startsWith(dayName.toLowerCase()));

    if (session) {
        alert(`Démarrage de la séance du ${session.day} : ${session.name} (${session.exercises} exercices).`);
        // Ici, vous coderiez la navigation vers la page de chronométrage
    }
}

// Initialisation : Lance la mise à jour de l'affichage au chargement de la page
document.addEventListener('DOMContentLoaded', updateDisplay);

// Rendre les fonctions accessibles depuis le HTML global (pour les boutons)
window.changeWeek = changeWeek;
window.startWorkout = startWorkout;
