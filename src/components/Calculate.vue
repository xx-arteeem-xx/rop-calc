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

                // Функции
                arrSum
            }
        },
        methods: {
            calcAll(){
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

                // || __________________ ПОЛУЧАЕМ ДАННЫЕ С СЕРВЕРА  _______________________ ||
                this.$store.dispatch('getResult', data);

                // || __________________ ПЕРЕХОДИМ НА БЛОК С РЕЗУЛЬТАТАМИ  _______________________ ||
                setTimeout(() => {
                    location.href = "#results";
                }, 500)
            },
            clearCalc(){
                // || __________________ ОЧИЩАЕМ РЕЗУЛЬТАТЫ  _______________________ ||
                this.$store.dispatch('clearResult');
                // || __________________ ПЕРЕХОДИМ НА БЛОК С ДАННЫМИ  _______________________ ||
                location.href = "#data";
            }
        }
    }
</script>

<template>
    <div class="p-5 my-5 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Переходим к расчетам?</h1>
            <p class="col-md-8 fs-4 text-muted">
                Убедитесь, что вы ввели все необходимые данные.
            </p>
            <div class="d-inline-flex gap-2">
                <button class="btn btn-info btn-lg px-4" type="button" @click="calcAll()">
                    Все данные заполнены верно, рассчитать!
                </button>
                <button class="btn btn-secondary btn-lg px-4" type="button" @click="clearCalc()">
                    Вернуться к заполнению
                </button>
            </div>
        </div>
    </div>
</template>

<style>

</style>