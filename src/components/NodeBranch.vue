<template>
  <div class="px-3 py-1 rounded border-slate-500 shadow-lg max-w-lg my-0 dark:bg-slate-950 ">
    <!-- Parent Node -->
    <div class="head flex items-center p-1">
      <i
        @click="toggleShow"
        class="fa-solid fa-angle-right text-slate-400"
        :class="showChildren ? 'rotate-90' : ''"
      ></i>
      <input
        type="checkbox"
        class="mx-2 rounded"
        :checked="item?.isAdded"
        @input="treeStore.selectParentHandler(item)"
        :disabled="item.children.length === 0"
      />
      <input
        ref="parent"
        type="text"
        class="inline-block border-none outline-nonep-1 bg-transparent"
        :value="item.label"
        @input="(evt) => editHandler(item, evt)"
      />
    </div>
    <!-- Children Branch -->
    <ul class="ml-8 mt-0" v-if="showChildren">
      <span v-if="item.children.length === 0" class="text-slate-300 italic text-sm">No children</span>
      <NodeItem
        v-for="child in item.children"
        :key="child.id"
        :child="child"
        :item="item"
        :editHandler="editHandler"
      />
    </ul>
  </div>
</template>
<script>
import NodeItem from "./NodeItem.vue";
import { useTreeStore } from "../stores/treeStore";

export default {
  components: { NodeItem },
  setup() {
    const treeStore = useTreeStore();
    return { treeStore };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showChildren: false,
    };
  },
  methods: {
    editHandler(item, evt) {
      this.treeStore.editLabel(item, evt.target.value);
    },
    toggleShow() {
      this.showChildren = !this.showChildren;
    },
  },
};
</script>
<style>
</style>