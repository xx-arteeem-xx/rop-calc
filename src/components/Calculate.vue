<script>
    export default {

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
                <button class="btn btn-info btn-lg px-4" type="button" onclick="location.href = '/#Res'">
                    Все данные заполнены верно, рассчитать!
                </button>
                <button class="btn btn-secondary btn-lg px-4" type="button" onclick="location.href = '/#Load'">
                    Вернуться к заполнению
                </button>
            </div>
        </div>
    </div>
</template>

<style>

</style>