<script lang="ts" setup>
import { inject, $navigateTo } from "nativescript-vue";
import CounterPage from "~/components/pages/Counter.vue";

const { decrease } = inject("count");
</script>

<template>
    <Page>
        <Button @tap="decrease" text="Decrease the counter" />
        <Button @tap="$navigateTo(CounterPage, {frame: 'dash'})" text="Go to Counter" />
    </Page>
</template>