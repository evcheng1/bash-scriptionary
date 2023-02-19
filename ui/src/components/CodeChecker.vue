<template>
    <div id="code-checker" :style="{ borderColor: getColor}"> {{ codeStatus }} </div>
</template>

<script>
    const CodeCheckerStatus = {
        CodeGood: "Code looks good",
        CheckingCode: "Checking Code...",
        CodeHasError: "Code has error"
    };

    export default {
        computed: {
            getColor: function() {
                if (this.codeStatus === CodeCheckerStatus.CodeGood) {
                    return "green";
                } else if (this.codeStatus === CodeCheckerStatus.CheckingCode) {
                    return "orange";
                } else {
                    return "red";
                }
            }
        },
        props: {
            code: String
        },
        data() {
            return {
                codeStatus: CodeCheckerStatus.CodeGood
            }
        },
        watch: {
            code: function(val, oldVal) {
                if (this.codeStatus === CodeCheckerStatus.CheckingCode) {
                    return;
                }
                else {
                    this.codeStatus = CodeCheckerStatus.CheckingCode;
                    setTimeout(this.checkCode, 3000);
                }
            }
        },
        methods: {
            checkCode: function(code) {
                this.codeStatus = CodeCheckerStatus.CodeGood;
            }
        }
    }

</script>

<style>
  @import './assets/style/codeEditor.css';
</style>
