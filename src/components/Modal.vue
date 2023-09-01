<template>
  <div>
    <div class="flex justify-between p-0 mt-3">
        <h1 class="text-3xl font-extrabold">{{ name }}</h1>
      <button
        id="button"
        data-modal-target="modal"
        data-modal-toggle="modal"
        @click="openModal"
        type="button"
        class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
      >
        Create Tree Branch
      </button>
      <!-- <button id="button" data-modal-toggle="modal" data-modal-target="modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show modal</button> -->
    </div>

    <div
      id="modal"
      tabindex="-1"
      aria-hidden="true"
      data-modal-placement="center"
      v-if="isShowModal"
      class="fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3
              class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white"
            >
              Create Tree Node
            </h3>
            <button
              id="closeButton"
              data-modal-hide="modal"
              type="button"
              @click="closeModal"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <form class="space-y-6" @submit.prevent="submitHandler">
              <div>
                <h1
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Node
                </h1>
                <div
                  class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700"
                >
                  <input
                    checked
                    id="bordered-radio-1"
                    type="radio"
                    value="parent"
                    :name="status"
                    @input="getStatus"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Parent Node</label
                  >
                </div>
                <div
                  class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700"
                >
                  <input
                    @input="getStatus"
                    id="bordered-radio-2"
                    type="radio"
                    value="child"
                    :name="status"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-2"
                    class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Child Node</label
                  >
                </div>
                <div class="border-gray-200 rounded" v-if="status === 'child'">
                  <label
                    for="parent branch"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Select a parent branch</label
                  >
                  <select
                    required
                    id="parent branch"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    @input="changeParentValue"
                    :value="parentValue"
                  >
                    <option disabled selected>Choose a branch</option>
                    <option
                      v-for="item in items"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.label }}
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  for="label"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Node</label
                >
                <input
                  type="text"
                  name="label"
                  id="label"
                  placeholder="Type node label"
                  class="borde text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useTreeStore } from "../stores/treeStore";
import { storeToRefs } from "pinia";

onMounted(() => {
  initFlowbite();
});
export default {
  data() {
    return {
      status: "parent",
      parentValue: "",
      isShowModal: false,
    };
  },
  setup() {
    const treeStore = useTreeStore();
    const { name, items } = storeToRefs(treeStore);
    return { name, items, treeStore };
  },
  methods: {
    getStatus(evt) {
      this.status = evt.target.value;
    },
    changeParentValue(evt) {
      this.parentValue = evt.target.value;
    },
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    submitHandler(evt) {
      const elements = evt.target.elements;
      let item = {};
      if (this.status === "parent") {
        item = {
          label: elements.label.value,
          id: String(new Date().getUTCMilliseconds()),
          isAdded: false,
          isEditing: false,
          children: [],
        };
      } else {
        item = {
          label: elements.label.value,
          id: String(new Date().getUTCMilliseconds()),
          parent_id: this.parentValue,
          isAdded: false,
          isEditing: false,
        };
      }
      this.treeStore.createNode(item, this.status);
      this.status = 'parent';
      this.parentValue = "";
      this.closeModal();
    },
  },
};
</script>
<style>
</style>