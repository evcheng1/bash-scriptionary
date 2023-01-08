<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="navbar">
        <div class="dropdown">
            <button class="dropbtn">Control Flow
            </button>
            <div class="dropdown-content">
                <div class="statement">Link 1</div>
                <div class="statement">Link 2</div>
                <div class="statement">Link 3</div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Declaration
            </button>
            <div class="dropdown-content">
                <div class="statement">Link 1</div>
                <div class="statement">Link 2</div>
                <div class="statement">Link 3</div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Expression
            </button>
            <div class="dropdown-content">
                <div class="statement">Link 1</div>
                <div class="statement">Link 2</div>
                <div class="statement">Link 3</div>
            </div>
        </div>
        <a href="javascript: void(0)" id="download-btn"><i class="fa fa-download"></i> Download</a>
    </div>
</template>

<script>
    window.addEventListener('DOMContentLoaded', () => {
        let downloadBtn = document.getElementById("download-btn");

        function downloadScript() {
            const scriptContent = document.getElementsByClassName("cm-content")[0].innerText;
            const filename = 'scriptomata.sh'
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
        float: left;
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
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content .statement {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
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
    }

    #download-btn {
        float: right
    }
</style>
