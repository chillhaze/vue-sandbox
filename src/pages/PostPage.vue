<template>
  <div>
    <h1>Post ID = {{ $route.params.id }} page</h1>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedOption: (state) => state.post.selectedOption,
      filterOptions: (state) => state.post.filterOptions,
      searchQuery: (state) => state.post.searchQuery,
      currentPage: (state) => state.post.currentPage,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndFilteredPosts: 'post/sortedAndFilteredPosts',
      allPosts: 'post/allPosts',
    }),
  },
};
</script>

<style></style>
