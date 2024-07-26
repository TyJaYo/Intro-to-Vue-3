const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      inventory: 5,
      product: 'Socks',
      brand: 'Vue Mastery',
      image: './assets/images/socks_blue.jpg',
      inStock: true,
      composition: [
        { percentage: 50, material: 'cotton', hex: '#8A8E94' },
        { percentage: 30, material: 'wool', hex: '#A18A7C' },
        { percentage: 20, material: 'polyester', hex: '#686B7A' }
      ],
      variants: [
        { id: 2234, color: 'green', hex: '#309d66' },
        { id: 2235, color: 'blue', hex: '#52667f' }
      ],
      pieStyle: ''
    }
  },
  computed: {
    cutPie() {
      let cumulativePercentage = 0
      let previousPercentage = 0
      const colorStops = this.composition.map(({ percentage, hex }) => {
        previousPercentage = cumulativePercentage
        cumulativePercentage += percentage
        return `${hex} ${previousPercentage}% ${cumulativePercentage}%`
      })
      this.pieStyle = `background-image: conic-gradient(${colorStops.join(', ')}, white 0);`
      return this.pieStyle
    }
  },
  methods: {
    checkStock() {
      if (this.inventory > 0) {
        this.inStock = true
      } else {
        this.inStock = false
      }
    },
    addToCart() {
      this.cart += 1
      this.inventory -= 1
      this.checkStock()
    },
    removeFromCart() {
      this.cart -= 1
      this.inventory += 1
      this.checkStock()
    },
    updateImage(variantColor) {
      this.image = "./assets/images/socks_" + variantColor + ".jpg"
    }
  }
})
