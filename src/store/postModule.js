import axios from 'axios';

export const postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedOption]
          ?.toString()
          .localeCompare(post2[state.selectedOption].toString())
      );
    },
    sortedAndFilteredPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title?.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    allPosts(state) {
      return state.posts;
    },
  },
  mutations: {
    setPosts(state, credentials) {
      if (credentials.option === 'load-more') {
        state.posts = [...state.posts, ...credentials.data];
      } else {
        state.posts = credentials.data;
      }
    },
    setPostsLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setSelectedOption(state, option) {
      state.selectedOption = option;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setTotalPages(state, totalPagesCount) {
      state.totalPages = totalPagesCount;
    },
    setPageLimit(state, credentials) {
      if (credentials.option === 'load-more') {
        state.limit += credentials.data;
      } else {
        state.limit = credentials.data;
      }
    },
  },
  actions: {
    async getPosts({ state, commit }) {
      try {
        commit('setPostsLoading', true);
        commit('setPageLimit', { data: 10, option: 'pagination' });

        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.currentPage,
              _limit: state.limit,
            },
          }
        );
        commit(
          'setTotalPages',
          Math.ceil(response.headers['x-total-count'] / state.limit)
        );

        commit('setPosts', { data: response.data, option: 'pagination' });
      } catch (error) {
        console.log(error);
      } finally {
        commit('setPostsLoading', false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit('setPostsLoading', true);
        commit('setPageLimit', { data: 10, option: 'load-more' });

        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.currentPage,
              _limit: state.limit,
            },
          }
        );
        commit(
          'setTotalPages',
          Math.ceil(response.headers['x-total-count'] / state.limit)
        );

        commit('setPosts', { data: response.data, option: 'load-more' });
      } catch (error) {
        console.log(error);
      } finally {
        commit('setPostsLoading', false);
      }
    },
  },
  namespaced: true,
};
