<template>
  <div>
    <loading
      v-model:active="isLoading"
      :is-full-page="fullPage"
      color="#2baf2b"
      background-color="#000"
    ></loading>

    <div>
      <div class="content">
        <div class="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
          <div class="media d-block d-lg-flex">
            <div class="media-body">
              <div class="timeline-group tx-13">
                <div class="timeline-label">Today</div>
                <div class="timeline-item">
                  <div class="timeline-time">10:30pm</div>
                  <div class="timeline-body">
                    <h6 class="mg-b-0">Building a Simple User Interface</h6>
                    <p><a href="">Elisse Joson</a> San Francisco, CA</p>

                    <p>
                      In this lesson, you create a layout in XML that includes a
                      text field and a button. In the next lesson, your app
                      responds when the
                    </p>
                    <nav class="nav nav-row mg-t-15">
                      <a href="" class="nav-link">Like</a>
                      <a href="" class="nav-link">Comment</a>
                    </nav>
                  </div>
                  <!-- timeline-body -->
                </div>
                <!-- timeline-item -->
                <div class="timeline-item">
                  <div class="timeline-time">08:15pm</div>
                  <div class="timeline-body">
                    <h6 class="mg-b-0">Blueberry Cheesecake Dessert Recipe</h6>
                    <p><a href="">Katherine Lumaad</a> Oakland, CA</p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes.
                    </p>

                    <nav class="nav nav-row mg-t-15">
                      <a href="" class="nav-link">Like</a>
                      <a href="" class="nav-link">Comment</a>
                    </nav>
                  </div>
                  <!-- timeline-body -->
                </div>
                <!-- timeline-item -->
                <div class="timeline-item">
                  <div class="timeline-time">03:30pm</div>
                  <div class="timeline-body">
                    <h6 class="mg-b-0">
                      Your Finances Don't Have to Be Perfect to Work
                    </h6>
                    <p><a href="">Elisse Joson</a> San Francisco, CA</p>

                    <p>
                      In this lesson, you create a layout in XML that includes a
                      text field and a button. In the next lesson, your app
                      responds when the lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                      massa. Cum sociis natoque penatibus et magnis dis
                      parturient montes.
                    </p>
                    <nav class="nav nav-row mg-t-15">
                      <a href="" class="nav-link">Like</a>
                      <a href="" class="nav-link">Comment</a>
                    </nav>
                  </div>
                  <!-- timeline-body -->
                </div>
                <!-- timeline-item -->
                <div class="timeline-label">Yesterday</div>
                <div class="timeline-item">
                  <div class="timeline-time">06:30pm</div>
                  <div class="timeline-body">
                    <h6 class="mg-b-0">
                      An Engineer Explains Why You Should Always Order the
                      Larger Pizza
                    </h6>
                    <p><a href="">Elisse Joson</a> San Francisco, CA</p>

                    <p>
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes.
                    </p>

                    <div class="row row-xs">
                      <div class="col"></div>
                      <div class="col"></div>
                    </div>

                    <nav class="nav nav-row mg-t-15">
                      <a href="" class="nav-link">Like</a>
                      <a href="" class="nav-link">Comment</a>
                    </nav>
                  </div>
                  <!-- timeline-body -->
                </div>
                <!-- timeline-item -->
                <div class="timeline-item">
                  <div class="timeline-time">01:15pm</div>
                  <div class="timeline-body">
                    <h6 class="mg-b-0">
                      The Strange Persistence of First Languages
                    </h6>
                    <p><a href="">Elisse Joson</a> San Francisco, CA</p>

                    <p>
                      In this lesson, you create a layout in XML that includes a
                      text field and a button. In the next lesson, your app
                      responds when the world.
                    </p>
                    <nav class="nav nav-row mg-t-15">
                      <a href="" class="nav-link">Like</a>
                      <a href="" class="nav-link">Comment</a>
                    </nav>
                  </div>
                  <!-- timeline-body -->
                </div>
                <!-- timeline-item -->
                <div class="timeline-label">March 21, 2019</div>
                <div class="timeline-item">
                  <div class="timeline-time">11:45am</div>
                  <div class="timeline-body">
                    <h6 class="mg-b-0">
                      How to Win Your Next Political Argument
                    </h6>
                    <p><a href="">Elisse Joson</a> San Francisco, CA</p>

                    <p>
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes.
                    </p>
                    <p>
                      In this lesson, you create a layout in XML that includes a
                      text field and a button. In the next lesson, your app
                      responds when the world.
                    </p>
                    <nav class="nav nav-row mg-t-15">
                      <a href="" class="nav-link">Like</a>
                      <a href="" class="nav-link">Comment</a>
                    </nav>
                  </div>
                  <!-- timeline-body -->
                </div>
                <!-- timeline-item -->
              </div>
              <!-- timeline-group -->
            </div>
            <!-- media-body -->
            <div
              class="profile-sidebar mx-wd-300 mg-t-40 mg-lg-t-0 pd-lg-l-25"
            ></div>
            <!-- profile-sidebar -->
          </div>
          <!-- media -->
        </div>
        <!-- container -->
      </div>
    </div>
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
