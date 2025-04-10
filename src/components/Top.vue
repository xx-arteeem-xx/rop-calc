<script>
    export default {
        methods: {
            handleClick() {
                this.$emit('button-clicked'); // Отправка события
            }
        }
    }
</script>

<template>
    <div class="container my-5 text-center bg-body-tertiary rounded-3 p-5 d-flex flex-column align-items-center">
        <div class="img mb-3">
            <img src="../assets/logo.png" id="logo">
        </div>
        <h1 class="display-5 fw-bold">
            Калькулятор РОП
        </h1>
        <p class="mx-auto fs-4 text-muted">
            Данный сервис предназначен для расчета стоимости образовательных программ
        </p>
        <div class="d-inline-flex gap-2 mb-5">
            <button class="btn btn-info btn-lg px-4" type="button" onclick="location.href = '/#data'">
                Перейти к вводу данных
            </button>
            <button class="btn btn-secondary btn-lg px-4" type="button" @click="handleClick()">
                Заполнить демо данными
            </button>
        </div>
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