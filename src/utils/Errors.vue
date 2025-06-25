<template>
  <div class="alert danger" :class="checkError">
    <h1>Ошибка!</h1>
    <p>Пароль неверный</p>
    <small>{{checkError}}</small>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {ref, computed} from 'vue'
export default {
  setup() {
    const store = useStore()

    const colorBorder = ref(['danger', 'primary'])

    function checkError() {
      const error = store.state.accounts
      if(error[0].data.id === 1) {
        colorBorder[1]
      }
      return colorBorder[0]
    }

    return {
      colorBorder,
      checkError
    }
  }
}
</script>