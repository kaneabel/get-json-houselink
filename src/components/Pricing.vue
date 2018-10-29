<template>
  <form>
    <h1><i>pricing</i> for contractor</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="">name</label>
          <input v-model="name" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">currency</label>
          <input v-model="currency" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">price</label>
          <input v-model="price" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">quantity</label>
          <input v-model="quantity" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">displayMode</label>
          <input v-model="displayMode" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <label for=""><i>(add)</i></label>
        <div class="">
          <button class="btn btn-primary" @click.prevent="add()">Add</button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
  export default {
    props: {
      clear: false,
    },
    name: 'Pricing',
    data() {
      return {
        name: '',
        currency: '',
        price: '',
        quantity: '',
        displayMode: '',
        pricing: []
      }
    },
    methods: {
      add() {
        const { name, currency, price, quantity, displayMode, pricing } = this;
        if (!!name && !!currency && !!price && !!quantity && !!displayMode) {
          this.pricing = [...pricing, {name, currency, price, quantity, displayMode}];
          this.name = ''; this.currency = ''; this.price = ''; this.quantity = ''; this.displayMode = '';
        }
      }
    },
    watch: {
      clear(val) {
        if (!!val) {
          this.pricing = [];
        }
      },
      pricing: {
        handler: function (val) {
          this.$emit('change', JSON.stringify(val));
        },
        deep: true,
      },
    },
  }
</script>
