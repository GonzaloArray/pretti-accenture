<template>
    <li class="nav-item">
        <RouterLink class="nav-link collapsed" :to="'/'+href">
            <span class="material-icons-outlined opacity me-2">
                {{ icon }}
            </span>
            <span>{{ title }}</span>
        </RouterLink>
    </li>
</template>
<script>
import { RouterLink } from 'vue-router'

export default {
    props: ["icon", "title", "href"],

}
</script>
<style scoped>
.sidebar-nav .nav-item {
    margin-bottom: 5px;
}


.sidebar-nav .nav-link{
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: #4154f1;
    transition: 0.3;
    background: #f6f9ff;
    padding: 10px 15px;
    border-radius: 4px;
}

/* collapse */

.sidebar-nav .nav-item {
    margin-bottom: 5px;
}

.sidebar-nav .nav-link.collapsed{
    color: #012970;
    background: #fff;
}
.sidebar-nav .nav-link.collapsed:focus{
    color: #4154f1;
    background: #f6f9ff;
}

.sidebar-nav .nav-link:hover {
    color: #4154f1;
    background: #f6f9ff;
}

.sidebar-nav .nav-link:hover span {
    color: #4154f1;
}

</style>