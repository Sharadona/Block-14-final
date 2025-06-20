<template>
  <form class="card container" @submit.prevent="">
    <h1>Войти в систему</h1>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" required>
    </div>

    <div class="form-control">
      <label for="password">Пароль</label>
      <input type="password" id="password" required>
    </div>

    <button class="btn primary" type="submit">Войти {{increment()}}</button>
    <div class="text-danger">
      Вы слишком часто пытаетесь войти в систему. Попробуйте позже
    </div>
  </form>
</template>

<script>
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore();
    function increment() {
      store.commit('counter', 1);
    }
    return {
      increment
    }
  },

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