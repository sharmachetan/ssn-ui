<template>
    <div id="nav">
<router-link to="/about" id="about">About</router-link>
      <router-link to="/" id="home">Home</router-link>
       <router-link to="/search" id="search">Search</router-link>
    </div>
</template>

<script>
export default {
    name:"TopBar"
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#about { 
float:centre;
padding-right: 10px;
}

#home {
  float: centre;
  padding-right: 10px;
}

#search {
  float: cetre;
  padding-right: 10px;
}
</style>