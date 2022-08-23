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
                    <h4 class="mg-b-5 text-primary tx-bold">ลงทะเบียนบริษัท</h4>
                    <p class="mg-b-0">
                      กรุณากรอกข้อมูลบริษัท ผู้ประสานงาน
                      และรายละเอียดที่เกี่ยวข้องให้ครบถ้วน
                    </p>
                  </div>
                </div>
                <div class="card-body">
                  <div>
                    <ul class="nav nav-line" role="">
                      <li class="nav-item">
                        <a class="nav-link active tx-bold">ข้อมูลบริษัท</a>
                      </li>
                    </ul>

                    <div class="tab-content">
                      <div class="tab-pane fade show active mg-t-20">
                        <div>
                          <form>
                            <div class="form-row">
                              <div class="form-group col-md-8">
                                <label for=""
                                  >ชื่อบริษัท
                                  <span class="tx-danger">*</span></label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  v-model="inputCompName"
                                  placeholder="กรอกชื่อบริษัท"
                                />
                              </div>
                              <div class="form-group col-md-4">
                                <label for="">ชื่อย่อบริษัท</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  v-model="inputCompCode"
                                  placeholder="กรอกชื่อย่อบริษัท (ถ้ามี)"
                                />
                              </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="inputAddress"
                                  >ที่อยู่ของบริษัท
                                  <span class="tx-danger">*</span></label
                                >
                                <textarea
                                  type="text"
                                  class="form-control"
                                  v-model="inputCompAddress"
                                  placeholder="กรอกที่อยู่ของบริษัท"
                                ></textarea>
                              </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="inputAddress"
                                  >เลขประจําตัวผู้เสียภาษี 13 หลัก
                                  <span class="tx-danger">*</span></label
                                >
                                <input
                                  type="tel"
                                  class="form-control"
                                  v-model="inputCompTaxNo"
                                  v-mask="'#############'"
                                  placeholder="กรอกเลขประจําตัวผู้เสียภาษีของบริษัท"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <ul class="nav nav-line" role="">
                        <li class="nav-item">
                          <a class="nav-link active tx-bold"
                            >ข้อมูลผู้ประสานงาน</a
                          >
                        </li>
                      </ul>
                      <div class="mg-t-20">
                        <div>
                          <form>
                            <div class="form-row">
                              <div class="form-group col-md-8">
                                <label for=""
                                  >ชื่อ - นามสกุล
                                  <span class="tx-danger">*</span></label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  v-model="inputUserName"
                                  placeholder="กรอกชื่อ - นามสกุล"
                                />
                              </div>
                              <div class="form-group col-md-4">
                                <label for="inputAddress"
                                  >เบอร์มือถือ
                                  <span class="tx-danger">*</span></label
                                >
                                <input
                                  type="tel"
                                  class="form-control"
                                  v-model="inputUserMobile"
                                  placeholder="กรอกเบอร์มือถือ"
                                  v-mask="'###-###-####'"
                                />
                              </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for=""
                                  >อีเมล์
                                  <span class="tx-danger">*</span></label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  v-model="inputUserEmail"
                                  placeholder="กรอกอีเมล์"
                                />
                              </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for=""
                                  >รหัสผ่าน (ตัวเลข 6 หลัก)
                                  <span class="tx-danger">*</span></label
                                >
                                <input
                                  type="password"
                                  class="form-control"
                                  v-model="inputUserPassword"
                                  v-mask="'######'"
                                  placeholder="กรอกรหัสผ่าน"
                                />
                              </div>

                              <div class="form-group col-md-6">
                                <label for=""
                                  >ยืนยันรหัสผ่าน
                                  <span class="tx-danger">*</span></label
                                >
                                <input
                                  type="password"
                                  class="form-control"
                                  v-model="inputUserConfirmPassword"
                                  v-mask="'######'"
                                  placeholder="กรอกยืนยันรหัสผ่าน"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <ul class="nav nav-line" role="">
                        <li class="nav-item">
                          <a class="nav-link active tx-bold"
                            >นโยบายความคุ้มครองข้อมูลส่วนบุคคล</a
                          >
                        </li>
                      </ul>
                      <div>
                        <div
                          class="overflow-auto p-3 my-3 bg-light"
                          style="max-height: 150px"
                        >
                          <div v-html="content" class="tx-gray-800"></div>
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck1"
                              v-model="inputUserAccept"
                            />
                            <label
                              class="custom-control-label px-2"
                              for="customCheck1"
                              >ข้าพเจ้ายืนยันว่าได้อ่านและทำความเข้าใจ
                              รวมถึงตกลงให้ความยินยอมต่อการเก็บรวบรวม
                              การใช้และ/หรือการเปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้าตามวัตถุประสงค์ที่ระบุในนโยบายการคุ้มครองข้อมูลส่วนบุคคลของแก่บริษัท
                              บริดจสโตน ไทร์ แมนูแฟคเจอริ่ง (ประเทศไทย)
                              จำกัด</label
                            >
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
      <div class="mg-t-20">
        <button
          class="th btn btn-primary btn-uppercase mg-r-4"
          @click="goSubmit()"
        >
          บันทึกข้อมูล
        </button>
        <button
          @click="goBack()"
          class="th btn btn-secondary btn-uppercase mg-r-4"
        >
          ยกเลิก
        </button>
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
      inputCompName: "",
      inputCompCode: "",
      inputCompAddress: "",
      inputCompTaxNo: "",
      inputCompTaxNoRaw: "",
      inputUserName: "",
      inputUserMobile: "",
      inputUserMobileRaw: "",
      inputUserEmail: "",
      inputUserPassword: "",
      inputUserConfirmPassword: "",
      inputUserAccept: false,
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
    async goSubmit() {
      let isError = false;
      let txtError = "";
      if (this.inputCompCode === "") {
        isError = true;
        txtError += "<li>กรุณากรอกชื่อบริษัท</li>";
      }
      if (this.inputCompAddress === "") {
        isError = true;
        txtError += "<li>กรุณากรอกที่อยู่ของบริษัท</li>";
      }
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
        } else {
          console.log(this.inputCompTaxNoRaw);
          await axios
            .get(configs.urlApi, {
              params: {
                action: "/company/is-duplicate-register",
                inputCompTaxNo: this.inputCompTaxNoRaw,
              },
            })
            .then((response) => {
              console.log(response.data);
              let data = response.data;
              if (data.is_duplicated === 1) {
                isError = true;
                txtError +=
                  "<li>เลขประจำตัวผู้้เสียภาษีนี้มีการลงทะเบียนแล้ว</li>";
              }
            });
        }
      }
      if (this.inputUserName === "") {
        isError = true;
        txtError += "<li>กรุณากรอกชื่อ-นามสกุลผู้ประสานงาน</li>";
      }
      if (this.inputUserMobile === "") {
        isError = true;
        txtError += "<li>กรุณากรอกเบอร์มือถือ</li>";
      } else {
        this.inputUserMobileRaw = unmask(
          this.inputUserMobile,
          "###-###-####"
        ).toString();
        if (this.inputUserMobileRaw.length != 10) {
          isError = true;
          txtError += "<li>เบอร์มือถือไม่ถูกต้อง</li>";
        }
      }
      if (this.inputUserEmail === "") {
        isError = true;
        txtError += "<li>กรุณากรอกอีเมล์</li>";
      }
      if (this.inputUserPassword === "") {
        isError = true;
        txtError += "<li>กรุณากรอกรหัสผ่าน (ตัวเลข 6 หลัก)</li>";
      }
      if (this.inputUserConfirmPassword === "") {
        isError = true;
        txtError += "<li>กรุณายืนยันรหัสผ่าน</li>";
      }
      if (
        this.inputUserPassword !== "" &&
        this.inputUserConfirmPassword !== "" &&
        this.inputUserPassword !== this.inputUserConfirmPassword
      ) {
        isError = true;
        txtError += "<li>กรุณายืนยันรหัสผ่านให้ตรงกัน</li>";
      }
      if (!this.inputUserAccept) {
        isError = true;
        txtError += "<li>กรุณายอมรับนโยบายการคุ้มครองข้อมูลส่วนบุคคล</li>";
      }
      if (!isError) {
        let formData = new FormData();
        formData.append("inputCompName", this.inputCompName);
        formData.append("inputCompCode", this.inputCompCode);
        formData.append("inputCompAddress", this.inputCompAddress);
        formData.append("inputCompTaxNo", this.inputCompTaxNoRaw);
        formData.append("inputUserName", this.inputUserName);
        formData.append("inputUserMobile", this.inputUserMobileRaw);
        formData.append("inputUserEmail", this.inputUserEmail);
        formData.append("inputUserPassword", this.inputUserPassword);
        formData.append(
          "inputUserConfirmPassword",
          this.inputUserConfirmPassword
        );
        formData.append("inputUserAccept", this.inputUserAccept);
        formData.append("action", "/company/register");
        axios.post(configs.urlApi, formData).then((response) => {
          let data = response.data;
          console.log(data);
          if (data.is_success === 1) {
            this.$swal
              .fire({
                html: "บันทึกแบบฟอร์มลงทะเบียนเรียบร้อยแล้ว<br />กรุณารอการตรวจสอบจากเจ้าหน้าที่",
                title: "ลงทะเบียนสำเร็จ",
                icon: "success",
                showCancelButton: false,
                confirmButtonText: "ตกลง",
              })
              .then((result) => {
                if (result.isConfirmed) {
                  window.location.replace("/company/tracking");
                }
              });
          } else {
            this.$swal({
              html: data.txt_message,
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
