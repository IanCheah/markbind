<template>
    <div>
        <button 
            v-if="!isShowInlineText" 
            v-on:click="isShowInlineText = !isShowInlineText;" 
            :class="inlinePanelClass" 
            :style="buttonStyle">
            {{ header }}
        </button>
        <div v-else class="content" :style="contentStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InlineExpansion',
  props: {
    header: {
      type: String,
      default: 'Header',
    },
    // Change 1: for customizable button style
    buttonStyle: {
        type: Object,
        default: () => ({
            backgroundColor: '#add',
            color: '#333',
            padding: '6px 12px',
        }),
    },
    // Change 2: for customizable content style
    contentStyle: {
        type: Object,
        default: () => ({
            padding: '10px',
            backgroundColor: '#f7f7f7',
            borderRadius: '3px',
        }),
    },
    // Change 3: for customizable class for the button
    inlinePanelClass: {
        type: String,
        default: 'inline-panel',
    },
  },
  data() {
    return {
        isShowInlineText : false,
    }
  },
}
</script>

<style>
.inline-panel {
    border: 1px solid #ddd;
    padding: 4px 6px;
    border-radius: 3px;
    color: #333;
    margin: 0 6px 4px 0;
    display: inline-block;
}
/*Add default style for content*/
.content {
    overflow: hidden;
}
</style>