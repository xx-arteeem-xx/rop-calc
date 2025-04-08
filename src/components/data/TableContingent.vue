<script>

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
                <td style="width: 15%">Обучающиеся за счет бюджетных ассигнований</td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsKCPCourse1" placeholder=""
                        value="0"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsKCPCourse2" placeholder=""
                        value="0"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsKCPCourse3" placeholder=""
                        value="14"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsKCPCourse4" placeholder=""
                        value="21"></td>
                <td style="width: 18%" id="StudentsKCPCourseAll"></td>
            </tr>
            <tr>
                <td style="width: 15%">Обучающиеся по договорам об оказании платных образовательных услуг</td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsDOGCourse1" placeholder=""
                        value="18"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsDOGCourse2" placeholder=""
                        value="65"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsDOGCourse3" placeholder=""
                        value="41"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsDOGCourse4" placeholder=""
                        value="12"></td>
                <td style="width: 18%" id="StudentsDOGCourseAll"></td>
            </tr>
            <tr>
                <td style="width: 15%">Количество академических групп</td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsGroupCourse1" placeholder=""
                        value="1"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsGroupCourse2" placeholder=""
                        value="4"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsGroupCourse3" placeholder=""
                        value="4"></td>
                <td style="width: 18%"><input type="text" class="form-control" id="StudentsGroupCourse4" placeholder=""
                        value="2"></td>
                <td style="width: 18%" id="StudentsGroupCourseAll"></td>
            </tr>
            <tr>
                <td style="width: 15%">Средняя численность в группе</td>
                <td style="width: 18%" id="AVGStudentsCountCourse1"></td>
                <td style="width: 18%" id="AVGStudentsCountCourse2"></td>
                <td style="width: 18%" id="AVGStudentsCountCourse3"></td>
                <td style="width: 18%" id="AVGStudentsCountCourse4"></td>
                <td style="width: 18%" id="StudentsGroupCourseAll"></td>
            </tr>

        </tbody>
    </table>
    <hr>
</template>

<style></style>