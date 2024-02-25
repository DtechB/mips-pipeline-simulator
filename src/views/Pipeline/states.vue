<template>
  <div
    id="pipeline-page"
    class="container mx-auto px-[5%] overflow-y-auto overflow-x-hidden"
    style="height: calc(100vh - 72px)"
  >
    <div class="top-0 sticky border-b bg-gray-100 pb-2 mb-4">
      <!----- buttons menu ------>
      <div class="flex justify-center">
        <div
          class="inline-flex rounded-lg border border-white gap-x-1 bg-white p-1"
        >
          <button
            @click="scrollMain('overview')"
            class="inline-block rounded-md px-4 py-2 text-sm hover:text-white hover:bg-indigo-600"
            :class="
              activeSection == 'overview'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-gray-500'
            "
          >
            Overview
          </button>

          <button
            @click="scrollMain('pipeline-regs')"
            class="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-white hover:bg-indigo-600"
            :class="
              activeSection == 'pipeline-regs'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-gray-500'
            "
          >
            Pipeline Regs
          </button>

          <button
            @click="scrollMain('memory')"
            class="inline-block rounded-md text-gray-500 hover:text-white hover:bg-indigo-600 px-4 py-2 text-sm"
            :class="
              activeSection == 'memory'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-gray-500'
            "
          >
            Memory & Regs
          </button>
        </div>
      </div>

      <!----- clock ------>
      <h3 class="text-center text-xl mt-2">Clock #1</h3>
    </div>

    <!----- Overview ------>
    <div id="overview">
      <h3 class="text-lg font-medium mb-2">Overview</h3>
      <PipelineOverview />
      <div class="h-96"></div>
    </div>

    <!----- Pipeline registers ------>
    <div id="pipeline-regs">
      <h3 class="text-lg font-medium mb-2">Pipeline Registers</h3>
      <PipelineOverview />
      <div class="h-96"></div>
    </div>

    <!----- Memory and registers ------>
    <div id="memory">
      <h3 class="text-lg font-medium mb-2">Memory and Registers</h3>
      <PipelineOverview />
      <div class="h-96"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, ref } from "vue";

import PipelineOverview from "../../components/Pipeline/Overview.vue";

const activeSection = ref("overview");

const scrollMain = (id: string) => {
  const section = document.getElementById(id);
  const page = document.getElementById("pipeline-page");
  if (section) {
    const offsetTop =
      section.getBoundingClientRect().top + page!.scrollTop - 170;
    page!.scrollTo({ top: offsetTop, behavior: "smooth" });
    activeSection.value = id;
  }
};

const updateActiveSection = () => {
  const sections = ["overview", "pipeline-regs", "memory"];

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section && isSectionInViewport(section)) {
      activeSection.value = sectionId;
      break;
    }
  }
};

const isSectionInViewport = (element: any) => {
  const page = document.getElementById("pipeline-page");
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= page!.scrollHeight;
};

onBeforeMount(() => {
  window.addEventListener("scroll", updateActiveSection);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateActiveSection);
});
</script>
