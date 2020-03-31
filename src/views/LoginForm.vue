<template>

<div id="mainParent">
    <div id="loginParent">
        <div class="circular--landscape">
  <img src="images/barack-obama.png" />
</div>
        <div>
            <h3>Welcome</h3>
            <h4>Sign In </h4>
            <h5> to continue portal</h5>
        </div>
    <div>
    <input id="userid" v-model="message" placeholder="User Id"/>
    <input id="pass" v-model="message" placeholder="Password"/>
    <p id="forgot"><a> Forgot ? </a></p>

    <p></p>
    </div>
    <div>
      <router-link to="/student">
    <button  id="loginBtn">Login</button>
      </router-link>
   </div>
    </div>

</div>
</template>

<style scoped>
#mainParent {
width: 100%;
height: 500px;
box-sizing: border-box;
margin-top: 5%;
}

#loginParent {
    background-color: rgb(252, 252, 252);
    box-sizing: border-box;
    position: inline-block;
    
    width: 300px;
-webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #ccc;   
   height: 500px;
   margin: 0 auto;

}
#userid{
    width: 80%;
    height: 20px;
    margin-top: 20px;
}

#pass{
    width: 80%;
    height: 20px;
    margin: 20px;
    margin-bottom: 3px;
} 

#loginBtn{
      font-family: Avenir, Helvetica, Arial, sans-serif;

  transition-duration: 0.4s;
  border-radius: 2px;
  background-color: #f44336;
   border: none;
  color: white;
  padding: 5px 27px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px; 
   background-color: white;
  color: black;
  border: 2px solid rgb(175, 83, 76);
    transition-duration: 0.4s;
      font-weight: 700;

}
#loginBtn:hover {
  background-color: rgb(175, 76, 76); /* Green */
  color: white;
  
}

#forgot {
    display: inline-block;
     width: 100%;
    height: 5px;
    text-align: left;
    padding-left: 10%;
    margin: 0px;
    font-size: 0.8em;
    cursor: -moz-grab;
    
}

.circular--landscape {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  border-radius: 50%;
}

.circular--landscape img {
  width: auto;
  height: 100%;
  margin-left: -50px;
}


</style>