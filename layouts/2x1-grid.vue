<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout">
    <div class="two-columns w-full h-full grid grid-rows-2 gap-x-10" :class="props.layoutClass">
      <div id="top" class="grid grid-cols-2">
        <div class="col-top-left" :class="props.class">
            <slot name="left" />
        </div>
        <div class="col-top-right" :class="props.class">
            <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>