<template>
  <header class="header">
    <div class="row">
      <div class="brandbox">
        <img src="/assets/logo.png" alt="logo" class="brand-logo" @error="hide($event)" />
        <h1 class="brand">döner ağacı</h1>
      </div>
      <input v-model="q" type="search" placeholder="Ara: dürüm, ayran…" class="search" />
    </div>

    <nav class="tabs">
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
        <img v-if="it.img" :src="it.img" :alt="it.name" @error="hide($event)" />
        <div class="card-body">
          <div class="row-split">
            <h3 class="title">{{ it.name }}</h3>
            <strong class="price">{{ displayPrice(it) }}</strong>
          </div>
          <div class="meta">{{ it.desc || '' }}</div>
          <span v-if="it.best" class="badge">Çok Satan</span>
        </div>
      </article>
    </div>
  </main>

  <footer class="footer">
    <small>Fiyatlar TL’dir. Görseller temsilidir.</small>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { MENU_DATA } from './data.js'

const q = ref('')
const activeCat = ref('all')
const data = MENU_DATA

const categories = computed(() => data.categories || [])
const items = computed(() => data.items || [])

const filtered = computed(() => {
  const query = q.value.trim().toLowerCase()
  return items.value.filter(it => {
    const okCat = activeCat.value === 'all' ? true : it.cat === activeCat.value
    const okQ = !query || (it.name?.toLowerCase().includes(query)) || ((it.desc || '').toLowerCase().includes(query))
    return okCat && okQ
  })
})

function money(v){
  try{
    return new Intl.NumberFormat('tr-TR', { style:'currency', currency:'TRY', maximumFractionDigits:0 }).format(v)
  }catch{ return '₺' + v }
}

function displayPrice(it){
  if (typeof it.priceText === 'string' && it.priceText.trim() !== '') return it.priceText
  if (typeof it.price === 'number') return money(it.price)
  return ''
}

function hide(e){ e.target.style.display = 'none' }
</script>
