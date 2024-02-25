<template>
  <div
    class="overflow-x-auto rounded-lg border border-gray-200 w-[360px] sm:w-full mx-auto"
  >
    <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead class="ltr:text-left rtl:text-right">
        <tr class="text-left">
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            PC
          </th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Forwarding and Hazards
          </th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-200">
        <tr class="odd:bg-gray-50" v-for="(item, index) in 2">
          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {{ index == 0 ? "000" : "" }}
          </td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">
            FWD_A={} (MEM/WB.ALU_OUT -> A)...
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
