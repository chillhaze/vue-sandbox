export default {
  props: {
    isModalVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit('update:isModalVisible', false);
    },
  },
  mounted() {},
};
