<script setup>
import { computed } from 'vue'
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const forum = computed(() => {
  return sourceData.forums.find((forum) => forum.id === props.id)
})
const threads = computed(() => {
  return sourceData.threads.filter((thread) => thread.forumId === props.id)
})
</script>

<template>
  <section class="col-full">
    <div class="col-full mt-1">
      <!-- 
            TODO: Implement Breadcrumbs
            <ul class="breadcrumbs">
        <li>
          <a href="/index.html"><i class="fa fa-home fa-btn"></i>Home</a>
        </li>
        <li><a href="/category.html">Discussions</a></li>
        <li class="active"><a href="#">Cooking</a></li>
      </ul>
        -->
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">{{ forum.description }}</p>
        </div>
        <router-link to="#" class="btn-green btn-small">Start a thread</router-link>
      </div>
    </div>
    <!-- 
        TODO: Implement Category
        <div class="col-full">
      <div class="category-item">
        <div class="forum-list">
          <h2 class="list-title">Recipes</h2>

          <div class="forum-listing">
            <div class="forum-details">
              <a href="#" class="forum-name">Recipes</a>

              <p class="forum-description">Recipes, Guides and Tips & Tricks</p>
            </div>

            <div class="threads-count">
              <p class="count text-lead">1</p>
              threads
            </div>

            <div class="last-thread">
              <img
                class="avatar"
                src="http://cleaneatsfastfeets.com/wp-content/uploads/2013/05/Mr-Burns.gif"
                alt=""
              />
              <div class="last-thread-details">
                <a href="#">How I grill my fish</a>
                <p class="text-xsmall">
                  By <a href="profile.html">Charles Montgomery Burns</a>, 2 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->
    <div class="col-full mt-3">
      <ThreadList :threads="threads" />
      <!-- 
        TODO: Implement Pagination
        <div class="pagination">
        <button class="btn-circle" disabled><i class="fa fa-angle-left"></i></button>
        1 of 3
        <button class="btn-circle"><i class="fa fa-angle-right"></i></button>
      </div>
      -->
    </div>
  </section>
</template>

<style scoped>
.forum-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.forum-stats ul {
  font-size: 0px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.forum-stats ul li {
  display: flex;
  font-weight: 100;
  margin: 0 20px;
  align-items: center;
}

.forum-stats ul li .fa {
  margin-right: 5px;
}

.forum-stats ul li .fa-comments-o {
  font-size: 26px;
}
@media (min-width: 240px) and (max-width: 720px) {
  .forum-details {
    flex-basis: 100%;
  }
}
</style>
