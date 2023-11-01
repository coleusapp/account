<script setup>
import TheClock from "@/Components/Core/Clock/TheClock.vue"
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'</script>
<template>
  <section class="core-menu-bar">
    <div>
      <Menu>
        <MenuButton>App Stuff</MenuButton>
        <MenuItems>
          <MenuItem v-slot="{ active }">
            <a :class='{ "bg-blue-500": active }' href="/account-settings">
              Account settings
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a :class='{ "bg-blue-500": active }' href="/account-settings">
              Documentation
            </a>
          </MenuItem>
          <MenuItem disabled>
            <span class="opacity-75">Invite a friend (coming soon!)</span>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
    <TheClock class="text-sm flex items-center"/>
    <div>
      <Menu>
        <MenuButton>Tiny stuff</MenuButton>
        <MenuItems>
          <MenuItem v-slot="{ active }">
            <a :class='{ "bg-blue-500": active }' href="/account-settings">
              Account settings
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a :class='{ "bg-blue-500": active }' href="/account-settings">
              Documentation
            </a>
          </MenuItem>
          <MenuItem disabled>
            <span class="opacity-75">Invite a friend (coming soon!)</span>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  </section>
</template>
<style scoped>
.core-menu-bar {
  @apply bg-transparent h-7 flex m-1 rounded px-3;
  @apply flex justify-between items-center;
}
</style>