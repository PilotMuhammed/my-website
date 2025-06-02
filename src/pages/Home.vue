<template>
<div class="home-root">
<!-- صورة الخلفية للموبايل -->
<img
    v-if="isMobile"
    src="../assets/mobile-profile.jpg"
    alt="Mobile Background"
    class="background-image-Mobile"
    draggable="false"
/>
<!-- صورة الخلفية للديسكتوب -->
<img
    v-else
    src="../assets/bakground-desktop.jpg"
    alt="Desktop Background"
    class="background-image-desktop"
    draggable="false"
/>
<!-- طبقة شفافية خفيفة -->
<div class="light-overlay"></div>

<!-- المحتوى -->
<div :class="['home-content', isMobile ? 'mobile-content' : 'desktop-content']">
    <h1 class="name">Muhammed M.Hadi</h1>
    <div class="typewriter-row">
        <span class="im-label">I'm</span>
        <span class="typewriter" :style="{ color: typewriterColor }">
        {{ currentWordDisplay }}<span class="typewriter-cursor" :style="{ color: primaryColor }">|</span>
        </span>
    </div>


    <div class="social-row">
        <!-- YouTube -->
        <a href="https://www.youtube.com/@PilotMuhammed" target="_blank" title="YouTube" class="social-icon">
            <img src="../assets/icon_youtube.png" alt="YouTube" class="icon-img" />
        </a>
        <!-- GitHub -->
        <a href="https://github.com/PilotMuhammed" target="_blank" title="GitHub" class="social-icon">
            <img src="../assets/icon_github.png" alt="GitHub" class="icon-img" />
        </a>
        <!-- Email -->
        <a href="mailto:me@pilotmuhammed.com" title="Email" class="social-icon">
            <img src="../assets/icon_email.png" alt="Email" class="icon-img" />
        </a>
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/muhammed-hadi/" target="_blank" title="LinkedIn" class="social-icon">
            <img src="../assets/icon_linkedin.png" alt="LinkedIn" class="icon-img" />
        </a>
    </div>



</div>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const primaryColor = '#A0C878'
//const typewriterColor = '#9FB3DF'
const typewriterColor = '#A3B18A'

const words = [
'Software engineer',
'Instructor',
'Backend developer',
'Web developer'
]

const currentWord = ref(0)
const currentWordDisplay = ref('')
const isDeleting = ref(false)
const typingSpeed = 70
const deletingSpeed = 35
const waitTime = 1100
let typingTimeout = null

function type() {
const word = words[currentWord.value]
if (!isDeleting.value) {
currentWordDisplay.value = word.slice(0, currentWordDisplay.value.length + 1)
if (currentWordDisplay.value.length === word.length) {
    typingTimeout = setTimeout(() => {
    isDeleting.value = true
    type()
    }, waitTime)
    return
}
} else {
currentWordDisplay.value = word.slice(0, currentWordDisplay.value.length - 1)
if (currentWordDisplay.value.length === 0) {
    isDeleting.value = false
    currentWord.value = (currentWord.value + 1) % words.length
}
}
typingTimeout = setTimeout(type, isDeleting.value ? deletingSpeed : typingSpeed)
}

onMounted(() => { type() })
onUnmounted(() => { if (typingTimeout) clearTimeout(typingTimeout) })

const isMobile = ref(false)
function checkScreen() { isMobile.value = window.innerWidth < 768 }
onMounted(() => {
checkScreen()
window.addEventListener('resize', checkScreen)
})
onUnmounted(() => {
window.removeEventListener('resize', checkScreen)
})
</script>

<style>
html, body, #app {
height: 100%;
width: 100%;
margin: 0;
padding: 0;
overflow: hidden;
box-sizing: border-box;
}

:root {
--primary: #A0C878;
--text: #393E46;
--secondary: #9FB3DF;
}

.home-root {
height: 100dvh;
width: 100vw;
min-height: 100dvh;
min-width: 100vw;
position: relative;
overflow: hidden;
/* تمنع السحب باللمس من التسبب بسكرول وهمي */
touch-action: none;
}

.background-image-Mobile {
position: fixed;
inset: 0;
width: 100vw;
height: 100dvh;
object-fit: cover;
object-position: center;
z-index: 0;
pointer-events: none;
user-select: none;
}

.background-image-desktop{
position: fixed;
inset: 0;                  
width: 100vw;              
height: 100dvh;            
object-fit: cover;        
object-position: center;   
z-index: 0;
user-select: none;
pointer-events: none;
background: #000;         
box-sizing: border-box;
}

.light-overlay {
position: fixed;
inset: 0;
width: 100vw;
height: 100dvh;
z-index: 1;
background: rgba(255,255,255,0.75);
pointer-events: none;
}

.home-content {
position: absolute;
inset: 0;
z-index: 2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
max-width: 520px;
margin-left: 9vw;
}

.desktop-content {
align-items: flex-start;
}
.mobile-content {
align-items: center;
margin-left: 0;
max-width: 96vw;
}

.name {
font-size: 2.5rem;
font-weight: bold;
margin-bottom: 20px;
color: var(--text);
text-align: left;
}
.mobile-content .name {
text-align: center;
}
.typewriter-row {
display: flex;
align-items: center;
margin-bottom: 32px;
min-height: 48px;
}
.im-label {
font-size: 1.8rem;
color: var(--text);
margin-right: 10px;
}
.typewriter {
font-size: 1.4rem;
font-weight: bold;
min-width: 110px;
transition: color 0.2s;
}
.typewriter-cursor {
font-size: 2rem;
font-weight: bold;
margin-left: 4px;
animation: blink 1s steps(1, end) infinite;
}
@keyframes blink {
0%, 49% { opacity: 1; }
50%, 100% { opacity: 0.15; }
}
.social-row {
display: flex;
flex-direction: row;
gap: 22px;
margin-top: 150px;
justify-content: flex-start;
}
.mobile-content .social-row {
justify-content: center;
}
.social-icon {
display: inline-flex;
align-items: center;
transition: transform 0.18s;
border-radius: 8px;
padding: 3px;
background: transparent;
}
.social-icon:hover {
transform: scale(1.13);
background: #eee8;
}

.icon-img {
width: 32px;
height: 32px;
object-fit: contain;
transition: transform 0.15s;
filter: drop-shadow(0 1px 2px #0001);
}
.social-icon:hover .icon-img {
transform: scale(1.12);
filter: brightness(1.12);
}


@media (max-width: 767px) {
.home-content,
.desktop-content {
margin-left: 0;
max-width: 96vw;
align-items: center;
}
.name {
font-size: 2.1rem;
text-align: center;
}
.typewriter, .im-label {
font-size: 1.8rem;
}
.typewriter-row { min-height: 38px; margin-bottom: 22px; }
.social-row { gap: 17px; }
}
</style>
