<template>
  <form>
    <h1><i>invitedFromFavorites</i> for biddingScope</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="">Id</label>
          <input v-model="id" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">type</label>
          <input v-model="type" type="text" class="form-control">
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
    name: 'InvitedFromFavorite',
    data() {
      return {
        id: '',
        type: '',
        inviteds: []
      }
    },
    methods: {
      add() {
        const { id, type, inviteds } = this;
        if (!!id && !!type) {
          this.inviteds = [...inviteds, {id, type}];
          this.id = ''; this.type = '';
        }
      }
    },
    watch: {
      clear(val) {
        if (!!val) {
          this.inviteds = [];
        }
      },
      inviteds: {
        handler: function (val) {
          this.$emit('change', JSON.stringify(val));
        },
        deep: true,
      },
    },
  }
</script>
