<template>
  <header class="header">
    <div class="topbar">
  <div class="brandbox">
    <img src="/assets/logo.png" alt="döner ağacı" class="brand-title" @error="hide($event)" />
  </div>

  <button class="icon-btn" @click="toggleSearch" aria-label="Ara">
    <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
      <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.71.71l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  </button>
</div>

    <transition name="fade">
      <div v-if="showSearch" class="searchbar">
        <input
          ref="searchInput"
          v-model="q"
          type="search"
          :placeholder="placeholder"
          @keydown.esc="showSearch=false" />
      </div>
    </transition>

    <nav class="tabs" aria-label="Kategoriler">
      <button class="tab" :class="{active: activeCat==='all'}" @click="activeCat='all'">Tümü</button>
      <button v-for="c in categories" :key="c.id" class="tab" :class="{active: activeCat===c.id}" @click="activeCat=c.id">
        {{ c.name }}
      </button>
    </nav>
  </header>

  <main class="container">
    <div v-if="filtered.length===0" class="muted">Menü yakında veya aramanızla eşleşen ürün bulunamadı.</div>

    <div class="grid">
      <article v-for="it in filtered" :key="it.id" class="card">
  <img :src="it.img || defaultImg" :alt="it.name" @error="onImgErr($event)" />
  <div class="card-body">
    <h3 class="title">{{ it.name }}</h3>
    <div class="subrow">
      <div class="meta">{{ it.desc || '' }}</div>
      <strong class="price">{{ displayPrice(it) }}</strong>
    </div>
    <span v-if="it.best" class="badge">Çok Satan</span>
  </div>
</article>
    </div>
  </main>

  <footer class="footer">
    <small>©Döner Ağacı | 2024</small>
  </footer>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { MENU_DATA } from './data.js'

const q = ref('')
const placeholder = 'Ara: dürüm, ayran…'
const showSearch = ref(false)
const searchInput = ref(null)
const activeCat = ref('all')

const categories = computed(() => MENU_DATA.categories || [])
const items = computed(() => MENU_DATA.items || [])

function normalize(s = '') {
  const map = { ç:'c', Ç:'c', ğ:'g', Ğ:'g', ı:'i', İ:'i', ö:'o', Ö:'o', ş:'s', Ş:'s', ü:'u', Ü:'u' }
  return s
    .replace(/[çÇğĞıİöÖşŞüÜ]/g, ch => map[ch])
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
}

const filtered = computed(() => {
  const nq = normalize(q.value.trim())
  return (items.value || []).filter(it => {
    const okCat = activeCat.value === 'all' ? true : it.cat === activeCat.value
    if (!nq) return okCat
    const nameN = normalize(it.name || '')
    const descN = normalize(it.desc || '')
    return okCat && (nameN.includes(nq) || descN.includes(nq))
  })
})

function money(v){
  try{
    return new Intl.NumberFormat('tr-TR',{ style:'currency', currency:'TRY', maximumFractionDigits:0 }).format(v)
  }catch{ return '₺'+v }
}
function displayPrice(it){
  if (typeof it.priceText === 'string' && it.priceText.trim() !== '') return it.priceText
  if (typeof it.price === 'number') return money(it.price)
  return ''
}

const defaultImg = '/assets/placeholder.png'
function onImgErr(e){ e.target.src = defaultImg }
function hide(e){ e.target.style.display = 'none' }

function toggleSearch(){
  showSearch.value = !showSearch.value
  if (showSearch.value) nextTick(() => searchInput.value?.focus())
}
</script>
