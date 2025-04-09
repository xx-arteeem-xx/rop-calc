<script>
    export default {
        data() {
            return {
                priceKCP: [144718, 144718, 144718, 144718],
                priceDOG: [136200, 136200, 135900, 141600]
            }
        },
    }
</script>

<template>
    <h3 class="text-secondary fs-1">Стоимость обучения</h3>
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
                <td>
                    <input type="number" class="form-control" v-model="priceKCP[0]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="priceKCP[1]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="priceKCP[2]">
                </td>
                <td>
                    <input type="number" class="form-control" v-model="priceKCP[3]">
                </td>
            </tr>
            <tr>
                <td>Стоимость обучения по договорам об оказании платных образовательных услуг</td>
                <td>
                    <input type="text" class="form-control" v-model="priceDOG[0]">
                </td>
                <td>
                    <input type="text" class="form-control" v-model="priceDOG[1]">
                </td>
                <td>
                    <input type="text" class="form-control" v-model="priceDOG[2]">
                </td>
                <td>
                    <input type="text" class="form-control" v-model="priceDOG[3]">
                </td>
            </tr>
        </tbody>
    </table>
    <hr>
</template>

<style></style>