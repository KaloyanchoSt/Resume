<template>
  <div>
    <VSkeletonLoader
      :loading="loading"
      class="mx-auto border"
      max-width="900"
      type="heading, subtitle, article, sentences, list-item-three-line"
    >
      <VSheet
        class="align-center mx-auto px-8 py-6"
        :max-width="900"
        width="100%"
      >
        <div>
          <!-- Name -->
          <VRow>
            <VCol cols="12">
              <div class="primary-bold-name">
                {{ baseSheetDetails.Name.toUpperCase() }}
              </div>
            </VCol>
            <!-- Print -->
            <!-- <VCol cols="4" align="right">
            <VBtn @click="exportToPDF">Print</VBtn>
          </VCol> -->
          </VRow>
          <!-- Position -->
          <div class="primary-bold-color">
            {{ baseSheetDetails.Position }}
          </div>
          <!-- Contacts -->
          <VRow>
            <VCol cols="12">
              <ContactList :items="baseSheetDetails.Contacts"> </ContactList>
            </VCol>
          </VRow>
          <!-- Summary -->
          <VRow>
            <VCol class="pb-0" cols="12">
              <p class="primary-bold-color">
                {{ summaryTitle }}
              </p>
            </VCol>
            <VCol class="pt-0" cols="12">
              <p class="secondary">
                {{ baseSheetDetails.Summary }}
              </p>
            </VCol>
          </VRow>
          <div></div>
          <!-- Experience -->
          <VRow>
            <VCol class="pl-2" cols="12">
              <ExpirienceTimeline
                :items="baseSheetDetails.Experience"
              ></ExpirienceTimeline>
            </VCol>
          </VRow>
          <!-- Education -->
          <VRow>
            <VCol class="pl-2" cols="12">
              <EducationTimeline
                :items="baseSheetDetails.Education"
              ></EducationTimeline>
            </VCol>
          </VRow>
          <!-- Projects -->
          <VRow>
            <VCol cols="12">
              <ProjectList :items="baseSheetDetails.Projects"> </ProjectList>
            </VCol>
          </VRow>
        </div>
      </VSheet>
    </VSkeletonLoader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EducationTimeline from "@/Components/EducationTimeline.vue";
import ExpirienceTimeline from "@/Components/ExpirienceTimeline.vue";
import ProjectList from "@/Components/ProjectList.vue";
import ContactList from "@/Components/ContactList.vue";
import {
  getBaseSheetDetails,
  getEmptyBaseSheetViewModel,
} from "@/Services/BaseSheetServices";
import { BaseSheetViewModel, ContactType } from "@/Types/BaseSheet";
import { useToast, TYPE } from "vue-toastification";

interface BaseSheetData {
  baseSheetDetails: BaseSheetViewModel;
  loading: boolean;
  summaryTitle: string;
}

export default defineComponent({
  name: "BaseSheet",
  components: {
    EducationTimeline,
    ExpirienceTimeline,
    ProjectList,
    ContactList,
  },
  data(): BaseSheetData {
    return {
      baseSheetDetails: getEmptyBaseSheetViewModel(),
      loading: false,
      summaryTitle: "SUMMARY.",
    };
  },
  mounted() {
    this.getEducationData();
  },
  methods: {
    async getEducationData() {
      try {
        this.loading = true;

        this.baseSheetDetails = await getBaseSheetDetails();

        // Remove LinkedIn contact
        // const indexOfLinkedIn = this.baseSheetDetails.Contacts.findIndex(
        //   (obj) => {
        //     return obj.Type === ContactType.LinkedIn;
        //   }
        // );
        // this.baseSheetDetails.Contacts.splice(indexOfLinkedIn, 1);
      } catch (error) {
        useToast().error("Error while getting resume data", {
          type: TYPE.ERROR,
        });
      } finally {
        this.loading = false;
      }
    },
    // exportToPDF() {
    //   window.print();
    // },
  },
});
</script>

<style scoped></style>
