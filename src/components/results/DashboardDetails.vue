<script setup>
    import Table from "./dashboard/Table.vue"
</script>

<template>
    <div class="accordion mb-5" id="accordion">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-coreui-toggle="collapse" data-coreui-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Детализация рассчетов
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" data-coreui-parent="#accordion">
                <div class="accordion-body">
                    <Table />
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>