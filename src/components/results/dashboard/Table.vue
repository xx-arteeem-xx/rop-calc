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
                calcStudentsKCP: [0, 0, 0, 0],
                calcStudentsDOG: [0, 0, 0, 0],
                calcStudentsKCPSum: 0,
                calcStudentsDOGSum: 0,
                arrSum,
                spaceDigits
            }
        },
        methods: {
            calcAll(){
                for (let i = 0; i < 4; i++) {
                    let arrData = this.contingent.studentsKCP[i] * this.cash.priceKCP[i];
                    this.calcStudentsKCP.push(arrData)
                };

                this.calcStudentsKCPSum = spaceDigits(arrSum(this.calcStudentsKCP));

                for (let i = 0; i < 4; i++) {
                    let arrData = this.contingent.studentsDOG[i] * this.cash.priceDOG[i];
                    this.calcStudentsDOG.push(arrData)
                };

                this.calcStudentsDOGSum = spaceDigits(arrSum(this.calcStudentsDOG))
            }
        }
    }
</script>

<template>
    <h3 class="text-secondary fs-1">Финансовые показатели образовательной программы</h3>
    <button class="btn btn-primary" @click="calcAll()">
        Расчет тест
    </button>
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
                    <b>{{ calcStudentsKCPSum }} ₽</b>
                </td>
                <td rowspan="2" class="text-success" id="L1RStartPoint"><b>29 622 405 ₽</b></td>
            </tr>
            <tr>
                <td>От коммерческих студентов</td>
                <td id="L1LStandartPoint">
                    <b>{{ calcStudentsDOGSum }} ₽</b>
                </td>
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