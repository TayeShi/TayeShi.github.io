<script setup>
import { ref, onMounted } from 'vue'

// 浮墨字粒
const particles = ref([])

function createParticles() {
  const list = []
  const chars = ['水', '墨', '山', '云', '风', '月', '竹', '兰', '松', '鹤', '琴', '棋', '书', '画']
  for (let i = 0; i < 12; i++) {
    list.push({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      y: 20 + Math.random() * 80,
      size: 16 + Math.random() * 24,
      opacity: 0.025 + Math.random() * 0.04,
      duration: 25 + Math.random() * 35,
      delay: Math.random() * -30,
      rotate: -15 + Math.random() * 30,
    })
  }
  particles.value = list
}

onMounted(() => {
  createParticles()
})
</script>

<template>
  <div class="home-page">
    <!-- 宣纸纹理底 -->
    <div class="paper-bg"></div>

    <!-- 浮墨 -->
    <div class="floating-chars">
      <span
        v-for="p in particles"
        :key="p.id"
        class="floating-char"
        :style="{
          left: p.x + '%',
          top: p.y + '%',
          fontSize: p.size + 'px',
          opacity: p.opacity,
          animationDuration: p.duration + 's',
          animationDelay: p.delay + 's',
          transform: `rotate(${p.rotate}deg)`,
        }"
      >{{ p.char }}</span>
    </div>

    <!-- 主区域 -->
    <div class="hero-section">
      <!-- 水墨山水 -->
      <div class="ink-landscape">
        <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMax slice" class="landscape-svg">
          <defs>
            <!-- 墨晕渐变 -->
            <linearGradient id="mistFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="transparent" />
              <stop offset="100%" stop-color="rgba(248,245,240,0.9)" />
            </linearGradient>
            <linearGradient id="mistFadeDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="transparent" />
              <stop offset="100%" stop-color="rgba(20,18,16,0.9)" />
            </linearGradient>
          </defs>

          <!-- 远山 — 清墨 -->
          <path d="M0,420 Q80,320 180,380 Q260,280 380,350 Q440,260 560,330 Q640,240 760,310 Q860,230 980,300 Q1080,250 1200,330 Q1300,280 1400,360 L1400,600 L0,600 Z" fill="rgba(0,0,0,0.018)" />

          <!-- 中山 — 淡墨 -->
          <path d="M0,460 Q120,350 260,410 Q380,310 500,380 Q600,290 740,360 Q860,280 1000,350 Q1120,300 1240,370 Q1340,320 1400,400 L1400,600 L0,600 Z" fill="rgba(0,0,0,0.03)" />

          <!-- 近山 — 重墨 -->
          <path d="M0,500 Q160,390 320,450 Q460,360 600,430 Q720,350 880,410 Q1020,340 1180,400 Q1300,360 1400,430 L1400,600 L0,600 Z" fill="rgba(0,0,0,0.05)" />

          <!-- 近景丘 — 浓墨 -->
          <path d="M0,530 Q200,460 400,500 Q600,440 800,490 Q1000,430 1200,480 Q1340,450 1400,500 L1400,600 L0,600 Z" fill="rgba(0,0,0,0.07)" />

          <!-- 松影剪影 -->
          <g opacity="0.04">
            <path d="M180,480 L185,420 L175,420 Z" fill="black" />
            <path d="M170,440 Q185,430 200,440 Q185,425 170,440 Z" fill="black" />
            <path d="M168,450 Q185,438 202,450 Q185,435 168,450 Z" fill="black" />
            <path d="M1150,470 L1155,400 L1145,400 Z" fill="black" />
            <path d="M1135,420 Q1155,408 1175,420 Q1155,405 1135,420 Z" fill="black" />
            <path d="M1132,432 Q1155,418 1178,432 Q1155,416 1132,432 Z" fill="black" />
          </g>

          <!-- 云雾 -->
          <ellipse cx="350" cy="420" rx="200" ry="30" fill="rgba(248,245,240,0.6)" />
          <ellipse cx="900" cy="400" rx="250" ry="25" fill="rgba(248,245,240,0.5)" />
          <ellipse cx="600" cy="450" rx="180" ry="20" fill="rgba(248,245,240,0.4)" />

          <!-- 底部渐隐 -->
          <rect x="0" y="500" width="1400" height="100" fill="url(#mistFade)" />
        </svg>
      </div>

      <!-- 内容 -->
      <div class="hero-content">
        <!-- 上饰纹 -->
        <div class="ornament">
          <span class="ornament-wing">&#x2767;</span>
          <span class="ornament-line"></span>
          <span class="ornament-dot"></span>
          <span class="ornament-line"></span>
          <span class="ornament-wing mirrored">&#x2767;</span>
        </div>

        <!-- 题字 -->
        <h1 class="main-title">今年新梦</h1>

        <!-- 出处 -->
        <div class="title-divider">
          <span class="divider-line"></span>
          <span class="divider-label">《剑来》</span>
          <span class="divider-line"></span>
        </div>

        <!-- 诗句 -->
        <p class="main-quote">今年新梦，忽到水经旧山头，<br>见她依旧笑如花。</p>

        <!-- 印章 -->
        <div class="seal-stamp">
          <span class="seal-text">新梦</span>
        </div>

        <!-- 下饰纹 -->
        <div class="ornament bottom">
          <span class="ornament-wing mirrored">&#x2767;</span>
          <span class="ornament-line"></span>
          <span class="ornament-dot"></span>
          <span class="ornament-line"></span>
          <span class="ornament-wing">&#x2767;</span>
        </div>

        <!-- 导引 -->
        <div class="hero-actions">
          <a class="action-btn primary" href="/markdown-examples">
            笔墨文章
          </a>
          <a class="action-btn secondary" href="/api-examples">
            技法详解
          </a>
        </div>
      </div>
    </div>

    <!-- 特色区 -->
    <div class="features-section">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 38C8 38 14 28 24 28C34 28 40 38 40 38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M4 42C4 42 12 32 24 32C36 32 44 42 44 42" stroke="currentColor" stroke-width="1" opacity="0.4" stroke-linecap="round"/>
              <circle cx="24" cy="16" r="6" stroke="currentColor" stroke-width="1.5"/>
              <path d="M24 10V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="feature-title">山水寄情</h3>
          <p class="feature-desc">人生如逆旅，我亦是行人。<br>以文字记录途中所见所感，<br>山水之间，自有清欢。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 38L32 8L38 14L16 44L8 46L10 38Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M28 12L36 20" stroke="currentColor" stroke-width="1.5"/>
              <path d="M12 40L20 32" stroke="currentColor" stroke-width="1" opacity="0.4"/>
            </svg>
          </div>
          <h3 class="feature-title">笔墨留痕</h3>
          <p class="feature-desc">文以载道，字以传心。<br>在代码与文字的交汇处，<br>留下属于这个时代的印记。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="1" opacity="0.3"/>
              <circle cx="24" cy="24" r="10" stroke="currentColor" stroke-width="1.5"/>
              <path d="M24 14V24L30 30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="feature-title">旧山新梦</h3>
          <p class="feature-desc">年年岁岁花相似，<br>岁岁年年人不同。<br>旧山头上，新梦依旧。</p>
        </div>
      </div>
    </div>

    <!-- 尾声 -->
    <div class="closing-section">
      <div class="closing-ornament">
        <span class="ornament-line wide"></span>
      </div>
      <p class="closing-quote">世间万物有盛衰，人生安得常少年。</p>
      <div class="closing-ornament">
        <span class="ornament-line wide"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  position: relative;
  min-height: calc(100vh - var(--vp-nav-height));
  overflow: hidden;
}

