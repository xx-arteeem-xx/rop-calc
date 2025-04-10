<script>
    export default {
        data() {
            return {
                priceKCP: [0,0,0,0],
                priceDOG: [0,0,0,0]
            }
        },
        methods: {
            demoData(){
                let priceKCPDemo = [144718, 144718, 144718, 144718];
                let priceDOGDemo = [136200, 136200, 135900, 141600];

                this.priceKCP = priceKCPDemo;
                this.priceDOG = priceDOGDemo;
            },
            deleteDemoData(){
                let priceKCPNull = [0,0,0,0];
                let priceDOGNull = [0,0,0,0];

                this.priceKCP = priceKCPNull;
                this.priceDOG = priceDOGNull;
            }
        }
    }
</script>

<template>
    <h3 class="text-secondary fs-1">Стоимость обучения</h3>
    <div class="d-flex gap-2">
        <button class="btn btn-sm btn-info" @click="demoData()">Демо данные</button>
        <button class="btn btn-sm btn-danger" @click="deleteDemoData()">Очистить</button>
    </div>
    <table class="table table-striped table-bordered my-3" style="vertical-align: middle" id="structTable">
        <thead class="">
            <th rowspan="2" style="vertical-align: middle" class="text-center">Тип финансирования</th>
            <th colspan="5" class="text-center">Распределение по курсам</th>
            <tr>
                <th class="text-center">1 курс</th>
                <th class="text-center">2 курс</th>
                <th class="text-center">3 курс</th>
                <th class="text-center">4 курс</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Объем возмещения затрат за бюджетных студентов</td>
                <td v-for="n in 4">
                    <input type="number" class="form-control" v-model="priceKCP[n-1]">
                </td>
            </tr>
            <tr>
                <td>Стоимость обучения по договорам об оказании платных образовательных услуг</td>
                <td v-for="n in 4">
                    <input type="number" class="form-control" v-model="priceDOG[n-1]">
                </td>
            </tr>
        </tbody>
    </table>
    <hr>
</template>

<style></style>