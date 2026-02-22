:root{
  --bg:#EFE6FF;
  --white:#fff;
  --text:#222;
  --muted:#666;
  --line:rgba(0,0,0,.10);

  --purple:#9B5DE5;     /* 포인트 */
  --lav:#D7C6FF;        /* 연보라 */
  --mag:#C36AE5;        /* 자주 */
  --tile:#E6E4EB;       /* 버튼 회색 */
  --tile2:#F2F2F6;

  --blue:#3A56D8;
}

*{ box-sizing:border-box; }
html,body{ height:100%; }
body{
  margin:0;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  background:var(--bg);
  color:var(--text);
}

.app{
  width:1280px;
  margin:0 auto;
  padding:34px 0;
  display:flex;
  gap:30px;
}

.sidebar{
  width:340px;
  padding-left:10px;
}

.badge{
  display:inline-block;
  padding:8px 18px;
  border-radius:18px;
  background:var(--purple);
  color:#fff;
  font-weight:700;
  font-size:18px;
}

.brand-title{
  margin-top:12px;
  font-weight:900;
  font-size:64px;
  line-height:1.12;
  letter-spacing:-1px;
}

.status{
  margin-top:28px;
  background:var(--white);
  border-radius:22px;
  padding:22px;
  box-shadow:0 2px 8px rgba(0,0,0,.05);
}

.pill{
  display:inline-block;
  background:var(--purple);
  color:#fff;
  font-weight:800;
  padding:6px 14px;
  border-radius:12px;
  font-size:16px;
}
.pill-lg{ font-size:18px; padding:8px 18px; border-radius:14px; }
.center{ display:block; width:max-content; margin:0 auto 8px; }

