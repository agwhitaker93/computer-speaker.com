<script lang="ts">
  import { page } from '$app/stores'
  import { LightSwitch, TabGroup, TabAnchor } from '@skeletonlabs/skeleton'

  const pageList = [
    { name: 'Music', path: '/music', icon: "fa-music" },
    { name: 'Photos', path: '/photos', icon: "fa-camera" },
    { name: 'Contact', path: '/contact', icon: "fa-address-book" },
  ]

  const faStyle = 'fa-solid'
  function styledFaIcon(faIcon: string): string {
      return `${faStyle} ${faIcon}`
    }
</script>

<header class="flex justify-between">
  <TabGroup
    justify="justify-center"
    active="variant-filled-primary"
    hover="hover:variant-soft-primary"
    flex="flex-1 lg:flex-none"
    rounded=""
    border=""
    class="bg-surface-100-800-token w-full"
  >
    <TabAnchor href="/" selected={$page.url.pathname === '/'}>
      <svelte:fragment slot="lead"><i class={styledFaIcon("fa-house")}></i></svelte:fragment>
      <span>Home</span>
    </TabAnchor>
    {#each pageList as { name, path, icon } (name)}
      <TabAnchor
      href={path}
      selected={$page.url.pathname.startsWith(path)}>
        <svelte:fragment slot="lead"><i class={styledFaIcon(icon)}></i></svelte:fragment>
        <span>{name}</span>
      </TabAnchor>
    {/each}

  <div class="flex">
    <div class="mr-0 sm:mr-4 lg:mr-0 flex h-full w-full items-center justify-center">
      <LightSwitch />
    </div>
  </div>
  </TabGroup>
</header>
