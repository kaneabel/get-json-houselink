<template>
  <form>
    <h1><i>Contact</i> for participant</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="">companyTaxCode</label>
          <input v-model="companyTaxCode" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">Id</label>
          <input v-model="id" type="text" class="form-control">
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
    name: 'Contact',
    data() {
      return {
        id: '',
        companyTaxCode: '',
        contacts: []
      }
    },
    methods: {
      add() {
        const { id, companyTaxCode, contacts } = this;
        if (!!id && !!companyTaxCode) {
          this.contacts = [...contacts, {companyTaxCode, id}];
          this.id = '';
        }
      }
    },
    watch: {
      clear(val) {
        if (!!val) {
          this.contacts = [];
        }
      },
      contacts: {
        handler: function (val) {
          this.$emit('change', JSON.stringify(val));
        },
        deep: true,
      },
    },
  }
</script>
