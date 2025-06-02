<script>
    import Card from "./dashboard/Card.vue";

    function arrSum(arr){
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        };
        
        return sum; 
    };

    function spaceDigits(number){
        return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }

    export default {
        components: { Card },
        props: {
            res: Object
        },
        data() {
            return {
                // Результаты
                plusAll: 0,
                minusAll: 0,
                diffAll: 0,
                strRes: "",


                // Функции
                arrSum,
                spaceDigits
            }
        },
        methods: {
            printAll() {
                this.plusAll = this.res.result[0].sumIncome;
                this.minusAll = this.res.result[1].sumCost;
                this.diffAll = this.res.result[2].finres;
                this.strRes = this.res.finResStr;

                console.log(this.res.result[0]);
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
                :title="spaceDigits(plusAll) + ' ₽'"
                desc="Общие доходы направления" />
        </div>
        <div class="col-lg-3">
            <Card
                color="danger"
                header="Расходы"
                :title="spaceDigits(parseInt(minusAll)) + ' ₽'"
                desc="Общие расходы направления" />
        </div>
        <div class="col-lg-3">
            <Card
                color="warning"
                header="Разница"
                :title="spaceDigits(parseInt(diffAll)) + ' ₽'"
                desc="Разница между доходами и расходами" />
        </div>
        <div class="col-lg-3">
            <Card
                color="info"
                header="Финансовый результат"
                :title="strRes"
                desc="" />
        </div>
    </div>
</template>

<style></style>