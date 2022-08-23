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
                    <h4 class="mg-b-5 text-primary tx-bold">
                      ลงทะเบียนผู้รับเหมา
                    </h4>
                    <p class="mg-b-0">
                      กรุณากรอกข้อมูล ถ่ายรูป
                      และอัพโหลดเอกสารให้ครบถ้วนเพื่อความรวดเร็วในการตรวจสอบข้อมูล
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
                          <div class="form-row">
                            <div class="form-group col-md-12">
                              <label for=""
                                >ชื่อบริษัท
                                <span class="tx-danger">*</span></label
                              >
                              <select
                                class="form-control"
                                v-model="inputSubComName"
                                placeholder="กรอกชื่อบริษัท"
                              >
                                <option>กรุณาเลือกบริษัท</option>
                                <option
                                  v-for="(c, index) in listCompany"
                                  :key="index"
                                  :value="c.COM_ID"
                                >
                                  {{ c.COM_CODE }} - {{ c.COM_NAME }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul class="nav nav-line" role="">
                        <li class="nav-item">
                          <a class="nav-link active tx-bold"
                            >ข้อมูลผู้รับเหมา</a
                          >
                        </li>
                      </ul>
                      <div class="mg-t-20">
                        <div>
                          <form>
                            <div class="form-row">
                              <div class="col-md-9">
                                <div class="form-row">
                                  <div class="form-group col-md-6">
                                    <label for=""
                                      >ชื่อ (ไทย)
                                      <span class="tx-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="inputSubFNameTH"
                                      placeholder="กรอกชื่อ (ไทย)"
                                    />
                                  </div>
                                  <div class="form-group col-md-6">
                                    <label for=""
                                      >นามสกุล (ไทย)
                                      <span class="tx-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="inputSubLNameTH"
                                      placeholder="กรอกนามสกุล (ไทย)"
                                    />
                                  </div>
                                </div>
                                <div class="form-row">
                                  <div class="form-group col-md-6">
                                    <label for="">ชื่อ (ต่างชาติ) </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="inputSubFName"
                                      placeholder="กรอกชื่อ (ต่างชาติ)"
                                    />
                                  </div>
                                  <div class="form-group col-md-6">
                                    <label for="">นามสกุล (ต่างชาติ) </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="inputSubLName"
                                      placeholder="กรอกนามสกุล (ต่างชาติ)"
                                    />
                                  </div>
                                </div>
                                <div class="form-row">
                                  <div class="form-group col-md-8">
                                    <label for="">เลขประจำตัวประชาชน </label>
                                    <input
                                      type="tel"
                                      v-mask="'#-####-#####-##-#'"
                                      class="form-control"
                                      v-model="inputSubFName"
                                      placeholder="กรอกเลขประจำตัวประชาชน"
                                    />
                                  </div>
                                  <div class="form-group col-md-4">
                                    <label for="">วันเกิด</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      v-model="inputSubFName"
                                      placeholder="วัน/เดือน/ปีเกิด"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group col-md-3">
                                <label for=""
                                  >รูปถ่ายสำหรับติดบัตร
                                  <span class="tx-danger">*</span></label
                                >
                                <div
                                  class="mt-1 flex justify-center border-2 border-gray-300 border-dashed rounded-md"
                                >
                                  <div class="space-1 p-2 text-center">
                                    <div class="flex text-sm text-gray-600">
                                      <label
                                        for="file-upload"
                                        class="relative cursor-pointer rounded-md font-medium"
                                      >
                                        <div
                                          class="w-full py-5"
                                          v-if="inputSubPicUrl == null"
                                        >
                                          <svg
                                            class="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                          >
                                            <path
                                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                          </svg>
                                          <div v-if="inputSubPicUrl == null">
                                            อัพโหลดหรือถ่ายภาพ
                                          </div>
                                        </div>
                                        <div v-else class="text-center">
                                          <img
                                            :src="inputSubPicUrl"
                                            style="width: 100%"
                                          />

                                          <div class="mt-3 text-blue-700">
                                            กดที่รูปเพื่อเปลี่ยนภาพ
                                          </div>
                                        </div>

                                        <input
                                          id="file-upload"
                                          name="file-upload"
                                          type="file"
                                          class="sr-only"
                                          @change="onFileChange"
                                        />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-3">
                                <label for=""
                                  >เพศ <span class="tx-danger">*</span></label
                                >
                                <select
                                  class="form-control"
                                  v-model="inputSubGener"
                                  placeholder=""
                                >
                                  <option value="M">เพศชาย</option>
                                  <option value="F">เพศหญิง</option>
                                  <option value="O">ไม่ระบุ</option>
                                </select>
                              </div>
                              <div class="form-group col-md-3">
                                <label for=""
                                  >สัญชาติ
                                  <span class="tx-danger">*</span></label
                                >
                                <select
                                  class="form-control"
                                  v-model="inputSubNationality"
                                  placeholder=""
                                >
                                  <option value="ไทย">สัญชาติไทย</option>
                                  <option value="ต่างชาติ">ต่างชาติ</option>
                                </select>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="inputAddress"
                                  >เบอร์มือถือ (ถ้ามี)</label
                                >
                                <input
                                  type="tel"
                                  class="form-control"
                                  v-model="inputSubMobile"
                                  placeholder="กรอกเบอร์มือถือ"
                                  v-mask="'###-###-####'"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <ul class="nav nav-line" role="">
                        <li class="nav-item">
                          <a class="nav-link active tx-bold">อัพโหลดไฟล์แนบ</a>
                        </li>
                      </ul>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>ชื่อไฟล์</th>
                            <th>วันที่อัพโหลดไฟล์</th>
                            <th>รายละเอียดเพิ่มเติม (ถ้ามี)</th>
                            <th>ดำเนินการ</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                      <button class="th btn btn-secondary btn-uppercase mg-r-4">
                        อัพโหลดไฟล์เพิ่ม
                      </button>
                      <ul class="nav nav-line mg-t-20" role="">
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
                              >ข้าพเจ้าในฐานะตัวแทนของบริษัท
                              ยืนยันว่าพนักงานท่านนี้ได้อ่านและทำความเข้าใจ
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
      listCompany: null,
      inputSubPic: null,
      inputSubPicName: null,
      inputSubPicUrl: null,
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
  async mounted() {
    this.isLoading = true;
    await axios
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
      });
    await axios
      .get(configs.urlApi, {
        params: {
          action: "/company/get-all",
        },
      })
      .then((response) => {
        console.log(response.data);
        let data = response.data;
        this.listCompany = data.list;
        this.isLoading = false;
      });
    // $(".dt-table").DataTable().reload();
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  },
  methods: {
    onFileChange(e) {
      this.inputSubPic = e.target.files[0];
      this.inputSubPicName = e.target.files[0].name;
      this.inputSubPicUrl = URL.createObjectURL(this.inputSubPic);
      console.log(this.inputSubPic);
      console.log(this.inputSubPicName);
      console.log(this.inputSubPicUrl);
    },
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
<style scoped>
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: #c0ccda;
}
.border-dashed {
  border-style: solid;
}
.border-2 {
  border-width: 1px;
}
.rounded-md {
  border-radius: 0.375rem;
}
.justify-center {
  justify-content: center;
}
.flex {
  display: flex;
}
.mt-1 {
  margin-top: 0.25rem;
}
.w-12 {
  width: 3rem;
}
.h-12 {
  height: 3rem;
}
</style>
