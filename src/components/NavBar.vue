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
                    <div v-if="hoveredElement === idx" id="{{ idx }}">
                        {{ item[1] }}
                        <button v-on:click="copyCode(item[1])" id="copy-btn">
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

<style scoped>
    .navbar {
        background-color: #333;
        top: 0;
        position: -webkit-sticky;
        position: sticky;
        height: 50px;
        z-index: 1;
        border-radius: 8px;
        border-color: #abb2bf;
        border-style: solid;
    }

    .navbar a {
        font-size: 20px;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    .dropdown {
        float: left;
    }

    .dropdown .dropbtn {
        font-size: 20px;
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
    }

    .navbar a:hover, .dropdown:hover .dropbtn {
        background-color: #abb2bf;
        color: black;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #abb2bf;
        min-width: 160px;
        box-shadow: 0px 0px 4px 0px #abb2bf;
        z-index: 1;
        padding-top: 2px;
    }

    .dropdown-content .statement {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
        font-size: 20px;
    }

    .dropdown-content a:hover {
        background-color: #ddd;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .statement:hover {
        color: #abb2bf;
        background-color: #282c34;
        white-space: pre-wrap;
    }

    #download-btn {
        float: right
    }

    #title {
        font-size: 20px;
        color: white;
        text-align: center;
        padding: 14px 16px;
        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;
    }

    #copy-btn {
        float: right
    }
</style>
