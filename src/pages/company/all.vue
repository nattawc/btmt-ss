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
          <h4 class="tx-bold">รายชื่อบริษัททั้งหมด</h4>
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

                          <td>ชื่อบริษัท</td>
                          <td>ชื่อย่อบริษัท</td>
                          <td>เลขประจำตัวผู้เสียภาษี</td>
                          <td>วันที่ลงทะเบียน</td>
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
                          <td>{{ b.COM_NAME }}</td>
                          <td>{{ b.COM_CODE }}</td>
                          <td>{{ b.COM_TAXNO }}</td>
                          <td>
                            {{ b.COM_REGIST_DATETIME?.substr(0, 10) }}
                          </td>
                          <td></td>
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
    await this.refreshDataBill();
    $(".dt-table").DataTable({
      iDisplayLength: 15,
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
    async refreshDataBill() {
      this.isLoading = true;

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
  },
};
</script>
<style scoped></style>
