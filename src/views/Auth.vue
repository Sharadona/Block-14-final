// Окно авторизации
<template>
  <form class="card container" @submit.prevent="checkAccount">
    <h1>Войти в систему</h1>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="dataUser.email" required>
    </div>

    <div class="form-control">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="dataUser.password" required>
    </div>

    <button class="btn primary" type="submit">Войти</button>
    <div class="text-danger">
      Вы слишком часто пытаетесь войти в систему. Попробуйте позже
    </div>
  </form>
</template>

<script>
import {useStore} from "vuex";
import {useRouter} from "vue-router"
import {ref,computed} from "vue"
export default {
  setup() {
    const store = useStore();
    const router = useRouter()

    const dataUser = ref({
        email: '',
        password: '',
    })

    /*Вызываю асинхронную функцию для проверки правильности введёного email и password
    * Проверяю, соответствует email и password тем, что есть на сервере
    * */
    function checkAccount() {
      store.dispatch("checkAccount", {
        email: dataUser.value.email,
        password: dataUser.value.password
      })
      if (dataUser.value.email === 'ma@ma.ru' && dataUser.value.password === '12345') {
        router.push('/navbar')
      }
    }
    return {
      dataUser,
      checkAccount
    }
  }
}
</script>





<style scoped>
  .container {
    max-width: 1000px;
    margin: auto;
    text-align: left;
  }
</style>