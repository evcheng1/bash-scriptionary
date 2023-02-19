<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="navbar">
        <div class="dropdown" v-for="category in samples">
            <button class="dropbtn">
                {{ category.name }}
            </button>
            <div class="dropdown-content">
                <div
                    class="statement"
                    v-for="(item, idx) in category.snippets"
                    @mouseenter="hoveredElement = idx"
                    @mouseleave="hoveredElement = -1"
                >
                    <div v-if="hoveredElement !== idx">
                        {{ item[0] }}
                    </div>
                    <div v-if="hoveredElement === idx" id="{{ idx }}" class="code">
                        <div class="snippet">{{ item[1] }}</div>
                        <button v-on:click="copyCode(item[1])" id="copy-btn" class="element">
                            <i class="fa fa-clipboard"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="title">Bash Scriptionary</div>
        <a href="javascript: void(0)" id="download-btn"><i class="fa fa-download"></i> Download</a>
    </div>
</template>

<script>
    import samples from "./assets/samples.json"

    export default {
        methods: {
            copyCode: function (codeSnippet) {
                navigator.clipboard.writeText(codeSnippet)
            }
        },
        mounted() {
            this.samples = samples
        },
        data() {
            return {
                hoveredElement: -1,
                samples,
            }
        }
    }

    window.addEventListener('DOMContentLoaded', () => {
        let downloadBtn = document.getElementById("download-btn");

        function downloadScript() {
            const scriptContent = document.getElementsByClassName("cm-content")[0].innerText;
            const filename = 'scriptionary.sh'
            const element = document.createElement('a');

            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(scriptContent));
            element.setAttribute('download', filename);

            element.style.display = 'none';
	        document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }

        downloadBtn.addEventListener("click", downloadScript);
    });
</script>

<style>
  @import './assets/style/navbar.css';
</style>
