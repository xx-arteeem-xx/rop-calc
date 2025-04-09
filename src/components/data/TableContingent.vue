<script>
    export default {
        data() {
            return {
                studentsKCP: [0, 0, 14, 21],
                studentsDOG: [18, 65, 41, 12],
                studentsGroup: [1, 4, 4, 2]
            }
        }
    }
</script>

<template>
    <h3  class="text-secondary fs-1">Контингент</h3>
    <table class="table table-striped table-bordered my-3" style="vertical-align: middle" id="structTable">
        <thead class="">

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
                <td>
                    <input type="number" class="form-control" v-model="studentsKCP[0]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="studentsKCP[1]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="studentsKCP[2]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="studentsKCP[3]">
                </td>
                <td>{{ parseInt(studentsKCP[0] + studentsKCP[1] + studentsKCP[2] + studentsKCP[3]) }}</td>
            </tr>
            <tr>
                <td>Обучающиеся по договорам об оказании платных образовательных услуг</td>
                <td>
                    <input type="number" class="form-control" v-model="studentsDOG[0]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="studentsDOG[1]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="studentsDOG[2]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="studentsDOG[3]">
                </td>
                <td>{{ parseInt(studentsDOG[0] + studentsDOG[1] + studentsDOG[2] + studentsDOG[3]) }}</td>
            </tr>
            <tr>
                <td style="width: 15%">Количество академических групп</td>
                <td>
                    <input type="number" class="form-control" v-model="studentsGroup[0]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="studentsGroup[1]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="studentsGroup[2]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="studentsGroup[3]">
                </td>
                <td>{{ parseInt(studentsGroup[0] + studentsGroup[1] + studentsGroup[2] + studentsGroup[3]) }}</td>
            </tr>
            <tr>
                <td>Средняя численность в группе</td>
                <td>~ {{ parseInt(studentsDOG[0] / studentsGroup[0]) }}</td>
                <td>~ {{ parseInt(studentsDOG[1] / studentsGroup[1]) }}</td>
                <td>~ {{ parseInt(studentsDOG[2] / studentsGroup[2]) }}</td>
                <td>~ {{ parseInt(studentsDOG[3] / studentsGroup[3]) }}</td>
                <td>~ {{ parseInt((studentsDOG[0] + studentsDOG[1] + studentsDOG[2] + studentsDOG[3]) / (studentsGroup[0] + studentsGroup[1] + studentsGroup[2] + studentsGroup[3])) }}</td>
            </tr>

        </tbody>
    </table>
    <hr>
</template>

<style></style>