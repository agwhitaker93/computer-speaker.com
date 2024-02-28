<svelte:head>
  <title>Photos</title>
  <meta name="description" content="My photos" />
</svelte:head>

<div class="flex flex-1 flex-col items-center justify-center">
  <p>
    You can find a gallery of my photos at <a href="https://gallery.computer-speaker.com"
      >gallery.computer-speaker.com</a
    >, generated with <a href="https://thumbsup.github.io/">thumbsup</a>
  </p>
</div>

<div class="iframe-container relative w-full overflow-hidden">
  <iframe
    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full border-0 bg-white"
    title="An embedded view of my photo gallery"
    src="https://gallery.computer-speaker.com"
  ></iframe>
</div>

<style>
  .iframe-container {
    padding-top: 70%;
  }
</style>
