<template>
<section>
  <h1><strong>Suas artes pelo mundo!</strong></h1>

  <br>
  <DesenhosBuscar />
  <DesenhosLista />
</section>
</template>

<script>
import DesenhosBuscar from "@/components/DesenhosBuscar.vue";
import DesenhosLista from "@/components/DesenhosLista.vue";

export default {
name:"home",
components: {
  DesenhosBuscar,
  DesenhosLista
}
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Splash&display=swap');
h1{
  color: #87f;
  margin-top: 40px;
  text-align: center;
  font-size: 4rem;
  font-family: 'Splash', cursive;
}
h5{
  color: #87f;
  text-align: center;
}

</style>
