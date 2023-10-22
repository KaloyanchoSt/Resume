<template>
  <div>
    <VRow>
      <VCol class="pb-0" cols="12">
        <p class="text-primary font-weight-bold text-h7">
          {{ projectTitle }}
        </p>
      </VCol>
    </VRow>
    <VRow>
      <VCol class="pt-0" cols="12">
        <ul>
          <li v-for="project in items" :key="project.ID">
            <p>{{ project.Name }}</p>
            <p class="secondary-bold-color">{{ project.For }}</p>
            <span class="secondary">{{ project.Description }}</span>
            <!-- <span class="secondary">{{ project.Description }}</span> -->
            <p class="secondary">{{ project.Technologies.join(", ") }}</p>
          </li>
        </ul>
      </VCol>
    </VRow>
    <!-- <VList lines="one">
      <VListItem
        v-for="project in items"
        :key="project.ID"
        :title="`${project.Name}`"
      >
        <VListItemTitle class="text-primary font-weight-bold text-subtitle-2">
          {{ project.For }}
        </VListItemTitle>
      </VListItem>
    </VList> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ProjectViewModel } from "@/Types/BaseSheet";

interface ProjectListData {
  projectTitle: string;
}

export default defineComponent({
  name: "ProjectList",
  props: {
    items: {
      type: Array as PropType<Array<ProjectViewModel>>,
      required: true,
    },
  },
  data(): ProjectListData {
    return {
      projectTitle: "PROJECTS.",
    };
  },
});
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  padding: 0;
}
@media (max-width: 960px) and (min-width: 501px) {
  li {
    width: 100%;
  } /* Show 2 logos per row on medium devices (tablets, phones in landscape) */
}

@media (max-width: 500px) {
  li {
    width: 100%;
  } /* On small screens, show one logo per row */
}
</style>
