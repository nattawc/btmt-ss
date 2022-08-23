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
        <li
          class="nav-item"
          :class="[currentPath === '/tranining' ? 'active' : '']"
        >
          <router-link
            to="/tranining"
            class="nav-link"
            @click="currentPath = '/tranining'"
            ><vue-feather type="tv"></vue-feather>
            <span>การอบรมและทดสอบ</span>
          </router-link>
        </li>
        <li class="nav-label mg-t-15" v-if="!loggedIn">User Interface</li>
        <li
          class="nav-item"
          :class="[currentPath === '/login' ? 'active' : '']"
        >
          <router-link
            to="/login"
            class="nav-link"
            @click="currentPath = '/login'"
            ><vue-feather type="lock"></vue-feather> <span>เข้าสู่ระบบ</span>
          </router-link>
        </li>
        <li class="nav-label mg-t-15">Systems</li>
        <li
          class="nav-item with-sub"
          :class="[currentPath.search('/company') !== -1 ? 'active show' : '']"
        >
          <span class="nav-link"
            ><vue-feather type="database"></vue-feather>
            <span>ข้อมูลบริษัท</span>
          </span>

          <ul>
            <li
              class=""
              :class="[
                currentPath === '/company/register' ? 'active show' : '',
              ]"
            >
              <router-link to="/company/register">ลงทะเบียนบริษัท </router-link>
            </li>
            <li
              class=""
              :class="[
                currentPath === '/company/tracking' ? 'active show' : '',
              ]"
            >
              <router-link to="/company/tracking">ผลการลงทะเบียน </router-link>
            </li>
            <li
              class=""
              :class="[currentPath === '/company/approve' ? 'active show' : '']"
            >
              <router-link to="/company/approve"
                >อนุมัติการลงทะเบียน
              </router-link>
            </li>
            <li
              class=""
              :class="[currentPath === '/company/all' ? 'active show' : '']"
            >
              <router-link to="/company/all">รายชื่อบริษัททั้งหมด </router-link>
            </li>
          </ul>
        </li>
        <li
          class="nav-item with-sub"
          :class="[
            currentPath.search('/subcontract') !== -1 ? 'active show' : '',
          ]"
        >
          <span class="nav-link"
            ><vue-feather type="user"></vue-feather>
            <span>ข้อมูลผู้รับเหมา</span>
          </span>

          <ul>
            <li
              class=""
              :class="[
                currentPath === '/subcontract/register' ? 'active show' : '',
              ]"
            >
              <router-link to="/subcontract/register"
                >ลงทะเบียนผู้รับเหมา</router-link
              >
            </li>
            <li
              class=""
              :class="[currentPath === '/subcontract/all' ? 'active show' : '']"
            >
              <router-link to="/subcontract/all">รายชื่อผู้รับเหมา</router-link>
            </li>
            <li
              class=""
              :class="[
                currentPath === '/subcontract/training/upload'
                  ? 'active show'
                  : '',
              ]"
            >
              <router-link to="/subcontract/training/upload"
                >อัพโหลดผลสอบ</router-link
              >
            </li>
            <li
              class=""
              :class="[
                currentPath === '/subcontract/card' ? 'active show' : '',
              ]"
            >
              <router-link to="/subcontract/card"
                >พิมพ์บัตรผู้รับเหมา</router-link
              >
            </li>
            <li
              class=""
              :class="[
                currentPath === '/subcontract/approve' ? 'active show' : '',
              ]"
            >
              <router-link to="/subcontract/approve"
                >อนุมัติผู้รับเหมาใหม่</router-link
              >
            </li>
            <li
              class=""
              :class="[
                currentPath === '/subcontract/training/approve'
                  ? 'active show'
                  : '',
              ]"
            >
              <router-link to="/subcontract/training/approve"
                >อนุมัติผลสอบ</router-link
              >
            </li>
            <li
              class=""
              :class="[
                currentPath === '/subcontract/blacklist' ? 'active show' : '',
              ]"
            >
              <router-link to="/subcontract/blacklist"
                >รายชื่อแบล็คลิสต์</router-link
              >
            </li>
          </ul>
        </li>
        <li
          class="nav-item with-sub"
          :class="[
            currentPath.search('/work-on-holiday/') !== -1 ? 'active show' : '',
          ]"
        >
          <span class="nav-link"
            ><vue-feather type="layers"></vue-feather>
            <span>แบบฟอร์มขอเข้าทำงาน</span>
          </span>

          <ul>
            <li
              class=""
              :class="[
                currentPath === '/work-on-holiday/form' ? 'active show' : '',
              ]"
            >
              <router-link to="/work-on-holiday/form"
                >กรอกแบบฟอร์ม
              </router-link>
            </li>
            <li
              class=""
              :class="[
                currentPath === '/work-on-holiday/approve' ? 'active show' : '',
              ]"
            >
              <router-link to="/work-on-holiday/approve"
                >อนุมัติแบบฟอร์ม
              </router-link>
            </li>
            <li
              class=""
              :class="[
                currentPath === '/work-on-holiday/list' ? 'active show' : '',
              ]"
            >
              <router-link to="/work-on-holiday/list"
                >รายชื่อบริษัทที่เข้าทำงาน
              </router-link>
            </li>
            <li
              class=""
              :class="[
                currentPath === '/work-on-holiday/setup-calendar'
                  ? 'active show'
                  : '',
              ]"
            >
              <router-link to="/work-on-holiday/setup-calendar"
                >ตั้งปฏิทินวันหยุด
              </router-link>
            </li>
          </ul>
        </li>
        <li
          class="nav-item"
          :class="[currentPath === '/guard/inout' ? 'active' : '']"
        >
          <router-link
            to="/qr/subcontract"
            class="nav-link"
            @click="currentPath = '/'"
            ><vue-feather type="user-check"></vue-feather>
            <span>สแกนเข้าออก</span>
          </router-link>
        </li>
        <li
          class="nav-item with-sub"
          :class="[currentPath.search('/report') !== -1 ? 'active show' : '']"
        >
          <span class="nav-link"
            ><vue-feather type="clipboard"></vue-feather>
            <span>รายงาน</span>
          </span>

          <ul>
            <li
              class=""
              :class="[
                currentPath === '/report/guard-inout' ? 'active show' : '',
              ]"
            >
              <router-link to="/report/guard-inout"
                >ประวัติการเข้าออก
              </router-link>
            </li>
            <li
              class=""
              :class="[
                currentPath === '/report/subcontract-card-expire'
                  ? 'active show'
                  : '',
              ]"
            >
              <router-link to="/report/subcontract-card-expire"
                >บัตรผู้รับเหมาหมดอายุ
              </router-link>
            </li>
          </ul>
        </li>

        <li
          class="nav-item with-sub"
          :class="[currentPath.search('/kb') !== -1 ? 'active show' : '']"
        >
          <span class="nav-link"
            ><vue-feather type="help-circle"></vue-feather>
            <span>คู่มือการใช้งานระบบ</span>
          </span>

          <ul>
            <li
              class=""
              :class="[
                currentPath === '/kb/subcontractor' ? 'active show' : '',
              ]"
            >
              <router-link to="/kb/subcontractor">ระบบผู้รับเหมา </router-link>
            </li>
            <li
              class=""
              :class="[
                currentPath === '/kb/work-on-holiday' ? 'active show' : '',
              ]"
            >
              <router-link to="/kb/work-on-holiday"
                >เข้าทำงานวันหยุด
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="nav nav-aside"></ul>
      <ul class="nav nav-aside">
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
