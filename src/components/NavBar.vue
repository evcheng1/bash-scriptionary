<template>
    <div class="navbar">
    <a href="javascript: void(0)">Control Flow</a>
    <a href="javascript: void(0)">Declaration</a>
        <div class="dropdown">
            <button class="dropbtn">Expression
            </button>
            <div class="dropdown-content">
                <a href="javascript: void(0)">Link 1</a>
                <a href="javascript: void(0)">Link 2</a>
                <a href="javascript: void(0)">Link 3</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .navbar {
        background-color: #333;
        top: 0;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        height: 48px;
        z-index: 1;
        border-radius: 1px;
        border-color: #abb2bf;
        border-style: solid;
        z-index: 1;
    }

    .navbar a {
        float: left;
        font-size: 16px;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    .dropdown {
        float: left;
    }

    .dropdown .dropbtn {
        font-size: 16px;
        border: none;
        outline: none;
        color: #abb2bf;
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

    .dropdown-content a {
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
</style>
