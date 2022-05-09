<template>
  <div class="wrapper">
    <h1 class="mainTitle">Welcome to VUE 3 SANDBOX</h1>
    <router-link to="/store">
      <blog-btn title="Enter Blog" />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mainTitle {
  margin-bottom: 20px;
  color: teal;
  border-bottom: 1px solid teal;
}
</style>
