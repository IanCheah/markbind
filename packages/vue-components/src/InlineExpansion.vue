<template>
  <div>
    <button 
      v-if="!showInlineText" 
      class="inline-panel" 
      v-on:click="showInlineText = !showInlineText">
      {{ header }}
    </button>
    <div v-else :style="computedStyle">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default  {
  name: 'InlineExpansion',
  props: {
    header: {
      type: String,
      default: 'Header',
    },
    fontFamily: {
      type: String,
    },
  },
  data() {
    return {
      showInlineText: false,
    };
  },
  computed: {
    computedStyle() {
      return {
        '--font-family': this.fontFamily || 'Impact'
      };
    },
  },
}
</script>

<style>

.inline-panel {
  border: 1px solid #000;
  padding: 4px 6px;
  border-radius: 3px;
  color: #000;
  margin: 0 6px 4px 0;
  display: inline-block;
  width: auto;
}
</style>