<template>
  <form>
    <h1><i>houselinkRanking</i> for contractor</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="">title</label>
          <input v-model="title" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">perform</label>
          <input v-model="perform" type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="">score</label>
          <input v-model="score" type="text" class="form-control">
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
    name: 'HouseLinkRanking',
    data() {
      return {
        title: '',
        perform: '',
        score: '',
        mainCriterias: []
      }
    },
    methods: {
      add() {
        const { title, perform, score, mainCriterias } = this;
        if (!!title && !!perform && !!score) {
          this.mainCriterias = [...mainCriterias, {title, perform, score}];
          this.title = ''; this.perform = ''; this.score = '';
        }
      }
    },
    watch: {
      clear(val) {
        if (!!val) {
          this.mainCriterias = [];
        }
      },
      mainCriterias: {
        handler: function (mainCriterias) {
          let result = 0;
          mainCriterias.map(item => { result += Number(item.score) });
          this.$emit('change', JSON.stringify({ mainCriterias, result: result + 'B3' }));
        },
        deep: true,
      },
    },
  }
</script>
