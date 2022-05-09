<template>
  <div class="pageNavbar">
    <div class="navLogo" @click="$router.push('/')">Vue 3</div>
    <div class="navButtons">
      <blog-btn title="Main" @click="$router.push('/')" path="/" />
      <blog-btn title="Blog" @click="$router.push('/blog')" path="/blog" />
      <blog-btn
        title="Blog with store"
        @click="$router.push('/store')"
        path="/store"
      />
    </div>
  </div>
</template>

<script>
import BlogBtn from './UI/BlogBtn.vue';
export default {
  components: { BlogBtn },
};
</script>

<style>
.pageNavbar {
  padding: 25px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid teal;
}

.navLogo {
  color: teal;
  font-weight: 900;
  cursor: pointer;
}

.navButtons {
  display: flex;
}

.navButtons div {
  margin-left: 10px;
}
</style>
