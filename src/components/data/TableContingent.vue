<script>
    function arrSum(arr){
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        };
        
        return sum; 
    };

    export default {
        data() {
            return {
                studentsKCP: [0,0,0,0],
                studentsDOG: [0,0,0,0],
                studentsGroup: [0,0,0,0],
                arrSum
            }
        },
        methods: {
            demoData(){
                let studentsKCPDemo = [0, 0, 14, 21];
                let studentsDOGDemo = [18, 65, 41, 12];
                let studentsGroupDemo = [1, 4, 4, 2];

                this.studentsKCP = studentsKCPDemo;
                this.studentsDOG = studentsDOGDemo;
                this.studentsGroup = studentsGroupDemo;
            },
            deleteDemoData(){
                let studentsKCPNull = [0,0,0,0];
                let studentsDOGNull = [0,0,0,0];
                let studentsGroupNull = [0,0,0,0];

                this.studentsKCP = studentsKCPNull;
                this.studentsDOG = studentsDOGNull;
                this.studentsGroup = studentsGroupNull;
            }
        }
    }
</script>

<template>
    <h3  class="text-secondary fs-1">Контингент</h3>
    <div class="d-flex gap-2">
        <button class="btn btn-sm btn-info" @click="demoData()">Демо данные</button>
        <button class="btn btn-sm btn-danger" @click="deleteDemoData()">Очистить</button>
    </div>
    <table class="table table-striped table-bordered my-3" style="vertical-align: middle" id="structTable">
        <thead>
            <th rowspan="2" style="vertical-align: middle" class="text-center">Тип финансирования</th>
            <th colspan="5" class="text-center">Распределение по курсам</th>
            <tr>
                <th class="text-center">1 курс</th>
                <th class="text-center">2 курс</th>
                <th class="text-center">3 курс</th>
                <th class="text-center">4 курс</th>
                <th class="text-center">Итого</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Обучающиеся за счет бюджетных ассигнований</td>
                <td v-for="n in 4">
                    <input type="number" class="form-control" v-model="studentsKCP[n-1]">
                </td>
                <td>
                    {{ parseInt(arrSum(studentsKCP)) }}
                </td>
            </tr>
            <tr>
                <td>Обучающиеся по договорам об оказании платных образовательных услуг</td>
                <td v-for="n in 4">
                    <input type="number" class="form-control" v-model="studentsDOG[n-1]">
                </td>
                <td>
                    {{ parseInt(arrSum(studentsDOG)) }}
                </td>
            </tr>
            <tr>
                <td style="width: 15%">Количество академических групп</td>
                <td v-for="n in 4">
                    <input type="number" class="form-control" v-model="studentsGroup[n-1]">
                </td>
                <td>
                    {{ parseInt(arrSum(studentsGroup)) }}
                </td>
                
            </tr>
            <tr>
                <td>Средняя численность в группе</td>
                <td v-for="n in 4">
                    <td>~ {{ parseInt(studentsDOG[n-1] / studentsGroup[n-1]) }}</td>
                </td>
                <td>
                    {{ parseInt(arrSum(studentsDOG) / arrSum(studentsGroup)) }}
                </td>
            </tr>
        </tbody>
    </table>
    <hr>
</template>

<style></style>