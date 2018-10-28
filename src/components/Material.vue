<template>
  <form>
    <h1><i>Materials</i> for biddingScope</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="">name</label>
          <input v-model="name" type="text" class="form-control">
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
          <label for="">quantityUnit</label>
          <input v-model="quantityUnit" type="text" class="form-control">
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
    name: 'Material',
    data() {
      return {
        name: '',
        quantity: '',
        quantityUnit: '',
        materials: []
      }
    },
    methods: {
      add() {
        const { name, quantity, quantityUnit, materials } = this;
        if (!!name && !!quantity && !!quantityUnit) {
          this.materials = [...materials, {id: materials.length, name, quantity, quantityUnit}];
          this.name = ''; this.quantity = ''; this.quantityUnit = '';
        }
      }
    },
    watch: {
      clear(val) {
        if (!!val) {
          this.materials = [];
        }
      },
      materials: {
        handler: function (val) {
          this.$emit('change', JSON.stringify(val));
        },
        deep: true,
      },
    },
  }
</script>
