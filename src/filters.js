import Vue from 'vue'

Vue.filter("truncate",(value, limit) => value.substring(0, limit))
Vue.filter("tailing", (value, tail) => value + tail)
