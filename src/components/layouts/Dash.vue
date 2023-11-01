<script lang="ts" setup>
import { provide, ref } from "nativescript-vue";
import CounterPage from "~/components/pages/Counter.vue";

const count = ref(0);

const increase = () => {
    count.value = count + 1;
}

const decrease = () => {
    count.value = count -1;
}

provide('count', {
    increase,
    decrease,
    count
});

</script>

<template>
    <Page>
        <Label text="Please increase the counter above 5" />
        <Frame id="dash" actionBarVisibility="never">
            <CounterPage />
        </Frame>
    </Page>
</template>