<template>
  <div class="post">
    <div class="postBody">
      <div><span class="textAccent">#</span> {{ post.id }}</div>
      <div><span class="textAccent">Title: </span> {{ post.title }}</div>
      <div><span class="textAccent">Description: </span>{{ post.body }}</div>
    </div>
    <div class="buttonsWrapper">
      <blog-btn
        btnType="post-item"
        @click="$router.push(`/post/${post.id}`)"
        title="Open"
      />
      <blog-btn
        btnType="post-item"
        @click="$emit('delete', post)"
        title="Delete"
      />
    </div>
    <!-- use with <slot></slot> -->
    <!-- <blog-btn>Delete</blog-btn> -->
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  width: 100%;
  padding: 5px;
  margin-top: 20px;
  border: 2px solid teal;
  border-radius: 3px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.postBody {
  position: relative;
  width: 100%;
  padding: 0 10px;
}

.postBody::after {
  position: absolute;
  top: 0;
  right: 6px;
  bottom: 0;
  content: '';
  border-right: 1px solid teal;
}

.textAccent {
  color: tomato;
  font-weight: 700;
}

.buttonsWrapper {
  display: flex;
  flex-direction: column;
}

.buttonsWrapper div:nth-last-of-type(1) {
  margin-top: 5px;
}
</style>
