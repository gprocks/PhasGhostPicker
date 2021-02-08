<template>
  <section>
    <div class="btn-group mb-3">
      <button
        v-for="val in evidence"
        :key="val"
        type="button"
        class="btn btn-sm"
        :class="internalValue==val?'btn-outline-primary':'btn-primary'"
        :disabled="isValueDisabled(val)"
        @click="setValue(val)"
      >
        {{ val }}
      </button>
      <b-button
        variant="danger"
        @click="setValue('')"
      >
        Clear
      </b-button>
    </div>
  </section>
</template>

<script>
import { evidence } from '../constants.js'
export default {
  name: 'Evidence',
  components: {},
  props: {
    value: {
      type: String,
      required: true
    },
    selectedValues: {
      type: Array,
      required: true
    },
    ghostList: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      evidence: []
    }
  },
  computed: {
    internalValue: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('update:value', newVal)
      }
    },
    availableOptions () {
      const possibleOptions = [...new Set(this.ghostList.flatMap(x => x.evidenceTypes))]
      return this.evidence.filter(x => {
        return (x === this.selectedValues || !this.selectedValues.includes(x)) && possibleOptions.includes(x)
      })
    }
  },
  created () {
    this.evidence = Object.values(evidence)
  },
  methods: {
    setValue (val) {
      this.internalValue = val
    },
    isValueDisabled (val) {
      return !!this.internalValue || !this.availableOptions.includes(val)
    }
  }
}
</script>

<style>

</style>
