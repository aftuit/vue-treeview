<template>
  <div
    class="w-screen h-screen overflow-hidden dark:bg-slate-900 bg-white text-slate-200"
  >
    <div class="container mx-auto">
      <Modal />
      <div class="flex mt-4">
        <SelectedBox />
        <div class="mx-auto mt-3 max-h-96 overflow-y-auto w-1/3">
          <NodeBranch v-for="item in items" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { SelectedBox, NodeBranch, Modal } from "./components";
import { useTreeStore } from "./stores/treeStore";
import { storeToRefs } from "pinia";

export default {
  components: { SelectedBox, NodeBranch, Modal },
  setup() {
    const treeStore = useTreeStore();
    const { items, name } = storeToRefs(treeStore);
    return { items, name, treeStore };
  },
  mounted() {
    this.treeStore.pushItemHandler();
  },
};
</script>

<style>
</style>
