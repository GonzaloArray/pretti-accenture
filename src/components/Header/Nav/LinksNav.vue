<template>
    <div>
        <li>
            <a class="dropdown-item d-flex align-items-center" href="">
                <span class="material-icons-outlined opacity me-2">
                    {{icon}}
                </span>
                <span>{{title}}</span>
            </a>
        </li>
        <li>
            <hr class="dropdown-divider">
        </li>
    </div>
</template>
<script>
export default {
    props: ["title", "icon"]
}
</script>
<style scoped>

.dropdown-menu .dropdown-divider {
    color: #a5c5fe;
    margin: 0;
}

.dropdown-menu .dropdown-item {
    font-size: 14px;
    padding: 10px 15px;
    transition: 0.3s;
}

</style>