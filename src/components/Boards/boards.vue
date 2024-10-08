<template>
  <header class="py-2 px-7">
    <h1 :class="headerClass" class="font-bold uppercase text-[0.75rem]">
      All boards ({{ boardNumber }})
    </h1>
  </header>

  <main :class="mainClass" class="flex flex-col justify-between h-[80vh]">
    <section>
      <ul class="mb-4">
        <li v-for="board in boards" :key="board.id" :class="boardClass"
            class="flex items-center space-x-2 px-4 py-2 border-t-2 border-transparent rounded-r-full hover:bg-color-four-light hover:text-white"
            @click="closeMenu">
          <Icons name="board"/>
          <span class="font-bold">{{ board.title }}</span>
        </li>
      </ul>
      <div
          class="flex items-center space-x-5 px-4 py-2 border-t-2 border-transparent text-color-four-light font-bold rounded-r-full hover:bg-color-four-light hover:text-white"
          @click="toggleCreateForm">
        <Icons name="board"/>
        <button class="flex items-center space-x-2">
          <Icons name="plus"/>
          <span class="capitalize font-bold">Create new board</span>
        </button>
      </div>
    </section>

    <section class="flex flex-col space-y-2">
      <div class="flex items-center justify-center">
        <div :class="{ 'bg-color-seven': isDark }"
             class="bg-color-five bg-opacity-40 w-[80%] mx-auto text-center py-2 flex justify-center items-center space-x-5">
          <Icons name="sun"/>
          <ToggleSwitch v-model="checked"/>
          <Icons name="moon"/>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button
            class="flex items-center space-x-2 w-[80%] mx-auto hover:bg-color-four-light hover:text-white p-2 rounded-lg"
            @click="closeMenu">
          <Icons name="eye"/>
          <span class="capitalize font-bold">Hide sidebar</span>
        </button>
      </div>
    </section>
  </main>

  <!-- Formulaire de création -->
  <Dialog v-model:visible="showForm" :style="{ width: '90%' }" header="Create New Board" modal>
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Enter the details for the new board.</span>
    <div class="flex items-center gap-4 mb-4">
      <label class="font-semibold w-24" for="boardName">Board Name</label>
      <InputText id="boardName" autocomplete="off" class="flex-auto"/>
    </div>
    <div class="flex justify-end gap-2">
      <Button label="Cancel" class="custom-primevue-cancel-button" severity="secondary" type="button" @click="showForm = false"></Button>
      <Button label="Create" class="custom-primevue-create-button" type="button" @click="createBoard"></Button>
    </div>
  </Dialog>
</template>

<script lang="ts" setup>
import {ref, watch, computed} from "vue";
import {useDark, useToggle} from "@vueuse/core";
import Button from 'primevue/button';
import Icons from "@/components/icons/Icons.vue";
import ToggleSwitch from 'primevue/toggleswitch';
import Dialog from "primevue/dialog";
import InputText from 'primevue/inputtext';

const boardNumber = ref(8);
const boards = ref([
  {title: 'Board 1', id: 1, color: '#007bff', cards: []},
  {title: 'Board 2', id: 2, color: '#6610f2', cards: []},
  {title: 'Board 3', id: 3, color: '#dc3545', cards: []},
  {title: 'Board 4', id: 4, color: '#28a745', cards: []},
  {title: 'Board 5', id: 5, color: '#ffc107', cards: []},
  {title: 'Board 6', id: 6, color: '#17a2b8', cards: []},
  {title: 'Board 7', id: 7, color: '#86e0aa', cards: []},
]);

const isDark = useDark();
const toggleDarkMode = useToggle(isDark);
const checked = ref(isDark);
const showForm = ref(false);
const visible = ref(false);

const emit = defineEmits(['closeMenu'])

// Watcher pour changer le mode sombre
watch(checked, (newValue) => {
  toggleDarkMode(newValue);
});

// Classes calculées
const headerClass = computed(() => (isDark.value ? 'text-white text-opacity-70' : 'text-color-six'));
const mainClass = computed(() => (isDark.value ? 'text-white text-opacity-70' : ''));
const boardClass = computed(() => (isDark.value ? 'text-white text-opacity-70' : 'text-color-six'));

const closeMenu = () => {
  emit('closeMenu');
}

const toggleCreateForm = () => {
  showForm.value = !showForm.value;
}

const createBoard = () => {
  // Logic to create a new board
  showForm.value = false;
}
</script>

<style scoped>
.custom-primevue-create-button {
  color: white;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.custom-primevue-cancel-button {
  background-color: red;
  opacity: 0.6;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.custom-primevue-create-button:hover {
  background-color: #635dc8;
  color: white;
}
</style>
