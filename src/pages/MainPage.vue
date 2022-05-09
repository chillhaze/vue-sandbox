<template>
  <div class="wrapper">
    <h1 class="mainTitle">Welcome to VUE 3 SANDBOX</h1>
    <router-link to="/blog">
      <blog-btn title="Enter Blog" btnType="main-blog" />
    </router-link>
    <router-link to="/store">
      <blog-btn title="Enter Blog with store" btnType="main-blog" />
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

.wrapper a:nth-last-of-type(1) {
  margin-top: 10px;
}

.mainTitle {
  margin-bottom: 20px;
  color: teal;
  border-bottom: 2px solid tomato;
}
</style>
