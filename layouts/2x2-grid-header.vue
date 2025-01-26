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
    <div class="col-header mb-6" :class="props.layoutClass">
        <slot />
    </div>
    <div class="two-columns w-full h-full grid grid-rows-2 gap-x-10" :class="props.layoutClass">
      <div id="top" class="grid grid-cols-2">
        <div class="col-top-left" :class="props.class">
            <slot name="top-left" />
        </div>
        <div class="col-top-right" :class="props.class">
            <slot name="top-right" />
        </div>
      </div>
      <div id="bottom" class="grid grid-cols-2 -mt-5">
        <div class="col-bottom-left" :class="props.class">
            <slot name="bottom-left" />
        </div>
        <div class="col-bottom-right" :class="props.class">
            <slot name="bottom-right" />
        </div>
      </div>
    </div>
  </div>
</template>