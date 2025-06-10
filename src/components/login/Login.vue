<script>
    export default {
        data(){
            return {
                loginUser: "",
                loginTest: "aaf",
                passUser: "",
                passTest: "123",
                error: ""
            }
        },
        methods: {
            auth(){
                if ((this.loginUser == this.loginTest) && (this.passUser == this.passTest)) {
                    location.href = "./"
                } else if ((this.loginUser == "") || (this.passUser == "")) {
                    this.error = "Все поля должны быть заполнены"
                } else {
                    this.error = "Неверное имя пользователя или пароль"
                }
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="bg-body-tertiary p-5 rounded-3">
                    <div class="alert alert-danger" role="alert" v-if=" error != ''">
                        {{ error }}
                    </div>
                    <h3 class="fs-2 mb-4">
                        Вход в калькулятор РОПа
                    </h3>
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </span>
                        <input type="text" class="form-control" v-model="loginUser" placeholder="Имя пользователя">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            <i class="fa fa-key" aria-hidden="true"></i>
                        </span>
                        <input type="password" class="form-control" v-model="passUser" placeholder="Пароль">
                    </div>
                    <button class="btn btn-info" @click="auth">
                        Войти
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>