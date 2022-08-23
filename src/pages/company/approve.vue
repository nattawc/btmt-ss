<template>
  <div>
    <loading
      v-model:active="isLoading"
      :is-full-page="fullPage"
      color="#2baf2b"
    ></loading>

    <div>
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <h4 class="tx-bold">อนุมัติการลงทะเบียน</h4>
        </div>
      </div>

      <div class="row row-xs mg-md-t-10">
        <!-- col -->
        <div class="col-12 col-md-12 col-lg-12 col-xl-12 mg-t-10 mg-lg-t-0">
          <div class="row row-xs">
            <!-- col -->
            <div
              class="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mg-t-10 mg-lg-t-0"
            >
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-sm dt-table" id="tableBill">
                      <thead>
                        <tr class="nowrap">
                          <td>ลำดับ</td>
                          <td>วันที่ลงทะเบียน</td>
                          <td>ชื่อบริษัท</td>
                          <td>ชื่อย่อบริษัท</td>
                          <td>เลขประจำตัวผู้เสียภาษี</td>

                          <td>ดำเนินการ</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(b, index) in listCompany"
                          :key="index"
                          class="nowrap"
                        >
                          <td>{{ index + 1 }}</td>
                          <td>{{ b.COM_REGIST_DATETIME?.substr(0, 10) }}</td>

                          <td>{{ b.COM_NAME }}</td>
                          <td>{{ b.COM_CODE }}</td>
                          <td>
                            {{ b.COM_TAXNO }}
                          </td>
                          <td>
                            <button
                              class="btn btn-xs btn-icon btn-dark mg-r-2 pd-t-8"
                              @click="popupApprove(b)"
                            >
                              <vue-feather type="check-circle"></vue-feather>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- col -->
            <!-- col -->
          </div>
          <!-- row -->
        </div>

        <!-- col -->
      </div>
      <!-- row -->
    </div>

    <div
      id="mail1"
      class="mail-compose"
      :class="[popupOpen ? ' show ' : ' d-none', popupShrink ? ' shrink ' : '']"
      v-if="popupData"
    >
      <div class="mail-compose-dialog">
        <div class="mail-compose-header">
          <h4 class="mail-compose-title tx-white fw-bold mg-l-10">
            อนุมัติการลงทะเบียน
          </h4>
          <nav class="nav nav-icon-only">
            <a
              id="mailComposeClose"
              href="#"
              @click="(popupOpen = false), (popupShrink = false)"
              class="nav-link nav-link-close"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line></svg
            ></a>
          </nav>
        </div>
        <!-- mail-compose-header -->
        <div class="mail-compose-body h100vh">
          <div class="row no-gutters rounded">
            <!-- col -->
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 bg-white">
              <div class="ht-100p d-flex flex-column justify-content-centerx">
                <span class="tx-color-04"
                  ><i
                    data-feather="bar-chart-2"
                    class="wd-40 ht-40 stroke-wd-3 mg-b-20"
                  ></i
                ></span>

                <div class="form-group">
                  <label
                    class="tx-uppercase tx-medium tx-spacing-1 mg-b-5 tx-color-03"
                    >ชื่อบริษัท</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="ชื่อบริษัท"
                    v-model="popupData.COM_NAME"
                  />
                </div>
                <div class="form-group">
                  <div class="row row-sm">
                    <div class="col-sm">
                      <label
                        class="tx-uppercase tx-medium tx-spacing-1 mg-b-5 tx-color-03"
                        >ชื่อย่อบริษัท</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="ชื่อย่อบริษัท"
                        v-model="popupData.COM_CODE"
                      />
                    </div>
                    <!-- col -->
                    <div class="col-sm-5 mg-t-20 mg-sm-t-0">
                      <label
                        class="tx-uppercase tx-medium tx-spacing-1 mg-b-5 tx-color-03"
                        >เลขประจำตัวผู้เสียภาษี</label
                      >
                      <input
                        type="text"
                        class="form-control text-right"
                        placeholder="เลขประจำตัวผู้เสียภาษี"
                        v-model="popupData.COM_TAXNO"
                      />
                    </div>
                    <!-- col -->
                  </div>
                </div>

                <div class="form-group">
                  <label
                    class="tx-uppercase tx-medium tx-spacing-1 mg-b-5 tx-color-03"
                    >ที่อยู่บริษัท</label
                  >
                  <textarea
                    type="text"
                    class="form-control"
                    placeholder="ที่อยู่บริษัท"
                    v-model="popupData.COM_ADDRESS"
                  ></textarea>
                </div>
                <ul class="nav nav-line" role="">
                  <li class="nav-item">
                    <a class="nav-link active tx-bold">รายชื่อผู้ประสานงาน</a>
                  </li>
                </ul>
                <table class="table">
                  <thead>
                    <tr>
                      <td>ลำดับที่</td>
                      <td>ชื่อ - นามสกุล</td>
                      <td>เบอร์มือถือ</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(b, index) in popupListUser"
                      :key="index"
                      class="nowrap"
                    >
                      <td>{{ index + 1 }}</td>
                      <td>{{ b.USER_NAME }}</td>

                      <td>{{ b.USER_MOBILE }}</td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <button
                    id="btn-approve"
                    class="th btn btn-success btn-uppercase mg-r-4"
                    @click="doApprove"
                  >
                    อนุมัติ
                  </button>
                  <button
                    @click="(popupRejectOpen = true), (popupOpen = false)"
                    id="btn-reject"
                    class="th btn btn-danger btn-uppercase mg-r-4"
                  >
                    ไม่อนุมัติ
                  </button>
                </div>
              </div>
            </div>
            <!-- col -->
          </div>
        </div>
        <!-- mail-compose-body -->
      </div>
      <!-- mail-compose-dialog -->
    </div>

    <div
      id="mail2"
      class="mail-compose"
      :class="[
        popupRejectOpen ? ' show ' : ' d-none',
        popupShrink ? ' shrink ' : '',
      ]"
      v-if="popupData"
    >
      <div class="mail-compose-dialog">
        <div class="mail-compose-header">
          <h4 class="mail-compose-title tx-white fw-bold mg-l-10">
            ระบุสาเหตุการไม่อนุมัติ
          </h4>
          <nav class="nav nav-icon-only">
            <a
              id="mailComposeClose"
              href="#"
              @click="(popupRejectOpen = false), (popupShrink = false)"
              class="nav-link nav-link-close"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line></svg
            ></a>
          </nav>
        </div>
        <!-- mail-compose-header -->
        <div class="mail-compose-body">
          <div class="row no-gutters rounded">
            <!-- col -->
            <div class="col-12 bg-white">
              <div class="ht-100p d-flex flex-column justify-content-centerx">
                <span class="tx-color-04"
                  ><i
                    data-feather="bar-chart-2"
                    class="wd-40 ht-40 stroke-wd-3 mg-b-20"
                  ></i
                ></span>

                <div class="form-group" style="line-height: 20px">
                  <input
                    type="radio"
                    name="reject-reason"
                    id="reject-reason-1"
                    @click="
                      (popupRejectTextareaDisable = true),
                        (popupRejectReason = 'มีการลงทะเบียนซ้ำ')
                    "
                    class="mr-2"
                  />&nbsp;&nbsp; มีการลงทะเบียนซ้ำ<br />
                  <input
                    type="radio"
                    name="reject-reason"
                    id="reject-reason-2"
                    @click="
                      (popupRejectTextareaDisable = true),
                        (popupRejectReason = 'กรอกข้อมูลไม่ครบถ้วน')
                    "
                    class="mr-2"
                  />&nbsp;&nbsp; กรอกข้อมูลไม่ครบถ้วน<br />

                  <input
                    type="radio"
                    name="reject-reason"
                    id="reject-reason-0"
                    @click="popupRejectTextareaDisable = false"
                    class="mr-2"
                  />&nbsp;&nbsp; อื่นๆ (โปรดระบุสาเหตุ)<br />
                  <div class="mg-t-20">
                    <textarea
                      class="form-control"
                      rows="5"
                      :disabled="popupRejectTextareaDisable"
                      placeholder="กรุณาระบุสาเหตุในการไม่อนุมัติ"
                      v-model="popupRejectOtherReason"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    id="btn-approve"
                    class="th btn btn-danger btn-uppercase mg-r-4"
                    @click="doReject"
                  >
                    บันทึกข้อมูล
                  </button>
                </div>
              </div>
            </div>
            <!-- col -->
          </div>
        </div>
        <!-- mail-compose-body -->
      </div>
      <!-- mail-compose-dialog -->
    </div>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { useToast } from "vue-toastification";
