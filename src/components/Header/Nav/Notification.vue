<template >
    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <span class="material-icons-outlined">
            {{icon}}
        </span>
        <span class="badge badge-number" :class="color">{{cant}}</span>
    </a>
</template>
<script>
export default {
    props: ["icon", "cant", "color"]
}
</script>
<style scoped>
.header-nav .nav-icon {
    font-size: 22px;
    color: #012970;
    margin-right: 25px;
    position: relative;
}

.header-nav .badge-number {
    position: absolute;
    inset: -2px -5px auto auto;
    font-weight: normal;
    font-size: 12px;
    padding: 3px 6px;
}

.header-nav .notifications {
    inset: 8px -15px auto auto !important;
}
</style>