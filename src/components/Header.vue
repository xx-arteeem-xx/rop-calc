<script>

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-body-tertiary fixed-top px-5" aria-label="Offcanvas navbar large">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <p class="lead m-0">НГУЭУ - Калькулятор РОП</p>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Меню</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Главная</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/indev">О проекте</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/indev">Демо</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <div class="py-3">

    </div>
</template>

<style>
    #logo{
        width: 100%;
        height: auto;
    }
    .img{
        width: 300px;
    }
</style>