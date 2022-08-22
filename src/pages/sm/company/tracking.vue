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
                    <h4 class="mg-b-5 text-primary tx-bold">ผลการลงทะเบียน</h4>
                    <p class="mg-b-0">
                      ทางเจ้าหน้าที่จะตรวจสอบการลงทะเบียนประมาณ 3 วันทำการ
                    </p>
                  </div>
                </div>
                <div class="card-body">
                  <div>
                    <ul class="nav nav-line" role="">
                      <li class="nav-item">
                        <a class="nav-link active tx-bold">ตรวจสอบ</a>
                      </li>
                    </ul>

                    <div class="tab-content">
                      <div class="tab-pane fade show active mg-t-20">
                        <div>
                          <div class="form-row">
                            <div class="form-group col-md-12">
                              <label for="inputAddress"
                                >เลขประจําตัวผู้เสียภาษี 13 หลัก
                                <span class="tx-danger">*</span></label
                              >
                              <div class="input-group">
                                <input
                                  type="tel"
                                  class="form-control"
                                  v-model="inputCompTaxNo"
                                  v-mask="'#############'"
                                  placeholder="กรอกเลขประจําตัวผู้เสียภาษีของบริษัท"
                                />
                                <div class="input-group-append">
                                  <button
                                    class="th btn btn-primary btn-uppercase"
                                    @click="goCheck()"
                                  >
                                    ตรวจสอบ
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
import { useToast } from "vue-toastification";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import configs from "@/config/config";
// import router from "../../router";

function unmask(maskedValue, mask) {
  let defaultTokens = ["#", "X", "S", "A", "a", "!"];
  let unmaskedValue = "";
  let isToken;
  for (let i = 0; i < maskedValue.length; i++) {
    isToken = false;
    for (let j = 0; j < defaultTokens.length; j++) {
      if (mask[i] == defaultTokens[j]) {
        isToken = true;
      }
    }
    if (isToken) {
      unmaskedValue += maskedValue[i];
    }
  }
  return unmaskedValue;
}

export default {
  data() {
    return {
      content: null,
      isLoading: true,
      fullPage: true,

      inputCompTaxNo: "",
      inputCompTaxNoRaw: "",
    };
  },
  components: { Loading },

  setup() {
    // Get toast interface
    const toast = useToast();
    // Make it available inside methods
    return { toast };
  },
  computed: {
    loggedIn() {
      return this.$store.state.authen.status.loggedIn;
    },
    getReturnUrl() {
      return this.$store.state.returnUrl;
    },
  },
  service: null,
  created() {
    this.loading = false;
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  mounted() {
    this.isLoading = true;
    axios
      .get(configs.urlApi, {
        params: {
          action: "/fetch/get-content",
          code: "PDPA",
        },
      })
      .then((response) => {
        console.log(response.data);
        let data = response.data;
        this.content = data.content.CON_DATA;
        this.isLoading = false;
      });
  },
  methods: {
    goBack() {
      window.location.replace("/");
    },
    async goCheck() {
      let isError = false;
      let txtError = "";

      if (this.inputCompTaxNo === "") {
        isError = true;
        txtError += "<li>กรุณากรอกเลขประจำตัวผู้เสียภาษีของบริษัท</li>";
      } else {
        this.inputCompTaxNoRaw = unmask(
          this.inputCompTaxNo,
          "#############"
        ).toString();
        if (this.inputCompTaxNoRaw.length != 13) {
          isError = true;
          txtError += "<li>เลขประจำตัวผู้เสียภาษีไม่ถูกต้อง</li>";
        }
      }

      if (!isError) {
        let formData = new FormData();
        formData.append("inputCompTaxNo", this.inputCompTaxNo);
        formData.append("action", "sm/company/tracking");
        axios.post(configs.urlApi, formData).then((response) => {
          let data = response.data;

          if (data.is_success === 1) {
            if (data.company_status === "APPROVE") {
              this.$swal
                .fire({
                  html: "ข้อมูลการลงทะเบียนได้รับการอนุมัติแล้ว<br />คุณสามารถเข้าใช้งานระบบด้วยอีเมล์และรหัสผ่านที่ตั้งไว้",
                  title: "ลงทะเบียนสำเร็จ",
                  icon: "success",
                  showCancelButton: false,
                  confirmButtonText: "ตกลง",
                })
                .then((result) => {
                  if (result.isConfirmed) {
                    window.location.replace("/login");
                  }
                });
            } else if (data.company_status === "REJECT") {
              this.$swal({
                html:
                  "ทางเจ้าหน้าที่ไม่อนุมัติการลงทะเบียน เนื่องจาก" +
                  data.reject_reason,
                title: "ไม่อนุมัติการลงทะเบียน",
                icon: "error",
                showCancelButton: false,
                confirmButtonColor: "#b91c1c",
                confirmButtonText: "ตกลง",
              });
            } else if (data.company_status === "SUBMIT") {
              this.$swal.fire({
                html: "ข้อมูลการลงทะเบียนอยู่ระหว่างการตรวจสอบ",
                title: "รอการตรวจสอบ",
                icon: "info",
                showCancelButton: false,
                confirmButtonText: "ตกลง",
              });
            }
          } else {
            this.$swal({
              html: "ตรวจสอบไม่พบข้อมูลในระบบ กรุณาตรวจสอบอีกครั้ง",
              title: "พบข้อผิดพลาด",
              icon: "error",
              showCancelButton: false,
              confirmButtonColor: "#b91c1c",
              confirmButtonText: "ตกลง",
            });
          }
        });
      } else {
        this.$swal({
          html: "<ul>" + txtError + "</ul>",
          title: "พบข้อผิดพลาด",
          icon: "error",
          showCancelButton: false,
          confirmButtonColor: "#b91c1c",
          confirmButtonText: "ตกลง",
        });
      }
    },
  },
};
</script>
