<template>
<div>
  <ul v-if="paginasTotal > 1" >
    <li v-for="pagina in paginas" :key="pagina">
    <router-link :to="{query: {_page: pagina}}">{{pagina}}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default{
  props: {
  desenhosPorPagina:{
    type: Number,
    default: 1,
  },
  desenhosTotal: {
    type: Number,
    default: 1
  }
  },
  methods:{
    query(pagina){
      return{
        ...this.$route.query,
        _page: pagina
      };
    }
  },
    computed: {
      paginas(){
        const current = Number(this.$route.query._page); //pagina atual
        const range = 9;
        const offset = Math.ceil(range / 2);
        const total = this.paginasTotal;
        const pagesArray = [];

        for (let i = 1; i <= total; i++){
          pagesArray.push(i);
        }
        pagesArray.splice(0, current - offset); //recebe dois argumentos, de onde começa a rmover item do array e até onde removo
        return pagesArray;

      },
    paginasTotal(){
      const total = this.desenhosTotal / this.desenhosPorPagina;
      return total !== Infinity ? Math.ceil(total) : 0; //para arredondar
      }
  }
};
</script>

<style scoped>
ul{
  grid-column: 1/-4;
}
li{
  display: inline-block; /*ficar um do lado do outro */
}
li a{
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
  text-decoration: none;
  text-align: center;
}
li a.router-link-exact-active,
li a:hover{
  background: #87f;
  color: white;
}
</style>