<template>
  <aside class="aside aside-fixed minimize">
    <div class="aside-header">
      <router-link to="/" class="aside-logo"><span></span></router-link>

      <a href="" class="aside-menu-link">
        <i data-feather="menu"></i>
        <i data-feather="x"></i>
      </a>
    </div>
    <div class="aside-body">
      <div class="aside-loggedin" v-if="currentUser">
        <div class="d-flex align-items-center justify-content-start">
          <a href="#" class="avatar"
            ><span class="avatar-initial avatar-online rounded-circle"
              >{{ displayUserChar }}
              <!-- {{ currentUser.toString().substr(0, 1) }} -->
            </span></a
          >
        </div>
        <div class="aside-loggedin-user">
          <a
            href="#loggedinMenu"
            class="d-flex align-items-center justify-content-between mg-b-2"
            data-toggle="collapse"
          >
            <h6 class="tx-semibold mg-b-0">{{ displayUser }}</h6>
            <i data-feather="chevron-down"></i>
          </a>
          <!-- <p class="tx-color-03 tx-12 mg-b-0">Administrator</p> -->
        </div>
        <div class="collapse" id="loggedinMenu">
          <ul class="nav nav-aside mg-b-0">
            <li class="nav-item">
              <a href="#" @click="handleLogout" class="nav-link">
                <i data-feather="log-out"></i>
                <span>ออกจากระบบ</span></a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- aside-loggedin -->
      <ul class="nav nav-aside">
        <li class="nav-label">Dashboard</li>
        <li
          class="nav-item"
          :class="[
            currentPath === '' || currentPath === '/home' || currentPath === '/'
              ? 'active'
              : '',
          ]"
        >
          <router-link to="/" class="nav-link" @click="currentPath = '/'"
            ><vue-feather type="airplay"></vue-feather> <span>หน้าหลัก</span>
          </router-link>
        </li>
        <li class="nav-label mg-t-15">Systems</li>
        <li
          class="nav-item with-sub"
          :class="[currentPath.search('/sm') !== -1 ? 'active show' : '']"
        >
          <span class="nav-link"
            ><vue-feather type="user-check"></vue-feather>
            <span>ฐานข้อมูลผู้รับเหมา</span>
          </span>

          <ul>
            <li
              class=""
              :class="[
                currentPath === '/sm/company/register-form'
                  ? 'active show'
                  : '',
              ]"
            >
              <router-link to="/sm/company/register-form"
                >ลงทะเบียนบริษัท
              </router-link>
            </li>
            <li
              class=""
              :class="[
                currentPath === '/sm/company/register-tracking'
                  ? 'active show'
                  : '',
              ]"
            >
              <router-link to="/sm/company/register-tracking"
                >ผลการลงทะเบียน
              </router-link>
            </li>
            <li
              class=""
              :class="[
                currentPath === '/sm/subcontract/lists' ? 'active show' : '',
              ]"
            >
              <router-link to="/" v-if="currentUser"
                >รายชื่อพนักงาน</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
      <ul class="nav nav-aside"></ul>
      <ul class="nav nav-aside" v-if="currentUser">
        <li class="nav-label mg-t-15">User Interface</li>
        <li class="nav-item">
          <a href="#" @click="handleLogout" class="nav-link"
            ><vue-feather type="lock"></vue-feather> <span>ออกจากระบบ</span>
          </a>
        </li>

        <li class="nav-label mg-t-15">VERSION {{ version }}</li>
      </ul>
    </div>
  </aside>
</template>
<script>
import { version } from "../../package";
import AuthService from "../services/authen";
import feather from "feather-icons";

const icons = Object.keys(feather.icons);
export default {
  data() {
    return {
      icons,
      version,
      displayUser: null,
      displayUserChar: "",
      userInfo: null,
      userMenu: null,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.authen.user;
    },
    loggedIn() {
      return this.$store.state.authen.status.loggedIn;
    },
    currentPath() {
      return this.$route.path;
    },
  },
  created() {},
  mounted() {
    if (this.currentUser) {
      this.getUserInfo();
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("authen/doLogout").then(() => {
        this.$router.push("/login");
      });
    },
    getUserInfo() {
      AuthService.getUserInfo(this.currentUser).then((data) => {
        this.displayUser = data.userInfo.USER_NAME;
        this.displayUserChar = data.userInfo.USER_NAME.substr(
          0,
          1
        ).toUpperCase();
        this.displayUser = this.displayUser
          .toLowerCase()
          .replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
          });
      });
    },
  },
};
</script>
<style scoped>
.nav-label {
  color: #97a3b9;
}
</style>