/* 宣纸底纹 */
.paper-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse at 15% 50%, rgba(0,0,0,0.008) 0%, transparent 60%),
    radial-gradient(ellipse at 85% 30%, rgba(0,0,0,0.006) 0%, transparent 60%),
    radial-gradient(ellipse at 50% 85%, rgba(0,0,0,0.005) 0%, transparent 60%);
}

/* 浮墨 */
.floating-chars {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.floating-char {
  position: absolute;
  font-family: 'LXGW WenKai', 'KaiTi', serif;
  color: var(--vp-c-text-1);
  animation: inkFloat linear infinite;
  will-change: transform;
}

@keyframes inkFloat {
  0% {
    transform: translateY(0) rotate(var(--r, 0deg));
    opacity: 0;
  }
  8% { opacity: 1; }
  92% { opacity: 1; }
  100% {
    transform: translateY(-100vh) rotate(calc(var(--r, 0deg) + 20deg));
    opacity: 0;
  }
}

/* ========== Hero ========== */

.hero-section {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--vp-nav-height));
  padding: 60px 24px 100px;
}

.ink-landscape {
  position: absolute;
  bottom: 0;
  left: -5%;
  right: -5%;
  pointer-events: none;
  z-index: 0;
}

.landscape-svg {
  width: 100%;
  height: auto;
  display: block;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 640px;
  animation: inkReveal 1.5s ease-out;
}

