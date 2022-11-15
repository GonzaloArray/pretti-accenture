<template>
    <DivisorSection title="Dashboard" subTitle="Dashboard"/>
    <section class="d-flex flex-column flex-md-row justify-content-between">

        <div class="col-12 col-md-8 me-2">
            <div class="">
                <!-- Send Post -->
                <SendPost />
            </div>
        </div>
        <div class="col-12 col-md-4">
            <section class="col-12">
                <AsideComponent />
                <PremiunComponent />
            </section>
        </div>
    </section>
</template>
<script>
import SendPost from '../components/Post/SendPost.vue'
import DivisorSection from '../components/DivisorSection.vue'
import AsideComponent from '../components/Aside/AsideComponent.vue'
import PremiunComponent from '../components/Premiun/PremiunComponent.vue'

export default {
    components: {
        SendPost,
        DivisorSection,
        AsideComponent,
        PremiunComponent
    },
}
</script>
<style scoped>

</style>