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
import {useDark} from "@vueuse/core";
import Logo from "@/components/Logo/logo.vue";
import MenuList from "@/components/NavBar/MenuList.vue";
import Icons from "@/components/icons/Icons.vue";
import {computed, ref} from "vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import Textarea from "primevue/textarea";

const isDark = useDark();

const headerClass = computed(() => (isDark.value ? 'bg-color-one-dark' : 'bg-color-one-light'));

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

const openCreateForm = () => {
  showForm.value = true;
};

const createTask = () => {
  if (form.value.name) {
    // Logique pour créer une tâche
    console.log('Task Created:', {...form.value, status: selectedStatus.value});
    resetForm();
    showForm.value = false;
  }
};

const resetForm = () => {
  form.value.name = '';
  form.value.description = '';
  form.value.status = '';
  selectedStatus.value = null;
};
</script>

<style scoped>
.custom-primevue-create-button {
  color: white;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}
</style>
