<template>
    <div id="AuthorDiv">
 
<table>
    <tr>
        <td><h5>Author :</h5></td>
        <td>Chetan Sharma</td>
    </tr>
   
    <tr> 
        <td><h5>Department :</h5></td>
        <td>Information And Network Security</td>
    </tr>
    <tr>
<td><h5>Status :</h5></td>
<td>In Progress</td>

    </tr>
      <tr>
<td><h5>Supervised By :</h5></td>
<td>Dr. Reiner Dojen</td>

    </tr>
</table>

    </div>
</template>



<script>
export default {
    
}
</script>

<style scoped>

table tr td {
    padding: 0;
    border-spacing: 0;
    text-align: right;
    border-bottom: 1px solid #ddd;
    height: 0;
    font-size: 10px;
    padding-left: 20px;
    
    
}
table tr td h5{
    height:inherit;
}

table {
    float: left;
}
#AuthorDiv {
    position: relative;
    width: fit-content;

}



</style>