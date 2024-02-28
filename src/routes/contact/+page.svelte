<script lang="ts">
  import IconAnchor from '../components/IconAnchor.svelte'
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="How to contact me" />
</svelte:head>

<div class="flex flex-1 flex-col items-center justify-center">
  <h1>Get in touch!</h1>

  <p>
    Email me at <IconAnchor
      iconClass="fa-solid fa-envelope"
      href="mailto:andrew.whitaker@computer-speaker.com"
      anchorText="andrew.whitaker@computer-speaker.com"
    />
  </p>
  <p>
    Find me on <IconAnchor
      iconClass="fa-brands fa-linkedin"
      href="https://www.linkedin.com/in/andrew-whitaker-b6a382123"
      anchorText="LinkedIn"
    />
  </p>
  <p>
    Checkout what I'm up to on
    <IconAnchor
      iconClass="fa-brands fa-github"
      href="https://github.com/agwhitaker93"
      anchorText="GitHub"
    />
  </p>
</div>
