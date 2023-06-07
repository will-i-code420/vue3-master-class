<script setup>
import { reactive } from 'vue'
import sourceData from '@/data.json'
defineProps({
  posts: {
    type: Array,
    required: true
  }
})
const users = reactive(sourceData.users)
function getUser(id) {
  return users.find((user) => user.id === id)
}
</script>

<template>
  <div class="post-list mt-1">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="user-info">
        <router-link to="#">{{ getUser(post.userId).name }}</router-link>
        <router-link to="#"
          ><img :src="getUser(post.userId).avatar" alt="posted user avatar" class="avatar-large"
        /></router-link>
        <!-- 
            TODO: Implement User Totals
            <p>107 posts</p> user total post count
            <p class="desktop-only text-small">23 threads</p> user total thread count
             <span class="online desktop-only">online</span> user online or not
           -->
      </div>
      <div class="post-content-container">
        <p class="mb-1">
          {{ post.text }}
        </p>
        <!--
            TODO: Implement User Edit
            <router-link to="#" class="ml-auto" title="Make a change"
            ><i class="fa fa-pencil"></i
          ></router-link>
           -->
      </div>
      <div class="post-date text-faded">
        <BaseDateDisplay :timestamp="post.publishedAt" />
      </div>
      <!-- 
          TODO: Implement User Reactions
          <div class="reactions">
    <ul>
      <li>💡</li>
      <li>❤️</li>
      <li>👎</li>
      <li>👍</li>
      <li>👌</li>
    </ul>
    <button class="btn-xsmall"><span class="emoji">❤️</span>️ 3</button>
    <button class="btn-xsmall active-reaction"><span class="emoji">👌️</span>️ 1</button>
    <button class="btn-xsmall">+ <i class="fa fa-smile-o emoji"></i></button>
  </div>
        -->
    </div>
  </div>
</template>

<style scoped>
.post {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: var(--color-background);
  padding: 20px 10px;
  padding-bottom: 7px;
  box-shadow: 2px 2px 1px rgba(136, 136, 136, 0.09);
  margin-bottom: 20px;
}

.post .user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  flex: 1 1 15%;
  margin-right: 5px;
}

.post .user-info > * {
  margin-bottom: 10px;
}

.post-content-container {
  display: flex;
  flex: 1 0 83%;
  padding-left: 15px;
  padding-right: 10px;
  font-size: 16px;
  text-align: justify;
  line-height: 1.5;
  word-break: break-word;
}

.post .post-date {
  flex-basis: 100%;
  font-size: 14px;
  text-align: right;
  margin-bottom: 5px;
  padding-right: 7px;
}

@media (max-width: 820px) {
  .post {
    padding: 0;
  }
  .post .user-info {
    order: -2;
    flex-direction: row;
    justify-content: flex-start;
    background: var(--color-background);
    margin-right: 0;
    padding: 5px;
    padding-left: 10px;
  }

  .post .user-info .avatar-large {
    height: 35px;
    width: 35px;
    margin-right: 5px;
    order: 1;
  }

  .post .user-info .user-name {
    order: 2;
  }

  .post .user-info > * {
    margin-right: 5px;
    margin-bottom: 0;
  }
  .post .post-date {
    order: -1;
    flex-basis: 40%;
    background: rgba(73, 89, 96, 0.06);
    padding-right: 10px;
    padding-top: 16px;
    margin-bottom: 0px;
  }
}
.reactions {
  display: flex;
  justify-content: flex-end;
  flex: 100%;
  position: relative;
}

.reactions button {
  display: flex;
  align-items: center;
  padding: 5px 8px;
  margin-left: 2px;
  color: #545454;
  border-radius: 5px;
}

.reactions button:hover {
  background: rgba(115, 192, 151, 0.25) !important;
  color: #545454 !important;
}

.reactions button.active-reaction {
  background: rgba(115, 192, 151, 0.12);
}

.reactions button.active-reaction:hover {
  background: white !important;
}

.reactions button .emoji {
  margin-right: 3px;
  font-size: 18px;
}

.reactions button.add-reaction .emoji {
  margin-left: 3px;
  margin-right: 0px;
}

.reactions ul {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: -45px;
  background-color: white !important;
}

.reactions ul li {
  font-size: 28px;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  opacity: 0.7;
}

.reactions ul li:hover {
  opacity: 1;
  border-radius: 5px;
  cursor: pointer;
}
ul.breadcrumbs {
  list-style: none;
  overflow: auto;
  font-size: 0;
}

ul.breadcrumbs li {
  display: inline-block;
  padding: 5px 0px;
  font-weight: 100;
}

ul.breadcrumbs li:not(:last-of-type)::after {
  content: '\f105';
  font-family: FontAwesome;
  margin: 0px 4px;
  opacity: 0.6;
}

ul.breadcrumbs li a {
  color: #57ad8d;
  text-decoration: none;
  opacity: 0.7;
}

ul.breadcrumbs li a:hover {
  opacity: 1;
}
.link-unstyled,
ul.breadcrumbs li a {
  color: inherit;
}
</style>
