<template>
    <section class="col-12">
        <h1 class="fs-5">{{title}}</h1>
        <h2 class="fs-7 fw-bold mb-3"><span>Home</span> / {{subTitle}}</h2>
    </section>
</template>
<script>
    export default{
        props: ["title", "subTitle"]
    }
</script>