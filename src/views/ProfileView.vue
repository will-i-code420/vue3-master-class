<script setup>
import { ref, computed } from 'vue'
import PostList from '@/components/Postlist.vue'
import UserProfileCard from '@/components/UserProfileCard.vue'
import UserProfileEditCard from '@/components/UserProfileEditCard.vue'
import { useUsersStore } from '@/stores/users'
const editingProfile = ref(false)
const user = computed(() => useUsersStore().getUser)
</script>

<template>
  <div class="flex-grid">
    <div class="col-3 mt-2">
      <UserProfileCard v-if="!editingProfile" :user="user" />
      <UserProfileEditCard v-else :user="user" @cancel-edit="editingProfile = false" />
      <p class="text-xsmall text-faded text-center">
        Member since june 2003, last visited 4 hours ago
      </p>

      <div class="text-center">
        <hr />
        <button @click="editingProfile = true" class="btn-green btn-small">Edit Profile</button>
      </div>
    </div>

    <div class="col-7 mt-2">
      <div class="profile-header">
        <span class="text-lead"> {{ user.username }} recent activity </span>
        <router-link to="#">See only started threads?</router-link>
      </div>

      <hr />
      <PostList :posts="useUsersStore().userPosts" />
      <!-- 
    TODO: Implement Activity Feed
      <div class="activity-list">
        <div class="activity">
          <div class="activity-header">
            <img src="https://i.imgur.com/OqlZN48.jpg" alt="" class="hide-mobile avatar-small" />
            <p class="title">
              How can I chop onions without crying?
              <span>Joker started a topic in Cooking</span>
            </p>
          </div>

          <div class="post-content">
            <div>
              <p>
                I absolutely love onions, but they hurt my eyes! Is there a way where you can chop
                onions without crying?
              </p>
            </div>
          </div>

          <div class="thread-details">
            <span>4 minutes ago</span>
            <span>1 comments</span>
          </div>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  padding: 10px 20px 20px 20px;
  margin-bottom: 10px;
  background: white;
  box-shadow: 2px 2px 1px rgba(136, 136, 136, 0.09);
  align-self: self-end;
}

@media (min-width: 820px) {
  .profile-card {
    margin-right: 20px;
  }
}

.profile-card .title {
  word-break: break-all;
}

.profile-card .stats {
  display: flex;
  margin: 20px 0px;
}

.profile-card .stats span {
  flex-basis: 50%;
}

.profile-card .user-website {
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.profile-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 0px;
}

@media (max-width: 720px) {
  .profile-header {
    flex-wrap: wrap;
  }
}
@media (min-width: 1024px) {
  .activity-list {
    padding: 0px 10px;
  }
}

.activity-list .activity {
  background-color: white;
  padding: 15px 10px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 1px rgba(136, 136, 136, 0.09);
}

@media (max-width: 720px) {
  .activity-list .activity {
    padding: 10px 15px;
  }

  .activity-list .activity .post-content {
    padding-left: 0;
  }
}

.activity-list .activity .activity-header {
  margin: 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-end;
}

.activity-list .activity .activity-header img {
  margin-top: 5px;
  margin-right: 10px;
}

.activity-list .activity .activity-header .title {
  flex-basis: 93%;
  margin: 0;
  padding: 0;
}

@media (max-width: 720px) {
  .activity-list .activity .activity-header .title {
    flex-basis: 100%;
  }
}

.activity-list .activity .activity-header .title span {
  display: block;
  font-weight: 100;
}

.activity-list .activity div.post-content {
  display: block;
  padding-right: 10px;
  margin: 12px 0px;
  word-break: break-word;
}

.activity-list .activity div.post-content p {
  margin-bottom: 12px;
}

.activity-list .activity .thread-details {
  text-align: right;
}

.activity-list .activity .thread-details span:not(:last-of-type) {
  margin-right: 20px;
}
</style>
