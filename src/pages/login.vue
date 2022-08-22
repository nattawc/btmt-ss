<template>
  <div class="container">
    <div class="mg-t-200">
      <!-- media-body -->
      <div class="sign-wrapper">
        <div
          class="wd-100p col-12 ol-xxl-4 col-xl-5 col-lg-6 col-md-8 col-xs-12 mx-auto"
        >
          <div class="card rounded">
            <div class="card-body pd-20 pd-t-30">
              <h3 class="text-primary tx-bold mg-b-5 mt-20">ยินดีต้อนรับ</h3>
              <p class="tx-16 mg-b-40">กรุณาล็อคอินเพื่อเข้าใช้งานระบบ</p>
              <form id="form-login" @submit="handleLogin">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="inputLoginUser"
                    class="form-control"
                    placeholder="ชื่อผู้ใช้/รหัสพนักงาน"
                  />
                  <!-- <div class="invalid-feedback">กรุณากรอกชื่อผู้ใข้</div> -->
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    v-model="inputLoginPassword"
                    class="form-control"
                    placeholder="รหัสผ่าน"
                  />
                  <!-- <div class="invalid-feedback">กรุณากรอกรหัสผ่าน</div> -->
                </div>

                <button type="submit" class="btn btn-brand-02 btn-block">
                  เข้าสู่ระบบ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- sign-wrapper -->
    </div>

    <!-- container -->
  </div>
</template>
<script>
import { version } from "../../package";
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      version,
      message: false,
      inputLoginUser: "",
      inputLoginPassword: "",
    };
  },
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
  created() {
    this.loading = false;
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();
      let isError = false;
      // let txtError = "";
      if (this.inputLoginUser === null || this.inputLoginUser === "") {
        isError = true;
        // txtError += "<li>กรุณากรอกรหัสพนักงาน</li>";
      }
      if (this.inputLoginPassword === null || this.inputLoginPassword === "") {
        isError = true;
        // txtError += "<li>กรุณากรอกรหัสผ่าน</li>";
      }
      if (!isError) {
        this.loading = true;
        let user = {
          username: this.inputLoginUser,
          password: this.inputLoginPassword,
        };
        let returnUrl = this.getReturnUrl;

        this.$store.dispatch("authen/login", user).then(
          (data) => {
            console.log(data);
            if (data.isSuccess === 1) {
              if (!returnUrl) {
                returnUrl = "/";
              }
              // this.$router.push(returnUrl);
              window.location.replace(returnUrl);
            } else {
              // txtError += "<li>ชื่อผู้ใช้และรหัสผ่านไม่ถูกต้อง</li>";
              //this.message = "ชื่อผู้ใช้และรหัสผ่านไม่ถูกต้อง";
              this.toast.error("ชื่อผู้ใช้และรหัสผ่านไม่ถูกต้อง", {
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

              //   this.$swal({
              //     html: "<ul>" + txtError + "</ul>",
              //     title: "ล็อกอินผิดพลาด",
              //     icon: "error",
              //     showCancelButton: true,
              //     showConfirmButton: false,
              //     confirmButtonText: "ตกลง",
              //     cancelButtonText: "ปิดหน้าต่าง",
              //   });
            }
          },
          () => {
            this.loading = false;
          }
        );
      } else {
        this.toast.error("กรุณากรอกข้อมูลให้ครบถ้วน", {
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

        // this.message = "กรุณากรอกข้อมูลให้ครบถ้วน";
        // this.$swal({
        //   html: "<ul>" + txtError + "</ul>",
        //   title: "พบข้อผิดพลาด",
        //   icon: "error",
        //   showCancelButton: true,
        //   showConfirmButton: false,
        //   confirmButtonText: "ตกลง",
        //   cancelButtonText: "ปิดหน้าต่าง",
        // });
      }
    },
  },
};
</script>
<style scoped>
.content {
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.alert {
  font-size: 18px;
  font-weight: 700;
}
.form-group input {
  font-family: "Sukhumvit Set", sans-serif;
  padding: 0.85rem 1rem !important;
  font-size: 16px;
}
button {
  font-family: "Sukhumvit Set", sans-serif;
  padding: 0.75rem 1rem !important;
  font-weight: 700;
  font-size: 20px;
}
.col-md-8 {
  margin-top: -100px;
}
.footer {
  font-family: "Sukhumvit Set", sans-serif;
  z-index: 100;
  position: absolute;
  bottom: 0;
  font-size: 13px;
  width: 100vw;
  color: #eee;
  background: #253745;
}
.was-validated .form-control:valid,
.form-control.is-valid {
  background-image: none !important;
}
</style>
