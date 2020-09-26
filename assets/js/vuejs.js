Vue.component('fiche-produit', {
    template: `<div class="col-3">
        <p class="jumbotron"> {{ nom }} 
        <button v-on:click="passer_commande(nom)" v-if="role == 'commande'">Commander !</button>
        <button v-on:click="supprimer_commande(nom)" v-if="role == 'recap'">Supprimer !</button>
       <img class="img-fluid img" src="assets/img/pizza.jpg" v-if="nom == 'Pizza'" >
       <img class="img-fluid img" src="assets/img/tacos.jpg" v-if="nom == 'Tacos'" >
       <img class="img-fluid img" src="assets/img/hamburger.jpg" v-if="nom == 'Hamburger'" >
       <img class="img-fluid img" src="assets/img/chesseburger.jpg" v-if="nom == 'Chesseburger'" >
       <style>
           .img {
               height: 50px;
               width: 50px;
           }
       </style>

    </p> 
    </div>`,
    props: ['nom', 'role'],
    methods:{
        passer_commande: function(produit){
            this.$emit('commande-passee', produit) //emit = emettre
        },
        supprimer_commande: function(produit) {
            this.$emit('commande-supprime', produit)
        }
    }
})

var app = new Vue({  // création de l'instance vue qui aura en paramètre notre balise racine
    el:"#app", //L'élément est donc mon app dans la div racine
    data: { // La ou on va jouer avec les données
        user: "",
        produits: ["Pizza", "Hamburger", "Chesseburger", "Tacos"],
        commandes:[],
        affichage: "display-1"
    },
    methods: { //va contenir toutes les fonctions de l'instance
        commander: function(produit){
            this.commandes.push(produit);
        },
        supprimer: function(produit) {
           var index = this.commandes.indexOf(produit);
            this.commandes.splice(index, 1);
        }
    }
})