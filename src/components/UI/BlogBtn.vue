<template>
  <div class="postBtnWrapper">
    <button
      class="postBtn"
      :class="{
        paginationBtn: btnType === 'btn-pagination',
        paginationBtn__current: onCurrentPage,
        addPostBtn: btnType === 'btn-add-post',
        postItemBtn: btnType === 'post-item',
        mainPageBlogBtn: btnType === 'main-blog',
        isActive: $route.path === this.path,
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
    onCurrentPage: {
      type: Boolean,
    },
    path: {
      type: String,
    },
  },
};
</script>

<style>
.postBtn {
  position: relative;
  color: #fff;
  padding: 5px 35px;
  background-color: teal;
  border: 1px solid teal;
  border-radius: 3px;
  cursor: pointer;
}
.postBtn:hover {
  color: teal;
  background-color: white;
  transition: 200ms linear;
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

.mainPageBlogBtn {
  width: 195px;
}

.isActive {
  color: teal;
  background-color: #9baabb;
}
.isActive:hover {
  color: tomato;
  background-color: #fff;
  border: 1px solid tomato;
}
</style>
