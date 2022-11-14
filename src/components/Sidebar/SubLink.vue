<template>
    <li>
        <a href="#">
            <span class="material-icons-outlined fuente me-2">
                {{ icon }}
            </span>
            <span>{{ title }}</span>
        </a>
    </li>
</template>
<script>
export default {
    props: ["icon", "title"]
}
</script>
<style scoped>

a {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: #012970;
    transition: 0.3;
    padding: 10px 0 10px 40px;
    transition: 0.3s;
}
a:hover,
a.active {
    color: #4154f1;
}

a.active span{
    background-color: #4154f1;
}
.fuente{
    font-size: 8px;
    opacity: .5;
}

</style>