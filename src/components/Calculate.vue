<script>
    export default {
        methods: {
            handleClick1() {
                this.$emit('button-clicked1'); // Отправка события 1
            },
            handleClick2() {
                this.$emit('button-clicked2'); // Отправка события 2
            }
        }
    }
</script>

<template>
    <div class="p-5 my-5 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Переходим к расчетам?</h1>
            <p class="col-md-8 fs-4 text-muted">
                Убедитесь, что вы ввели все необходимые данные.
            </p>
            <div class="d-inline-flex gap-2">
                <button class="btn btn-info btn-lg px-4" type="button" @click="handleClick1()">
                    Все данные заполнены верно, рассчитать!
                </button>
                <button class="btn btn-secondary btn-lg px-4" type="button" @click="handleClick2()">
                    Вернуться к заполнению
                </button>
            </div>
        </div>
    </div>
</template>

<style>

</style>