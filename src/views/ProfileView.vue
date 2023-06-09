<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="flex-grid">
    <div class="col-3 mt-2">
      <div class="profile-card">
        <p class="text-center">
          <img src="https://i.imgur.com/OqlZN48.jpg" alt="" class="avatar-xlarge" />
        </p>

        <h1 class="title">joker</h1>

        <p class="text-lead">Joseph Kerr</p>

        <p class="text-justify">No bio specified.</p>

        <span class="online">joker is online</span>

        <div class="stats">
          <span>116 posts</span>
          <span>73 threads</span>
        </div>

        <hr />

        <p class="text-large text-center"><i class="fa fa-globe"></i> <a href="#">batman.com</a></p>
      </div>

      <p class="text-xsmall text-faded text-center">
        Member since june 2003, last visited 4 hours ago
      </p>

      <div class="text-center">
        <hr />
        <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
      </div>
    </div>

    <div class="col-7 mt-2">
      <div class="profile-header">
        <span class="text-lead"> Joker's recent activity </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr />

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

        <div class="activity">
          <div class="activity-header">
            <img src="http://i.imgur.com/s0AzOkO.png" alt="" class="hide-mobile avatar-small" />

            <p class="title">
              Wasabi vs horseraddish?
              <span>Joker replied to Robin's topic in Cooking</span>
            </p>
          </div>

          <div class="post-content">
            <div>
              <blockquote class="small">
                <div class="author">
                  <a href="/user/robin" class=""> robin</a>
                  <span class="time">a month ago</span>
                  <i class="fa fa-caret-down"></i>
                </div>

                <div class="quote">
                  <p>
                    Is horseradish and Wasabi the same thing? I&amp;#39;ve heard so many different
                    things.
                  </p>
                </div>
              </blockquote>

              <p>They're not the same!</p>
            </div>
          </div>

          <div class="thread-details">
            <span>2 days ago</span>
            <span>1 comment</span>
          </div>
        </div>

        <div class="activity">
          <div class="activity-header">
            <img src="https://i.imgur.com/OqlZN48.jpg" alt="" class="hide-mobile avatar-small" />
            <p class="title">
              Where is the sign in button??????!?!?!?!
              <span>Joker replied to his own topic in Questions & Feedback</span>
            </p>
          </div>

          <div class="post-content">
            <div>
              <p>
                <strong><i>Post deleted due to inappropriate language</i></strong>
              </p>
            </div>
          </div>

          <div class="thread-details">
            <span>7 days ago</span>
            <span>7 comments</span>
          </div>
        </div>
      </div>
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
