<template>
  <VApp>
    <VMain>
      <div id="wrapper">
        <VRow>
          <VCol cols="12">
            <BaseSheet ref="baseSheet" />
          </VCol>
        </VRow>
      </div>
    </VMain>
  </VApp>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSheet from "@/Components/BaseSheet.vue";

export default defineComponent({
  components: {
    BaseSheet,
  },
  methods: {
    // methods
  },
});
</script>

<style scoped>
#wrapper {
  background-color: #f3f3f3;
}
</style>
