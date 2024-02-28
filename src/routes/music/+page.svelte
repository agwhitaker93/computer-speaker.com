<script lang="ts">
  import IconAnchor from '../components/IconAnchor.svelte'
</script>

<svelte:head>
  <title>Music</title>
  <meta name="description" content="My music" />
</svelte:head>

<div class="flex flex-1 flex-col items-center justify-center">
  <h1>I make music</h1>

  <p>
    Find my music on <IconAnchor
      iconClass="fa-brands fa-bandcamp"
      href="https://thinkplumfythoughts.bandcamp.com"
      anchorText="Bandcamp"
    />
  </p>

  <p>
    In the before times, I played drums in a couple bands, and dabbled with making electronic music
    with Ableton Live. But, unfortunately, all of that was shelved when I left home for university.
  </p>
  <p>
    However, I, like a lot of people, found myself with more free time near the start of 2020. So I
    picked up an electric drumkit and have been working my way through some grade books and various
    Drumeo lessons since then. It's good fun, and provides some much needed catharsis.
  </p>
  <p>
    In 2021, I rembered my Ableton Live license and began composing again. The results of which I've
    been slowly uploading to my Bandcamp. However, I've recently had to switch over to Bitwig
    studio, seeing as Ableton doesn't work particularly well on Linux, so my progress has slowed
    down a fair bit while I learn how to use my new DAW.
  </p>
  <p>
    I decided 2022 would be a good year to become a multi-instrumentalist, and bought a bass guitar.
    Having only ever played drums, I was missing some context for melodic expression, and bass
    seemed like a natural companion to learn. I've similarly been making my way through some grade
    books.
  </p>

  <h3>Albums</h3>
  <p>
    My first (and, so far, only) album, <a
      href="https://thinkplumfythoughts.bandcamp.com/album/a-chronology-of-learning-to-make-music"
      >a chronology of learning to make music</a
    >, is intended to catalogue my journey as I learn how to make music.
  </p>
  <p>
    My plan is to keep adding songs to it as I go, to give myself a fun time capsule to show how far
    I've come.
  </p>
  <iframe
    class="mx-auto my-0 w-80 border-0 pt-4"
    title="An embedded Bandcamp music player for my Album 'a chronology of learning to make music'"
    src="https://bandcamp.com/EmbeddedPlayer/album=1382719570/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
    seamless
  ></iframe>
</div>

<style>
  iframe {
    height: 588px;
  }
</style>
