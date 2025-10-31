var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 5){
                counter = 1;
            }
        }, 3000);


const doctors = [

    { image: "../image/photo1.png",
    nom:"Imane REGHAY",
     spésialité: "Dermatologie-Vérnérologie",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Youssef El Amrani",
     spésialité: "Cardiologie",
     age:40,
     disponibiliter:" Non Disponible"
    },
    { nom:"Dr. Omar Bensaid",
     spésialité: "Dermatologie",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Hassan Chafik",
     spésialité: "Pédiatrie",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Salma Zahiri",
     spésialité: "Neurologie",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Rachid Mouline",
     spésialité: "Gynécologie",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Khalid Benali",
     spésialité: "Ophtalmologie",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Mohamed Idrissi",
     spésialité: "Orthopédie",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Adil El Fassi",
     spésialité: "Gastro-entérologie",
     age:40,
     disponibiliter:"Disponible"
    },

    { nom:"Dr. Karim Essafi",
     spésialité: "Médecine générale",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Nadia Benomar",
     spésialité: "Psychiatrie",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Samir Bouzid",
     spésialité: "Dermatologie",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Anouar El Ghali",
     spésialité: "Psychiatrie",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Imane Kabbaj",
     spésialité: "Gynécologie",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Nabil Rahmouni",
     spésialité: "Médecine générale",
     age:40,
     disponibiliter:"Disponible"
    },
    { nom:"Dr. Tariq Lahlou",
     spésialité: "Pédiatrie",
     age:40,
     disponibiliter:"Disponible"
    }

]; 

function searchDoctors(query) {
      query = query.toLowerCase();
      return doctors.filter(doctor =>
        doctor.nom.toLowerCase().includes(query) ||
        doctor.spésialité.toLowerCase().includes(query) ||
        doctor.disponibiliter.toLowerCase().includes(query) ||
        doctor.age.toString().includes(query)
      );
    }

    const input = document.getElementById("search");
    const resultsDiv = document.getElementById("results");

    input.addEventListener("input", () => {
      const query = input.value;
      const results = searchDoctors(query);
      resultsDiv.innerHTML = results.map(doc => `
        <div class="doctor">
          <strong>${doc.nom}</strong><br>
          Spécialité: ${doc.spésialité}<br>
          Âge: ${doc.age} ans<br>
          Disponibilité: ${doc.disponibiliter}
        </div>
      `).join("");
    });

   
   