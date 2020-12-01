// Descrizione:
// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.

const dischi = "https://flynn.boolean.careers/exercises/api/array/music";

var app = new Vue({
  el: "#root",
  data: {
    libreria: []
  },
  mounted: function() {
    axios.get(dischi )
    .then(risposta => {
      let disco = risposta.data.response;
      // console.log(disco);
      this.libreria = disco;
      console.log(this.libreria);

    });
  }

});
