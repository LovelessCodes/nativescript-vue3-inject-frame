<script lang="ts" setup>
import { $navigateBack } from "nativescript-vue";
import { useCounter } from "~/stores/counter";

const counter = useCounter();
</script>

<template>
    <Page>
        <FlexboxLayout flexDirection="column">
            <Label :text="counter.count" />
            <Button @tap="counter.increase" text="Increase the counter" />
            <Button @tap="$navigateBack({frame: 'dash'})" text="Go to Counter" />
        </FlexboxLayout>
    </Page>
</template>