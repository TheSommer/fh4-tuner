var app = new Vue({
  el: '#app',
  data: {
    front_ratio: 0.5,
    min_value: 1,
    max_value: 20,
    front_setting: 0,
    rear_setting: 0
  },
  created: function () {
    this.calculate();
  },
  methods: {
    calculate: function () {
      this.front_setting = ( ( parseFloat(this.max_value) - parseFloat(this.min_value) ) * parseFloat(this.front_ratio) + parseFloat(this.min_value) ).toFixed(2);
      this.rear_setting = ( ( parseFloat(this.max_value) - parseFloat(this.min_value) ) * ( 1 - parseFloat(this.front_ratio) ) + parseFloat(this.min_value) ).toFixed(2);
    }
  }
})
