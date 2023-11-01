<script lang="ts" setup>
import CounterPage from "~/components/pages/Counter.vue";
</script>

<template>
    <Page>
        <Label text="Please increase the counter above 5" />
        <Frame id="dash" actionBarVisibility="never">
            <CounterPage />
        </Frame>
    </Page>
</template>