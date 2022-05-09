<template>
  <div class="modal" v-if="isModalVisible" @click="hideModal">
    <div class="modalContent" @click.stop>
      <h2 class="modalContentTitle">Add new post</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';
export default {
  name: 'post-modal',
  mixins: [toggleMixin],
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
}

.modalContent {
  margin: 100px auto auto;
  padding: 60px 20px 60px;
  background-color: #fff;

  border-radius: 2px;
}

.modalContentTitle {
  color: teal;
  text-align: center;
}
</style>