@keyframes inkReveal {
  0% {
    opacity: 0;
    transform: translateY(24px);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* 饰纹 */
.ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto 20px;
  max-width: 280px;
}

.ornament.bottom {
  margin: 20px auto 0;
}

.ornament-wing {
  color: var(--vp-c-text-3);
  opacity: 0.3;
  font-size: 14px;
  line-height: 1;
}

.ornament-wing.mirrored {
  transform: scaleX(-1);
}

.ornament-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--vp-c-text-3), transparent);
  opacity: 0.2;
}

.ornament-line.wide {
  max-width: 160px;
}

.ornament-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--vp-c-text-3);
  opacity: 0.3;
}

/* 题字 */
.main-title {
  font-family: 'LXGW WenKai', 'KaiTi', 'STKaiti', serif;
  font-size: clamp(3.2rem, 12vw, 6rem);
  font-weight: 700;
  letter-spacing: 0.25em;
  margin: 0 0 4px;
  line-height: 1.3;
  color: var(--vp-c-text-1);
  text-shadow: 0 2px 20px rgba(0,0,0,0.06);
}

/* 出处 */
.title-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 12px 0 20px;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.4s forwards;
}

.divider-line {
  width: 40px;
  height: 1px;
  background: var(--vp-c-text-3);
  opacity: 0.2;
}

.divider-label {
  font-family: 'LXGW WenKai', 'KaiTi', serif;
  font-size: 13px;
  letter-spacing: 0.3em;
  color: var(--vp-c-text-3);
  opacity: 0.45;
}

/* 诗句 */
.main-quote {
  font-family: 'LXGW WenKai', 'KaiTi', 'STKaiti', serif;
  font-size: clamp(1.05rem, 2.8vw, 1.35rem);
  color: var(--vp-c-text-2);
  line-height: 2.4;
  letter-spacing: 0.12em;
  margin: 0 0 28px;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.6s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* 印章 */
.seal-stamp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 2px solid #b94a3a;
  border-radius: 4px;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeIn 0.6s ease-out 0.9s forwards;
  transform: rotate(3deg);
}

.seal-text {
  font-family: 'LXGW WenKai', 'KaiTi', serif;
  font-size: 18px;
  font-weight: 700;
  color: #b94a3a;
  letter-spacing: 0;
  line-height: 1;
}

/* 导引按钮 */
.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 36px;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 1.1s forwards;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  border-radius: 2px;
  font-family: 'LXGW WenKai', 'KaiTi', serif;
  font-size: 15px;
  letter-spacing: 0.15em;
  text-decoration: none;
  transition: all 0.4s ease;
}

.action-btn.primary {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-text-1);
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
}

.action-btn.secondary {
  background: transparent;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}

.action-btn.secondary:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-text-2);
  color: var(--vp-c-text-1);
}

/* ========== 特色卡片 ========== */

.features-section {
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  padding: 32px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  text-align: center;
  transition: all 0.4s ease;
  background: var(--vp-c-bg);
}

.feature-card:hover {
  border-color: var(--vp-c-text-3);
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.04);
}

.feature-icon {
  width: 44px;
  height: 44px;
  margin: 0 auto 18px;
  color: var(--vp-c-text-2);
  opacity: 0.6;
}

.feature-icon svg {
  width: 100%;
  height: 100%;
}

.feature-title {
  font-family: 'LXGW WenKai', 'KaiTi', serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  margin: 0 0 14px;
  color: var(--vp-c-text-1);
}

.feature-desc {
  font-family: 'LXGW WenKai', 'KaiTi', serif;
  font-size: 0.88rem;
  line-height: 2;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* ========== 尾声 ========== */

.closing-section {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 24px 80px;
}

.closing-ornament {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.closing-quote {
  font-family: 'LXGW WenKai', 'KaiTi', serif;
  font-size: 0.95rem;
  letter-spacing: 0.2em;
  color: var(--vp-c-text-3);
  margin: 0;
  opacity: 0.5;
}

/* ========== 响应式 ========== */

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    max-width: 360px;
    margin: 0 auto;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .action-btn {
    width: 100%;
    max-width: 260px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 40px 16px 80px;
  }
}
</style>
