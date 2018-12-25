<template>
<mu-container>
  <mu-col>
    <mu-paper :z-depth="2" class="panel">
      <div class="logo">
        <img src="/icon_logo.png"/>
      </div>
      <p>About Page</p>
    </mu-paper>
  </mu-col>
</mu-container>
</template>

<style lang="less">
.container {
  min-height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.panel {
  width: 100%;
  border-radius:7px;
  > p {
    margin: 8px 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: left;
    padding: 0 24px;
    &.text-right {
      text-align: right;
    }
  }
}

.logo {
  display:  flex;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  > img {
    width: 200px;
  }
}
.panel-footer {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  >div {
    display: flex;
  }
}
</style>
