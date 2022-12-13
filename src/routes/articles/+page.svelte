<script>
 import Modal from 'svelte-simple-modal';
 import Gallery from '$lib/Gallery.svelte'

 // pass in component as parameter and toggle modal state
 function toggleModal(title, contents) {
   modalContent = contents;
   modalTitle = title;
   showModal = !showModal;
 }

 
</script>

<Modal>
  <Gallery />
 
</Modal>
