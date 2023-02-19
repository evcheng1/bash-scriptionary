<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <codemirror
        v-model="code"
        :extensions="extensions"
        :style="{ fontSize: '20px', width: '100%'}"
    />
    <CodeChecker :code="code" ref="codeChecker"/>
</template>

<script>
  import { defineComponent, ref, shallowRef } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import { oneDark } from '@codemirror/theme-one-dark'
  import CodeChecker from './CodeChecker.vue'

  export default defineComponent({
    components: {
      Codemirror,
      CodeChecker
    },
    setup() {
      const emptyLine = '\n'
      const code = ref(`#!/bin/bash${emptyLine.repeat(2)}`)
      const extensions = [oneDark]

      const view = shallowRef()
      const handleReady = (payload) => {
        view.value = payload.view
      }

      return {
        code,
        extensions,
        handleReady
      }
    }
  })
</script>

<style>
  @import './assets/style/codeEditor.css';
</style>
