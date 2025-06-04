<script>
    import Card from "./dashboard/Card.vue";
    import {mapGetters} from 'vuex';

    function spaceDigits(number){
        return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }

    export default {
        components: { Card },
        data() {
            return {
                resultNew: {},
                strRes: "",
                spaceDigits
            }
        },
        computed: {
            ...mapGetters(["result"])
        },
        watch: {
            result: {
                deep: true,
                immediate: true,
                handler(val) {
                    this.resultNew = val;
                    if (this.resultNew && this.resultNew.result){
                        this.strRes = this.resultNew.result.finres.finres < 0 ? "Направление убыточно" : "Направление прибыльно";
                    }
                }
            }
        }
    }
</script>

<template>
    <div v-if="resultNew && resultNew.result">
        <h3 class="text-secondary fs-1">
            Итоги расчетов <br>
        </h3>
        <div class="row mb-5">
            <div class="col-lg-3">
                <Card
                    color="success"
                    header="Доход"
                    :title="spaceDigits(resultNew.result.income.sumIncome) + ' ₽'"
                    desc="Общие доходы направления" />
            </div>
            <div class="col-lg-3">
                <Card
                    color="danger"
                    header="Расходы"
                    :title="spaceDigits(parseInt(resultNew.result.cost.sumCost)) + ' ₽'"
                    desc="Общие расходы направления" />
            </div>
            <div class="col-lg-3">
                <Card
                    color="warning"
                    header="Разница"
                    :title="spaceDigits(parseInt(resultNew.result.finres.finres)) + ' ₽'"
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
    </div>
</template>

<style></style>