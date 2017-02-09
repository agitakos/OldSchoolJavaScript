var Film = {
    
init: function(nom, annee) {
    this.nom = nom;
    this.annee = annee;
    },

decrire: function() {
    var description = this.nom + " réalisé en " + this.annee;
    return description;
    }

};

var hook = Object.create(Film);
hook.init('Hook', 1991);

var indiana = Object.create(Film);
indiana.init('Indiana Jones', 1984);

console.log(hook.decrire());
console.log(indiana.decrire());


var films = [];
films.push(hook);
films.push(indiana);
films.forEach(function(film) {
    console.log(film);
});