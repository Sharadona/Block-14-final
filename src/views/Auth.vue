// Окно авторизации
<template>
  <div v-if="authStatus">
    <errors
        v-if="isAuth"
        status="primary"
        title="Успех!"
        description="Пароль верный"
    ></errors>
    <errors
        v-else
        status="danger"
        title="Ошибка!"
        description="Пароль неверный"
    ></errors>
  </div>
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
import Errors from "../utils/Errors.vue";
export default {
  setup() {
    const store = useStore();
    const router = useRouter()

    const dataUser = ref({
        email: '',
        password: '',
    })

    const isAuth = computed(() => {
      return store.state.token
    })
    const authStatus = ref(false)
    /*Вызываю асинхронную функцию для проверки правильности введёного email и password
    * Проверяю, соответствует email и password тем, что есть на сервере
    * */
    function checkAccount() {
      store.dispatch("checkAccount", {
        email: dataUser.value.email,
        password: dataUser.value.password
      })
      authStatus.value = true
      setTimeout(() => authStatus.value = false, 3000)
      if (dataUser.value.email === 'ma@ma.ru' && dataUser.value.password === '12345') {
        // router.push('/navbar')
      }
    }

    return {
      dataUser,
      checkAccount,
      authStatus,
      isAuth
    }
  },
  components: {Errors}
}
</script>





<style scoped>
  .container {
    max-width: 1000px;
    margin: auto;
    text-align: left;
  }
</style>