<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';

DataTable.use(DataTablesCore);

const columns = [
  { data: 'date' },
  { data: 'time' },
  { data: 'game' },
  { data: 'opening_balance' },
  { data: 'amount' },
  { data: 'c_balance' },
];

const options = {
  responsive: true,
  select: true,
};

</script>

<template>
  <div class="container">
    <DataTable
      :columns="columns"
      :options="options"
      ajax="/history.json"
      class="table table-hover table-striped"
      width="100%"
    >
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Game</th>
          <th>Opening Balance.</th>
          <th>Amount</th>
          <th>Closing Balance</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Game</th>
          <th>Opening Balance.</th>
          <th>Amount</th>
          <th>Closing Balance</th>
        </tr>
      </tfoot>
    </DataTable>
  </div>
</template>

<style>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>
