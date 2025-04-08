<script setup>
    import Card from "./dashboard/Card.vue"
</script>

<template>
    <div class="row mb-5" id="Res">
        <div class="col-lg-3">
            <Card
                color="primary"
                header="Важный рассчет 1"
                title="125"
                desc="Чего-то у нас есть" />
        </div>
        <div class="col-lg-3">
            <Card
                color="warning"
                header="Важный рассчет 2"
                title="225000 Р."
                desc="Что-то стоит" />
        </div>
        <div class="col-lg-3">
            <Card
                color="info"
                header="Важный рассчет 3"
                title=">300"
                desc="Довольных кого-то" />
        </div>
        <div class="col-lg-3">
            <Card
                color="success"
                header="Важный рассчет 4"
                title=">10 лет"
                desc="Кто-то где-то работает" />
        </div>
    </div>
</template>

<style></style>