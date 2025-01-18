<script setup>
const { $hello} = useNuxtApp()
const { count, add } = useAddCount()
const { data } = await useFetch("https://api.nuxtjs.dev/mountains");
</script>

<template>
  <div>
    <pre>
        {{ data }}
    </pre>
    Page: {{count}}
    <h2>{{$hello("louise")}}</h2>
    <h3 v-timeformat="1679828056804"></h3>
    <button @click="add">test</button>
  </div>
</template>

<style scoped></style>
