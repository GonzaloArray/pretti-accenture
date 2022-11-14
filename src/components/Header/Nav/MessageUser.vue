<template>
    <div>
        <li class="message-item">
            <a href="#">
                <img src="" alt="" class="rounded-circle">
                <div>
                    <h4>Maria Hudson</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                    <p>4 hrs. ago</p>
                </div>
            </a>
        </li>

        <li>
            <hr class="dropdown-divider">
        </li>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.header-nav .messages {
    inset: 8px -15px auto auto !important;
}

.header-nav .messages .message-item {
    padding: 15px 10px;
    transition: 0.3s;
}

.header-nav .messages .message-item a {
    display: flex;
}

.header-nav .messages .message-item img {
    margin: 0 20px 0 10px;
    max-height: 40px;
}

.header-nav .messages .message-item h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #444444;
}

.header-nav .messages .message-item p {
    font-size: 13px;
    margin-bottom: 3px;
    color: #919191;
}

.header-nav .messages .message-item:hover {
    background-color: #f6f9ff;
}
</style>