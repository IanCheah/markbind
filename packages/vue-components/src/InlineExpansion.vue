<template>
  <div>
    <button 
      v-if="!showInlineText" 
      class="inline-panel" 
      v-on:click="showInlineText = !showInlineText">
      {{ header }}
    </button>
    <div v-else>
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
    }
  },
  data() {
    return {
      showInlineText: false,
    };
  }
}
</script>

<style>
.inline-panel {
  border: 1px solid #000;
  padding: 4px 6px;
  border-radius: 3px;
  color: #f56;
  margin: 0 6px 4px 0;
  display: inline-block;
  width: auto;
}
</style>