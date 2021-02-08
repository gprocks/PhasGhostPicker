<template>
  <div class="container-fluid">
    <h1> Ghost Picker </h1>
    <div class="row">
      <div class="col">
        <evidence
          :value.sync="evidenceOne"
          :selected-values="selectedValues"
          :ghost-list="possibleGhostOptions"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <evidence
          :value.sync="evidenceTwo"
          :selected-values="selectedValues"
          :ghost-list="possibleGhostOptions"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <evidence
          :value.sync="evidenceThree"
          :selected-values="selectedValues"
          :ghost-list="possibleGhostOptions"
        />
      </div>
    </div>
    <div
      v-if="showPossibleGhosts"
      class="row"
    >
      <div class="col">
        <h2>Possible Ghosts</h2>
        <div
          v-for="ghost in possibleGhostOptions"
          :key="ghost.name"
        >
          {{ ghost.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Evidence from './components/Evidence.vue'
import {
  Banshee,
  Demon,
  Jinn,
  Mare,
  Oni,
  Phantom,
  Poltergeist,
  Revenant,
  Shade,
  Spirit,
  Wraith,
  Yurei
} from './Ghosts'
export default {
  name: 'App',
  components: {
    Evidence
  },
  data: function () {
    return {
      evidenceOne: '',
      evidenceTwo: '',
      evidenceThree: '',
      ghostList: [
        new Banshee(),
        new Demon(),
        new Jinn(),
        new Mare(),
        new Oni(),
        new Phantom(),
        new Poltergeist(),
        new Revenant(),
        new Shade(),
        new Spirit(),
        new Wraith(),
        new Yurei()
      ]
    }
  },
  computed: {
    selectedValues () {
      return [this.evidenceOne, this.evidenceTwo, this.evidenceThree]
    },
    showPossibleGhosts () {
      return this.selectedValues.filter(x => !!x).length > 1
    },
    possibleGhostOptions () {
      const selectedOptions = this.selectedValues.filter(opt => !!opt)
      return this.ghostList.filter(ghost => {
        return !selectedOptions.some(val => !ghost.evidenceTypes.includes(val))
      })
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
@import "~bootswatch/dist/slate/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/slate/bootswatch";

body{
      font-family: 'Roboto', sans-serif !important;
      // background-color: value(--blue);
}

</style>
