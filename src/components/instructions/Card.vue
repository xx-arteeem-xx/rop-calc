<script>
    export default {
        props: {
            name: String,
            desc: String
        }
    }
</script>

<template>
    <div class="text-center bg-body-tertiary rounded-3 p-3 d-flex flex-column align-items-center justify-content-center card">
        <h3 class="text-body-emphasis mt-3">
            {{ name }}
        </h3>
        <p class="mx-auto text-muted">
            {{ desc }}
        </p>
    </div>
</template>

<style>
    .card{
        height: 100%;
    }
</style>