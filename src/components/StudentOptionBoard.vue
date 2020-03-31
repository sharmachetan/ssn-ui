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
#mainPanel{
    position: fixed;
    width: 150px;
    height: 400px;
    background-color: rgb(44, 41, 41);
    color:ivory;
}
</style>