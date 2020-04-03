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

#optionBoard{
      left: 0;
          top: 40px;
        position: fixed;
       width: 150px;
    height: inherit;

}
#mainPanel{
    /* position: fixed; */
    margin: 0;
    width: inherit;
    height: inherit;
    background-color: rgb(44, 41, 41);
    color:ivory;
}
</style>