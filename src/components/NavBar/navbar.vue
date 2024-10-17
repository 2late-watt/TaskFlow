<template>
  <div class="container mx-auto">
    <header :class="headerClass" class="flex items-center justify-between p-4 shadow-sm">
      <div class="flex items-center space-x-4">
        <MenuList/>
        <Logo/>
      </div>
      <div>
        <button
            class="flex items-center space-x-2 bg-color-four-light hover:bg-opacity-90 py-2 px-4 text-white border-2 border-transparent rounded-full"
            @click="openCreateForm"
        >
          <Icons name="plus"/>
          <span class="text-md hidden md:block">Add New Task</span>
        </button>
      </div>
    </header>

    <Dialog
        v-model:visible="showForm"
        class=" w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
        header="Create New Task"
        modal
    >
      <span class="text-surface-500 dark:text-surface-400 block mb-8">
        Enter the details for the new task.
      </span>
      <form @submit.prevent="createTask">
        <div class="flex flex-col items-center space-y-2 mb-4">
          <label class="font-semibold w-full" for="taskTitle">Title (*)</label>
          <InputText
              id="taskTitle"
              v-model="form.name"
              autocomplete="off"
              class="flex-auto w-full"
              placeholder="Ex: Faire des révisions"
          />
        </div>
        <div class="flex flex-col items-center space-y-2 mb-4">
          <label class="font-semibold w-full" for="taskDescription">Description (*)</label>
          <Textarea
              id="taskDescription"
              v-model="form.description"
              autoResize
              class="flex-auto w-full border rounded-lg resize-none p-2"
              placeholder="Description de la tâche"
              rows="4"
          />
        </div>
        <div class="flex flex-col items-center space-y-2 mb-4">
          <label class="font-semibold w-full" for="taskStatus">Status (*)</label>
          <Select
              id="taskStatus"
              v-model="selectedStatus"
              :options="statusOptions"
              class="w-full border rounded-lg"
              optionLabel="name"
              placeholder="Select a status"
          />
        </div>
        <Button
            class="custom-primevue-create-button w-full mt-8"
            label="Create"
            type="submit"
        />
      </form>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import {useDark, useStorage} from "@vueuse/core";
import Logo from "@/components/Logo/logo.vue";
import MenuList from "@/components/NavBar/MenuList.vue";
import Icons from "@/components/icons/Icons.vue";
import {computed, ref, onMounted} from "vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import Textarea from "primevue/textarea";

// Interface pour définir le type des éléments Task
interface Task {
  name: string;
  description: string;
  status: string;
}

// Mode sombre/clair
const isDark = useDark();
const headerClass = computed(() => (isDark.value ? 'bg-color-one-dark' : 'bg-color-one-light'));

// États du formulaire et de la boîte de dialogue
const showForm = ref(false);
const form = ref({
  name: '',
  description: '',
  status: '',
});
const selectedStatus = ref();
const statusOptions = ref([
  {name: 'Todo', code: 'Td'},
  {name: 'Doing', code: 'Dg'},
  {name: 'Done', code: 'Dn'},
]);

// Initialiser le tableau des tâches à partir du local storage
const tasks = ref<Task[]>([]); // Préciser que tasks est un tableau de Task
const TASKS_KEY = 'tasks';

// Fonction pour ouvrir le formulaire de création
const openCreateForm = () => {
  showForm.value = true;
};

// Fonction pour créer une tâche et la sauvegarder dans le local storage
const createTask = () => {
  if (form.value.name) {
    const newTask: Task = {
      name: form.value.name,
      description: form.value.description,
      status: selectedStatus.value,
    };

    // Ajouter la nouvelle tâche au tableau et sauvegarder dans le local storage
    tasks.value.push(newTask);
    saveTasksToLocalStorage();

    resetForm();
    showForm.value = false;
  }
};

// Sauvegarder le tableau des tâches dans le local storage
const saveTasksToLocalStorage = () => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks.value));
};

// Récupérer les tâches depuis le local storage
const loadTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem(TASKS_KEY);
  if (storedTasks) {
    tasks.value = JSON.parse(storedTasks);
  }
};

// Réinitialiser le formulaire
const resetForm = () => {
  form.value.name = '';
  form.value.description = '';
  form.value.status = '';
  selectedStatus.value = null;
};

// Charger les tâches lorsqu'on monte le composant
onMounted(() => {
  loadTasksFromLocalStorage();
});
</script>



<style scoped>
.custom-primevue-create-button {
  color: white;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}
</style>
