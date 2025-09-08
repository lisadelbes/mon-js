import { timelineSteps } from './timelineData.js';

export function renderTimeline(idparent) {

    let divParent = document.querySelector(idparent);
    console.log(divParent);

    for(let i=0;i<timelineSteps.length;i++){
      console.log("valeurs côté :", timelineSteps[i].side);

// vérification de l'import des data
    console.log('contenu : ',timelineSteps[i]);

// version graphique récupéré sur Daisyui issu du fichier html associé
    let box = document.createElement("li");
    box.innerHTML = `
    <div class="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div class="timeline-${timelineSteps[i].side} mb-10 ${timelineSteps[i].side === "start" ? "md:text-end" : "md:text-start"}">
      <time class="font-mono italic">${timelineSteps[i].year}</time>
      <div class="text-lg font-black">${timelineSteps[i].title}</div>
      ${timelineSteps[i].text}
    </div>
    <hr />
    `
    divParent.append(box);
    };

    }

