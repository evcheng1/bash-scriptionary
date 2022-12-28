<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <codemirror
        v-model="code"
        :extensions="extensions"
        :style="{ fontSize: '16px' }"
    />
    <button id="scroll-btn" title="Go to top"><i class="fa fa-arrow-circle-o-up"></i></button>
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

  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

  window.addEventListener('DOMContentLoaded', () => {
      let scrollBtn = document.getElementById("scroll-btn");
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
          if (document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) {
              scrollBtn.style.display = "block";
          } else {
              scrollBtn.style.display = "none";
          }
      }

      scrollBtn.addEventListener("click", topFunction);
  });
</script>

<style scoped>
    #scroll-btn {
        display: none;
        position: fixed;
        bottom: 16px;
        right: 24px;
        z-index: 99;
        border: none;
        outline: none;
        background-color: #333;
        color: white;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        border-color: #abb2bf;
        border-style: solid;
        font-size: 24px;
    }

    #scroll-btn:hover {
        background-color: #555;
    }

</style>
