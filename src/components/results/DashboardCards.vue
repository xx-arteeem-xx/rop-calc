<script>
    import Card from "./dashboard/Card.vue";

    function arrSum(arr){
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        };
        
        return sum; 
    };

    export default {
        components: { Card },
        props: {
            load: Object,
            contingent: Object,
            cash: Object
        },
        data() {
            return {
                arrSum
            }
        }
    }
</script>

<template>
    <h3 class="text-secondary fs-1">
        Итоги расчетов <br>
    </h3>
    <div class="row mb-5">
        <div class="col-lg-3">
            <Card
                color="success"
                header="Доход"
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