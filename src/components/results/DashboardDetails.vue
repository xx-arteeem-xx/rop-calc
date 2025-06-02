<script>
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
        props: {
            load: Object,
            contingent: Object,
            cash: Object
        },
        data() {
            return {
                result: [
                    {
                        "budget": 0,
                        "commerce": 0,
                        "sumIncome": 0
                    },
                    {
                        "group": 0,
                        "flow": 0,
                        "subgroup": 0,
                        "ind": 0,
                        "sumpps": 0,
                        "aup": 0,
                        "other": 0,
                        "tax": 0,
                        "sumCost": 0
                    },
                    {
                        "finres": 0,
                        "efficiency": 0,
                        "oneGroup": 0,
                        "oneStudent": 0
                    }
                ],

                finResStr: "",

                // Функции
                arrSum,
                spaceDigits
            }
        },
        methods: {
            async calcAll(callbackFn){
                // || __________________  ЗАДАЕМ ЗАГОЛОВКИ ЗАПРОСА  _______________________ || 
                let headers = new Headers();
                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
                headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
                headers.append('Access-Control-Allow-Credentials', 'true');
                headers.append('GET', 'POST', 'OPTIONS');

                // || __________________  ПРОВОДИМ ДОПОЛНИТЕЛЬНЫЕ РАСЧЕТЫ  _______________________ || 
                let students = [];

                for (let i = 0; i < this.contingent.studentsKCP.length; i++) {
                    students[i] = this.contingent.studentsKCP[i] + this.contingent.studentsDOG[i];
                };

                // || __________________  СОБИРАЕМ JSON  _______________________ || 
                let data = {
                    "data": [
                        {
                            "cash1": this.cash.priceKCP,
                            "students1": this.contingent.studentsKCP,
                            "cash2": this.cash.priceDOG,
                            "students2": this.contingent.studentsDOG,
                        },
                        {
                            "cash": 925,
                            "flowKoef": 2,
                            "subgroupKoef": 2,
                            "aupKoef": 0.430,
                            "otherKoef": 0.430,
                            "taxKoef": 0.302,
                            "groupCount": this.contingent.studentsGroup,
                            "students": students,
                            "group": this.load.LoadGroup,
                            "flow": this.load.LoadFlow,
                            "subgroup": this.load.LoadSubGroup,
                            "ind": this.load.LoadInd,
                        },
                        {
                            "groupCount": arrSum(this.contingent.studentsGroup),
                            "studentCount": arrSum(this.contingent.studentsKCP) + arrSum(this.contingent.studentsDOG)
                        }
                    ]
                };

                // || __________________  ОТПРАВЛЯЕМ ЗАПРОС  _______________________ || 
                let response = await fetch('http://localhost:3000/api/calc/', {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)
                });

                // || __________________  ПОЛУЧАЕМ ОТВЕТ  _______________________ || 
                let result = await response.json();
                this.result = result.result;

                // || __________________ ДОПОЛНИТЕЛЬНЫЕ РАСЧЕТЫ  _______________________ ||
                this.finResStr = this.result[2].finres < 0 ? "Направление убыточно" : "Направление прибыльно"; 
            }
        }
    }
</script>

<template>
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
                                    <b>{{ spaceDigits(result[0].budget) }} ₽</b>
                                </td>
                                <td rowspan="2" class="text-success">
                                    <b>{{ spaceDigits(result[0].sumIncome) }} ₽</b>
                                </td>
                            </tr>
                            <tr>
                                <td>От коммерческих студентов</td>
                                <td>
                                    <b>{{ spaceDigits(result[0].commerce) }} ₽</b>
                                </td>
                            </tr>

                            <!--Расходы-->
                            <tr>
                                <td rowspan="8">Расходы</td>
                                <td>На групповую нагрузку</td>
                                <td>
                                    <b>{{ spaceDigits(result[1].group) }} ₽ </b>
                                </td>
                                <td rowspan="8" class="text-danger">
                                    <b>{{ spaceDigits(parseInt(result[1].sumCost)) }} ₽ </b>
                                </td>
                            </tr>
                            <tr>
                                <td>На нагрузку по подгруппам</td>
                                <td>
                                    <b>{{ spaceDigits(result[1].subgroup) }} ₽ </b>
                                </td>
                            </tr>
                            <tr>
                                <td>На поточную нагрузку</td>
                                <td>
                                    <b>{{ spaceDigits(result[1].flow) }} ₽ </b>
                                </td>
                            </tr>
                            <tr>
                                <td>На индивидуальную нагрузку</td>
                                <td>
                                    <b>{{ spaceDigits(result[1].ind) }} ₽ </b>
                                </td>
                            </tr>
                            <tr>
                                <td><b>Итого на ППС</b></td>
                                <td> <b>{{ spaceDigits(result[1].sumpps) }} ₽ </b> </td>
                            </tr>
                            <tr>
                                <td>На административно-управленческий персонал</td>
                                <td>
                                    <b>{{ spaceDigits(result[1].aup) }} ₽</b>
                                </td>
                            </tr>
                            <tr>
                                <td>На прочие расходы</td>
                                <td>
                                    <b>{{ spaceDigits(result[1].other) }} ₽</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Налоговые обчисления</td>
                                <td>
                                    <b>{{ spaceDigits(result[1].tax) }} ₽</b>
                                </td>
                            </tr>

                            <!--Финансовый результат-->
                            <tr>
                                <td rowspan="4">Финансовый результат</td>
                                <td>Абсолютный результат</td>
                                <td>
                                    <b :class="(result[2].finres > 0) ? 'text-success' : 'text-danger'"> 
                                        {{ spaceDigits(result[2].finres) }} ₽
                                    </b>
                                </td>
                                <td rowspan="4" class="text-warning">
                                    <b>{{ finResStr }}</b>
                                </td>
                            </tr>
                            <tr>
                                <td>На одного студента</td>
                                <td>
                                    <b :class="(result[2].oneStudent > 0) ? 'text-success' : 'text-danger'"> 
                                        {{ spaceDigits(result[2].oneStudent) }} ₽
                                    </b>
                                </td>
                            </tr>
                            <tr>
                                <td>На одну группу</td>
                                <td>
                                    <b :class="(result[2].oneGroup > 0) ? 'text-success' : 'text-danger'"> 
                                        {{ spaceDigits(result[2].oneGroup) }} ₽
                                    </b>
                                </td>
                            </tr>
                            <tr>
                                <td>Рентабельность</td>
                                <td>
                                        <b :class="(result[2].efficiency > 0) ? 'text-success' : 'text-danger'"> 
                                        {{ parseInt(result[2].efficiency * 100) }} %
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>