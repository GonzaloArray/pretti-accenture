<template>
    <section class="row">
        <DivisorSection title="Dashboard" subTitle="Dashboard"/>

        <div class="col-12 col-md-8">
            <div class="row g-2">
                <!-- Send Post -->
                <SendPost />
            </div>
        </div>
        <div class="col-12 col-md-4">
            <section class="col-12">
                <div class="py-5 bg-light rounded-3 shadow">
                    Hola vue
                </div>
            </section>
        </div>

    </section>
</template>
<script>
import SendPost from '../components/Post/SendPost.vue'
import DivisorSection from '../components/DivisorSection.vue'

export default {
    components: {
        SendPost,
        DivisorSection
    },
}
</script>
<style scoped>

</style>