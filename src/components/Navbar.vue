<template>
  <div class="card container">
    <h1>Тут ничего нет!</h1>
    <button class="btn" @click="back">Назад</button>
  </div>

</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push('/auth')
    }
  }
}
</script>
