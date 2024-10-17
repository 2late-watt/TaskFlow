<template>
  <div class="container mx-auto p-6">
    <div class="hidden lg:block xl:max-w-[80%] mx-auto">
      <div class="flex items-center space-x-5">
        <div :class="tasksColor" class="border-2 border-transparent rounded-lg w-full sm:w-1/3 h-[80vh] p-4">
          <h1 class="font-bold mb-4 flex items-center space-x-2">
            <span class="w-4 h-4 border border-transparent rounded-full bg-color-todo"></span>
            <span>Todo ({{ filteredTasks('Todo').length }})</span>
          </h1>
          <div class="grid grid-cols-1 gap-4">
            <div v-for="task in filteredTasks('Todo')" :key="task.id" :class="taskColor"
                 class="border-2 border-transparent rounded-md shadow-md p-3 flex flex-col justify-between">
              <h2 class="font-bold mb-2 text-sm">{{ task.title }}</h2>
              <p class="font-semibold text-[0.80rem]">{{ truncate(task.description, 100) }}</p>
            </div>
          </div>
        </div>
        <div :class="tasksColor" class="border-2 border-transparent rounded-lg w-full sm:w-1/3 h-[80vh] p-4">
          <h1 class="font-bold mb-4 flex items-center space-x-2">
            <span class="w-4 h-4 border border-transparent rounded-full bg-color-doing"></span>
            <span>Doing ({{ filteredTasks('Doing').length }})</span>
          </h1>
          <div class="grid grid-cols-1 gap-4">
            <div v-for="task in filteredTasks('Doing')" :key="task.id" :class="taskColor"
                 class="border-2 border-transparent rounded-md shadow-md p-3 flex flex-col justify-between">
              <h2 class="font-bold mb-2 text-sm">{{ task.title }}</h2>
              <p class="font-semibold text-[0.80rem]">{{ truncate(task.description, 100) }}</p>
            </div>
          </div>
        </div>
        <div :class="tasksColor" class="border-2 border-transparent rounded-lg w-full sm:w-1/3 h-[80vh] p-4">
          <h1 class="font-bold mb-4 flex items-center space-x-2">
            <span class="w-4 h-4 border border-transparent rounded-full bg-color-done"></span>
            <span>Done ({{ filteredTasks('Done').length }})</span>
          </h1>
          <div class="grid grid-cols-1 gap-4">
            <div v-for="task in filteredTasks('Done')" :key="task.id" :class="taskColor"
                 class="border-2 border-transparent rounded-md shadow-md p-3 flex flex-col justify-between">
              <h2 class="font-bold mb-2 text-sm">{{ task.title }}</h2>
              <p class="font-semibold text-[0.80rem]">{{ truncate(task.description, 100) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card h-[80vh] lg:hidden">
      <Tabs v-model:value="value" :class="taskColor">
        <TabList class="overflow-x-auto">
          <Tab value="0">
            <div class="flex items-center space-x-2">
              <span class="w-4 h-4 border border-transparent rounded-full bg-color-todo"></span>
              <span class="uppercase font-bold">Todo ({{ filteredTasks('Todo').length }})</span>
            </div>
          </Tab>
          <Tab value="1">
            <div class="flex items-center space-x-2">
              <span class="w-4 h-4 border border-transparent rounded-full bg-color-doing"></span>
              <span class="uppercase font-bold">Doing ({{ filteredTasks('Doing').length }})</span>
            </div>
          </Tab>
          <Tab value="2">
            <div class="flex items-center space-x-2">
              <span class="w-4 h-4 border border-transparent rounded-full bg-color-done"></span>
              <span class="uppercase font-bold">Done ({{ filteredTasks('Done').length }})</span>
            </div>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel class="h-[65vh] overflow-y-auto" value="0">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="task in filteredTasks('Todo')" :key="task.id" :class="taskColor"
                   class="border-2 border-transparent rounded-md shadow-md p-3">
                <h2 class="font-bold mb-2 text-sm">{{ task.title }}</h2>
                <p class="font-semibold text-[0.80rem]">{{ truncate(task.description, 50) }}</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel class="h-[65vh] overflow-y-auto" value="1">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="task in filteredTasks('Doing')" :key="task.id" :class="taskColor"
                   class="border-2 border-transparent rounded-md shadow-md p-3">
                <h2 class="font-bold mb-2 text-sm">{{ task.title }}</h2>
                <p class="font-semibold text-[0.80rem]">{{ truncate(task.description, 50) }}</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel class="h-[65vh] overflow-y-auto" value="2">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="task in filteredTasks('Done')" :key="task.id" :class="taskColor"
                   class="border-2 border-transparent rounded-md shadow-md p-3">
                <h2 class="font-bold mb-2 text-sm">{{ task.title }}</h2>
                <p class="font-semibold text-[0.80rem]">{{ truncate(task.description, 50) }}</p>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import {computed, ref, onMounted, watch} from 'vue';
import {useDark} from "@vueuse/core";

const value = ref('0');
const isDark = useDark();

const tasks = ref<any[]>([]);

// Fonction pour charger les tâches depuis le localStorage
const loadTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem('tasks');
  console.log("tasks", storedTasks);
  if (storedTasks) {
    tasks.value = JSON.parse(storedTasks);
  }
};

// Fonction pour sauvegarder les tâches dans le localStorage
const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
};

// Charger les tâches lors du montage du composant
onMounted(() => {
  loadTasksFromLocalStorage();
});

// Watcher pour sauvegarder les tâches à chaque modification
watch(tasks, () => {
  saveTasksToLocalStorage();
}, { deep: true });

// Méthodes pour filtrer et tronquer les tâches
const filteredTasks = (status: string) => {
  return tasks.value.filter(task => task.status.name === status);
};

const truncate = (text: string, length: number) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};

// Couleurs des tâches
const taskColor = computed(() => (isDark.value ? 'bg-color-two-dark text-white text-opacity-85' : 'bg-color-two-light'));
const tasksColor = computed(() => (isDark.value ? 'bg-color-one-dark text-white text-opacity-85' : 'bg-color-one-light'));
</script>

<style scoped>
</style>
