<template>
  <div class="postList" v-if="posts.length > 0">
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @delete="$emit('delete', post)"
      />
    </transition-group>

    <blog-btn class="loadMoreBtn" title="Load more" @click="loadMore" />
  </div>
  <div v-else-if="!isPostsLoading" class="emptyList">
    <h2 class="emptyListTitle">List is empty</h2>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    isPostsLoading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      body: '',
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: new Date(),
        title: this.title,
        body: this.body,
      };

      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
    loadMore(e) {
      this.$emit('load', e);
    },
  },
};
</script>

<style>
.postList {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid teal;
}

/* ---------Animation--------- */
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.4s ease;
}
/* -------------------------- */
.loadMoreBtn {
  margin-top: 20px;
}
</style>
