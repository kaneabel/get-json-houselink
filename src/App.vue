<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
      <div class="container">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li v-for="(item, index) in navLinks" :key="index" class="nav-item">
              <a @click.prevent="active = item.text" class="nav-link" href="#">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-md-6">
            <Contact v-if="active === 'Contact'" :clear="clearAll" @change="onChange($event)"></Contact>
            <Work v-if="active === 'Work'" :clear="clearAll" @change="onChange($event)"></Work>
            <Material v-if="active === 'Material'" :clear="clearAll" @change="onChange($event)"></Material>
            <InvitedFromFavorite v-if="active === 'InvitedFromFavorite'" :clear="clearAll" @change="onChange($event)"></InvitedFromFavorite>
            <Pricing v-if="active === 'Pricing'" :clear="clearAll" @change="onChange($event)"></Pricing>
            <Affiliation v-if="active === 'Affiliation'" :clear="clearAll" @change="onChange($event)"></Affiliation>
            <Finance v-if="active === 'Finance'" :clear="clearAll" @change="onChange($event)"></Finance>
            <HouseLinkRanking v-if="active === 'HouseLinkRanking'" :clear="clearAll" @change="onChange($event)"></HouseLinkRanking>
          </div>
          <div class="col-md-6">
            <h1>Source tree</h1>
            <button style="margin-bottom: 1rem;" class="btn btn-primary" @click="doCopy">{{ isCopied ? 'Copied!' : 'Copy' }}</button>
            <tree-view :data="JSON.parse(jsonSource)" :options="{maxDepth: 4}"></tree-view>
            <button style="margin-top: 1.5rem;" class="btn btn-sm btn-danger" @click.prevent="clearAll = true">Clear all data</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from './components/Contact';
import Work from './components/Work';
import Material from './components/Material';
import InvitedFromFavorite from './components/InvitedFromFavorite';
import Pricing from './components/Pricing';
import Affiliation from './components/Affiliation';
import Finance from './components/Finance';
import HouseLinkRanking from './components/HouseLinkRanking';
export default {
  name: 'app',
  components: {
    Contact,
    Work,
    Material,
    InvitedFromFavorite,
    Pricing,
    Affiliation,
    Finance,
    HouseLinkRanking
  },
  data () {
    return {
      active: 'Contact',
      isCopied: false,
      clearAll: false,
      jsonSource: JSON.stringify({})
    }
  },
  computed: {
    navLinks() {
      return [
        { text: 'Contact' },
        { text: 'Work' },
        { text: 'Material' },
        { text: 'InvitedFromFavorite' },
        { text: 'Pricing' },
        { text: 'Affiliation' },
        { text: 'Finance' },
        { text: 'HouseLinkRanking' }
      ]
    }
  },
  methods: {
    onChange(data) {
      this.jsonSource = data;
      this.clearAll = false;
    },
    doCopy() {
      const that = this;
      this.$copyText(this.jsonSource).then((e) => {
        that.isCopied = true;
        setTimeout(() => {
          that.isCopied = false;
        }, 1000);
      }, (e) => {
        alert('Can not copy');
        console.log(e)
      })
    },
  }
}
</script>

<style lang="scss">
@import "assets/scss/main.scss";
</style>
