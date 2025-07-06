<template>
  <div class="alert" :class="status">
    <h1>{{title}}</h1>
    <p>{{description}}</p>
  </div>
</template>

<script>
import {toRefs} from 'vue'
export default {
  props: {
    status: {
      type: String,
      required: true,
      validator: (value) => {
        return ['primary', 'danger'].includes(value)
      }
    },
    title: String,
    description: String,
  },
  setup(props) {
    const {status, title, description} = toRefs(props)
    return {
      status,
      title,
      description,
    }
  }
}
</script>