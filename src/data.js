export const MENU_DATA = {
  currency: "₺",
  categories: [
    { id: "doner",     name: "Döner (Porsiyon)" },
    { id: "durum",     name: "Dürüm" },
    //{ id: "ekmek",     name: "Ekmek Arası" },
    { id: "iskender",  name: "İskender" },
    { id: "pilavustu", name: "Pilavüstü Döner" },
    { id: "corba",     name: "Çorba" },
    { id: "salata",    name: "İkramlar" },
    { id: "tatli",     name: "Tatlılar" },
    { id: "icecek",    name: "İçecekler" }
  ],
  items: [
    // Döner (Porsiyon)
    { id:"dn-120", cat:"doner", name:"Porsiyon Döner", price:580, desc:"120 g", img:"./assets/doner.png" },
    { id:"dn-180", cat:"doner", name:"Porsiyon Döner", price:840, desc:"180 g", img:"./assets/doner.png" },
    { id:"dn-240", cat:"doner", name:"Porsiyon Döner", price:1160, desc:"240 g", img:"./assets/doner.png" },
    // Dürüm
    { id:"du-90",  cat:"durum", name:"Dürüm", price:550, desc:"90 g",  img:"./assets/durum.png" },
    { id:"du-120", cat:"durum", name:"Dürüm", price:580, desc:"120 g", img:"./assets/durum.png" },
    { id:"du-180", cat:"durum", name:"Dürüm", price:870, desc:"180 g", img:"./assets/durum.png" },
    { id:"du-240", cat:"durum", name:"Dürüm", price:1160, desc:"240 g",img:"./assets/durum.png" },
    // İskender
    { id:"is-por",  cat:"iskender", name:"Porsiyon İskender",       price:690,  img:"./assets/iskender.png" },
    { id:"is-15x",  cat:"iskender", name:"1,5 Porsiyon İskender",   price:1050, img:"./assets/iskender.png" },
    { id:"is-dbl",  cat:"iskender", name:"Duble Porsiyon İskender", price:1350, img:"./assets/iskender.png" },
    { id:"is-beyti",cat:"iskender", name:"Beyti Special",           price:910,  img:"./assets/beyti.png" },
    // Pilavüstü Döner
    { id:"pv-120", cat:"pilavustu", name:"Pilavüstü Döner", price:620,  desc:"120 g", img:"./assets/pilavustu.png" },
    { id:"pv-180", cat:"pilavustu", name:"Pilavüstü Döner", price:930,  desc:"180 g", img:"./assets/pilavustu.png" },
    { id:"pv-240", cat:"pilavustu", name:"Pilavüstü Döner", price:1240, desc:"240 g", img:"/assets/pilavustu.png" },
    // Çorba
    { id:"c-az",  cat:"corba", name:"Az Çorba", price:150, img:"/assets/azcorba.png" },
    { id:"c-tam", cat:"corba", name:"Mercimek Çorbası",    price:170, img:"/assets/corba.png" },
    // İkramlar
    { id:"s-coban", cat:"salata", name:"Çoban Salata", priceText:"İkram", img:"/assets/salata.png" },
    { id:"s-patates", cat:"salata", name:"Patates Kızartması", priceText:"İkram", img:"/assets/patates.png" },
    { id:"s-tursu", cat:"salata", name:"Turşu", priceText:"İkram", img:"/assets/tursu.png" },
    { id:"s-sogan", cat:"salata", name:"Soğan", priceText:"İkram", img:"/assets/sogan.png" },
    // Tatlılar
    { id:"t-kemal", cat:"tatli", name:"Sütlü Kemalpaşa", price:150, img:"/assets/kemalpasa.png" },
    { id:"t-sutlac",cat:"tatli", name:"Sütlaç",          price:140, img:"/assets/sutlac.png" },
    // İçecekler
    { id:"i-kola",   cat:"icecek", name:"Kola",             price:85, img:"/assets/cola.png" },
    { id:"i-ayran",  cat:"icecek", name:"Kutu Ayran",       price:85, img:"/assets/ayran.png" },
    { id:"i-susurl", cat:"icecek", name:"Susurluk Ayranı",  price:85, img:"/assets/acikayran.png" },
    { id:"i-salgam", cat:"icecek", name:"Şalgam",           price:85, img:"/assets/salgam.png" },
    { id:"i-su",     cat:"icecek", name:"Su",               price:40, img:"/assets/su.png" },
    { id:"i-soda",   cat:"icecek", name:"Soda",             price:50, img:"/assets/soda.png" },
    { id:"i-msoda",  cat:"icecek", name:"Ice Tea",     price:70, img:"/assets/icetea.png" }
  ]
}
