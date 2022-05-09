<template>
  <input
    class="input"
    :class="{
      inputLast: position === 'last',
      inputSearch: parent === 'search',
    }"
    :type="this.type"
    :placeholder="this.placeholder"
    :value="value"
    @input="updateInput"
  />
</template>

<script>
export default {
  name: 'blog-input',
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: [String, Number],
    position: {
      type: String,
    },
    parent: {
      type: String,
    },
  },
  methods: {
    updateInput(e) {
      this.$emit('update:value', e.target.value);
    },
  },
};
</script>

<style>
.input {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  text-align: center;
  border: 1px solid teal;
  border-radius: 3px;
}

.input:focus-visible {
  outline: 2px solid teal;
}

.inputLast {
  height: 70px;
}

.inputSearch {
  font-style: italic;
}
</style>
