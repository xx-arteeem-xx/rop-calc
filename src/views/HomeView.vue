<script setup>
    import Top from "../components/Top.vue"
    import TableLoad from "../components/TableLoad.vue"
    import TableContingent from "../components/TableContingent.vue"
    import TableCash from "../components/TableCash.vue"
    import Instructions from "../components/Instructions.vue"
    import Calculate from "../components/Calculate.vue"
</script>

<template>
    <Top />
    <div class="container">
        <Instructions />
        <TableLoad />
        <TableContingent />
        <TableCash />
        <Calculate />
    </div>
</template>

<style></style>