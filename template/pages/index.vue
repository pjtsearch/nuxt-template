<template>
<mu-container>
  <mu-col span="10">
    <mu-paper :z-depth="8" class="panel">
      <div class="logo">
        <img src="/icon_logo.png"/>
      </div>
      <p>Muse-UI is a progressive Material Design component framework for Vue.js. The vision is to provide an elegant Vue implementation of the Material Design guidelines that can be customized to fully match your brand.</p>
      <p>If you have questions, please join the gitter <a href="https://gitter.im/muse-ui/muse-ui" target="_blank" title="chat">discord</a>.</p>
      <p>Find a bug? Report it on the github <a href="https://github.com/museui/muse-ui/issues" target="_blank" title="contribute">issue board</a>.</p>
      <p>Thank you for developing with Muse-UI and I look forward to bringing more exciting features in the future.</p>
      <p class="text-right">
        <em><small>&mdash; Myron Liu</small></em>
      </p>
      <mu-divider />
      <div class="panel-footer">
        <div>
          <mu-button color="secondary" target="_blank" href="https://nuxtjs.org/" flat>Nuxt Documentation</mu-button>
          <mu-button color="secondary" target="_blank" href="https://github.com/nuxt/nuxt.js" flat>Nuxt GitHub</mu-button>
        </div>
        <mu-button color="primary" to="/about">Continue</mu-button>
      </div>
    </mu-paper>
  </mu-col>
</mu-container>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="less">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.panel {
  width: 100%;
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
