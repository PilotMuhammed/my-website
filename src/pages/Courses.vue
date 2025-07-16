<template>
<section class="courses-section">
<h1 class="page-title">Courses</h1>
<div class="courses-grid">
    <a
    v-for="course in courses"
    :key="course.id"
    :href="course.youtube"
    target="_blank"
    rel="noopener"
    class="course-card-link"
    >
    <div class="course-card">
        <img :src="course.image" :alt="course.title" class="course-image" />
        <div class="course-content">
        <h2 class="course-title">{{ course.title }}</h2>
        <p class="course-description">{{ course.description }}</p>
        </div>
    </div>
    </a>
</div>
</section>
</template>


<script setup>
import CourseNetworkImage from '../assets/Course-Network.jpg';
import CourseJavaImage from '../assets/Course-java.jpg';
import CourseASPImage from '../assets/Course-ASP.jpg';
import CourseAppsImage from '../assets/Course-Apps-Andriod.jpg';
import CourseJavaScriptImage from '../assets/Course-JavaScript.jpg';
import CourseMikroTikImage from '../assets/Course-Mikrotik.jpg';

const courses = [
{
id: 1,
image: CourseNetworkImage,
title: 'Networking basics',
description: 'Fundamentals of CCNA, one of the principles of networking',
youtube: 'https://www.youtube.com/playlist?list=PLltujPVLmFK6WsK_pPweRJoONbY347MfQ'
},
{
id: 2,
image: CourseJavaImage,
title: 'Java & OOP',
description: 'Basics about Java programming language and Object-Oriented Programming',
youtube: 'https://www.youtube.com/playlist?list=PLltujPVLmFK4Gs_UwROP-_siicB_MBkCq'
},
{
id: 3,
image: CourseASPImage ,
title: 'ASP.net WebForm',
description: 'Advanced programming principles and concepts in ASP Web Form ',
youtube: 'https://www.youtube.com/playlist?list=PLltujPVLmFK7U-9setOD10ufx41Byxsfm',
},
{
id: 4,
image: CourseAppsImage ,
title: 'Apps Android',
description: 'The portal for programming Android applications',
youtube: 'https://www.youtube.com/playlist?list=PLltujPVLmFK6yPUI9BZQC4GuQDT1Z0mo4',
},
{
id: 5,
image: CourseJavaScriptImage,
title: 'JavaScript',
description: 'Basics of the JavaScript programming language',
youtube: 'https://www.youtube.com/playlist?list=PLltujPVLmFK662ZoGrsqmJcINVJTpf572'
},
{
id: 6,
image: CourseMikroTikImage,
title: 'MikroTik',
description: 'Introduction to the programming of MikroTik devices',
youtube: 'https://www.youtube.com/playlist?list=PLltujPVLmFK7ZYX5acCdT5rnfLjIK-e0c'
},
]
</script>

<style scoped>
.courses-section {
min-height: 100vh;
padding: 2rem 0;
background: linear-gradient(135deg, #f9fbe7 0%, #e3f2fd 100%);
display: flex;
flex-direction: column;
align-items: center;
}

.page-title {
font-size: 2.5rem;
font-weight: bold;
color: #393E46;
margin-bottom: 2rem;
letter-spacing: 1px;
}

.courses-grid {
width: 100%;
max-width: 1080px;
display: grid;
grid-template-columns: 1fr;
gap: 2rem;
justify-items: center;
}

.course-card {
width: 100%;
max-width: 340px;
background: #fff;
border-radius: 2rem;
box-shadow: 0 6px 28px 0 #A0C87855;
/* overflow: hidden; */
display: flex;
flex-direction: column;
align-items: center;
transition: transform .18s, box-shadow .18s;
border: 1px solid #A0C87830;
}

.course-card:hover {
transform: translateY(-6px) scale(1.025);
box-shadow: 0 12px 36px 0 #9FB3DF55;
}

.course-image {
width: 100%;
height: 170px;
object-fit: cover;
border-top-left-radius: 2rem;
border-top-right-radius: 2rem;
background: #e3f2fd;
}

.course-content {
padding: 1.2rem 1.3rem 1.4rem;
width: 100%;
text-align: center;
}

.course-title {
font-size: 1.3rem;
color: #393E46;
margin: 0.5rem 0 0.8rem;
font-weight: 700;
letter-spacing: .5px;
}

.course-description {
font-size: 1rem;
color: #627488;
line-height: 1.6;
min-height: 56px;
}

.course-card-link {
display: block;
text-decoration: none;
color: inherit;
}
.course-card-link:active,
.course-card-link:focus {
outline: none;
}

@media (min-width: 640px) {
.courses-grid {
grid-template-columns: repeat(2, 1fr);
gap: 2rem 1.7rem;
}
}

@media (min-width: 900px) {
.courses-grid {
grid-template-columns: repeat(3, 1fr);
gap: 2.2rem 2rem;
}
.course-card {
max-width: 355px;
}
}
</style>
