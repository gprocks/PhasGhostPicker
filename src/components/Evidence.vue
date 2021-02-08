<template>
  <section>
    <div class="mb-3">
      <b-input-group>
        <b-form-select
          v-model="internalValue"
          :options="availableOptions"
        >
          <template #first>
            <b-form-select-option
              :value="''"
              disabled
            >
              Please select an option
            </b-form-select-option>
          </template>
        </b-form-select>
        <template #append>
          <b-button
            variant="secondary"
            @click="setValue('')"
          >
            Clear
          </b-button>
        </template>
      </b-input-group>
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
        return (x === this.internalValue || !this.selectedValues.includes(x)) && possibleOptions.includes(x)
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
