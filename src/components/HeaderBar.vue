<template>
<div id="header">
    <div id="nav">
       
        <img id="menu" src="../assets/menu1.png"/>
         <img id="profile" src="../assets/profile.jpg"/>
    </div>
    </div>    
</template>


<script>
export default {
    name:"HeaderBar"
}
</script>

<style scoped>
body {
    margin:0px;
}
#header {
    display: block;
    width :100%;
    height: 50px;
    margin: 0px;
    padding: 0px;
    position:fixed;
    top: 0%;
    overflow: hidden;
    background-color: rgb(13, 50, 214);
}
#header nav{
    position: inherit;
}
#menu {
    display: inline-block;
    float: right;
    padding: 10px;
    width: 30px;
    height: 30px;
    position: relative;
    
}
#menu.hover {
    cursor: pointer;
}
#profile {

  display: inline-block;
    float: right;
    
    margin: 10px;
    width: 30px;
    height: 30px;
    position: relative;
    
    background-color: ivory;
    
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;

}
</style>