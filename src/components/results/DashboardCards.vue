<script setup>
    import Card from "./dashboard/Card.vue"
</script>

<template>
    <h3 class="text-secondary fs-1">Итоги рассчетов</h3>
    <div class="row mb-5" id="Res">
        <div class="col-lg-3">
            <Card
                color="success"
                header="Доходы"
                title="29 622 405 ₽"
                desc="Общие доходы направления" />
        </div>
        <div class="col-lg-3">
            <Card
                color="danger"
                header="Расходы"
                title="29 764 490 ₽"
                desc="Общие расходы направления" />
        </div>
        <div class="col-lg-3">
            <Card
                color="warning"
                header="Разница"
                title="- 142 762 ₽"
                desc="Разница между доходами и расходами" />
        </div>
        <div class="col-lg-3">
            <Card
                color="info"
                header="Финансовый результат"
                title="Направление убыточно"
                desc="" />
        </div>
    </div>
</template>

<style></style>