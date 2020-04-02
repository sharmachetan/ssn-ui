<template>
<div id="studentMain">
    <HeaderBar/>
    <StudentOptionBoard/>
    <ProposalForm/>
</div>
</template>
<script>

import ProposalForm from "@/components/ProposalForm.vue"
import StudentOptionBoard from "@/components/StudentOptionBoard.vue";
import HeaderBar from "@/components/HeaderBar.vue";
export default{
    name:"StudentMain",
    components:{
        StudentOptionBoard,
        ProposalForm,
        HeaderBar
    }
}
</script>

<style scoped>

</style>>


