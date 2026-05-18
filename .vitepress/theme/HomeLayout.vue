<script setup>
import { ref, onMounted } from 'vue'

// Floating particles
const particles = ref([])

function createParticles() {
  const list = []
  const chars = ['花', '梦', '山', '水', '风', '月', '云', '雪', '烟', '霞', '剑', '酒']
  for (let i = 0; i < 18; i++) {
    list.push({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 14 + Math.random() * 20,
      opacity: 0.04 + Math.random() * 0.08,
      duration: 18 + Math.random() * 30,
      delay: Math.random() * -25,
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
    <!-- Background texture -->
    <div class="paper-texture"></div>

    <!-- Floating characters -->
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
        }"
      >{{ p.char }}</span>
    </div>

    <!-- Hero section -->
    <div class="hero-section">
      <!-- Ink wash mountain background -->
      <div class="ink-mountains">
        <svg viewBox="0 0 1200 500" preserveAspectRatio="none" class="mountain-svg">
          <!-- Mist layers -->
          <ellipse cx="600" cy="350" rx="700" ry="80" fill="rgba(139,69,19,0.02)" />
          <!-- Far mountains -->
          <path d="M0,400 Q100,280 220,340 Q320,250 440,310 Q520,220 640,300 Q740,210 860,280 Q960,230 1080,310 Q1150,270 1200,350 L1200,500 L0,500 Z" fill="rgba(0,0,0,0.025)" />
          <!-- Mid mountains -->
          <path d="M0,430 Q180,310 340,370 Q480,280 620,350 Q760,260 900,330 Q1020,280 1120,350 Q1170,330 1200,380 L1200,500 L0,500 Z" fill="rgba(0,0,0,0.04)" />
          <!-- Near mountains -->
          <path d="M0,460 Q240,360 420,410 Q560,340 720,390 Q860,320 1020,380 Q1120,350 1200,410 L1200,500 L0,500 Z" fill="rgba(0,0,0,0.06)" />
          <!-- Foreground hills -->
          <path d="M0,480 Q300,420 600,460 Q900,410 1200,450 L1200,500 L0,500 Z" fill="rgba(0,0,0,0.08)" />
        </svg>
      </div>

      <div class="hero-content">
        <!-- Top ornament -->
        <div class="ornament">
          <span class="ornament-wing">&#x2767;</span>
          <span class="ornament-line"></span>
          <span class="ornament-diamond">&#9670;</span>
          <span class="ornament-line"></span>
          <span class="ornament-wing mirrored">&#x2767;</span>
        </div>

        <!-- Title -->
        <h1 class="main-title">今年新梦</h1>

        <!-- Subtitle divider -->
        <div class="title-divider">
          <span class="divider-dot"></span>
          <span class="divider-label">剑来</span>
          <span class="divider-dot"></span>
        </div>

        <!-- Quote -->
        <p class="main-quote">今年新梦，忽到水经旧山头，见她依旧笑如花。</p>

        <!-- Bottom ornament -->
        <div class="ornament">
          <span class="ornament-wing mirrored">&#x2767;</span>
          <span class="ornament-line"></span>
          <span class="ornament-diamond">&#9670;</span>
          <span class="ornament-line"></span>
          <span class="ornament-wing">&#x2767;</span>
        </div>

        <!-- Action buttons -->
        <div class="hero-actions">
          <a class="action-btn primary" href="/markdown-examples">
            <span class="btn-char">笔</span>
            笔墨文章
          </a>
          <a class="action-btn secondary" href="/api-examples">
            <span class="btn-char">技</span>
            技法详解
          </a>
        </div>
      </div>
    </div>

    <!-- Features section -->
    <div class="features-section">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <h3 class="feature-title">山水寄情</h3>
          <p class="feature-desc">人生如逆旅，我亦是行人。以文字记录途中所见所感，山水之间，自有清欢。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
            </svg>
          </div>
          <h3 class="feature-title">笔墨留痕</h3>
          <p class="feature-desc">文以载道，字以传心。在代码与文字的交汇处，留下属于这个时代的印记。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 3v1m0 16v1m-8-9H3m18 0h-1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"/>
              <circle cx="12" cy="12" r="4"/>
            </svg>
          </div>
          <h3 class="feature-title">旧山新梦</h3>
          <p class="feature-desc">年年岁岁花相似，岁岁年年人不同。旧山头上，新梦依旧，笑如花开。</p>
        </div>
      </div>
    </div>

    <!-- Footer quote -->
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

/* Paper texture overlay */
.paper-texture {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    radial-gradient(ellipse at 20% 50%, rgba(139, 69, 19, 0.02) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(184, 134, 11, 0.02) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(46, 125, 111, 0.015) 0%, transparent 50%);
}

/* Floating characters */
.floating-chars {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.floating-char {
  position: absolute;
  font-family: 'Noto Serif SC', 'Source Han Serif SC', serif;
  color: var(--vp-c-brand-1);
  animation: floatUp linear infinite;
  will-change: transform;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

/* ========== Hero Section ========== */

.hero-section {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--vp-nav-height));
  padding: 60px 24px 80px;
}

.ink-mountains {
  position: absolute;
  bottom: 0;
  left: -5%;
  right: -5%;
  pointer-events: none;
  z-index: 0;
}

.mountain-svg {
  width: 100%;
  height: auto;
  display: block;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
  animation: heroReveal 1.2s ease-out;
}

@keyframes heroReveal {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ornaments */
.ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0 auto;
  max-width: 320px;
}

.ornament-wing {
  color: var(--vp-c-brand-1);
  opacity: 0.35;
  font-size: 16px;
  line-height: 1;
}

.ornament-wing.mirrored {
  transform: scaleX(-1);
}

.ornament-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--vp-c-brand-1), transparent);
  opacity: 0.25;
}

