<script setup>
import { reactive } from 'vue'
import sourceData from '@/data.json'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
const users = reactive(sourceData.users)
defineProps({
  threads: {
    type: Array,
    required: true
  }
})
function getUser(id) {
  return users.find((user) => user.id === id)
}
function formatPublishedAt(timestamp) {
  return dayjs.unix(timestamp).fromNow()
}
function displayFullDate(timestamp) {
  return dayjs.unix(timestamp).format('llll')
}
</script>

<template>
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>
    <div v-for="thread in threads" :key="thread.id" class="thread">
      <div class="">
        <p>
          <router-link :to="{ name: 'thread', params: { id: thread.id } }">{{
            thread.title
          }}</router-link>
        </p>
        <p class="text-faded">
          By <router-link to="#">{{ getUser(thread.userId).name }}</router-link
          >, {{ formatPublishedAt(thread.publishedAt) }}
        </p>
      </div>
      <div class="activity">
        <p class="replies-count">{{ thread.posts.length - 1 }} replies</p>
        <img :src="getUser(thread.userId).avatar" alt="user profile avatar" class="avatar-medium" />
        <div class="">
          <p>
            <router-link to="#">{{ getUser(thread.userId).name }}</router-link>
          </p>
          <p class="text-faded" :title="displayFullDate(thread.publishedAt)">
            {{ formatPublishedAt(thread.publishedAt) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thread-list {
  padding: 0;
  background-color: white;
}

.thread-list .thread {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 5px 20px;
  min-height: 45px;
}

.thread-list .thread:nth-child(odd) {
  background: rgba(73, 89, 96, 0.06);
  border-bottom-left-radius: 20px;
}

.thread-list .thread:last-child {
  border-bottom-left-radius: 0;
}

.thread-list .thread .replies-count {
  flex-basis: 35%;
}

.thread-list .thread .activity {
  flex-basis: 35%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.thread-list .thread .activity .avatar-medium {
  margin-right: 10px;
}

.thread-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thread-list .thread .created_at {
  color: rgba(84, 84, 84, 0.7);
}

.list-title {
  background-color: #263959;
  border-bottom-left-radius: 20px;
  color: #f5f8fe;
  font-weight: 100;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  position: relative;
  padding: 10px 20px;
  margin: 0;
}

.list-title a {
  color: white;
}

.list-title a:hover {
  color: #89c6af;
}
</style>
