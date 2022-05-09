<template>
  <select
    name="filter"
    class="select"
    v-model="modelValue"
    @change="changeOption"
  >
    <!-- <option>fil</option> -->
    <option
      class="selectOption"
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'post-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style>
.select {
  color: teal;
  border: 1px solid teal;
  border-radius: 3px;
}

.select:focus-visible {
  outline: 2px solid teal;
}

.selectOption {
  color: #000;
}
</style>
