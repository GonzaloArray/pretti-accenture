<template>
    <section  class="bg-light mt-3 py-3 rounded-1 shadow card">
        <div class="d-flex align-items-center">
            <img src="../../assets/escudo.png" class="escudo " alt="Escudo Premiun">
            <div class="d-flex flex-column ms-3">
                <h2 class="fs-6 fw-bold">Pretti Premiun</h2>
                <p class="fs-7 m-0">The best Pretti experience, with monthly Coins</p>
            </div>
        </div>
        <div class="container text-end">
            <button class="btn btn-sm rounded-pill fs-7 fw-bold btn-success w-25">Try now</button>
        </div>
    </section>
</template>
<style scoped>
.escudo{
    width: 4rem;
}
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

:root {
  --card-height: 65vh;
  --card-width: calc(var(--card-height) / 1.5);
}

.card {
  background: #191c29;
  width: var(--card-width);
  height: var(--card-height);
  position: relative;
  border-radius: 6px;
  cursor: pointer;
}

.card:hover {
  color: rgb(88 199 250 / 100%);
  transition: color 1s;
}
.card:hover:before, .card:hover:after {
  animation: none;
  opacity: 0;
  transition: .5s;

}


.card::before {
  content: "";
  width: 102%;
  height: 105%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -2.2%;
    left: -1%;
    animation: spin 2.5s linear infinite;
}

.card::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  background-image: linear-gradient(
    var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
  filter: blur(1.4rem);

  transition: opacity .5s;
  animation: spin 2.5s linear infinite;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}


</style>
