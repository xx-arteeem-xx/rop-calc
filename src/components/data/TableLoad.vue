<script>
    export default{ 
        data() {
            return {
                LoadInd: [0,0,0,0],
                LoadGroup: [0,0,0,0],
                LoadSubGroup: [0,0,0,0],
                LoadFlow: [0,0,0,0],
                needDemo: 0
            }
        },
        methods: {
            demoData(){
                let LoadIndDemo = [22.79, 26.05, 27.55, 43.84];
                let LoadGroupDemo = [514, 519, 528, 379];
                let LoadSubGroupDemo = [144, 160, 72, 144];
                let LoadFlowDemo = [420, 360, 396, 442];

                this.LoadInd = LoadIndDemo;
                this.LoadGroup = LoadGroupDemo;
                this.LoadSubGroup = LoadSubGroupDemo;
                this.LoadFlow = LoadFlowDemo;
            },
            deleteDemoData(){
                let LoadIndNull = [0,0,0,0];
                let LoadGroupNull = [0,0,0,0];
                let LoadSubGroupNull = [0,0,0,0];
                let LoadFlowNull = [0,0,0,0];

                this.LoadInd = LoadIndNull;
                this.LoadGroup = LoadGroupNull;
                this.LoadSubGroup = LoadSubGroupNull;
                this.LoadFlow = LoadFlowNull;
            }
        }
    }
</script>

<template>
    <h3 class="text-secondary fs-1" id="Load">Учебная нагрузка</h3>
    <div class="d-flex gap-2">
        <button class="btn btn-sm btn-info" @click="demoData()">Демо данные</button>
        <button class="btn btn-sm btn-danger" @click="deleteDemoData()">Очистить</button>
    </div>
    <table class="table table-striped table-bordered my-3" style="vertical-align: middle" id="structTable">
        <thead>
            <th rowspan="2" style="vertical-align: middle" class="text-center">Вид нагрузки</th>
            <th colspan="5"  class="text-center">Распределение по курсам</th>
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
                <td>Индивидуальная</td>
                <td>
                    <input type="number" class="form-control" v-model="LoadInd[0]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadInd[1]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadInd[2]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadInd[3]">
                </td>
                <td>{{ parseFloat(LoadInd[0] + LoadInd[1] + LoadInd[2] + LoadInd[3]) }}</td>
            </tr>
            <tr>
                <td style="width: 15%">Групповая</td>
                <td>
                    <input type="number" class="form-control" v-model="LoadGroup[0]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadGroup[1]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadGroup[2]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadGroup[3]">
                </td>
                <td>{{ parseInt(LoadGroup[0] + LoadGroup[1] + LoadGroup[2] + LoadGroup[3]) }}</td>
            </tr>
            <tr>
                <td>По подгруппам</td>
                <td>
                    <input type="number" class="form-control" v-model="LoadSubGroup[0]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadSubGroup[1]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadSubGroup[2]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadSubGroup[3]">
                </td>
                <td>{{ parseInt(LoadSubGroup[0] + LoadSubGroup[1] + LoadSubGroup[2] + LoadSubGroup[3]) }}</td>
            </tr>
            <tr>
                <td>Поточная</td>
                <td>
                    <input type="number" class="form-control" v-model="LoadFlow[0]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadFlow[1]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadFlow[2]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="LoadFlow[3]">
                </td>
                <td>{{ parseInt(LoadFlow[0] + LoadFlow[1] + LoadFlow[2] + LoadFlow[3]) }}</td>
            </tr>

        </tbody>
    </table>
    <hr>
</template>

<style></style>