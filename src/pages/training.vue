<template>
  <div>
    <loading
      v-model:active="isLoading"
      :is-full-page="fullPage"
      color="#2baf2b"
    ></loading>

    <div class="container">
      <div class="row row-xs">
        <!-- col -->
        <div class="col-12 col-md-12 col-lg-12 col-xl-12 mg-t-10 mg-lg-t-0">
          <div class="row row-xs">
            <!-- col -->
            <div
              class="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mg-t-10 mg-lg-t-0"
            >
              <div class="card">
                <div
                  class="bd-b-0 pd-t-20 pd-lg-t-20 pd-l-20 pd-lg-l-20 d-flex flex-column flex-sm-row align-items-sm-start justify-content-sm-between"
                >
                  <div>
                    <h4 class="mg-b-5 text-primary tx-bold">การอบรม</h4>
                    <p class="mg-b-0">
                      กรุณาเลือกการอบรมหรือทบทวนตามประเภทงานของท่าน
                    </p>
                  </div>
                </div>
                <div class="card-body">
                  <div
                    id="wizard3"
                    role="application"
                    class="wizard clearfix vertical"
                  >
                    <div class="steps clearfix">
                      <ul role="tablist">
                        <li
                          role="tab"
                          class="first"
                          :class="[step == 1 ? 'current' : 'disabled']"
                          aria-disabled="false"
                          aria-selected="true"
                        >
                          <a id="wizard3-t-0" aria-controls="wizard3-p-0"
                            ><span class="current-info audible"
                              >ขั้นตอนที่: </span
                            ><span class="number">1</span>
                            <span class="title">เลือกประเภทการอบรม</span></a
                          >
                        </li>
                        <li
                          role="tab"
                          class=""
                          aria-disabled="true"
                          :class="[step == 2 ? 'current' : 'disabled']"
                        >
                          <a id="wizard3-t-1" aria-controls="wizard3-p-1"
                            ><span class="number">2</span>
                            <span class="title">ดูวิดีโอการอบรม</span></a
                          >
                        </li>
                        <li
                          role="tab"
                          class="last"
                          :class="[step == 3 ? 'current' : 'disabled']"
                          aria-disabled="true"
                        >
                          <a id="wizard3-t-2" aria-controls="wizard3-p-2"
                            ><span class="number">3</span>
                            <span class="title">ทำแบบทดสอบ</span></a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="content clearfix">
                      <section
                        id="wizard3-p-0"
                        role="tabpanel"
                        aria-labelledby="wizard3-h-0"
                        class="body current"
                        aria-hidden="false"
                        v-if="step === 1"
                      >
                        <h3 class="tx-bold">เลือกประเภทการอบรม</h3>
                        <ul class="list-group">
                          <li
                            class="list-group-item"
                            v-for="(c1, index1) in courses"
                            :key="index1"
                          >
                            <!-- <button
                              class="btn btn-success pull-right mg-r-10"
                              v-if="c1.info.TRN_HAVE_CHILD === '0'"
                            >
                              เลือก
                            </button> -->
                            <b
                              >{{ c1.info.TRN_CODE }}. {{ c1.info.TRN_NAME }}</b
                            >

                            <ul class="list-group mg-t-10">
                              <li
                                class="list-group-item"
                                v-for="(c2, index2) in c1.child"
                                :key="index2"
                              >
                                <!-- <button
                                  class="btn btn-success pull-right mg-r-10"
                                  v-if="c2.info.TRN_HAVE_CHILD === '0'"
                                >
                                  เลือก
                                </button> -->
                                {{ c2.info.TRN_CODE }}. {{ c2.info.TRN_NAME }}
                                <ul class="list-group mg-t-10">
                                  <li
                                    class="list-group-item"
                                    v-for="(c3, index2) in c2.child"
                                    :key="index2"
                                  >
                                    <!-- <button
                                      class="btn btn-success pull-right mg-r-10"
                                      v-if="c3.info.TRN_HAVE_CHILD === '0'"
                                    >
                                      เลือก
                                    </button> -->
                                    {{ c3.info.TRN_CODE }}.
                                    {{ c3.info.TRN_NAME }}
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </section>

                      <section
                        id="wizard3-p-1"
                        role="tabpanel"
                        aria-labelledby="wizard3-h-1"
                        class="body"
                        aria-hidden="true"
                        v-if="step === 2"
                      >
                        <h3 class="tx-bold">คำชี้แจง</h3>
                        <ol>
                          <li>
                            ผู้รับเหมาจะต้องเรียนรู้จากสื่อการสอนให้ครบทุกเนื้อหาก่อนทำแบบทดสอบ
                          </li>
                          <li>
                            ผู้รับเหมาต้องไม่ส่งต่อหรือเผยแพร่สื่อการสอนโดยไม่ได้รับอนุญาต
                            ส่วนที่ 1 VDO
                          </li>
                        </ol>
                        <video controls="true">
                          <source
                            src="https://s3.ap-southeast-1.amazonaws.com/z.btmt365.com/training-subcontract/Safety+Rules+Contractor.mp4"
                            type="video/mp4"
                          />

                          บราวเซอร์ของคุณไม่รองรับการเล่นวิดีโอ กรุณา<a
                            href="https://s3.ap-southeast-1.amazonaws.com/z.btmt365.com/training-subcontract/Safety+Rules+Contractor.mp"
                            >คลิกที่นี่เพื่อดาวน์โหลดไฟล์</a
                          >
                        </video>
                      </section>

                      <section
                        id="wizard3-p-2"
                        role="tabpanel"
                        aria-labelledby="wizard3-h-2"
                        class="body"
                        aria-hidden="true"
                        v-if="step === 3"
                      >
                        <h3 class="tx-bold">เงื่อนไขการผ่านการทดสอบ</h3>
                        <ol>
                          <li>
                            ผู้รับเหมาจะต้องได้คะแนนสอบมากกว่า 80% ของแบบทดสอบ
                          </li>
                          <li>
                            ผู้รับเหมาจะต้องส่งภาพถ่ายในขณะกำลังอบรมพร้อมทั้งใบเซ็นชื่ออบรมมาที่
                            <a
                              href="mailto:thanakrit.kumsangtong@bridgestone.com"
                              >thanakrit.kumsangtong@bridgestone.com</a
                            >
                          </li>
                          <li>
                            หากข้อมูลส่วนใดส่วนหนึ่งไม่ครบถ้วนหรือไม่เป็นไปตามเงื่อนไขจะถือว่าไม่ผ่านแบบทดสอบ
                          </li>
                        </ol>
                        <div class="mg-y-20">
                          <br /><br /><br />
                          <center>
                            <a
                              href="https://forms.office.com/Pages/ResponsePage.aspx?id=Vur9oQEyAE2bdmYTOIUFV9R6i9_alLhHsMr7ZNMv0TJUQ1lPVVpWR0lPVlZNSUo0RjAwQ0VGOUZGQS4u&qrcode=true"
                              class="btn btn-lg btn-dark pd-x-20"
                            >
                              เริ่มทำแบบทดสอบ
                            </a>
                          </center>
                          <br /><br /><br />
                        </div>
                      </section>
                    </div>
                    <div class="actions clearfix">
                      <ul role="menu" aria-label="Pagination">
                        <li class="disabled" aria-disabled="true">
                          <a role="menuitem" @click="doPrev()">ย้อนกลับ</a>
                        </li>
                        <li
                          aria-hidden="false"
                          aria-disabled="false"
                          v-if="step < 3"
                        >
                          <a role="menuitem" @click="doNext()">ถัดไป</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- row -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import configs from "@/config/config";
import { useToast } from "vue-toastification";
import feather from "feather-icons";
const icons = Object.keys(feather.icons);

export default {
  data() {
    return {
      icons,
      isLoading: false,
      fullPage: true,
      step: 1,
      courses: null,
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
  async mounted() {
    this.isLoading = true;

    await axios
      .get(configs.urlApi, {
        params: {
          action: "/training/get-link",
        },
      })
      .then((response) => {
        let data = response.data;
        this.courses = data.course;
        console.log(data.course);
        this.isLoading = false;
      });
  },
  methods: {
    doNext() {
      console.log("(doNext) step = ", this.step);
      if (this.step < 3) {
        this.step += 1;
      }
    },
    doPrev() {
      console.log("(doPrev) step = ", this.step);
      if (this.step > 1) {
        this.step -= 1;
      }
    },
  },
};
</script>
<style scoped>
video {
  /* override other styles to make responsive */
  width: 100% !important;
  height: auto !important;
}
</style>
