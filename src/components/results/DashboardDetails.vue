<script>
    import {mapGetters} from 'vuex';

    function spaceDigits(number){
        return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    };
    
    export default {
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
        <div class="accordion mb-5" id="accordion">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" data-coreui-toggle="collapse" data-coreui-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Детализация расчетов
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-coreui-parent="#accordion">
                    <div class="accordion-body">
                        <h3 class="text-secondary fs-1">Финансовые показатели образовательной программы</h3>
                        <table class="table table-striped table-bordered my-3" style="vertical-align: middle">
                            <thead>
                                <tr>
                                    <th rowspan="1" class="text-center p-2">Показатель</th>
                                    <th colspan="1" class="text-center p-2">Детализация показателя</th>
                                    <th colspan="1" class="text-center p-2">Калькуляция показателя</th>
                                    <th colspan="1" class="text-center p-2">Значение показателя</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!--Доходы-->
                                <tr>
                                    <td rowspan="2">Доходы</td>
                                    <td>От бюджетных студентов</td>
                                    <td>
                                        <b>{{ spaceDigits(resultNew.result.income.budget) }} ₽</b>
                                    </td>
                                    <td rowspan="2" class="text-success">
                                        <b>{{ spaceDigits(resultNew.result.income.sumIncome) }} ₽</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>От коммерческих студентов</td>
                                    <td>
                                        <b>{{ spaceDigits(resultNew.result.income.commerce) }} ₽</b>
                                    </td>
                                </tr>

                                <!--Расходы-->
                                <tr>
                                    <td rowspan="8">Расходы</td>
                                    <td>На групповую нагрузку</td>
                                    <td>
                                        <b>{{ spaceDigits(resultNew.result.cost.group) }} ₽ </b>
                                    </td>
                                    <td rowspan="8" class="text-danger">
                                        <b>{{ spaceDigits(parseInt(resultNew.result.cost.sumCost)) }} ₽ </b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>На нагрузку по подгруппам</td>
                                    <td>
                                        <b>{{ spaceDigits(resultNew.result.cost.subgroup) }} ₽ </b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>На поточную нагрузку</td>
                                    <td>
                                        <b>{{ spaceDigits(resultNew.result.cost.flow) }} ₽ </b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>На индивидуальную нагрузку</td>
                                    <td>
                                        <b>{{ spaceDigits(resultNew.result.cost.ind) }} ₽ </b>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Итого на ППС</b></td>
                                    <td> <b>{{ spaceDigits(resultNew.result.cost.sumpps) }} ₽ </b> </td>
                                </tr>
                                <tr>
                                    <td>На административно-управленческий персонал</td>
                                    <td>
                                        <b>{{ spaceDigits(resultNew.result.cost.aup) }} ₽</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>На прочие расходы</td>
                                    <td>
                                        <b>{{ spaceDigits(resultNew.result.cost.other) }} ₽</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Налоговые обчисления</td>
                                    <td>
                                        <b>{{ spaceDigits(resultNew.result.cost.tax) }} ₽</b>
                                    </td>
                                </tr>

                                <!--Финансовый результат-->
                                <tr>
                                    <td rowspan="4">Финансовый результат</td>
                                    <td>Абсолютный результат</td>
                                    <td>
                                        <b :class="(resultNew.result.finres.finres > 0) ? 'text-success' : 'text-danger'"> 
                                            {{ spaceDigits(resultNew.result.finres.finres) }} ₽
                                        </b>
                                    </td>
                                    <td rowspan="4" class="text-warning">
                                        <b>{{ strRes }}</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>На одного студента</td>
                                    <td>
                                        <b :class="(resultNew.result.finres.oneStudent > 0) ? 'text-success' : 'text-danger'"> 
                                            {{ spaceDigits(resultNew.result.finres.oneStudent) }} ₽
                                        </b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>На одну группу</td>
                                    <td>
                                        <b :class="(resultNew.result.finres.oneGroup > 0) ? 'text-success' : 'text-danger'"> 
                                            {{ spaceDigits(resultNew.result.finres.oneGroup) }} ₽
                                        </b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Рентабельность</td>
                                    <td>
                                            <b :class="(resultNew.result.finres.efficiency > 0) ? 'text-success' : 'text-danger'"> 
                                            {{ parseInt(resultNew.result.finres.efficiency * 100) }} %
                                        </b>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style></style>