<script setup>
  import table1 from '@/components/table1.vue'
  import table2 from '@/components/table2.vue'
  import table3 from '@/components/table3.vue'
  import table4 from '@/components/table4.vue'
</script>

<template>
    <div class="table">
      <table1/>
      <table2/>
      <table3/>
      <table4/>
    </div>
  

</template>

<style>

  .table{
    position: relative;
    display: flex;

    overflow-y:hidden;
  }
</style>
