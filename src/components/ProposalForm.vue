<template>
    <div id="mainParent">
<Title/>
<AuthorDetail/>
<TimeStamp/>
<Description/>
<VideoDesc/>
    </div>
</template>

<script>
import Title from "@/components/document/Title.vue";
import AuthorDetail from "@/components/document/AuthorDetail.vue";
import TimeStamp from "@/components/document/TimeStamp.vue";
import Description from "@/components/document/Description.vue";
import VideoDesc from "@/components/document/VideoDesc.vue";
export default {
    name:"ProposalForm",
    components:{Title,AuthorDetail,TimeStamp,Description,VideoDesc}
}
</script>

<style scoped>
#mainParent {

word-wrap:break-word;
}








</style>