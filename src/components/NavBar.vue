<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="navbar">
        <div class="dropdown" v-for="category in categories">
            <button class="dropbtn">
                {{ category.name }}
            </button>
            <div class="dropdown-content">
                <div
                    class="statement"
                    v-for="(item, idx) in category.codeSnippets"
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
        <div id="title">Scriptionary</div>
        <a href="javascript: void(0)" id="download-btn"><i class="fa fa-download"></i> Download</a>
    </div>
</template>

<script>
    const controlFlowStatements = [
        ["if", `if [[ $FOO ]]; then\nfi`],
        ["else if", `elif [[ $BAR ]]; then`]
    ]

    const declarationStatements = [
        ["if", "foo = 1\nhello world"],
        ["else", "bar = 2"]
    ]

    const expressionStatements = [
        ["if", "foo = 1\nhello world"],
        ["else", "bar = 2"]
    ]

    export default {
        methods: {
            copyCode: function (codeSnippet) {
                navigator.clipboard.writeText(codeSnippet)
            }
        },
        data() {
            return {
                hoveredElement: -1,
                categories: [
                    {
                        name: "Control Flow",
                        codeSnippets: controlFlowStatements
                    },
                    {
                        name: "Declaration",
                        codeSnippets: declarationStatements
                    },
                    {
                        name: "Expression",
                        codeSnippets: expressionStatements
                    },
                ]
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
  @import './style/navbar.css';
</style>
