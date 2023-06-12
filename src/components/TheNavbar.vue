<script setup>
import { computed } from 'vue'
import { useUsersStore } from '@/stores/users'
const authUser = computed(() => useUsersStore().authUser)
</script>

<template>
  <header id="header" class="header">
    <router-link :to="{ name: 'home' }" class="logo">
      <img src="@/assets/svg/vueschool-logo.svg" />
    </router-link>

    <div class="btn-hamburger">
      <!-- use .btn-humburger-active to open the menu -->
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <!-- use .navbar-open to open nav -->
    <nav class="navbar">
      <ul>
        <li v-if="authUser" class="navbar-user">
          <router-link :to="{ name: 'profile' }">
            <img
              class="avatar-small"
              :src="authUser.avatar"
              :alt="`${authUser.name} profile pic`"
            />
            <span>
              {{ authUser.name }}
              <img class="icon-profile" src="@/assets/svg/arrow-profile.svg" alt="" />
            </span>
          </router-link>

          <!-- dropdown menu -->
          <!-- add class "active-drop" to show the dropdown -->
          <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item">
                <router-link :to="{ name: 'profile' }">View Profile</router-link>
              </li>
              <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
          </div>
        </li>
      </ul>
      <!-- 
      <ul>
        <li class="navbar-item">
          <a href="index.html">Home</a>
        </li>
        <li class="navbar-item">
          <a href="category.html">Category</a>
        </li>
        <li class="navbar-item">
          <a href="forum.html">Forum</a>
        </li>
        <li class="navbar-item">
          <a href="thread.html">Thread</a>
        </li>
         Show these option only on mobile
        <li class="navbar-item mobile-only">
          <a href="profile.html">My Profile</a>
        </li>
        <li class="navbar-item mobile-only">
          <a href="#">Logout</a>
        </li>
      </ul>
      -->
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #263959;
  height: 80px;
  padding: 0 20px;
}

@media (min-width: 240px) and (max-width: 720px) {
  .header {
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 60px;
  }
}
header > a.logo {
  width: 50px;
}

@media (min-width: 240px) and (max-width: 720px) {
  header > a.logo {
    width: 35px;
  }
}
.btn-hamburger {
  cursor: pointer;
  height: 30px;
  width: 30px;
  float: right;
  position: relative;
  margin-left: 20px;
  display: none;
}

.btn-hamburger .top {
  top: 7px;
}

.btn-hamburger .middle {
  top: 16px;
}

.btn-hamburger .bottom {
  top: 26px;
}

@media (min-width: 240px) and (max-width: 720px) {
  .btn-hamburger {
    display: block;
  }
}

.bar {
  width: 30px;
  height: 4px;
  background: white;
  position: absolute;
  border-radius: 10px;
  transition: all 0.5s;
}

.btn-hamburger-active .top {
  top: 16px;
}

.btn-hamburger-active .middle {
  opacity: 0;
  overflow: hidden;
}

.btn-hamburger-active .bottom {
  top: 16px;
}
.navbar {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.navbar ul {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /*height: 100%;*/
}

.navbar-item,
.navbar-mobile-item {
  display: inline-block;
  border-right: 1px solid #3c4d6a;
  vertical-align: middle;
}

ul .navbar-item:last-child,
ul .navbar-mobile-item:last-child {
  border-right: none;
}

.navbar-item a,
.navbar-mobile-item a {
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 18px;
}

@media (min-width: 240px) and (max-width: 720px) {
  .navbar-item a,
  .navbar-mobile-item a {
    padding: 10px 0px;
  }
}

.navbar-item a:hover,
.navbar-mobile-item a:hover {
  color: #57ad8d;
  transition: all 0.3s ease;
}

.navbar-item a:active,
.navbar-mobile-item a:active {
  color: #57ad8d;
}

@media (min-width: 240px) and (max-width: 720px) {
  .navbar-item,
  .navbar-mobile-item {
    display: block;
    border: none;
    margin: 20px 0;
  }
}

@media (min-width: 240px) and (max-width: 720px) {
  .navbar {
    display: none;
    position: absolute;
    z-index: 10;
    padding: 10px 10px 10px;
    background: #263959;
    width: 100%;
    left: 0;
    top: 60px;
  }
}

@media (min-width: 240px) and (max-width: 720px) {
  .navbar-open {
    display: flex;
    transition: all 0.6s ease;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .navbar-open .navbar-item,
  .navbar-open .navbar-mobile-item {
    margin: 6px 0;
  }

  .navbar-open ul {
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 20px;
  }
}
.navbar-user {
  margin-left: auto;
}

.navbar-user a {
  display: flex;
  align-items: center;
  color: white;
}

.navbar-user a:hover .icon-profile {
  transition: all 0.4s ease;
  transform: rotate(-180deg);
}

.navbar-user img {
  margin-right: 10px;
}
#user-dropdown {
  position: absolute;
  top: 50px;
  right: 20px;
  z-index: 6;
  display: none;
}

@media (min-width: 240px) and (max-width: 720px) {
  #user-dropdown {
    position: relative;
    width: 100%;
    right: 0;
    z-index: 10;
    top: 98px;
  }
}

#user-dropdown.active-drop {
  display: block;
}

.active-drop {
  display: block;
}

.dropdown-menu,
#user-dropdown > .dropdown-menu {
  display: block;
  background: white;
  padding: 20px;
  position: relative;
}

.dropdown-menu-item,
#user-dropdown > .dropdown-menu > .dropdown-menu-item {
  margin-bottom: 5px;
}

.dropdown-menu-item a,
#user-dropdown > .dropdown-menu > .dropdown-menu-item a {
  display: block;
  color: #57ad8d;
  font-size: 16px;
  transition: all ease 0.6s;
}

.dropdown-menu-item a:hover,
#user-dropdown > .dropdown-menu > .dropdown-menu-item a:hover {
  color: #41826a;
}

.triangle-drop {
  border-bottom: solid 8px white;
  border-left: solid 8px transparent;
  border-right: solid 8px transparent;
  display: inline-block;
  margin: 0;
  position: relative;
  left: 70%;
  vertical-align: middle;
  bottom: -8px;
}

@media (min-width: 240px) and (max-width: 720px) {
  .triangle-drop {
    left: 5%;
  }
}

#user-dropdown a {
  color: #57ad8d;
  text-decoration: none;
  transition: all 0.6s ease;
}

#user-dropdown a:hover {
  color: #41826a;
  cursor: pointer;
}

#user-dropdown ul {
  display: block;
}
.logo {
  float: left;
}

.svg-logo {
  height: 62px;
  width: 56px;
}

@media (min-width: 240px) and (max-width: 720px) {
  .svg-logo {
    height: 45px;
    width: 40px;
  }
}

@media (min-width: 240px) and (max-width: 400px) {
  .svg-logo {
    height: 40px;
    width: 35px;
  }
}
</style>