.status-row{ margin-top:14px; }
.status-label{ font-size:18px; font-weight:700; color:#333; }
.status-value{
  font-size:22px;
  font-style:italic;
  color:var(--blue);
  margin-top:4px;
  font-weight:800;
}

.divider{
  width:2px;
  background:var(--line);
  border-radius:2px;
}

.main{
  flex:1;
  padding-right:10px;
}

.screen{
  display:none;
  animation: fade .22s ease;
}
.screen.active{ display:block; }

@keyframes fade{
  from{ opacity:0; transform: translateY(2px); }
  to{ opacity:1; transform: translateY(0); }
}

.card{
  background:var(--white);
  border-radius:22px;
  padding:22px;
  box-shadow:0 2px 10px rgba(0,0,0,.05);
}

.concept{ padding:22px 24px; }
.concept-text{
  margin-top:14px;
  font-size:22px;
  color:var(--blue);
  font-style:italic;
  font-weight:800;
}
.concept-actions{ margin-top:12px; display:flex; justify-content:flex-end; }

.big-actions{
  margin:22px 0;
  display:flex;
  gap:24px;
}
.big-btn{
  flex:1;
  border:none;
  border-radius:26px;
  padding:34px 0;
  background:var(--purple);
  color:#fff;
  font-size:44px;
  font-weight:900;
  letter-spacing:-1px;
  cursor:pointer;
}

.service-grid{
  margin-top:16px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px 18px;
}
.service-grid .slink{
  border:none;
  background:transparent;
  text-align:left;
  font-size:18px;
  font-weight:700;
  color:#333;
  cursor:pointer;
  padding:6px 4px;
  border-radius:10px;
}
.service-grid .slink:hover{
  background:var(--tile2);
}

.panel{ padding:22px 22px 18px; }

.tile-grid{
  margin-top:18px;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:26px;
}
.tile{
  border:none;
  background:var(--tile);
  border-radius:40px;
  padding:44px 0;
  font-size:38px;
  font-weight:900;
  color:#333;
  cursor:pointer;
}
.bottom-bar{
  margin-top:26px;
  width:100%;
  border:none;
  background:var(--purple);
  color:#fff;
  font-size:26px;
  font-weight:900;
  padding:14px 0;
  border-radius:26px;
  cursor:pointer;
}

.q-wrap{ margin-top:10px; }
.q-no{
  font-size:32px;
  font-weight:900;
  color:#333;
  margin:10px 0 6px;
}
.q-text{
  font-size:26px;
  font-weight:900;
  color:var(--blue);
  font-style:italic;
  text-align:center;
  padding:6px 10px 14px;
  line-height:1.35;
}

.ox-row{
  margin-top:14px;
  display:flex;
  gap:22px;
  justify-content:center;
}
.ox-btn{
  width:360px;
  border:none;
  border-radius:26px;
  padding:26px 0;
  font-size:56px;
  font-weight:1000;
  cursor:pointer;
}
.ox-btn.o{ background:#F1D2F7; }
.ox-btn.x{ background:#D9D9EF; }

.input-box{
  margin:14px auto 6px;
  background:var(--tile2);
  border-radius:22px;
  padding:16px;
}
.mini-pill{
  display:inline-block;
  background:#777;
  color:#fff;
  font-weight:900;
  padding:4px 12px;
  border-radius:999px;
  font-size:14px;
}
.input{
  width:100%;
  margin-top:10px;
  border:none;
  border-radius:999px;
  padding:14px 18px;
  font-size:18px;
  outline:none;
  background:#fff;
}
.btn{
  margin-top:12px;
  border:none;
  border-radius:14px;
  padding:10px 16px;
  background:var(--purple);
  color:#fff;
  font-weight:900;
  cursor:pointer;
}
.btn.ghost{
  background:transparent;
  color:#333;
  outline:2px solid var(--tile);
}
.btn.ghost:hover{ background:var(--tile2); }

.feedback{
  margin-top:12px;
  background:var(--tile);
  border-radius:22px;
  padding:16px;
}
.feedback-img{
  width:140px;
  height:auto;
  display:none;
  margin:0 auto 10px;
}
.feedback-text{
  margin-top:8px;
  font-size:22px;
  font-weight:900;
  color:var(--blue);
  font-style:italic;
  min-height:40px;
  text-align:center;
}

.nav-row{
  margin-top:16px;
  display:flex;
  gap:14px;
  justify-content:center;
}
.nav-row.single{ justify-content:center; }
.nav-btn{
  min-width:170px;
  border:none;
  border-radius:16px;
  padding:12px 14px;
  background:#8A8A8A;
  color:#fff;
  font-weight:900;
  font-size:18px;
  cursor:pointer;
}
.nav-btn:first-child, .nav-btn:last-child{
  background:#CFCFCF;
  color:#333;
}

.multi-items{
  display:grid;
  grid-template-columns:1fr;
  gap:10px;
  margin:14px auto 6px;
}
.multi-item{
  display:flex;
  gap:10px;
  align-items:flex-start;
  padding:12px 14px;
  border-radius:18px;
  background:var(--tile2);
  cursor:pointer;
}
.multi-item .tag{
  min-width:42px;
  text-align:center;
  font-weight:1000;
  color:#333;
  background:#fff;
  border-radius:12px;
  padding:6px 0;
}
.multi-item .txt{
  font-size:16px;
  font-weight:800;
  color:#333;
  line-height:1.35;
}
.multi-item.selected{
  outline:3px solid var(--lav);
  background:#fff;
}

.multi-actions{
  display:flex;
  gap:10px;
  justify-content:center;
  margin-top:12px;
}

.link-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;
  margin-top:10px;
}
.link-col{
  background:var(--tile2);
  border-radius:18px;
  padding:12px;
}
.link-list{
  margin-top:10px;
  display:flex;
  flex-direction:column;
  gap:10px;
}
.link-chip{
  border:none;
  border-radius:16px;
  padding:12px 12px;
  background:#fff;
  font-weight:900;
  cursor:pointer;
  text-align:left;
}
.link-chip.active{ outline:3px solid var(--lav); }
.link-chip.done{ opacity:.7; }

.link-pairs{
  margin-top:10px;
  padding:12px;
  border-radius:18px;
  background:var(--tile);
  font-weight:900;
  color:#333;
  min-height:54px;
}

.media-box{
  margin-top:14px;
  background:var(--tile2);
  border-radius:18px;
  padding:14px;
}
.media-img{
  width:100%;
  height:auto;
  border-radius:14px;
  display:block;
}
.fallback{
  text-align:center;
  color:#444;
  font-weight:900;
  padding:20px 10px;
}

.diagram-grid{
  margin-top:14px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}
.diagram-card{
  background:var(--tile2);
  border-radius:18px;
  padding:12px;
}

.flip-wrap{
  display:flex;
  justify-content:center;
  margin-top:16px;
}
.flip-card{
  width:720px;
  height:360px;
  position:relative;
  transform-style:preserve-3d;
  transition: transform .55s ease;
  cursor:pointer;
}
.flip-card.flipped{ transform: rotateY(180deg); }
.flip-face{
  position:absolute;
  inset:0;
  backface-visibility:hidden;
  border-radius:26px;
  background:var(--tile);
  padding:18px;
}
.flip-face.back{
  transform: rotateY(180deg);
}
.flip-text{
  margin-top:12px;
  font-size:26px;
  font-weight:1000;
  color:var(--blue);
  font-style:italic;
  text-align:center;
  line-height:1.35;
}
.flip-text.small{ font-size:18px; color:#333; font-style:normal; font-weight:900; }
.hint{
  position:absolute;
  bottom:14px;
  left:0;
  right:0;
  text-align:center;
  color:#555;
  font-weight:900;
  font-size:14px;
}

.wrong-box{
  margin-top:14px;
  background:var(--tile2);
  border-radius:18px;
  padding:14px;
}
