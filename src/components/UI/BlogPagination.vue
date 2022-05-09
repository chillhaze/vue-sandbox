<template>
  <div class="paginationContainer">
    <blog-btn
      v-for="page in totalPages"
      :title="page.toString()"
      btnType="btn-pagination"
      :key="page"
      :onCurrentPage="currentPage === page"
      @click="changePage(page)"
    />
  </div>
</template>

<script>
import BlogBtn from './BlogBtn.vue';
export default {
  components: { BlogBtn },
  name: 'blog-pagination',
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      this.$emit('changeCurrentPage', page);
    },
  },
};
</script>

<style>
.paginationContainer {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
