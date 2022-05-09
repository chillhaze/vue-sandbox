<template>
  <div class="postWrapper">
    <!-- <h1>Post ID = {{ $route.params.id }} page</h1> -->
    <div class="postTitleContainer">
      <p class="postId"># {{ chosenPost.id }}</p>
      <p class="postTitle">"{{ chosenPost.title }}"</p>
    </div>

    <p class="postDescription">...{{ chosenPost.body }}.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      chosenPost: (state) => state.post.chosenPost,
    }),
  },
};
</script>

<style>
.postWrapper {
  text-align: center;
}

.postId {
  max-width: 550px;
  padding-top: 20px;
  margin: 60px auto 0;
  font-size: 36px;
  color: teal;
  font-weight: 700;
}

.postTitle {
  max-width: 550px;
  padding-bottom: 20px;
  margin: 0 auto 40px;
  font-size: 36px;
  color: tomato;
  font-weight: 700;
  border-bottom: 1px solid tomato;
}

.postDescription {
  margin: 0 auto;
  max-width: 900px;
  font-size: 24px;
  color: teal;
  font-weight: 700;
}
</style>
