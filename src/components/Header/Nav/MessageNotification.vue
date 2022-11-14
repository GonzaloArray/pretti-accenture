<template>
    <li class="notification-item">
        <i class="bi bi-exclamation-circle text-warning"></i>
        <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 min. ago</p>
        </div>
    </li>
</template>
<script>

</script>
<style scoped>
.header-nav .notifications .notification-item {
    display: flex;
    align-items: center;
    padding: 15px 10px;
    transition: 0.3s;
}

.header-nav .notifications .notification-item i {
    margin: 0 20px 0 10px;
    font-size: 24px;
}

.header-nav .notifications .notification-item h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
}

.header-nav .notifications .notification-item p {
    font-size: 13px;
    margin-bottom: 3px;
    color: #919191;
}

.header-nav .notifications .notification-item:hover {
    background-color: #f6f9ff;
}
</style>