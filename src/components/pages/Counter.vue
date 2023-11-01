<script lang="ts" setup>
import { inject, $navigateTo } from "nativescript-vue";
import IncreasePage from "~/components/pages/Increase.vue";
import DecreasePage from "~/components/pages/Decrease.vue";

const { count } = inject("count");
</script>

<template>
    <Page>
        <FlexboxLayout flexDirection="column" justifyContent="center" alignItems="center">
            <Label :text="count" />
            <Button @tap="$navigateTo(IncreasePage, { frame: 'dash' })" text="Go to Increase" />
            <Button @tap="$navigateTo(DecreasePage, { frame: 'dash' })" text="Go to Decrease" />
        </FlexboxLayout>
    </Page>
</template>