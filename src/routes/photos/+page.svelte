<svelte:head>
  <title>Photos</title>
  <meta name="description" content="My photos" />
</svelte:head>

<div class="text-column">
  <p>
    You can find a gallery of my photos at <a href="https://gallery.computer-speaker.com"
      >gallery.computer-speaker.com</a
    >, generated with <a href="https://thumbsup.github.io/">thumbsup</a>
  </p>
  <p></p>
</div>

<div class="iframe-container">
  <iframe title="An embedded view of my photo gallery" src="https://gallery.computer-speaker.com"
  ></iframe>
</div>

<style>
  .iframe-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 70%;
  }
  iframe {
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
</style>
