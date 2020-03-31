<template>
    <div class=loginDiv>
        <h3 class="loginTitle">Login As </h3>
        <router-link to="/login" id="loginType">

        <button class="loginAsBtn">Student</button>
        <button class="loginProAsBtn">Professor</button>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"LoginBy"
}
</script>
<style scoped>

.loginDiv{
    padding-top: 150px;
}

.loginProAsBtn {
  display: inline-block;
  border-radius: 4px;
  background-color: #f47e1e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 21px;
  padding: 7px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.loginAsBtn {
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 21px;
  padding: 7px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.loginAs span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.loginAsBtn span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.loginAsBtn:hover span {
  padding-right: 25px;
}

.loginAsBtn:hover span:after {
  opacity: 1;
  right: 0;
}
</style>