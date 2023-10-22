<template>
  <VContainer fluid>
    <VRow>
      <VCol class="ma-0 pa-0" cols="12">
        <p class="text-primary font-weight-bold">
          {{ educationTitle }}
        </p>
      </VCol>
    </VRow>
    <VRow>
      <VCol  class="pt-0 pl-2" cols="12">
        <VTimeline side="end" truncate-line="start">
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
              <ul>
                <li>
                  <p>{{ item.Specialty }}</p>
                  <p class="secondary-bold-color">{{ item.Institution }}</p>
                  <p class="secondary">{{ item.Subjects.join(", ") }}</p>
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
import { EducationViewModel } from "@/Types/BaseSheet";

interface EducationTimelineData {
  educationTitle: string;
}

export default defineComponent({
  name: "EducationTimeline",
  props: {
    items: {
      required: true,
      type: Array as PropType<Array<EducationViewModel>>,
    },
  },
  data(): EducationTimelineData {
    return {
      educationTitle: "EDUCATION.",
    };
  },
});
</script>

<style scoped></style>
