Nova.booting((Vue, router, store) => {
  Vue.component('index-juul-belongs-to-many', require('./components/IndexField'))
  Vue.component('detail-juul-belongs-to-many', require('./components/DetailField'))
  Vue.component('form-juul-belongs-to-many', require('./components/FormField'))
})
