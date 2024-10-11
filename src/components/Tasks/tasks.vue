<template>
  <div class="container mx-auto p-6">
    <div class="hidden lg:block">
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
        <TabList>
          <Tab class="uppercase font-bold" value="0">
            <div class="flex items-center space-x-2">
              <span class="w-4 h-4 border border-transparent rounded-full bg-color-todo"></span>
              <span>Todo ({{ filteredTasks('Todo').length }})</span>
            </div>
          </Tab>
          <Tab class="uppercase font-bold" value="1">
            <div class="flex items-center space-x-2">
              <span class="w-4 h-4 border border-transparent rounded-full bg-color-doing"></span>
              <span>Doing ({{ filteredTasks('Doing').length }})</span>
            </div>
          </Tab>
          <Tab class="uppercase font-bold" value="2">
            <div class="flex items-center space-x-2">
              <span class="w-4 h-4 border border-transparent rounded-full bg-color-done"></span>
              <span>Done ({{ filteredTasks('Done').length }})</span>
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
import {computed, ref} from 'vue';
import {useDark} from "@vueuse/core";

const value = ref('0');
const isDark = useDark();

const tasks = ref([
  {
    id: 1,
    title: 'Rédiger le rapport de projet',
    description: "Préparer un rapport détaillé sur l'avancement du projet pour la réunion de la semaine prochaine.",
    status: 'Todo'
  },
  {
    id: 2,
    title: 'Développer la fonctionnalité de recherche',
    description: "Implémenter la fonctionnalité de recherche dans l'application pour améliorer l'expérience utilisateur.",
    status: 'Doing'
  },
  {
    id: 3,
    title: 'Tester l’application',
    description: "Effectuer des tests sur l'application pour identifier et corriger les bugs avant le lancement.",
    status: 'Done'
  },
  {
    id: 4,
    title: 'Mettre à jour la documentation',
    description: "Réviser et mettre à jour la documentation technique pour refléter les derniers changements.",
    status: 'Todo'
  },
  {
    id: 5,
    title: 'Organiser la réunion d’équipe',
    description: "Planifier et organiser une réunion d'équipe pour discuter des progrès et des défis.",
    status: 'Doing'
  },
  {
    id: 6,
    title: 'Déployer la mise à jour',
    description: "Déployer la dernière mise à jour de l'application sur le serveur de production.",
    status: 'Done'
  },
  {
    id: 7,
    title: 'Créer des maquettes',
    description: "Concevoir des maquettes pour la nouvelle interface utilisateur de l'application.",
    status: 'Todo'
  },
  {
    id: 8,
    title: 'Analyser les retours utilisateurs',
    description: "Examiner les retours des utilisateurs pour identifier les améliorations possibles.",
    status: 'Doing'
  },
  {
    id: 9,
    title: 'Préparer la présentation',
    description: "Créer une présentation pour le comité de direction sur l'état du projet.",
    status: 'Done'
  },
  {
    id: 10,
    title: 'Préparer la présentation',
    description: "Créer une présentation pour le comité de direction sur l'état du projet.",
    status: 'Todo'
  },
]);

const filteredTasks = (status: string) => {
  return tasks.value.filter(task => task.status === status);
};

const truncate = (text: string, length: number) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};

const taskColor = computed(() => (isDark.value ? 'bg-color-two-dark text-white text-opacity-85' : 'bg-color-two-light'));
const tasksColor = computed(() => (isDark.value ? 'bg-color-one-dark text-white text-opacity-85' : 'bg-color-one-light'));
</script>

<style scoped>
/* Ajoutez vos styles personnalisés ici si nécessaire */
</style>
