<template>
    <nav>
        <ul>
            <li>2015 Acme, Inc</li>
            <li>Terms</li>
            <li>Privacy</li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
li {
    margin-right: 3rem;
    list-style-type: none;
}

ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
}

nav {
    position: absolute;
    bottom: 5%;
    right: 50%;
    transform: translate(50%);
    width: 440px;
}
</style>