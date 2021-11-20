<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

@font-face {
  font-family: "OpenSans";
  src: local("OpenSans"),
   url(./assets/fonts/OpenSans-SemiBold.ttf) format("truetype");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
