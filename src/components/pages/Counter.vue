<script lang="ts" setup>
import { $navigateTo } from "nativescript-vue";
import { useCounter } from "~/stores/counter";
import IncreasePage from "~/components/pages/Increase.vue";
import DecreasePage from "~/components/pages/Decrease.vue";

const counter = useCounter();
</script>

<template>
    <Page>
        <FlexboxLayout flexDirection="column" justifyContent="center" alignItems="center">
            <Label :text="counter.count" />
            <Button @tap="$navigateTo(IncreasePage, { frame: 'dash' })" text="Go to Increase" />
            <Button @tap="$navigateTo(DecreasePage, { frame: 'dash' })" text="Go to Decrease" />
        </FlexboxLayout>
    </Page>
</template>