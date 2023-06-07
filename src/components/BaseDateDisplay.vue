<script setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
const props = defineProps({
  timestamp: {
    type: Number,
    required: true
  }
})
function formatPublishedAt() {
  return dayjs.unix(props.timestamp).fromNow()
}
function displayFullDate() {
  return dayjs.unix(props.timestamp).format('llll')
}
</script>

<template>
  <span :title="displayFullDate()">
    {{ formatPublishedAt() }}
  </span>
</template>

<style scoped></style>