.ornament-line.wide {
  max-width: 200px;
}

.ornament-diamond {
  color: var(--vp-c-brand-1);
  opacity: 0.4;
  font-size: 8px;
}

/* Title */
.main-title {
  font-family: 'Noto Serif SC', 'Source Han Serif SC', 'STSong', serif;
  font-size: clamp(3rem, 10vw, 5.5rem);
  font-weight: 700;
  letter-spacing: 0.2em;
  margin: 24px 0 8px;
  line-height: 1.2;
  color: transparent;
  background: linear-gradient(135deg, #6b3410 0%, #8b4513 25%, #cd853f 50%, #a0522d 75%, #6b3410 100%);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  animation: titleShimmer 8s ease-in-out infinite;
}

@keyframes titleShimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Divider */
.title-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 16px 0 20px;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.4s forwards;
}

.divider-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  opacity: 0.4;
}

.divider-label {
  font-family: 'Noto Serif SC', 'Source Han Serif SC', serif;
  font-size: 13px;
  letter-spacing: 0.4em;
  color: var(--vp-c-text-3);
  opacity: 0.5;
}

/* Quote */
.main-quote {
  font-family: 'Noto Serif SC', 'Source Han Serif SC', 'STKaiti', 'KaiTi', serif;
  font-size: clamp(1.05rem, 2.8vw, 1.4rem);
  color: var(--vp-c-text-2);
  line-height: 2.2;
  letter-spacing: 0.1em;
  margin: 0 0 24px;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.6s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* Action buttons */
.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 1s forwards;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 36px;
  border-radius: 3px;
  font-family: 'Noto Serif SC', 'Source Han Serif SC', serif;
  font-size: 15px;
  letter-spacing: 0.12em;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
}

.action-btn::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.4s;
}

.btn-char {
  font-size: 18px;
  opacity: 0.7;
  font-weight: 600;
}

.action-btn.primary {
  background: linear-gradient(135deg, #6b3410, #8b4513, #a0522d);
  color: #fdf5e6;
  border: 1px solid rgba(205, 133, 63, 0.3);
  box-shadow: 0 4px 16px rgba(107, 52, 16, 0.2);
}

.action-btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(107, 52, 16, 0.35);
  border-color: rgba(205, 133, 63, 0.5);
}

.action-btn.secondary {
  background: transparent;
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.action-btn.secondary:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.1);
}

/* ========== Features Section ========== */

.features-section {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 24px 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.feature-card {
  padding: 32px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  text-align: center;
  transition: all 0.4s ease;
  background: var(--vp-c-bg);
}

.feature-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(139, 69, 19, 0.08);
}

.feature-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 20px;
  color: var(--vp-c-brand-1);
  opacity: 0.7;
}

.feature-icon svg {
  width: 100%;
  height: 100%;
}

.feature-title {
  font-family: 'Noto Serif SC', 'Source Han Serif SC', serif;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
}

.feature-desc {
  font-family: 'Noto Serif SC', 'Source Han Serif SC', serif;
  font-size: 0.9rem;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* ========== Closing Section ========== */

.closing-section {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 24px 80px;
}

.closing-ornament {
  display: flex;
  justify-content: center;
  margin: 12px 0;
}

.closing-quote {
  font-family: 'Noto Serif SC', 'Source Han Serif SC', 'STKaiti', serif;
  font-size: 1rem;
  letter-spacing: 0.15em;
  color: var(--vp-c-text-3);
  margin: 0;
  opacity: 0.6;
}

/* ========== Responsive ========== */

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .action-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 40px 16px 60px;
  }
}
</style>
