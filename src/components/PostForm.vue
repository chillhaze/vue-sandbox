<template>
  <div class="formWrapper">
    <form @submit.prevent class="form">
      <blog-input
        v-focus
        v-model:value="post.title"
        type="text"
        placeholder="Enter post name"
      />
      <blog-input
        v-model:value="post.body"
        type="text"
        placeholder="Enter post description"
        position="last"
      />
      <blog-btn @click="createPost" :title="this.title" />
      <!-- use with <slot></slot> -->
      <!-- <blog-btn @click="createPost">Add</blog-btn> -->
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: { title: '', body: '' },
      title: 'Add',
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style>
.formWrapper {
  display: flex;
  justify-content: center;
}

.form {
  width: 500px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
