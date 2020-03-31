<template>
  <div id="mainSearch">
    <p>Search Proposals By Title</p>
    <input id="inputProSearch" placeholder="Enter Proposal Id"/>
    <!-- <img src="../assests/camera.png" alt="camera"/> -->
        <p id="ProsalIdScan">Scan Proposal Code</p>

    <div id="CameraDiv">
   
    <img alt="Vue logo" src="../assets/camera.png" />
    </div>
    <!-- <video id="video" width="640" height="480" autoplay></video> -->
  </div>
</template>

<script>
export default {};
</script>


<style scoped>

#mainSearch {
width: 100%;
height: 200px;
box-sizing: border-box;
}
#mainSearch p{
width: 80%;
display: inline-block;
text-align: left;
}

#mainSearch img {
    width: 50px;
    height: 50px;
    cursor: crosshair;
    
    }
#CameraDiv{
    display: inline-block;
    width: 80%;
    }


#inputProSearch {

width: 80%;
display: inline-block;
height: 30px;

}
</style>