<template>
    <div id="optionBoard">
<div id="mainPanel">
<StudentInfo/>
<OptionList/>
</div>

    </div>
</template>


<script>

import OptionList from "@/components/OptionList.vue";
import StudentInfo from "@/components/StudentInfo.vue"
export default {
    name:"StudentIOptionBoard",
    components:{
        OptionList,
        StudentInfo
    }
}
</script>


<style scoped>
body {
    margin: 0;
}
#mainPanel{
    position: fixed;
    left: 0;
    top: 50px;
    margin: 0;
    width: 150px;
    height: 100%;
    background-color: rgb(44, 41, 41);
    color:ivory;
}
</style>