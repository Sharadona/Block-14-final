<template>
  <form class="card container" @submit.prevent="check">
    <h1>Войти в систему</h1>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>
    </div>

    <div class="form-control">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="password" required>
    </div>

    <button class="btn primary" type="submit">Войти</button>
    <div class="text-danger">
      Вы слишком часто пытаетесь войти в систему. Попробуйте позже
    </div>
  </form>
  <button class="btn primary" @click="increment">Добавить {{counter}}</button>
</template>

<script>
import {useStore} from "vuex";
import {useRouter} from "vue-router"
import {ref,computed} from "vue"
export default {
  setup() {
    const store = useStore();
    const router = useRouter()
    const email = ref('')
    const password = ref('')

    function check() {
      if (email.value === 'ma@ma.ru' && password.value === '12345') {
        router.push('/navbar')
      }
    }

    return {
      email,
      password,
      check,
      counter: computed(() => store.state.counter),
      increment: () => store.commit('increment', 1)
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