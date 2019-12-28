<template>
    <div class="example-button">
        <div class="example-button-type">
            <div class="example-button-title">按钮类型</div>
            <div class="example-button-list">
                <vzer-button>默认按钮</vzer-button>
                <vzer-button type="primary">主要按钮</vzer-button>
                <vzer-button type="success">成功按钮</vzer-button>
                <vzer-button type="info">信息按钮</vzer-button>
                <vzer-button type="warning">警告按钮</vzer-button>
                <vzer-button type="error">错误按钮</vzer-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.example-button {
  padding: 0 20px;
  .example-button-type {
    padding: 20px 0;
    .example-button-title {
      padding-bottom: 10px;
      color: rgba(69, 90, 100, 0.6);
      font-weight: normal;
      font-size: 14px;
    }
  }
  .example-button-list {
  }
}
</style>
