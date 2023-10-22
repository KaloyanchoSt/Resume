<template>
  <VContainer fluid>
    <VRow>
      <VCol class="ma-0 pa-0" cols="12">
        <p class="primary-bold-color">
          {{ expirienceTitle }}
        </p>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <VTimeline>
          <VTimelineItem
            v-for="item in items"
            :key="item.ID"
            dot-color="primary"
            size="small"
          >
            <template v-slot:opposite>
              <div
                class="secondary-bold"
                v-text="`${item.From}-${item.Until}`"
              ></div>
              <span class="secondary">{{ item.Location }}</span>
            </template>
            <div>
              <p>{{ item.Position }}</p>
              <p class="secondary-bold-color">{{ item.Company }}</p>
              <!-- <p class="secondary">{{ item.De }}</p> -->
              <ul>
                <li v-for="project in item.Projects" :key="project.ID">
                  <!-- <p class="text-body-2">{{ project.Name }}</p> -->
                  <span class="secondary">{{ project.Description }}</span>
                  <p class="secondary">{{ project.Technologies.join(", ") }}</p>
                </li>
              </ul>
            </div>
          </VTimelineItem>
        </VTimeline>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ExperienceViewModel } from "@/Types/BaseSheet";

interface ExpirienceTimelineData {
  expirienceTitle: string;
}

export default defineComponent({
  name: "ExpirienceTimeline",
  props: {
    items: {
      type: Array as PropType<Array<ExperienceViewModel>>,
      required: true,
    },
  },
  data(): ExpirienceTimelineData {
    return {
      expirienceTitle: "PROFESSIONAL EXPERIENCE.",
    };
  },
});
</script>

<style scoped>
ul {
  list-style-position: inside;
  margin: 0px;
  padding-left: 7px;
}
ul {
  list-style-type: none;
}
ul > li {
  text-indent: -5px;
}
ul > li:before {
  content: "- ";
  text-indent: -5px;
}
</style>
