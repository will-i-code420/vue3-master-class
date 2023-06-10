<script setup>
defineProps({
  forums: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'Forum'
  },
  categoryId: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link v-if="categoryId" :to="{ name: 'category', params: { id: categoryId } }">{{
          title
        }}</router-link>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <router-link class="text-xlarge" :to="{ name: 'forum', params: { id: forum.id } }">{{
            forum.name
          }}</router-link>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">
              {{ forum.threads?.length || '0' }}
              {{ forum.threads?.length === 1 ? 'thread' : 'threads' }}</span
            >
          </p>
        </div>
        <!-- 
            TODO: Implement Last Thread
            <div class="last-thread">
          <img
            class="avatar"
            src="https://pbs.twimg.com/profile_images/719242842598699008/Nu43rQz1_400x400.jpg"
            alt=""
          />
          <div class="last-thread-details">
            <a href="thread.html">Post Reactions</a>
            <p class="text-xsmall">By <a href="profile.html">Rolf Haug</a>, a month ago</p>
          </div>
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.forum-list {
  padding: 0;
  background: var(--color-background);
  margin: 20px 0;
}

.forum-list .forum-listing {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 20px 30px;
}

.forum-list .forum-listing:nth-child(odd) {
  background: var(--color-background);
  border-bottom-left-radius: 20px;
}

.forum-list .forum-listing:last-child {
  border-bottom-left-radius: 0;
}

.forum-list .forum-listing .forum-details {
  flex-basis: 52%;
}
.forum-list .forum-listing .forum-details ul.subforums {
  padding-left: 5px;
  display: block;
}

.forum-list .forum-listing .forum-details ul.subforums::before {
  content: '⌙';
  margin-right: 5px;
}

.forum-list .forum-listing .forum-details ul.subforums.subforums li {
  display: inline;
}

.forum-list .forum-listing .forum-details ul.subforums.subforums li:not(:last-of-type)::after {
  content: '\f111';
  font-family: 'FontAwesome';
  font-size: 4px;
  position: relative;
  top: -3px;
  left: 2px;
  padding: 0 3px;
  color: var(--color-text);
}
.forum-list .forum-listing .threads-count {
  flex-basis: 12%;
  text-align: center;
}

.forum-list .forum-listing .threads-count .count {
  font-weight: 100;
  display: block;
}

.forum-list .forum-listing .last-thread {
  flex-basis: 32%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.forum-list .forum-listing .last-thread .avatar {
  margin-right: 10px;
}
@media (min-width: 240px) and (max-width: 720px) {
  .forum-list .forum-listing .forum-details {
    flex-basis: 100%;
  }
}
</style>
