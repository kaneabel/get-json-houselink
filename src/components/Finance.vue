<template>
  <form>
    <h1><i>finances</i> for contractor</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="">charterCapital</label>
          <input v-model="charterCapital" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">currencyUnit</label>
          <input v-model="currencyUnit" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">revenue</label>
          <input v-model="revenue" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">totalAsset</label>
          <input v-model="totalAsset" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">totalLiabilitie</label>
          <input v-model="totalLiabilitie" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">year</label>
          <input v-model="year" type="text" class="form-control">
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
    name: 'Finance',
    data() {
      return {
        charterCapital: '',
        currencyUnit: '',
        revenue: '',
        totalAsset: '',
        totalLiabilitie: '',
        year: '',
        finances: []
      }
    },
    methods: {
      add() {
        const { charterCapital, currencyUnit, revenue, totalAsset, totalLiabilitie, year, finances } = this;
        if (!!charterCapital && !!currencyUnit && !!revenue && !!totalAsset && !!totalLiabilitie && !!year) {
          this.finances = [...finances, {charterCapital, currencyUnit, revenue, totalAsset, totalLiabilitie, year}];
          this.charterCapital = ''; this.currencyUnit = ''; this.revenue = ''; this.totalAsset = ''; this.totalLiabilitie = ''; this.year = '';
        }
      }
    },
    watch: {
      clear(val) {
        if (!!val) {
          this.finances = [];
        }
      },
      finances: {
        handler: function (val) {
          this.$emit('change', JSON.stringify(val));
        },
        deep: true,
      },
    },
  }
</script>
