import { HeaderComponent, FooterComponent, MainComponent } from 'src/components'

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    MainComponent
  },
  data () {
    return {
      sort: 'Наши товары',
      lengthProducts: 0
    }
  },
  methods: {
    sortParam (param) {
      this.sort = param
    },
    addsProductsInBasket (length) {
      this.lengthProducts = length
    }
  }
}
