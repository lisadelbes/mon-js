// // Scénario
const pme = new Pme(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);
pme.bilanCalculed();

class Pme {
    // 
    constructor(nom, equipe, ventes, coutsFixes, achats) {
        this._nom = nom;
        this._equipe = equipe;
        this._cout = coutsFixes + achats;// On peut assigner directement un calcul ici
        this._ventes = ventes;
        this._bilan = 0;    // attribut en OutMode a calculer
    }

    bilanCalculed() {
        console.log(this._equipe);
        let cumulEquipe = 0;
        console.log(`${this._nom} : Cout Initial : ${this._cout}`);

        //Boucle qui parcourt le tableau des salariés, Employee (equipe)
        //Sur chaque salarié parcouru dans le tableau, on récupère et cumule le cout de ce Salarié
        for (let unSalarie of this._equipe) {
            cumulEquipe += unSalarie.getCout();
        }

        console.log(`${this._nom} : Cout Total Equipe : ${cumulEquipe}`);
        //Ensuite dans les couts de l'entreprise on cumul le cout de toute l'équipe
        this._cout += cumulEquipe;
        console.log(`${this._nom} : VENTES : ${this._ventes}`);
        //Dans les _cout on va avoir les frais fixe + frais achat et 
        //on vient de rajouter en + le cout total d'une equipe
        //donc le bilan de la pme : les ventes moins tous les couts (frais fixes, achat + cout total de l'equipe à l'année)
        this._bilan = this._ventes - this._cout;
        console.log(`${this._nom} : BILAN : ${this._bilan}`);
    }
}