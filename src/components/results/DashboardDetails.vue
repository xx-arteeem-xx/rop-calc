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
                // От бюджетных студентов	
                calcStudentsKCP: [0, 0, 0, 0],
                calcStudentsKCPSum: 0,

                // От коммерческих студентов	
                calcStudentsDOG: [0, 0, 0, 0],
                calcStudentsDOGSum: 0,

                // Доходы
                calcStudentsAllSum: 0,

                // На групповую нагрузку	
                calcLoadGroup: [0, 0, 0, 0],
                calcLoadGroupSum: 0,
                calcLoadGroupCash: 925,
                calcLoadGroupCashSum: 0,

                // На нагрузку по подгруппам	
                calcLoadSubGroup: [0, 0, 0, 0],
                calcLoadSubGroupSum: 0,
                calcLoadSubGroupCash: 925,
                calcLoadSubGroupKoef: 2,
                calcLoadSubGroupCashSum: 0,

                // На поточную нагрузку	
                calcLoadFlow: [0, 0, 0, 0],
                calcLoadFlowSum: 0,
                calcLoadFlowCash: 925,
                calcLoadFlowKoef: 2,
                calcLoadFlowCashSum: 0,

                // На индивидуальную нагрузку	
                calcLoadInd: [0, 0, 0, 0],
                calcLoadIndSum: 0,
                calcLoadIndCash: 925,
                calcLoadIndCashSum: 0,

                // Итого на ППС
                PPSAll: 0,

                // На АУП
                AUPAll: 0,
                AUPKoef: 0.43,

                // На прочие расходы
                AnotherAll: 0,
                AnotherKoef: 0.43,

                // Налоги
                TaxAll: 0,
                TaxKoef: 0.302,

                // Расходы
                calcAllCosts: 0,
                
                // Финрез
                finRes: 0,

                // На одного студента
                forOneStudent: 0,
                studentsSum: 0,

                // На одну группу
                forOneGroup: 0,
                groupSum: 0,
                
                // Финрез текстом
                finResStr: "",

                // Функции
                arrSum,
                spaceDigits
            }
        },
        methods: {
            calcAll(){
                // От бюджетных студентов	
                for (let i = 0; i < 4; i++) {
                    let arrData = this.contingent.studentsKCP[i] * this.cash.priceKCP[i];
                    this.calcStudentsKCP[i] = arrData
                };
                this.calcStudentsKCPSum = arrSum(this.calcStudentsKCP);

                // От коммерческих студентов	
                for (let i = 0; i < 4; i++) {
                    let arrData = this.contingent.studentsDOG[i] * this.cash.priceDOG[i];
                    this.calcStudentsDOG[i] = arrData
                };
                this.calcStudentsDOGSum = arrSum(this.calcStudentsDOG);

                // Доходы
                this.calcStudentsAllSum = this.calcStudentsKCPSum + this.calcStudentsDOGSum;

                // На групповую нагрузку
                for (let i = 0; i < 4; i++) {
                    let arrData = this.load.LoadGroup[i] * this.contingent.studentsGroup[i];
                    this.calcLoadGroup[i] = arrData
                };
                this.calcLoadGroupSum = arrSum(this.calcLoadGroup);
                this.calcLoadGroupCashSum = this.calcLoadGroupCash * this.calcLoadGroupSum;

                // На нагрузку по подгруппам
                for (let i = 0; i < 4; i++) {
                    let arrData = this.load.LoadSubGroup[i] * this.contingent.studentsGroup[i];
                    this.calcLoadSubGroup[i] = arrData
                };
                this.calcLoadSubGroupSum = arrSum(this.calcLoadSubGroup);
                this.calcLoadSubGroupCashSum = this.calcLoadSubGroupCash * this.calcLoadSubGroupSum  * this.calcLoadSubGroupKoef;

                // На поточную нагрузку
                for (let i = 0; i < 4; i++) {
                    let arrData = this.load.LoadFlow[i] * this.contingent.studentsGroup[i];
                    this.calcLoadFlow[i] = arrData
                };
                this.calcLoadFlowSum = arrSum(this.calcLoadFlow);
                this.calcLoadFlowCashSum = this.calcLoadFlowCash * this.calcLoadFlowSum  / this.calcLoadFlowKoef;

                // На индивидуальную нагрузку
                for (let i = 0; i < 4; i++) {
                    let arrData = this.load.LoadInd[i] * this.contingent.studentsDOG[i];
                    this.calcLoadInd[i] = arrData
                };
                this.calcLoadIndSum = arrSum(this.calcLoadInd);
                this.calcLoadIndCashSum = this.calcLoadIndCash * this.calcLoadIndSum;

                // Итого на ППС 
                this.PPSAll = this.calcLoadGroupCashSum + this.calcLoadSubGroupCashSum + this.calcLoadFlowCashSum + this.calcLoadIndCashSum;

                // На АУП	 
                this.AUPAll = this.PPSAll * this.AUPKoef;

                // На прочие расходы	 
                this.AnotherAll = this.PPSAll * this.AnotherKoef;

                // Налоги 
                this.TaxAll = this.PPSAll * this.TaxKoef;

                // Расходы
                this.calcAllCosts = this.PPSAll + this.AUPAll + this.AnotherAll + this.TaxAll;
                
                // Финрез
                this.finRes = this.calcStudentsAllSum - this.calcAllCosts;

                // На одного студента
                this.studentsSum = arrSum(this.contingent.studentsDOG) + arrSum(this.contingent.studentsKCP);
                this.forOneStudent = this.finRes / this.studentsSum;

                // На одну группу
                this.groupSum = arrSum(this.contingent.studentsGroup);
                this.forOneGroup = this.finRes / this.groupSum;

                // Финрез текстом
                this.finResStr = this.finRes > 0 ? "Направление прибыльно" : "Направление убыточно";
                

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
                                    <b>{{ spaceDigits(calcStudentsKCPSum) }} ₽</b>
                                </td>
                                <td rowspan="2" class="text-success">
                                    <b>{{ spaceDigits(calcStudentsAllSum) }} ₽</b>
                                </td>
                            </tr>
                            <tr>
                                <td>От коммерческих студентов</td>
                                <td>
                                    <b>{{ spaceDigits(calcStudentsDOGSum) }} ₽</b>
                                </td>
                            </tr>

                            <!--Расходы-->
                            <tr>
                                <td rowspan="8">Расходы</td>
                                <td>На групповую нагрузку</td>
                                <td>
                                    {{ calcLoadGroupCash }} ₽/час * {{ spaceDigits(calcLoadGroupSum) }} = 
                                    <b>{{ spaceDigits(calcLoadGroupCashSum) }} ₽ </b>
                                </td>
                                <td rowspan="8" class="text-danger">
                                    <b>{{ spaceDigits(parseInt(calcAllCosts)) }} ₽ </b>
                                </td>
                            </tr>
                            <tr>
                                <td>На нагрузку по подгруппам</td>
                                <td>
                                    {{ calcLoadSubGroupCash }} ₽/час * {{ spaceDigits(calcLoadSubGroupSum) }} * {{ calcLoadSubGroupKoef }} (коэф. подгрупп) = 
                                    <b>{{ spaceDigits(calcLoadSubGroupCashSum) }} ₽ </b>
                                </td>
                            </tr>
                            <tr>
                                <td>На поточную нагрузку</td>
                                <td>
                                    {{ calcLoadFlowCash }} ₽/час * {{ spaceDigits(calcLoadFlowSum) }} * {{ calcLoadFlowKoef }} (коэф. подгрупп) = 
                                    <b>{{ spaceDigits(calcLoadFlowCashSum) }} ₽ </b>
                                </td>
                            </tr>
                            <tr>
                                <td>На индивидуальную нагрузку</td>
                                <td>
                                    {{ calcLoadIndCash }} ₽/час * {{ spaceDigits(parseInt(calcLoadIndSum)) }} = 
                                    <b>{{ spaceDigits(parseInt(calcLoadIndCashSum)) }} ₽ </b>
                                </td>
                            </tr>
                            <tr>
                                <td><b>Итого на ППС</b></td>
                                <td> <b>{{ spaceDigits(parseInt(PPSAll)) }} ₽ </b> </td>
                            </tr>
                            <tr>
                                <td>На административно-управленческий персонал</td>
                                <td>
                                    {{ spaceDigits(parseInt(PPSAll)) }} ₽ * {{ spaceDigits(parseFloat(AUPKoef)) }} = 
                                    <b>{{ spaceDigits(parseInt(AUPAll)) }} ₽</b>
                                </td>
                            </tr>
                            <tr>
                                <td>На прочие расходы</td>
                                <td>
                                    {{ spaceDigits(parseInt(PPSAll)) }} ₽ * {{ spaceDigits(parseFloat(AnotherKoef)) }} = 
                                    <b>{{ spaceDigits(parseInt(AnotherAll)) }} ₽</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Налоговые обчисления</td>
                                <td>
                                    {{ spaceDigits(parseInt(PPSAll)) }} ₽ * {{ spaceDigits(parseFloat(TaxKoef)) }} = 
                                    <b>{{ spaceDigits(parseInt(TaxAll)) }} ₽</b>
                                </td>
                            </tr>

                            <!--Финансовый результат-->
                            <tr>
                                <td rowspan="4">Финансовый результат</td>
                                <td>Абсолютный результат</td>
                                <td><b :class="(finRes > 0) ? 'text-success' : 'text-danger'"> {{ spaceDigits(parseInt(finRes)) }} ₽</b></td>
                                <td rowspan="4" class="text-warning">
                                    <b>{{ finResStr }}</b>
                                </td>
                            </tr>
                            <tr>
                                <td>На одного студента</td>
                                <td>
                                    {{ spaceDigits(parseInt(finRes)) }} / {{ studentsSum }} = 
                                    <b :class="(forOneStudent > 0) ? 'text-success' : 'text-danger'"> {{ spaceDigits(parseInt(forOneStudent)) }} ₽</b>
                                </td>
                            </tr>
                            <tr>
                                <td>На одну группу</td>
                                <td>
                                    {{ spaceDigits(parseInt(finRes)) }} / {{ groupSum }} = 
                                    <b :class="(forOneGroup > 0) ? 'text-success' : 'text-danger'"> {{ spaceDigits(parseInt(forOneGroup)) }} ₽</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Рентабельность</td>
                                <td>В разработке...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>