class CompteBancaire {
    
    constructor(nom_client, total_compte){
        this._nom_client = nom_client;
        this._total_compte = total_compte;
        }

    debit(montant) {
        if (montant > this._total_compte){
            console.log("ERREUR = Tu n'as pas assez de sous. Dommage. Try again.");
        } else {
            this._total_compte = this._total_compte - montant;
        }
    }
    
    credit(montant){
        this._total_compte = this._total_compte + montant;
    }

    transfert(montant, destinataire){
        this.debit(montant);
        destinataire.credit(montant);
    }
    
    visualisation(){
        console.log(this._nom_client, this._total_compte);
    }

}

// Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
Alex: new CompteBancaire("Alex", 0),
Clovis: new CompteBancaire("Clovis", 0),
Marco: new CompteBancaire("Marco", 0),
};

// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
for (let key in lesComptes) {
    lesComptes[key].credit(1000);
}

// un retrait de 100 par Alex
lesComptes["Alex"].debit(100);
// un petit virement: Marco Vire 300 à Clovis
lesComptes["Marco"].transfert(300, lesComptes["Clovis"]);
// un petit retrait incorrect (doit déclencher erreur custom) : 
// Alex fait un retrait de 1200
lesComptes["Alex"].debit(1200);
// bilan : faire une déscription de tous les comptes en console (ou DOM ?)

for (let key in lesComptes) {
    lesComptes[key].visualisation();
}
