let affichage = document.getElementById("blague");
console.log(affichage);

const contactApi =  async () => {


    //Data va récup Toutes les données de l'api
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
    const dataTransformed = await response.json();
    console.log('dataTransformed cest juste en dessous');
    console.log(dataTransformed);
    
    const blaguebis = await dataTransformed.value;
    console.log(blaguebis);

    affichage.innerText = blaguebis;

};

contactApi()