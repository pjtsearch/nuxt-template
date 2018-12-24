<template>
  <div id="app">
    <mu-appbar style="width: 100%; position:fixed" color="primary" :class="'drawer-open-' + open + ' ' + 'drawer-docked-' + docked" id="app-appbar" :z-depth="scrolled ? 4 : 0">
      <mu-button icon slot="left" @click="toggleDrawer()">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <span id="app-title" @click="$router.push('/')">My App</span>
      <mu-menu cover placement="bottom-end" slot="right" id="app-menu">
          <mu-button icon id="app-menu-button">
            <mu-icon value="more_vert"></mu-icon>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button>
              <mu-list-item-title>Menu Item 1</mu-list-item-title>
            </mu-list-item>
          </mu-list>
      </mu-menu>
    </mu-appbar>
    <mu-drawer :open.sync="dataOpen" :docked="docked" id="app-drawer" :z-depth="0" width="300px">
      <mu-list toggle-nested class="outer-list">
        <mu-list-item :key="category.name" v-for="category in nav" button nested :open="nestedOpen === category.camelCase" @toggle-nested="nestedOpen = arguments[0] ? category.camelCase : ''" class="outer-list-item" :to="category.url" @click="docked === false && category.items === undefined ? dataOpen = false : dataOpen">
          <mu-list-item-action>
            <mu-icon :value="category.icon"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>{{category.name}}</mu-list-item-title>
          <mu-list-item-action v-if="category.items !== undefined">
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>
          <mu-list-item :key="item.name" v-for="item in category.items" button slot="nested" :to="item.url" class="inner-list-item" v-if="category.items !==undefined" @click="docked === false && category.items === undefined ? dataOpen = false : console.log('clicked')">
            <mu-list-item-title>{{item.name}}</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <div id="router-view" :class="'drawer-open-' + open + ' ' + 'drawer-docked-' + docked">
      <transition name="fade" mode="out-in"><router-view/></transition>
    </div>
  </div>
</template>

<script>
import theme from 'muse-ui/lib/theme';

function waitUntil(test, msec, callback) {
    // Check if condition met. If not, re-check later (msec).
    while (test === false) {
        setTimeout(function() {
            waitfor(test, msec, callback);
        }, msec);
        return;
    }
    callback();
}

export default {
  name: 'app',
  data(){
    return {
      dataOpen:null,
      dataDocked:null,
      routes: this.$router.options.routes,
      nestedOpen:null,
      scrolled: false,
      nav:[
        {
          name:"About",
          camelCase:"about",
          icon:"info",
          url:"/about"
        },
      ]
    }
  },
  computed:{
    open(){
      if (this.dataOpen === true){
        return true;
      }else if (this.dataOpen === false){
        return false;
      }

      if (this.$mq === 'mobile'){
        this.dataOpen = false;
        return false;
      }else if (this.$mq !== 'mobile'){
        this.dataOpen = true;
        return true;
      }
    },
    docked(){
      if (this.dataDocked === true){
        return true;
      }else if (this.dataDocked === false){
        return false;
      }
      if (this.$mq === 'mobile'){
        this.dataDocked = false;
        return false;
      }else if (this.$mq !== 'mobile'){
        this.dataDocked = true;
        return true;
      }
    }
  },
  methods:{
    toggleDrawer(){
      this.dataOpen = !this.dataOpen;
    },
    handleScroll () {
      if (process.browser){
        this.scrolled = window.scrollY > 0;
      }
    }
  },
  created () {
    if (process.browser){
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed () {
    if (process.browser){
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  watch: {
    $mq(newValue, oldValue){
      console.log(newValue, oldValue)
      if (newValue === "mobile"){
        this.dataDocked = false;
        this.dataOpen = false;
      }else if (newValue !== "mobile"){
        this.dataDocked = true;
        this.dataOpen = true;
      }
    }
  }
}
</script>

<style>
@import "assets/theme.css";

#app-appbar{
  transition: padding-left .45s cubic-bezier(.23,1,.32,1), box-shadow .3s;
}
#app-appbar.drawer-open-true.drawer-docked-true{
  padding-left: 300px;
}
#router-view{
  transition: padding-left .45s cubic-bezier(.23,1,.32,1);
  padding-top:56px;
  padding-left:0px;
}
@media only screen and (min-width: 950px){
  #router-view{
    padding-top:64px;
  }
  #router-view:not(.drawer-open-true):not(.drawer-docked-true){
    padding-left: calc(300px + 0px);
  }
  #app-appbar:not(.drawer-open-true):not(.drawer-docked-true){
    padding-left: 300px;
  }
}
#router-view.drawer-open-true.drawer-docked-true{
  padding-left: calc(300px + 0px);
}
#app-drawer{
  border-right: 1px solid rgba(0,0,0,.12);
}
.mu-item-action.is-more {
    padding-top: 13px!important;
}
li.outer-list-item > a.mu-item-wrapper {
    border-radius: 1000px;
    overflow: hidden;
    border: 1px solid #6200ee4d;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
}
.mu-list.outer-list > li:first-child {
    margin-top: 5px;
}
li.inner-list-item > a.mu-item-wrapper {
    border-radius: 1000px;
    overflow: hidden;
    border: 1px solid #6200ee4d;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 10px;
}
button#app-menu-button {
    margin-top: 8px;
}
#app-title{
  transition:border-bottom 0.1s linear, color 0.1s linear;
  border-bottom:0px solid white;
}
#app-title:hover{
  transition:border-bottom 0.1s linear, color 0.1s linear;
  border-bottom:2px solid white;
  cursor:pointer;
}
#app-title:active{
  color:rgba(255, 255, 255, 0.85);
  border-bottom-color: rgba(255, 255, 255, 0.85);
}
.fade-enter-active,
.fade-leave-active {
  padding-top:0px;
  transition-duration: 0.2s;
  transition-property: opacity,padding-top;
  transition-timing-function: linear;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  padding-top:7px;
}
.mu-item__open .toggle-icon{
  transform: rotate(180deg);
}
.toggle-icon{
  transition: transform .3s cubic-bezier(.23,1,.32,1);
}
.mu-text-field-boxed > .mu-text-field.mu-input-content {
    background: #eee;
    border-radius: 5px;
    overflow: hidden;
    padding: 10px;
}

.mu-text-field-boxed .mu-input-line {
    bottom: 0;
}

.mu-text-field-boxed .mu-input-focus-line {
    bottom: 0;
}
.mu-input.has-label .mu-input-label {
    transform:translate3d(10px, 20px, 0) scale(0.8);
}
.float.mu-input-label {
    transform: translate3d(10px, 37px, 0) scale(1)!important;
}
</style>
