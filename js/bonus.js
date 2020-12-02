const dischi = "https://flynn.boolean.careers/exercises/api/array/music";

var app = new Vue({
  el: "#root",
  data: {
    genere: "",
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
  },

});
