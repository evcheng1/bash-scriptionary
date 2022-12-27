<template>
    <codemirror
        v-model="code"
        :extensions="extensions"
    />
</template>

<script>
  import { defineComponent, ref, shallowRef } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import { oneDark } from '@codemirror/theme-one-dark'

  export default defineComponent({
    components: {
      Codemirror
    },
    setup() {
      const code = ref(`#!/bin/bash\n\n`)
      const extensions = [oneDark]

      const view = shallowRef()
      const handleReady = (payload) => {
        view.value = payload.view
      }

      return {
        code,
        extensions,
        handleReady,
      }
    }
  })
</script>

<style scoped>
</style>
