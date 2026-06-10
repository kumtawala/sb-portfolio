import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

export default function Home() {
  return (
    <head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Le Trésor Perdu des Vaudois</title>

<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">

<style>

:root{
    --gold:#d4af37;
    --gold-light:#f4d03f;
    --dark:#091018;
    --dark-2:#111c27;
    --text:#e8edf2;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:'Inter',sans-serif;
    background:var(--dark);
    color:var(--text);
    overflow-x:hidden;
    line-height:1.8;
}

/* =======================
   HERO
======================= */

.hero{
    min-height:100vh;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
}

.hero::before{
    content:"";
    position:absolute;
    inset:0;
    background:
    linear-gradient(
        rgba(0,0,0,.45),
        rgba(0,0,0,.75)
    ),
    url("images/montagnes-vaudoises.jpg")
    center/cover no-repeat;
}

.hero-content{
    position:relative;
    z-index:2;
    max-width:900px;
    padding:20px;
}

.hero h1{
    font-family:'Cinzel',serif;
    font-size:clamp(3rem,8vw,7rem);
    color:var(--gold);
    text-shadow:0 0 25px rgba(212,175,55,.3);
    margin-bottom:20px;
}

.hero p{
    font-size:1.3rem;
    max-width:750px;
    margin:auto;
}

.scroll-indicator{
    position:absolute;
    bottom:35px;
    left:50%;
    transform:translateX(-50%);
    font-size:0.9rem;
    opacity:.85;
    animation:bounce 2s infinite;
}

@keyframes bounce{
    0%,20%,50%,80%,100%{
        transform:translate(-50%,0);
    }
    40%{
        transform:translate(-50%,-12px);
    }
    60%{
        transform:translate(-50%,-6px);
    }
}

/* =======================
   NAVIGATION
======================= */

nav{
    position:sticky;
    top:0;
    z-index:999;
    background:rgba(9,16,24,.9);
    backdrop-filter:blur(12px);
    border-bottom:1px solid rgba(255,255,255,.08);
}

nav ul{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:30px;
    list-style:none;
    padding:18px;
}

nav a{
    color:white;
    text-decoration:none;
    font-weight:600;
    transition:.3s;
}

nav a:hover{
    color:var(--gold);
}

/* =======================
   SECTIONS
======================= */

section{
    padding:100px 8%;
}

.section-title{
    font-family:'Cinzel',serif;
    font-size:3rem;
    color:var(--gold);
    text-align:center;
    margin-bottom:25px;
}

.section-subtitle{
    max-width:850px;
    margin:auto;
    text-align:center;
    opacity:.85;
    margin-bottom:60px;
}

/* =======================
   CONTENT GRID
======================= */

.content-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:50px;
    align-items:center;
    max-width:1200px;
    margin:auto;
}

.content-grid img{
    width:100%;
    border-radius:24px;
    box-shadow:0 20px 50px rgba(0,0,0,.4);
}

.content-grid p{
    margin-bottom:20px;
}

/* =======================
   TIMELINE
======================= */

.timeline-section{
    background:
    radial-gradient(circle at top,
    #172433 0%,
    #091018 70%);
}

.timeline{
    max-width:1100px;
    margin:auto;
    position:relative;
}

.timeline::before{
    content:"";
    position:absolute;
    left:50%;
    width:4px;
    height:100%;
    background:var(--gold);
    transform:translateX(-50%);
}

.timeline-item{
    width:50%;
    padding:25px;
    position:relative;
}

.timeline-item:nth-child(odd){
    left:0;
}

.timeline-item:nth-child(even){
    left:50%;
}

.timeline-card{
    background:rgba(255,255,255,.04);
    border:1px solid rgba(212,175,55,.25);
    border-radius:20px;
    padding:30px;
    transition:.4s;
}

.timeline-card:hover{
    transform:translateY(-6px);
    border-color:var(--gold);
}

.timeline-card h3{
    color:var(--gold);
    margin-bottom:15px;
}

/* =======================
   QUOTE BOX
======================= */

.quote-box{
    max-width:900px;
    margin:auto;
    text-align:center;
    padding:60px;
    border-radius:30px;
    background:
    linear-gradient(
        135deg,
        rgba(212,175,55,.12),
        rgba(255,255,255,.04)
    );
    border:1px solid rgba(212,175,55,.25);
}

.quote-box .icon{
    font-size:4rem;
    margin-bottom:20px;
}

.quote-box p{
    font-size:1.2rem;
    font-style:italic;
}

/* =======================
   GALLERY
======================= */

.gallery{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:25px;
    max-width:1300px;
    margin:auto;
}

.photo{
    position:relative;
    overflow:hidden;
    border-radius:20px;
}

.photo img{
    width:100%;
    height:350px;
    object-fit:cover;
    transition:.8s;
}

.photo:hover img{
    transform:scale(1.08);
}

.overlay{
    position:absolute;
    inset:0;
    display:flex;
    align-items:flex-end;
    padding:25px;
    background:
    linear-gradient(
        transparent,
        rgba(0,0,0,.85)
    );
}

.overlay h3{
    color:white;
}

/* =======================
   TREASURE BOX
======================= */

.treasure-box{
    max-width:950px;
    margin:auto;
    text-align:center;
    padding:60px;
    border-radius:30px;
    background:
    linear-gradient(
        135deg,
        rgba(212,175,55,.12),
        rgba(255,255,255,.04)
    );
    border:1px solid rgba(212,175,55,.3);
}

.treasure-box .icon{
    font-size:5rem;
    margin-bottom:20px;
}

/* =======================
   FOOTER
======================= */

footer{
    padding:50px;
    text-align:center;
    background:#05080c;
    border-top:1px solid rgba(255,255,255,.08);
}

/* =======================
   RESPONSIVE
======================= */

@media(max-width:900px){

    .content-grid{
        grid-template-columns:1fr;
    }

    .timeline::before{
        left:20px;
    }

    .timeline-item,
    .timeline-item:nth-child(even),
    .timeline-item:nth-child(odd){
        width:100%;
        left:0;
        padding-left:60px;
    }

    .section-title{
        font-size:2.2rem;
    }
}

</style>
</head>

<body>

<header class="hero">

    <div class="hero-content">
        <h1>Le Trésor Perdu des Vaudois</h1>

        <p>
            Une légende mystérieuse au cœur des Alpes,
            entre histoire, persécutions religieuses
            et trésor disparu.
        </p>
    </div>

    <div class="scroll-indicator">
        ▼ Découvrir l'histoire
    </div>

</header>

<nav>
    <ul>
        <li><a href="#histoire">Histoire</a></li>
        <li><a href="#legende">Légende</a></li>
        <li><a href="#indices">Indices</a></li>
        <li><a href="#galerie">Galerie</a></li>
        <li><a href="#recherches">Recherches</a></li>
    </ul>
</nav>

<section id="histoire">

    <h2 class="section-title">Les Vaudois : un peuple de résistance</h2>

    <p class="section-subtitle">
        Les Vaudois sont un mouvement chrétien apparu au XIIe siècle autour de
        Pierre Valdo. Considérés comme hérétiques par les autorités religieuses
        de leur époque, ils furent persécutés durant plusieurs siècles.
    </p>

    <div class="content-grid">

        <div>
            <p>
                Beaucoup trouvèrent refuge dans les vallées alpines du Piémont,
                où ils développèrent une culture de résistance, de solidarité
                et de discrétion.
            </p>

            <p>
                Malgré les persécutions, les communautés vaudoises ont préservé
                leur identité religieuse et culturelle à travers les générations.
            </p>

            <p>
                Leur histoire demeure aujourd'hui un symbole de liberté de
                conscience et de persévérance.
            </p>
        </div>

        <img src="images/vallees-vaudoises.jpg"
             alt="Vallées vaudoises">

    </div>

</section>

<section id="legende">

    <h2 class="section-title">La légende du trésor disparu</h2>

    <div class="content-grid">

        <div>
            <p>
                Selon la tradition orale, à l'époque des persécutions,
                certaines familles vaudoises auraient caché des objets
                précieux, des manuscrits, des pièces d'or et des reliques
                dans des grottes secrètes des Alpes.
            </p>

            <p>
                Craignant les pillages et les confiscations, elles auraient
                dissimulé leurs biens dans des caches connues seulement de
                quelques initiés.
            </p>

            <p>
                Beaucoup de ces emplacements auraient été perdus avec le temps,
                alimentant l'une des plus fascinantes légendes alpines.
            </p>
        </div>

        <img src="images/grotte-secrete.jpg"
             alt="Grotte secrète">

    </div>

</section>

<section id="indices" class="timeline-section">

    <h2 class="section-title">Les indices de la légende</h2>

    <p class="section-subtitle">
        Au fil des siècles, récits, témoignages et traditions orales ont
        nourri l'histoire du trésor perdu.
    </p>

    <div class="timeline">

        <div class="timeline-item">
            <div class="timeline-card">
                <h3>📜 Manuscrits disparus</h3>
                <p>
                    Des documents anciens évoquent des biens précieux cachés
                    durant les périodes de persécution.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-card">
                <h3>⛰ Refuges alpins</h3>
                <p>
                    Les vallées isolées et les grottes naturelles auraient
                    servi de caches secrètes.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-card">
                <h3>🧭 Une carte mystérieuse</h3>
                <p>
                    Certains récits parlent d'une carte transmise de génération
                    en génération.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-card">
                <h3>💰 Un trésor introuvable</h3>
                <p>
                    Malgré les recherches, aucun dépôt n'a jamais été identifié
                    avec certitude.
                </p>
            </div>
        </div>

    </div>

</section>

<section>

    <div class="quote-box">

        <div class="icon">📜</div>

        <h2 class="section-title">
            Une tradition transmise par les générations
        </h2>

        <p>
            « Certains racontent qu'une carte aurait existé,
            transmise de génération en génération,
            indiquant l'emplacement du trésor.
            Mais personne n'a jamais pu en prouver l'existence. »
        </p>

    </div>

</section>

<section id="galerie">

    <h2 class="section-title">Galerie photographique</h2>

    <div class="gallery">

        <div class="photo">
            <img src="images/vallee-alpine.jpg" alt="">
            <div class="overlay">
                <h3>Les vallées vaudoises</h3>
            </div>
        </div>

        <div class="photo">
            <img src="images/chapelle-vaudoise.jpg" alt="">
            <div class="overlay">
                <h3>Patrimoine religieux</h3>
            </div>
        </div>

        <div class="photo">
            <img src="images/coffre-tresor.jpg" alt="">
            <div class="overlay">
                <h3>Le trésor légendaire</h3>
            </div>
        </div>

    </div>

</section>

<section id="recherches">

    <div class="treasure-box">

        <div class="icon">🔎</div>

        <h2 class="section-title">
            Les recherches modernes
        </h2>

        <p>
            Au fil des décennies, plusieurs expéditions ont exploré les
            montagnes et les cavités naturelles associées à la légende.
        </p>

        <br>

        <p>
            Malgré les nombreuses hypothèses, aucune découverte majeure n'a
            permis de confirmer l'existence du trésor.
        </p>

        <br>

        <p>
            Aujourd'hui encore, le mystère continue de fasciner historiens,
            passionnés d'histoire alpine et amateurs de légendes.
        </p>

    </div>

</section>

<footer>

    <p>
        © 2026 — Le Trésor Perdu des Vaudois
    </p>

    <p style="opacity:.7;margin-top:10px;">
        Entre histoire, mémoire et légende alpine.
    </p>

</footer>

</body>
  );
}
