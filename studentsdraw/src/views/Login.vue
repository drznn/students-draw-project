<template>
<section class="login">
  <div class="container">
    <img id="mail" src="@/assets/email.svg" alt="">
    <img id="key" src="@/assets/key.svg" alt="">
  <h5>Login</h5>
  <br>
  <form>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"></label>
      <input type="email" class="form-control" id="email" placeholder="Digite aqui o seu e-mail">
    </div>
    <br>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"></label>
      <input type="password" class="form-control" id="password" placeholder="Digite aqui a sua senha">
      <br>
      <button class="btn btn-primary" @click="logar">Entrar</button>
      <button class="btn btn-primary" id="criar" @click="criar">Criar conta</button>
    </div>
    <br>
</form>
<br>
<p class="perdeu">
  <a href="/" target="_blank"> Perdeu a senha? Clique aqui. </a>
</p>
</div>
<div class="aux">
</div>
</section>
</template>

<script>
export default {
  data(){
    return{
      login: {
        email:"",
        senha:""
      }
    };
  },
  methods: {
    logar() {
      this.$store.dispatch('getUsuario', this.login.email);
    }
  }
};
</script>

<style scoped>

#email{
   position: absolute;
    left: 18%;
    width: 250px;
    }

#password{
   position: absolute;
    left: 18%;
    width: 250px;
}

.form-control{
  display: flex;
  width: 150%;
  margin: 0 auto;
}
.btn-primary{
  position: absolute;
  bottom: 5%;
  right: 60%;
  background-color: #87f;
  border: 0;
  display: flex;
  margin: 0 auto;
}

.btn-primary:hover{
  background-color: #87f;
  border: 0;
}

a{
  display: flex;
  margin: 0 auto;
  color: #87f;
  text-decoration: none;
  text-align: center;
}
h5{
  position: absolute;
  top: 20%;
  text-align: center;
}
.container{ 
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%,-50%);
    background: #fff;
    width: 350px;
    height: 350px;
    border-radius: 20px;
    box-shadow: 0px 10px 10px 10px rgb(110, 110, 110,.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.aux{
    position: absolute;
    left: 10%;
    bottom: 15%;
    width: 100%;
}
#mail, #key{
  color: #85f;
  width:20px;
}

#mail{
  position:absolute;
  left: 7%;
  top: 36%;
}

#key{
  position:absolute;
  left: 7%;
  top: 54%;
}
#criar{
  position: relative;
  left: 50px;
  bottom: -134px;
}
</style>