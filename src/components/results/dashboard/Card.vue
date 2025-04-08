<script>
    export default {
        props: {
            color: String,
            header: String,
            title: String,
            desc: String
        }
    }
</script>

<template>
    <div v-bind:class="'card text-bg-'+color+' mb-3'">
        <div class="card-header">{{ header }}</div>
        <div class="card-body">
            <h5 class="fs-2 p-0 m-0">{{ title }}</h5>
            <p class="card-text">
                {{ desc }}
            </p>
        </div>
    </div>
</template>

<style></style>