import $ from "jquery";
import axios from "axios";
import configs from "@/config/config";
import feather from "feather-icons";
const icons = Object.keys(feather.icons);
export default {
  data() {
    return {
      icons,
      isLoading: false,
      fullPage: true,
      dataLastUpdate: "",
      listCompany: null,

      nWait: 0,
      nTotal: 0,
      popupOpen: false,
      popupShink: false,
      popupData: null,
      popupListUser: null,
      popupRejectOpen: false,
      popupRejectReason: "",
      popupRejectOtherReason: "",
      popupRejectTextareaDisable: true,
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
  },
  created() {},
  async mounted() {
    await this.refreshData();
    $(".dt-table").DataTable({
      iDisplayLength: 20,
      bAutoWidth: false,
      bLengthChange: false,
      oLanguage: {
        sInfo: "แสดงรายการที่ _START_ ถึง _END_ (จาก  _TOTAL_ รายการ)",
        sSearch: "",
        sInfoEmpty: "&nbsp;",
        sInfoFiltered: " ค้นหาจาก  _MAX_ รายการ",
        sZeroRecords: "ไม่มีข้อมูล",
      },
      language: {
        paginate: {
          previous: "&lt;",
          next: "&gt;",
        },
      },
    });
  },
  methods: {
    async refreshData() {
      this.isLoading = true;

      await axios
        .get(configs.urlApi, {
          params: {
            action: "/company/get-submit",
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

    async popupApprove(b) {
      this.popupOpen = true;
      this.isLoading = true;
      await await axios
        .get(configs.urlApi, {
          params: {
            action: "/company/get-info",
            id: b.COM_ID,
          },
        })
        .then((rez) => {
          console.log(rez);
          let data = rez.data;
          this.popupData = data.info;
          this.popupListUser = data.user;
        });
      setTimeout(() => {
        this.isLoading = false;
      }, 300);
    },
    async doApprove() {
      let isError = false;
      if (
        this.popupData.COM_NAME === 0 ||
        this.popupData.COM_NAME === "" ||
        this.popupData.COM_NAME === null
      ) {
        this.toast.error("กรุณากรอกชื่อบริษัท", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: false,
          rtl: false,
        });
        isError = true;
      }

      if (this.popupData.COM_CODE === 0 || this.popupData.COM_CODE === "") {
        this.toast.error("กรุณากรอกชื่อย่อบริษัท", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: false,
          rtl: false,
        });
        isError = true;
      }
      if (
        this.popupData.COM_TAXNO === 0 ||
        this.popupData.COM_TAXNO === "" ||
        this.popupData.COM_TAXNO === null
      ) {
        this.toast.error("กรุณากรอกเลขประจำตัวผู้เสียภาษีของบริษัท", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: false,
          rtl: false,
        });
        isError = true;
      }
      if (
        this.popupData.COM_ADDRESS === 0 ||
        this.popupData.COM_ADDRESS === "" ||
        this.popupData.COM_TAXNO === null
      ) {
        this.toast.error("กรุณากรอกที่อยู่ของบริษัท", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: false,
          rtl: false,
        });
        isError = true;
      }
      if (!isError) {
        let formData = new FormData();

        formData.append("approve_id", this.popupData.COM_ID);
        formData.append("approve_user", this.currentUser);
        formData.append("approve_com_name", this.popupData.COM_NAME);
        formData.append("approve_com_code", this.popupData.COM_CODE);
        formData.append("approve_com_taxno", this.popupData.COM_TAXNO);
        formData.append("approve_com_address", this.popupData.COM_ADDRESS);
        formData.append("action", "/company/approve");

        await axios.post(configs.urlApi, formData).then((response) => {
          let data = response.data;
          console.log(data);

          this.popupOpen = false;
          this.refreshData();
          this.toast.success("บันทึกข้อมูลสำเร็จ", {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: false,
            rtl: false,
          });
          this.popupData = null;
          this.popupListUser = null;
        });
      }
    },
    async doReject() {
      let isError = false;
      if (this.popupRejectTextareaDisable) {
        if (this.popupRejectReason === "") {
          this.toast.error("กรุณาระบุเหตุผล", {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: false,
            rtl: false,
          });
          isError = true;
        }
      } else {
        if (this.popupRejectOtherReason === "") {
          this.toast.error("กรุณาระบุเหตุผลเพิ่มเติม", {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: false,
            rtl: false,
          });
          isError = true;
        }
      }
      if (!isError) {
        let formData = new FormData();

        formData.append("reject_id", this.popupData.COM_ID);
        formData.append("reject_user", this.currentUser);

        if (this.popupRejectTextareaDisable) {
          formData.append("reject_reason", this.popupRejectReason);
        } else {
          formData.append("reject_reason", this.popupRejectOtherReason);
        }
        formData.append("action", "/company/reject");
        await axios.post(configs.urlApi, formData).then((response) => {
          let data = response.data;
          console.log(data);
          this.popupRejectOpen = false;
          this.popupRejectReason = "";
          this.popupRejectOtherReason = "";
          this.popupRejectTextareaDisable = true;
          this.toast.success("บันทึกข้อมูลสำเร็จ", {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: false,
            rtl: false,
          });
          this.popupData = null;
          this.popupListUser = null;
          this.refreshData();
        });
      }
    },
  },
};
</script>
<style scoped>
#mail1 .mail-compose-dialog {
  width: 600px;
}
#mail2 .mail-compose-dialog {
  width: 400px;
}
</style>
