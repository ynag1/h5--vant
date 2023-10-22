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
  col,
  Search,
  Grid,
  GridItem,
  CellGroup,
  cell
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
  col,
  Search,
  Grid,
  GridItem,
  CellGroup,
  cell
]
components.forEach((component) => {
  Vue.use(component)
})
