<template>
  <div>
    <button @click="openModal">Click</button>
    <modal v-show="showContent" @close="closeModal"></modal>
  </div>

</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  components: {
    Modal
  },
  data () {
    return {
      showContent: false
    }
  },
  methods: {
    openModal: function() {
      this.showContent = true
    },
    closeModal: function() {
      this.showContent = false
    },
  }
}
</script>