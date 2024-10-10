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
            @click="openCreateForm()">
          <Icons name="plus"/>
          <span class="text-md hidden md:block">Add New Task</span>
        </button>
      </div>
    </header>

    <!-- Formulaire de création -->
    <Dialog v-model:visible="showForm" class="md:w-[60%] lg:w-[40%] xl:w-[30%]" header="Create New Task" modal>
      <span class="text-surface-500 dark:text-surface-400 block mb-8">Enter the details for the new task.</span>
      <div class="flex flex-col items-center space-y-2 mb-4">
        <label class="font-semibold w-full" for="boardName">Title (*)</label>
        <InputText id="boardName" v-model="form.name" autocomplete="off" class="flex-auto w-full"
                   placeholder="Ex: Faire des révisions"/>
      </div>
      <div class="flex flex-col items-center space-y-2 mb-4">
        <label class="font-semibold w-full" for="boardName">Description (*)</label>
        <Textarea v-model="form.description" autoResize class="flex-auto w-full border rounded-lg resize-none p-2"
                  cols="30" placeholder="Description de la tâche"
                  rows="4"/>
      </div>
      <div class="flex flex-col items-center space-y-2 mb-4">
        <label class="font-semibold w-full" for="boardName">Status (*)</label>
        <Select v-model="selectedStatus" :options="status" class="w-full border rounded-lg " optionLabel="name"
                placeholder="Select a status"/>
      </div>

      <div class="flex justify-end gap-2">
        <Button class="custom-primevue-cancel-button" label="Cancel" severity="secondary" type="button"
                @click="showForm = false"></Button>
        <Button class="custom-primevue-create-button" label="Create" type="button" @click="createBoard"></Button>
      </div>
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
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';


const isDark = useDark();

const headerClass = computed(() => (isDark.value ? 'bg-color-one-dark' : 'bg-color-one-light'));

const openCreateForm = () => {
  showForm.value = true;
}

const showForm = ref(false);
const form = ref({
  name: '',
  color: '00ff2b',
  description: ''
});
const selectedStatus = ref();
const status = ref([
  {name: 'Todo', code: 'Td'},
  {name: 'Doing', code: 'Dg'},
  {name: 'Done', code: 'Dn'},
]);
const createBoard = () => {
  if (form.value.name !== '') {
    // boards.value.push({
    //   title: form.value.name,
    //   id: boards.value.length + 1,
    //   color: '#' + form.value.color,
    //   cards: []
    // });
    form.value.name = '';
    form.value.color = '00ff2b';
  }
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
</style>
