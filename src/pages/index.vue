<template>
  <div>
    <loading
      v-model:active="isLoading"
      :is-full-page="fullPage"
      color="#2baf2b"
      background-color="#000"
    ></loading>

    <div></div>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { useToast } from "vue-toastification";
import feather from "feather-icons";
const icons = Object.keys(feather.icons);

export default {
  data() {
    return {
      icons,
      isLoading: false,
      fullPage: true,
    };
  },
  service: null,
  components: {
    Loading,
  },
  setup() {
    // Get toast interface
    const toast = useToast();
    // Make it available inside methods
    return { toast };
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
    prefix() {
      return this.$store.state.prefix;
    },
  },
  created() {},
  mounted() {
    this.isLoading = true;
    this.isLoading = false;
  },
  methods: {},
};
</script>
