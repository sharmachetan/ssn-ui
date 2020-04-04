<template>
<div id="studentMain">
    <div id="header">
    <HeaderBar/> </div>
    <div id="left">
    <StudentOptionBoard/>
    </div>
    <div id="centre">
    <ProposalForm/>
    </div>
    <div id="right">
        <DocumentInforBoard/>
    </div>
</div>
</template>
<script>

import ProposalForm from "@/components/ProposalForm.vue"
import StudentOptionBoard from "@/components/StudentOptionBoard.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import DocumentInforBoard from "@/components/document/DocumentInfoBoard.vue";
export default{
    name:"StudentMain",
    components:{
        StudentOptionBoard,
        ProposalForm,
        HeaderBar,
        DocumentInforBoard
    }
}
</script>

<style scoped>
#left{
    height: 100%;
}

#studentMain {
    height: 100%;
    width: 100%;
    background-color: lightcoral;
    position: relative;
}
#header{
    top: 0;
    left: 0px;
}

#centre {
    position: absolute;
    background-color:rgb(237, 239, 248);
height: 500px;
top: 100px;
left: 160px;
width: 70%;
z-index: -2;
}
#right {
    height: 100%;
}
</style>


