<template>
    <div id="infoBoard">
<div id="activity">
    <h5>Activity</h5>
</div>
<div id="notes">
    <h5>Notes</h5>
</div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
#infoBoard{
    position: relative;
      right: 0;
          top: 50px;
        position: fixed;
       width: 240px;
    height: inherit;
    background-color: rgb(219, 245, 238);

}
#activity {

}
#notes{
    position:absolute;
    top:300px;
    left: 40%;
}
</style>