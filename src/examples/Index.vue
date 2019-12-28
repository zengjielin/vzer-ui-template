<template>
  <div class="example-index">
    <div class="example-header-wrapper">
      <div class="frame-info">
        <div class="freme-name">Vzer-ui-template</div>
      </div>
    </div>
    <div class="example-component-list-wrapepr">
      <div class="example-component-item-wrapper" @click="gotoButtonPage">
        <div>
          <img src="@/assets/img/btn.png" alt="">
        </div>
        <div class="example-component-name">按钮</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoButtonPage() {
      this.$router.push({ name: "Button" });
    }
  }
};
</script>

<style lang='scss'>
.example-index {
  width: 100%;
  min-height: 100%;
  .example-header-wrapper {
    padding: 30px 30px 0px;
    box-sizing: border-box;
    .frame-info {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      .freme-logo {
        width: 50px;
        height: 50px;
        line-height: 50px;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .freme-name {
        margin-left: 10px;
        font-weight: 600;
        font-size: 50px;
      }
    }
    .frame-intro {
      color: #7d7e80;
      font-size: 14px;
    }
  }
  .example-component-list-wrapepr {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    .example-component-item-wrapper {
      width: 95px;
      height: 95px;
      margin: 10px;
      color: #7d7e80;
      font-size: 16px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .example-component-name {
        padding-top: 10px;
      }
    }
    .example-component-item-wrapper:active {
      background-color: #f2f3f5;
    }
  }
}
</style>
