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

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Modal>
  <Gallery />
 
</Modal>
