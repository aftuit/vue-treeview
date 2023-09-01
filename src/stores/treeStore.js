import { defineStore } from "pinia";

export const useTreeStore = defineStore("treeStore", {
  state: () => ({
    items: [
      {
        label: "Frontend",
        id: "12-21",
        isAdded: false,
        children: [
          {
            id: "12-21-1",
            label: "React",
            isAdded: false,
            parent_id: "12-21",
          },
          {
            id: "12-21-2",
            label: "Vue",
            isAdded: false,
            parent_id: "12-21",
          },
          {
            id: "12-21-3",
            label: "Angular",
            isAdded: false,
            parent_id: "12-21",
          },
        ],
      },
      {
        label: "Backend",
        id: "12-22",
        isAdded: false,
        children: [
          {
            id: "12-22-1",
            label: "Django",
            isAdded: false,
            parent_id: "12-22",
          },
          {
            id: "12-22-2",
            label: "Spring",
            isAdded: false,
            parent_id: "12-22",
          },
          {
            id: "12-22-3",
            label: "Laravel",
            isAdded: false,
            parent_id: "12-22",
          },
          {
            id: "12-22-4",
            label: "Flask",
            isAdded: false,
            parent_id: "12-22",
          },
        ],
      },
      {
        label: "Mobile",
        id: "12-23",
        isAdded: false,
        children: [
          {
            id: "12-23-1",
            label: "Java",
            isAdded: false,
            parent_id: "12-23",
          },
          {
            id: "12-23-2",
            label: "Kotlin",
            isAdded: false,
            parent_id: "12-23",
          },
          {
            id: "12-23-3",
            label: "Flutter",
            isAdded: false,
            parent_id: "12-23",
          },
          {
            id: "12-23-4",
            label: "Android",
            isAdded: false,
            parent_id: "12-23",
          },
        ],
      },
    ],
    name: "Tree View",
    selectedItems: [],
  }),

  actions: {
    editLabel(item, value) {
      item.label = value;
    },

    pushItemHandler() {
      const children = this.items
        .map((item) => {
          return item.children;
        })
        .flat();
      this.selectedItems = children.filter((child) => child.isAdded);
    },

    selectParentHandler(item) {
      item.isAdded = !item.isAdded;
      item.children.map((child) => {
        return (child.isAdded = item.isAdded);
      });
      this.pushItemHandler();
    },

    selectChildHandler(parent_id, child) {
      child.isAdded = !child.isAdded;
      const [parent] = this.items.filter((item) => item.id === parent_id);
      parent.isAdded = parent.children.every((child) => child.isAdded);
      this.pushItemHandler();
    },

    createNode(item, status) {
      if (status === "parent") {
        this.items.push(item);
      } else {
        const [parent] = this.items.filter((i) => i.id === item.parent_id);
        parent.children.push(item);
      }
    },
  },
});
