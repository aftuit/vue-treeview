<template>
  <div class="w-1/2">
    <h1 class="text-slate-200 text-center mt-3 text-2xl">Selected Items</h1>
    <h3
      class="text-slate-400 text-center my-2 text-sm"
      v-if="!selectedItems.length"
    >
      No selected items...
    </h3>
    <div
      v-else
      class="shadow-inner p-5 m-3 flex justify-normal flex-wrap dark:bg-slate-950 rounded-lg"
    >
      <div
        class="flex items-center p-4 text-gray-300 divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 m-2"
        v-for="selectedItem in selectedItems"
        :key="selectedItem.id"
      >
        {{ selectedItem.label }}
        <button
          type="button"
          class="bg-slate-600 px-2 ml-2 inline-block rounded"
          @click="
            treeStore.selectChildHandler(selectedItem.parent_id, selectedItem)
          "
        >
          <i class="fa-solid fa-xmark fa-2xs" style="color: #c2c2c2"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { useTreeStore } from "../stores/treeStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const treeStore = useTreeStore();
    const { selectedItems } = storeToRefs(treeStore);
    return { selectedItems, treeStore };
  },
};
</script>
<style>
</style>