import Vue from 'vue'
import {
  Button,
  Icon,
  NavBar,
  Toast,
  Tabbar,
  TabbarItem,
  Panel,
  Form,
  Field,
  divider,
  checkbox,
  row,
  col
} from 'vant'
const components = [
  Button,
  Icon,
  NavBar,
  Toast,
  Tabbar,
  TabbarItem,
  Panel,
  Form,
  Field,
  divider,
  checkbox,
  row,
  col
]
components.forEach((component) => {
  Vue.use(component)
})
