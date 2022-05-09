<template>
  <div class="container">
    <page-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import PageNavbar from '@/components/PageNavbar.vue';
export default {
  components: { PageNavbar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  padding: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

.container {
  padding: 0 15px;
  margin: 0 auto;
  max-width: 1200px;
}
</style>
