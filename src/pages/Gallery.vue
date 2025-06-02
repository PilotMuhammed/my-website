<template>
<div class="gallery-wrapper">
<div class="development-card">
    <h2 class="title"> Photo Gallery Section </h2>
    <p class="subtitle">  This section is still under development  </p>
    <div class="coming-soon-icon">
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="#A0C878" stroke-width="4"/>
        <path d="M20 35C20 29 40 29 40 35" stroke="#9FB3DF" stroke-width="2" stroke-linecap="round"/>
        <circle cx="24" cy="28" r="2.5" fill="#393E46"/>
        <circle cx="36" cy="28" r="2.5" fill="#393E46"/>
    </svg>
    </div>
    <p class="info-text">  The section will be completed soon </p>
</div>
</div>
</template>

<style scoped>
.gallery-wrapper {
min-height: 80vh;
width: 95vw;
/* background: linear-gradient(135deg, #F5FFF4 0%, #E7F0D6 100%); */
display: flex;
align-items: center;
justify-content: center;
padding: 32px 8px;
}

.development-card {
background: #fff;
border-radius: 24px;
box-shadow: 0 4px 24px #A0C87822;
padding: 36px 32px 28px 32px;
display: flex;
flex-direction: column;
align-items: center;
max-width: 95vw;
width: 400px;
}

.title {
color: #A0C878;
font-size: 2.2rem;
font-weight: 700;
margin-bottom: 8px;
letter-spacing: 1px;
}

.subtitle {
color: #393E46;
font-size: 1.18rem;
margin-bottom: 18px;
font-weight: 600;
}

.coming-soon-icon {
margin-bottom: 20px;
animation: floatY 2s ease-in-out infinite alternate;
}

@keyframes floatY {
0% { transform: translateY(0); }
100% { transform: translateY(-10px); }
}

.info-text {
color: #393E46;
font-size: 1.02rem;
text-align: center;
margin-top: 0;
line-height: 1.7;
}

/* Responsive for mobile */
@media (max-width: 480px) {
.development-card {
padding: 22px 8px 18px 8px;
border-radius: 16px;
width: 99vw;
max-width: 99vw;
}
.gallery-wrapper {
min-height: 45vh;
}
.title { font-size: 1.35rem; }
.subtitle { font-size: 1rem; }
.info-text { font-size: .97rem; }
.coming-soon-icon svg { width: 44px; height: 44px; }
}
</style>
