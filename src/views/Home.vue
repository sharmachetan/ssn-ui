<template>

  <div class="home">
      <TopBar/>

    <img alt="Vue logo" src="../assets/UlLogo.png" />
    <HelloWorld msg="Welcome to Research Project Portal" />
    <LoginAs/>
    <!-- <loginForm/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import loginForm from "@/components/LoginForm.vue";
import LoginAs from "@/components/LoginAs.vue";
import TopBar from "@/components/TopBar.vue";


export default {
  name: "Home",
  components: {
    HelloWorld,
    LoginAs,
    TopBar
    // loginForm

  }
};
</script>

<style scoped>

</style>
