<script setup>
    import Card from "./instructions/Card.vue"
</script>

<template>
    <div class="row align-items-center my-5">
        <div class="col-lg-4 my-2 cardin">
            <Card 
                name="Введите данные" 
                desc="Нажмите на кнопку *Перейти к вводу данных*, после чего введите все необходимые данные." />
        </div>
        <div class="col-lg-4 my-2 cardin">
            <Card 
                name="Нажмите на кнопку *Рассчитать*" 
                desc="После ввода всех данных, нажмите на кнопку *Рассчитать*" />
        </div>
        <div class="col-lg-4 my-2 cardin">
            <Card 
                name="Ваши данные готовы к аналитике!" 
                desc="Вы можете посмотреть аналитику и все необходимые расчеты прямо на сайте, или, экспортировать данные в Excel или PDF" />
        </div>
    </div>
</template>

<style>
    .cardin{
        height: 30vh;
    }
</style>