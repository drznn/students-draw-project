<template>
<section>
<div v-if="produto" class="publicacao">
<ul class="foto" v-if="publicacaofotos">
  <li v-for="(foto, index) in publicacao.foto" :key="key">
  <img :src="foto.src">
</li>
</ul>
<div class="info">
<p class="legenda">{{publicacao.legenda}}</p>
</div>
<p>Desenho {{publicacao}}</p>
</div>
</section>
</template>
<script>
import { api } from "@/services.js";


export default{
  name:"Publicacao",
  props: ["id"],
  data(){
    return{
      desenho: null
    };
  },
  methods: {
    getDesenhos(){
      api.get(`/publicacao/${this.id}`).then(response=>{
        this.produto = response.data;
      });
    }
  },
  created(){
    this.getDesenhos();
  }
}
</script>

<style>
</style>