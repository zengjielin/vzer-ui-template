<template>
    <button @click="clickBtn" :class="classBtn" :disabled="isDisabled">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: "Button",
  display: "Button按钮",
  data() {
    return {
      preCls: "vzer-btn"
    };
  },
  props: {
    isDisabled: Boolean,
    shape: {
      type: String,
      default: "" //'circle'圆角, 'rectangle'直角
    },
    type: {
      type: String,
      default: "default", //['default',success', 'warning', 'error', 'info']
      validator(value) {
        let types = ["default","primary", "success", "warning", "error", "info"];
        return types.includes(value) || !value;
      }
    },
    size: {
      type: String,
      default: "" //['large', 'medium', 'small']
    }
  },
  computed: {
    classBtn() {
      let { preCls, type, size, shape } = this;
      let className = [
        `${preCls}`,
        {
          [`${preCls}-${type}`]: !!type,
          [`${preCls}-${size}`]: !!size,
          [`${preCls}-${shape}`]: !!shape
        }
      ];
      return className;
    }
  },
  methods: {
    clickBtn(ev) {
      this.$emit("click", ev);
    }
  }
};
</script>
