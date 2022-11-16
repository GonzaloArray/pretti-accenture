<template>

        <a
            @click="handleArrow"
            class="nav-link collapsed buttonLink"
            :data-bs-target="data"
            data-bs-toggle="collapse"
            href="#"
        >
            <span class="material-icons-outlined me-2 opacity">
                {{icon}}
            </span><span>{{title}}</span>
            <span class="material-icons-outlined ms-auto opacity" :class="arrow == false ? 'arrowUp' : 'arrowDonw'">
                expand_more
            </span>
        </a>
</template>
<script>
import SubLink from './SubLink.vue';

export default {
    data() {
        return {
            arrow: true
        }
    },
    props:['icon', 'title', 'data'],
    components: {
        SubLink
    },
    methods: {
        handleArrow: function () {
            this.arrow = !this.arrow;
        }
    }
}
</script>
<style scoped>
.sidebar-nav .nav-link {
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


.sidebar-nav .nav-link.collapsed {
    color: #012970;
    background: #fff;
}


.sidebar-nav .nav-link:hover {
    color: #4154f1;
    background: #f6f9ff;
}

.sidebar-nav .nav-link:hover span {
    color: #4154f1;
}


.arrowUp {
    transform: rotate(180deg);
    transition: all linear .3s;
}

.arrowDonw {
    transform: rotate(0deg);
    transition: all linear .3s;
}
</style>