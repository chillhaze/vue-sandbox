<template>
  <h1 class="blogTitle">Blog</h1>

  <blog-input
    v-model:value="searchQuery"
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
    <post-select v-model="selectedOption" :options="filterOptions" />
  </div>

  <blog-pagination
    :totalPages="totalPages"
    :currentPage="currentPage"
    @changeCurrentPage="changeCurrentPage"
  />
  <!-- use with watch property -->
  <!-- <post-list v-if="!isPostsLoading" @delete="deletePost" :posts="posts" /> -->

  <!-- use with computed property -->
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
import axios from 'axios';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  components: { PostForm, PostList },
  data() {
    return {
      posts: [],
      isModalVisible: false,
      isPostsLoading: false,
      selectedOption: 'filter',
      filterOptions: [
        { value: 'filter', title: 'Filter posts' },
        { value: 'id', title: 'sort by id' },
        { value: 'title', title: 'sort by title' },
        { value: 'body', title: 'sort by description' },
      ],
      searchQuery: '',
      currentPage: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  methods: {
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
    async getPosts() {
      try {
        this.isPostsLoading = true;
        this.limit = 10;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.currentPage,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        );

        this.posts = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.isPostsLoading = true;
        this.limit += 10;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.currentPage,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        );

        this.posts = [this.posts, ...response.data];
      } catch (error) {
        console.log(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
    changeCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
  mounted() {
    this.getPosts();
  },
  watch: {
    currentPage() {
      this.getPosts();
    },
    // use same name as v-model only
    // selectedOption(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     // console.log(post1[newValue]);
    //     return post1[newValue]
    //       ?.toString()
    //       .localeCompare(post2[newValue].toString());
    //   });
    // },
    // searchQuery(newValue) {
    //   if (newValue) {
    //     this.posts = [...this.posts].filter((post) =>
    //       post.title.toLowerCase().includes(newValue.toLowerCase())
    //     );
    //   }
    // },
  },
  computed: {
    // use any name of function
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedOption]
          ?.toString()
          .localeCompare(post2[this.selectedOption].toString())
      );
    },
    sortedAndFilteredPosts() {
      return this.sortedPosts.filter((post) =>
        post.title?.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
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
