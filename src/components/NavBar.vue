<template>
    <div id="navbar">
        <a class="active" href="javascript:void(0)">Control Flow</a>
        <a href="javascript:void(0)">Declaration</a>
        <a href="javascript:void(0)">Expression</a>
    </div>
</template>

<style scoped>
    #navbar {
        background-color: #282c34;
        position: sticky;
        top: 0;
        height: 48px;
        z-index: 1;
        border-radius: 1px;
        border-color: #abb2bf;
        border-style: solid;
    }

    /* Navbar links */
    #navbar a {
        float: left;
        display: block;
        color: #abb2bf;
        text-align: center;
        padding: 14px;
        text-decoration: none;
        box-sizing: border-box;
    }

    #navbar a:hover {
        background-color: #abb2bf;
        color: black;
    }
</style>
