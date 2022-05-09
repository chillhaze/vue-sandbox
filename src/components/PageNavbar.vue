<template>
  <div class="pageNavbar">
    <div class="navLogo" @click="$router.push('/')">Vue 3</div>
    <div class="navButtons">
      <blog-btn title="Main" @click="$router.push('/')" />
      <!-- <blog-btn title="Blog" @click="$router.push('/blog')" /> -->
      <blog-btn title="Blog" @click="$router.push('/store')" />
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
  height: 50px;
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

.navButtons div:nth-last-of-type(1) {
  margin-left: 10px;
}
</style>
