<template>
<div id="main">
  
 <div><h3>Proposal</h3><hr></div>
  <div>Create New</div>
  <div>List Proposal</div>
  <div>Notifications </div>
    <div>Search </div>
    <div> Notes </div>


  
</div>
</template>

<script>
export default {
    name:"optionList"
}
</script>

<style scoped>
#main div {
    width: inherit;
    position: relative;
    padding: 10px;

margin: 10px;
display: block;
text-align: left;
  transition-duration: 0.4s;
  border-radius: 8px;
}
#main div:hover{

    background-color: rgb(14, 14, 14); /* Green */
    color: rgb(236, 234, 234);
}

</style>