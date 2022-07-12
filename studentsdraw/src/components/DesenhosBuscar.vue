<template>
<form>
  <input name="busca" placeholder ="Buscar... (Ex: anime, animais, flores, séries, futebol)" class="form-control" id="busca" type="text" v-model="busca">
  <br>
  <input type="submit" class="btn btn-primary" id="lupa" value="Buscar" @click.prevent="buscarDesenhos">
</form>
<br>
</template>

<script>
export default{
data(){
  return{
    busca:""
  };
},
methods: {
  buscarDesenhos(){
    //esse método serve para que o que você procurar no formulário, apareça no site como "q = {nome da busca}"
    this.$router.push({query: {q: this.busca}});
  }
}

};
</script>

<style scoped>
.form-control{
  display: flex;
  width: 55%;
  height: 50px;
  margin: 0 auto;
  border-radius: 20px;
}

.btn-primary{
  background-color:#87f ;
  display: flex;
  margin: 0 auto;
  text-align: center;
  border: none;
}
.btn-primary:hover{
  background-color: #87f;
}

#busca:focus,
#busca:hover {
  transform: scale(1.1);
}

.card2{
  margin-left: 300px;
}
</style>