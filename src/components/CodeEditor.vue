<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <codemirror
        v-model="code"
        :extensions="extensions"
        :style="{ fontSize: '20px', width: '100%'}"
    />
    <div id="code-checker">Code looks Good</div>
</template>

<script>
  import { defineComponent, ref, shallowRef } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import { oneDark } from '@codemirror/theme-one-dark'

  const CodeCheckerStatus = {
    CodeGood: 0,
    CheckingCode: 1,
    CodeHasError: 3
  }

  export default defineComponent({
    components: {
      Codemirror
    },
    setup() {
      const emptyLine = '\n'
      const code = ref(`#!/bin/bash${emptyLine.repeat(2)}`)
      const extensions = [oneDark]

      const view = shallowRef()
      const handleReady = (payload) => {
        view.value = payload.view
      }

      const codeStatus = CodeCheckerStatus.CodeGood

      return {
        code,
        extensions,
        handleReady,
        codeStatus
      }
    },
    methods: {
      callSyntaxLambdaFunction: function () {
        this.codeStatus = CodeCheckerStatus.CodeGood

        let codeChecker = document.getElementById("code-checker");
        codeChecker.setAttribute("style","border-color:green");
        codeChecker.innerText = "Code is Good"
      }
    },
    watch: {
      code: function(val, oldVal) {
        if (this.codeStatus === CodeCheckerStatus.CheckingCode) {
          return
        }
        else {
          this.codeStatus = CodeCheckerStatus.CheckingCode

          let codeChecker = document.getElementById("code-checker");
          codeChecker.setAttribute("style","border-color:orange");
          codeChecker.innerText = "Checking Code..."

          setTimeout(this.callSyntaxLambdaFunction, 5000);
        }
      }
    }
  })
</script>

<style scoped>
  #code-checker {
    position: fixed;
    bottom: 24px;
    left: 48px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: #333;
    color: white;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    border-color: green;
    border-style: solid;
    font-size: 20px;
  }
</style>
