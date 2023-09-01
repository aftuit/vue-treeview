<template>
    <li class="w-full p-1 flex items-center">
      <input
        type="checkbox"
        class="rounded"
        :checked="child?.isAdded"
        @input="treeStore.selectChildHandler(child.parent_id, child)"
      />
      <input
        ref="child"
        type="text"
        class="inline-block p-0 border-none outline-none bg-transparent ml-2"
        :value="child.label"
        @input="(evt) => editHandler(child, evt)"
      />
    </li>
</template>
<script>
import { useTreeStore } from '../stores/treeStore';
export default {
  props: {
    child: {
        type: Object,
        required: true,
    },
    item: {
        type: Object,
        required: true,
    },
    editHandler: {
        type: Function,
        required: true
    }
  },
  setup() {
    const treeStore = useTreeStore();

    return {treeStore}
  },

}
</script>
<style>
  
</style>