<template>
  <form>
    <h1><i>affiliations</i> for contractor</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="">en</label>
          <input v-model="en" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">image</label>
          <input v-model="image" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">vi</label>
          <input v-model="vi" type="text" class="form-control">
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
    name: 'Affiliation',
    data() {
      return {
        en: '',
        image: '',
        vi: '',
        affiliations: []
      }
    },
    methods: {
      add() {
        const { en, image, vi, affiliations } = this;
        if (!!en && !!image && !!vi) {
          this.affiliations = [...affiliations, {id: affiliations.length, en, image, vi}];
          this.en = ''; this.image = ''; this.vi = '';
        }
      }
    },
    watch: {
      clear(val) {
        if (!!val) {
          this.affiliations = [];
        }
      },
      affiliations: {
        handler: function (val) {
          this.$emit('change', JSON.stringify(val));
        },
        deep: true,
      },
    },
  }
</script>
