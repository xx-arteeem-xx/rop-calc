<script>

</script>

<template>
    <h3>Учебная нагрузка</h3>
    <table class="table table-striped table-bordered" style="vertical-align: middle" id="structTable">
        <thead class="">
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
                <td style="width: 15%"><b>Индивидуальная</b><br><span
                        style="color: darkgray; font-size: 12px; text-align: left">Под индивидуальной нагрузкой
                        подразумевается ... </span></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadIndCourse1" placeholder=""
                        value="22,79"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadIndCourse2" placeholder=""
                        value="26,05"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadIndCourse3" placeholder=""
                        value="27,55"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadIndCourse4" placeholder=""
                        value="43,84"></td>
                <td style="width: 18%" id="LoadIndCourseAll"></td>
            </tr>
            <tr>
                <td style="width: 15%">Групповая</td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadGroupCourse1" placeholder=""
                        value="514"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadGroupCourse2" placeholder=""
                        value="519"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadGroupCourse3" placeholder=""
                        value="528"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadGroupCourse4" placeholder=""
                        value="379"></td>
                <td style="width: 18%" id="LoadGroupCourseAll"></td>
            </tr>
            <tr>
                <td style="width: 15%">По подгруппам</td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadPodGroupCourse1" placeholder=""
                        value="144"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadPodGroupCourse2" placeholder=""
                        value="160"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadPodGroupCourse3" placeholder=""
                        value="72"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadPodGroupCourse4" placeholder=""
                        value="144"></td>
                <td style="width: 18%" id="LoadPodGroupCourseAll"></td>
            </tr>
            <tr>
                <td style="width: 15%">Поточная</td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadPotokCourse1" placeholder=""
                        value="420"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadPotokCourse2" placeholder=""
                        value="360"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadPotokCourse3" placeholder=""
                        value="396"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="LoadPotokCourse4" placeholder=""
                        value="442"></td>
                <td style="width: 18%" id="LoadPotokCourseAll"></td>
            </tr>

        </tbody>
    </table>
    <hr>
</template>

<style></style>