console.log("App.js chargé avec succès.");
// Liste des candidats
const candidates = [
    {
      name: "CROIZET Benjamin",
      video: "https://youtube.com/embed/InMcm5gqHUs",
      description: "3 ans d'expérience en marketing digital. Compétences : SEO, Social Media.",
    },
    {
      name: "JACQUET Chloe",
      video: "https://youtube.com/embed/lVCmohpcvm4",
      description: "5 ans d'expérience en Marketing Communication.",
    },
    {
      name: "BOUDA Manon",
      video: "https://youtube.com/embed/PxVec_f-S_s",
      description: "2 ans d'expérience en Marketing communication. Compétences : Photoshop, Illustrator.",
    },
    {
      name: "SURGET Camille",
      video: "https://youtube.com/embed/EoB6HdveXYE",
      description: "2 ans d'expérience en montage vidéo.",
      },
    {
      name: "GAILLARD Marie-Clervy",
      video: "https://youtube.com/embed/v3fZsh51gu8",
      description: "3 ans d'expérience en tant que chargée de communication.",
    }

  ];
  
  // Index du candidat affiché
  let currentIndex = 0;
  
  // Conteneur principal
  const candidateContainer = document.getElementById("candidate-container");
  
  // Fonction pour afficher un candidat
  function displayCandidate(index) {
    const candidate = candidates[index];
    candidateContainer.innerHTML = `
      <div class="candidate-card">
        <iframe
          class="candidate-video"
          src="${candidate.video}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <h3>${candidate.name}</h3>
        <p>${candidate.description}</p>
        <div class="actions">
          <button class="like" onclick="likeCandidate()">❤️</button>
          <button class="reject" onclick="rejectCandidate()">❌</button>
          <button class="contact" onclick="contactCandidate()">📞</button>
        </div>
      </div>
    `;
  }
  // Actions
  function likeCandidate() {
    alert("Vous avez liké ce candidat !");
    nextCandidate();
  }
  
  function rejectCandidate() {
    alert("Vous avez rejeté ce candidat.");
    nextCandidate();
  }
  
  function contactCandidate() {
    alert("Vous avez contacté ce candidat !");
    nextCandidate();
  }
  
  // Passer au candidat suivant
  function nextCandidate() {
    currentIndex++;
    if (currentIndex < candidates.length) {
      displayCandidate(currentIndex);
    } else {
      candidateContainer.innerHTML = `<p>Aucun autre candidat disponible.</p>`;
    }
  }
  
  // Affiche le premier candidat
  displayCandidate(currentIndex);
  