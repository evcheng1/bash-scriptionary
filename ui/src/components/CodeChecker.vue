<template>
    <div id="code-checker" :style="{ borderColor: getColor}"> {{ statusDisplay }} </div>
</template>

<script>
    const CodeCheckerStatus = {
        CodeGood: 0,
        CheckingCode: 1,
        CodeHasError: 2
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
            },

            statusDisplay: function() {
                if (this.codeStatus === CodeCheckerStatus.CodeGood) {
                    return "Code looks good"
                } else if (this.codeStatus === CodeCheckerStatus.CheckingCode) {
                    return "Checking Code..."
                } else {
                    return this.errorMsg
                }
            }
        },
        props: {
            code: String
        },
        data() {
            return {
                codeStatus: CodeCheckerStatus.CodeGood,
                errorMsg: ""
            }
        },
        watch: {
            code: function(val, oldVal) {
                if (this.codeStatus === CodeCheckerStatus.CheckingCode) {
                    return;
                }
                else {
                    this.codeStatus = CodeCheckerStatus.CheckingCode;
                    setTimeout(this.validateCode, 3000);
                }
            }
        },
        methods: {
            async validateCode() {
                const response = await fetch(`/api/validate`, {
                    method: 'POST',
                    headers: {'Content-Type': 'text/plain'},
                    body: this.code
                })

                const result = await response.text()
                if (result.length === 0) {
                    this.codeStatus = CodeCheckerStatus.CodeGood
                } else {
                    this.codeStatus = CodeCheckerStatus.CodeHasError
                    this.errorMsg = result
                }
            }
        }
    }

</script>

<style>
  @import './assets/style/codeEditor.css';
</style>
