<template>
    <div id="mainParent">
        <DocToolBar/>
<Title/>
<AuthorDetail/>
<QrCode/>
<!-- <TimeStamp/> -->
<VideoDesc/>
<Description/>

    </div>
</template>

<script>
import QrCode from "@/components/document/QrCode.vue";

import Title from "@/components/document/Title.vue";
import AuthorDetail from "@/components/document/AuthorDetail.vue";
// import TimeStamp from "@/components/document/TimeStamp.vue";
import Description from "@/components/document/Description.vue";
import VideoDesc from "@/components/document/VideoDesc.vue";
import DocToolBar from "@/components/document/DocToolBar.vue";
export default {
    name:"ProposalForm",
    components:{QrCode,Title,AuthorDetail,Description,VideoDesc,DocToolBar}
}
</script>

<style scoped>
#mainParent {

word-wrap:break-word;
}








</style>