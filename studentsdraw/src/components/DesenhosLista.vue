<template>
  <section class="desenho-container">
    <div v-if="desenhos" class="desenhos2">
    <div class="desenhos" v-for="publicacao in desenhos" :key="publicacao.id">
    <router-link :to="{name: 'publicacao', params: {id: publicacao.id}}">
        <img v-if="publicacao.foto" :src="publicacao.foto[0].src" class="card-img-top" alt="" />
        
          <!-- <h3 class="titulo">{{ publicacao.legenda }}</h3> -->
          <a class="tags" id="tag" href="/?q={{publicacao.tags}}">{{publicacao.tags}}</a>
          
          <div class="faixa">
            <p>burlando</p>
          </div>
          </router-link>
    </div>
    <DesenhoPaginar :desenhosTotal="desenhosTotal" :desenhosPorPagina ="desenhosPorPagina"/>
    </div>
    <!-- aqui é uma tag para quando nao tiver nenhuma publicação -->
  </section>
</template>
<script>
import { api } from "@/services.js"
import { serialize } from "@/helpers.js"
import DesenhoPaginar from "@/components/DesenhoPaginar.vue"

export default {
  name: "DesenhosLista",
  components:{
    DesenhoPaginar
  },
  data() {
    return {
      desenhos: null,
      desenhosPorPagina: 6,
      desenhosTotal: 0,
    };
  },
computed: {
  url(){
    const query = serialize(this.$route.query);
    return `/publicacao?_limit=${this.desenhosPorPagina}${query}`; 
    //definindo a quantidade de publicações que irá aparecer para depois paginar.
  }
},
  methods: {
    //vai ocorrer sempre que for criado
    getDesenhos() {
      //base do meu site, vai ser sempre igual e não vai mudar
      api.get(this.url).then(response => {
        // linha para paginar abaixo
        this.desenhosTotal = Number(response.headers["x-total-count"]);
      this.desenhos = response.data;
      });
    }
  },
  watch:{
url(){
  this.getDesenhos();
}
  },
  created() {
    this.getDesenhos();
  },
};
</script>
<style scoped>
.desenhos-container{
  max-width: 2000px;
  margin: 0 auto;
}


.desenhos2{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
  }

  .desenhos{
    height: 500px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    padding: 10px;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .desenhos:hover{
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    transform: scale(1.1);
    position: relative;
    z-index: 1;
  }
  .tags{
    text-decoration: none;
    background-color: white;
    color: #87f;
    padding: 5px;
    border-radius: 8px;
    height: 30px;
    text-align: center;
    position: relative;
    top: 452px;
    left: 10px;
  }

  .desenhos img{
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .faixa{
    background-color: #87f;
    position: relative;
    top: 420px;
    color: #87f;
    height: 40px;
    z-index: -1;
  }
</style>
