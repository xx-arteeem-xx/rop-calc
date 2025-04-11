<script>
    function arrSum(arr){
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        };
        
        return sum; 
    };
    
    export default {
        props: {
            load: Object,
            contingent: Object,
            cash: Object
        },
        data() {
            return {
                calcStudentsKCP: 0,
                calcStudentsDOG: 0,
                arrSum
            }
        },
        methods: {
            calcAll(){
                this.calcStudentsKCP = [
                    this.contingent.studentsKCP[0] * this.cash.priceKCP[0],
                    this.contingent.studentsKCP[1] * this.cash.priceKCP[1],
                    this.contingent.studentsKCP[2] * this.cash.priceKCP[2],
                    this.contingent.studentsKCP[3] * this.cash.priceKCP[3]
                ];
            }
        }
    }
</script>

<template>
    <h3 class="text-secondary fs-1">Финансовые показатели образовательной программы</h3>
    <p class="lead">
        load: {{ load }} <br>
        contingent: {{ contingent }} <br>
        cash: {{ cash }} <br>
    </p>
    <button class="btn btn-primary" @click="calcAll()">
        Расчет тест
    </button>
    <p class="lead">
        Доходы от бюджетных студентов: {{ arrSum(calcStudentsKCP) }} 
    </p>
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
                <td rowspan="2" style="width: 5%">Доходы</td>
                <td style="width: 20%">От бюджетных студентов</td>
                <td id="L1LStartPoint">
                    {{ contingent.studentsKCP[0] }} * {{ cash.priceKCP[0] }} + {{ contingent.studentsKCP[1] }} * {{ cash.priceKCP[1] }} + {{ contingent.studentsKCP[2] }} * {{ cash.priceKCP[2] }} + {{ contingent.studentsKCP[3] }} * {{ cash.priceKCP[3] }} = <b>{{ arrSum(calcStudentsKCP) }} ₽</b>
                </td>
                <td rowspan="2" class="text-success" id="L1RStartPoint"><b>29 622 405 ₽</b></td>
            </tr>
            <tr>
                <td>От коммерческих студентов</td>
                <td id="L1LStandartPoint">18 * 136 200 + 65 * 136 200 + 41 * 135 900 + 12 * 141 600 <br>= <b>24 731 204
                        ₽</b></td>
            </tr>

            <!--Расходы-->
            <tr>
                <td rowspan="8" style="">Расходы</td>
                <td style="width: 12%">На групповую нагрузку</td>
                <td id="formula_rasv" title="Кол-во часов групповой нагрузки * Стоимость часа преподавателя"
                    data-toggle="tooltip" data-placement="top">925 ₽/час * (514 * 1 + 519 * 4 + 528 * 4 + 379 * 2) =
                    <b>5 050 500 ₽ </b></td>
                <td rowspan="8" id="L1RStartPoint" class="text-danger"><b>29 764 490 ₽ </b></td>
            </tr>
            <tr>
                <td>На поточную нагрузку</td>
                <td id="L1LStandartPoint">925 ₽/час * (420 * 1 + 360 * 4 + 396 * 4 + 442 * 2) / 2 (коэф. потоков) <br>=
                    <b>2 001 700 ₽ </b></td>
            </tr>
            <tr>
                <td>На нагрузку по подгруппам</td>
                <td id="L1LStandartPoint">925 ₽/час * (144 * 1 + 160 * 4 + 72 * 4 + 144 * 2) * 2 (коэф. подгрупп) <br>=
                    <b>2 516 000 ₽ </b></td>
            </tr>
            <tr>
                <td>На индивидуальную нагрузку</td>
                <td id="L1LStandartPoint"> 925 ₽/час * (18 * 22,79 + 65 * 26,05 + 55 * 27,55 + 21 * 43,84) <br>= <b>4
                        198 908 ₽ </b> </td>
            </tr>
            <tr>
                <td><b>Итого на ППС</b></td>
                <td id="L1LStandartPoint"> <b>13 767 108 ₽ </b> </td>
            </tr>
            <tr>
                <td>На административно-управленческий персонал</td>
                <td id="L1LStandartPoint">13 767 108 ₽ * 1,430 = <b>5 919 858 ₽</b></td>
            </tr>
            <tr>
                <td>На прочие расходы</td>
                <td id="L1LStandartPoint">13 767 108 ₽ * 1,430 = <b>5 919 858 ₽</b></td>
            </tr>
            <tr>
                <td>Налоговые обчисления</td>
                <td id="L1LStandartPoint">13 767 108 ₽ * 1,302 = <b>4 147 666 ₽</b></td>
            </tr>

            <!--Финансовый результат-->
            <tr>
                <td rowspan="4" style="width: 10%">Финансовый результат</td>
                <td style="width: 25%">На одного студента</td>
                <td id="L1LStartPoint"> (29 622 405 ₽ - 29 764 490 ₽) / 171 студент= <b class="text-danger">- 830 ₽</b>
                </td>
                <td rowspan="4" class="text-warning" id="L1RStartPoint"><b>Направление убыточно</b></td>
            </tr>
            <tr>
                <td>На одну группу</td>
                <td id="L1LStandartPoint">(29 622 405 ₽ - 29 764 490 ₽) / 11 групп = <b class="text-danger">- 12 916
                        ₽</b></td>
            </tr>
            <tr>
                <td>Рентабельность</td>
                <td id="L1LStandartPoint">29 622 405 ₽ / 29 764 490 ₽ = <B class="text-danger">-0,004 %</B></td>
            </tr>
            <tr>
                <td>Абсолютный результат</td>
                <td id="L1LStandartPoint">29 622 405 ₽ - 29 764 490 ₽ = <B class="text-danger"> - 142 762</B></td>
            </tr>
        </tbody>
    </table>
</template>

<style></style>