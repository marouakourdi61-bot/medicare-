// ------------------ CARROUSEL ------------------
var counter = 1;
setInterval(function(){
    const radio = document.getElementById('radio' + counter);
    if(radio) radio.checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 3000);


// ------------------ DONNÉES ------------------
const doctors = [
    { img: "../image/photo1.png",
      nom:"Imane REGHAY",
      spésialité:"Dermatologie-Vérnérologie",
      disponibiliter:"Disponible" },
    { img: "../image/photo2.webp",
      nom:"Dr. Youssef El Amrani",
      spésialité:"Cardiologie",
       disponibiliter:"Non Disponible" },
    { img: "../image/photo3.jpg",
      nom:"Dr. Omar Bensaid",
       spésialité:"Dermatologie",
       disponibiliter:"Disponible" },
    { img: "../image/photo4.jpg",
      nom:"Dr. Hassan Chafik",
      spésialité:"Pédiatrie",
      disponibiliter:"Disponible" },
    { img: "../image/photo5.jpg",
      nom:"Dr. Salma Zahiri",
      spésialité:"Neurologie",
      disponibiliter:"Disponible" },
    { img: "../image/photo6.webp",
      nom:"Dr. Rachid Mouline",
      spésialité:"Gynécologie",
      disponibiliter:"Disponible" },
    { img: "../image/photo7.jpg",
      nom:"Dr. Khalid Benali",
      spésialité:"Ophtalmologie",
      disponibiliter:"Non Disponible" },
    { img: "../image/photo8.jpg",
      nom:"Dr. Mohamed Idrissi",
      spésialité:"Orthopédie",
      disponibiliter:"Disponible" },
    { img: "../image/photo9.jpg",
      nom:"Dr. Adil El Fassi",
      spésialité:"Gastro-entérologie",
      disponibiliter:"Disponible" },
    { img: "../image/photo10.jpg",
      nom:"Dr. Karim Essafi",
      spésialité:"Médecine générale",
      disponibiliter:"Disponible" },
    { img: "../image/photo11.jpeg",
      nom:"Dr. Nadia Benomar",
      spésialité:"Psychiatrie",
      disponibiliter:"Disponible" },
    { img: "../image/photo12.jpg",
      nom:"Dr. Samir Bouzid",
      spésialité:"Dermatologie",
      disponibiliter:"Disponible" },
    { img: "../image/photo13.jpg",
      nom:"Dr. Anouar El Ghali",
      spésialité:"Psychiatrie",
      disponibiliter:"Disponible" },
    { img: "../image/photo14.jpg",
      nom:"Dr. Imane Kabbaj",
      spésialité:"Gynécologie",
      disponibiliter:"Non Disponible" },
    { img: "../image/phot15.jpg",
      nom:"Dr. Nabil Rahmouni",
      spésialité:"Médecine générale",
      disponibiliter:"Disponible" },
    { img: "../image/photo16.webp",
      nom:"Dr. Tariq Lahlou",
      spésialité:"Pédiatrie",
      disponibiliter:"Disponible" }
];


// ------------------ AFFICHAGE MÉDECINS ------------------
const container = document.getElementById("doctors-container");
const searchInput = document.getElementById("search");

function displayDoctors(list) {
    if (!container) return;
    container.innerHTML = "";
    
    if (list.length === 0) {
        container.innerHTML = "<p class='not-found'>Aucun médecin trouvé.</p>";
        return;
    }
    
    list.forEach(doc => {
        const card = document.createElement("div");
        card.className = "doctor-card";
        card.innerHTML = `
            <img src="${doc.img}" alt="${doc.nom}">
            <div class="doctor-nom">${doc.nom}</div>
            <div class="doctor-spésialité">${doc.spésialité}</div>
            <div class="doctor-disponibiliter">${doc.disponibiliter}</div>
        `;
        container.appendChild(card);
    });
}


// ------------------ AFFICHAGE INITIAL ------------------
// Afficher tous les médecins normalement
displayDoctors(doctors);


// ------------------ RECHERCHE DANS MÉDECINS ------------------
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase().trim();
        
        if (value === "") {
            // Afficher tous les médecins
            displayDoctors(doctors);
            return;
        }
        
        // Filtrer les médecins
        const filtered = doctors.filter(doc =>
            doc.nom.toLowerCase().includes(value) ||
            doc.spésialité.toLowerCase().includes(value)
        );
        
        // Afficher les résultats
        displayDoctors(filtered);
    });
}






// ------------------ ARTICLES ------------------
const articles = [
    { titre: "Le sommeil, un allié du bien-être",
      contenu: "Dormir suffisamment est essentiel pour le corps et l'esprit. Le manque de sommeil provoque de la fatigue, du stress et une baisse de concentration." },
    { titre: "L'importance d'une alimentation équilibrée",
      contenu: "Une alimentation saine est la base d'une bonne santé. Manger des fruits, légumes et protéines permet de renforcer le système immunitaire." },
    { titre: "L'activité physique au quotidien",
      contenu: "Bouger chaque jour est bénéfique pour la santé physique et mentale. Même 30 minutes d'exercice par jour peuvent faire une grande différence." }
];

const articlesContainer = document.getElementById("articles-container");
const searhInput = document.getElementById("search");

function displayArticles(list) {
    if (!articlesContainer) return;
    articlesContainer.innerHTML = "";
    if (list.length === 0) {
        articlesContainer.innerHTML = "<p class='not-found'>Aucun article trouvé.</p>";
        return;
    }

    list.forEach(article => {
        const card = document.createElement("div");
        card.className = "article-card";
        card.innerHTML = `
            <h2 class="article-title">${article.titre}</h2>
            <p class="article-content">${article.contenu}</p>
        `;
        articlesContainer.appendChild(card);
    });
}

// Afficher au chargement
displayArticles(articles);


// ------------------ RECHERCHE ARTICLES ------------------
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase().trim();
        
        if (value === "") {
            displayArticles(articles);
            return;
        }
        
        const filtered = articles.filter(a =>
            a.titre.toLowerCase().includes(value) ||
            a.contenu.toLowerCase().includes(value)
        );
        
        displayArticles(filtered);
    });
}



