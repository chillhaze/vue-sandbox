<template>
  <h1 class="blogTitle">Blog page with store</h1>

  <blog-input
    :value="searchQuery"
    @update:value="setSearchQuery"
    type="text"
    placeholder="Search"
    parent="search"
  />

  <div class="addPostBtnWrapper">
    <div class="navWrapper">
      <router-link to="/">
        <blog-btn title="Main page" />
      </router-link>

      <blog-btn title="Add new" @click="openModal" btnType="btn-add-post" />
    </div>
    <post-select
      :model-value="selectedOption"
      @update:model-value="setSelectedOption"
      :options="filterOptions"
    />
  </div>

  <blog-pagination
    :totalPages="totalPages"
    :currentPage="currentPage"
    @changeCurrentPage="changeCurrentPage"
  />

  <post-list
    v-if="!isPostsLoading"
    @delete="deletePost"
    :posts="sortedAndFilteredPosts"
    :isPostsLoading="isPostsLoading"
    @load="loadMorePosts"
  >
  </post-list>

  <div v-else>...loading posts</div>

  <post-modal v-model:isModalVisible="isModalVisible">
    <post-form @create="createPost" />
  </post-modal>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import BlogBtn from '@/components/UI/BlogBtn.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  components: { PostForm, PostList, BlogBtn },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setCurrentPage: 'post/setCurrentPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedOption: 'post/setSelectedOption',
    }),
    ...mapActions({
      getPosts: 'post/getPosts',
      loadMorePosts: 'post/loadMorePosts',
    }),
    openModal() {
      this.isModalVisible = true;
    },
    createPost(post) {
      if (post.title !== '' && post.body !== '') {
        this.posts.push(post);
        this.isModalVisible = false;
      }
    },
    deletePost(postToDelete) {
      this.posts = this.posts.filter((post) => post.id !== postToDelete.id);
    },

    changeCurrentPage(pageNumber) {
      this.setCurrentPage(pageNumber);
    },
  },
  mounted() {
    this.getPosts();
  },
  watch: {
    currentPage() {
      this.getPosts();
    },
  },
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
    }),
  },
};
</script>

<style>
.blogTitle {
  padding: 60px 0;
  text-align: center;
  color: teal;
}

.addPostBtnWrapper {
  display: flex;
  justify-content: space-between;
}

.navWrapper {
  display: flex;
}

.navWrapper a {
  margin-right: 10px;
}
</style>
