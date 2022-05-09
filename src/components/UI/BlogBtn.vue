<template>
  <div class="postBtnWrapper">
    <button
      class="postBtn"
      :class="{
        paginationBtn: btnType === 'btn-pagination',
        paginationBtn__current: currentPage,
        addPostBtn: btnType === 'btn-add-post',
        postItemBtn: btnType === 'post-item',
      }"
    >
      {{ this.title }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'blog-btn',
  props: {
    title: {
      type: String,
      required: true,
    },
    btnType: {
      type: String,
    },
    currentPage: {
      type: Boolean,
    },
  },
};
</script>

<style>
.postBtn {
  color: #fff;
  padding: 5px 35px;
  background-color: teal;
  border: 1px solid teal;
  border-radius: 3px;
  cursor: pointer;
}

.addPostBtn {
  padding: 5px 28px;
}

.paginationBtn {
  padding: 5px 10px;
  margin: 5px;
}

.paginationBtn__current {
  color: teal;
  background-color: #fff;
  border: 1px solid teal;
}

.postBtn:focus-visible {
  outline: 2px solid teal;
}

.postItemBtn {
  width: 100%;
}
</style>
