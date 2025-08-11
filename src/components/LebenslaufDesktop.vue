<template lang="">
    <section class="timeline">
    <h1 class="timeline-year">Today</h1>
    
    <div class="timeline-row">
    <!-- 1 Monat = 3 duration -->
      <!-- Linke Spalte -->
      
      <div class="timeline-column left">
        <h1 class="timeline-headings">Education</h1>
        <div class="timeline-entry codeuni" style="--duration: 210; --color: #441B7A; --gap:36;">
          <div class="bar"></div>
          <div class="content">
            <h2 style="--color:#441B7A;">B.A. Interaction Design</h2>
            <h3>CODE University - Berlin</h3>
            <span>September 2018 - November 2023</span>
            <p><strong>Bachelorarbeit:</strong> Supporting persons with disabilities in their application process<br>
               <strong>Abschlussprojekt:</strong> UX Metrics and KPIs for digital products</p>
          </div>
        </div>
        <div class="timeline-entry" style="--duration: 25; --color: #FF6EC7;">
          <div class="bar"></div>
          <div class="content">
            <h2 style="--color:#FF6EC7;">Abitur</h2>
            <h3>Marienschule Euskirchen</h3>
            <span>2009 - 2017</span>
          </div>
        </div>
      </div>

      <!-- Rechte Spalte -->
      <div class="timeline-column right">
        <h1 class="timeline-headings">Experience</h1>
        <div class="timeline-entry" style="--duration: 3; --color: #0097AC; --gap: 15">
          <div class="bar"></div>
          <div class="content">
            <h2 style="--color:#0097AC;">Selbstständige Webdesignerin</h2>
            <h3>lunaacoco.design - Oerlinghausen</h3>
            <span>seit Juli 2025</span>
            <li>Webdesign für kleine und mittelständische Unternehmen</li>
            <li>Social Media Betreuung und digitale Kommunikation</li>
          </div>
        </div>
        <div class="timeline-entry" style="--duration: 39; --color: #FF6EC7; --gap: 27">
          <div class="bar"></div>
          <div class="content">
            <h2 style="--color:#FF6EC7;">Werkstudent UX-Design</h2>
            <h3>SAP SE - Walldorf (remote)</h3>
            <span>Dezember 2023 - Januar 2025</span>
            <li>Redesign von digitalen Produkten zum neuen Theme</li>
            <li>Erstellung und Pflege der Figma Library</li>
          </div>
        </div>
        <div class="timeline-entry" style="--duration: 30; --color: var(--color-primary); --gap: 66">
          <div class="bar"></div>
          <div class="content">
            <h2 style="--color:var(--color-primary);">Grafikdesigner</h2>
            <h3>Kalweit ITS GmbH - Hamburg (90% remote)</h3>
            <span>Juli 2021 - Februar 2023</span>
            <li>Betreuung der Social Media Kampagne</li>
            <li>Design von internen Dokumenten und Werbematerial</li>
          </div>
        </div>
        <div class="timeline-entry" style="--duration: 30; --color: #0097AC; --gap: -1">
          <div class="bar"></div>
          <div class="content">
            <h2 style="--color:#0097AC;">Head of Marketing & PR</h2>
            <h3>Code + Design Initiative e.V. - Berlin</h3>
            <span>Februar 2019 - Juli 2019</span>
            <li>Eventmanagement</li>
            <li>Social Media Kampagne</li>
          </div>
        </div>
        <div class="timeline-entry" style="--duration: 36; --color: #0097AC;">
          <div class="bar"></div>
          <div class="content">
            <h2 style="--color:#0097AC;">Ehrenamtlicher Coach</h2>
            <h3>Code + Design Initiative e.V. - deutschlandweit</h3>
            <span>März 2018 - Februar 2019</span>
            <li>Eventmanagement</li>
            <li>Design Workshops</li>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

  .timeline {
    margin: 0 0;
  }

  .timeline-year {
    display: none;
  }

  .timeline-row {
    padding-top: 0;
  }

  .timeline-row {
    display: flex;
    flex-direction: column-reverse;
  }

  .timeline-headings {
    margin: 10px 0;
    padding: 10px 30px 10px 25px;
    background-color: var(--color-secondary-variant);
    max-width: 70vw;
    border-radius: 0 16px 16px 0;
  }

  .timeline-entry {
    margin: 0 25px;
    padding-bottom: 20px;
  }

  .content * {
    padding-top: 10px;
  }

  @media (max-width: 768px) {
    .timeline-entry {
      color: black;
    }
  }

  @media (min-width: 768px) {
    .timeline {
      width: 90%;
      max-width: 1600px;
      margin: 0 auto;
      position: relative;
    }

    .codeuni {
      margin-top: 36vh;
    }

    .timeline::before {
      content: "";
      position: absolute;
      top: 80px;
      bottom: 300px;
      left: 50%;
      width: 4px;
      background: black;
      transform: translateX(-50%);
      z-index: 1;
    }

    .timeline-year {
      text-align: center;
      font-size: 2.5rem;
      font-weight: bold;
      z-index: 2;
      position: relative;
      display: block;
    }

    .timeline-headings {
      display: none;
    }
    .timeline-row {
      justify-content: space-between;
      align-items: flex-start;
      padding-top: 40px;
      flex-direction: row;
    }

    .timeline-column {
      width: 45%;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .timeline-entry {
      position: relative;
      min-height: calc(var(--duration, 20) * 1vh);
      margin-bottom: calc(var(--gap, 36) * 1vh);
      
    }

    .timeline-entry h2 {
      color: var(--color);
    }

    .bar {
      position: absolute;
      width: 12px;
      height: 100%;
      background-color: var(--color);
      z-index: 2;
      border-radius: 10px;
    }

    .left .bar {
      right: -40px;
    }

    .right .bar {
      left: -40px;
    }

    .content {
      position: sticky;
      top: 25vh;
      background: none;
      z-index: 3;
      width: 100%;
    }

    .left .content {
      text-align: right;
    }

    .right .content {
      text-align: left;
    }

    .content h3 {
      margin: 0 0 0.3em;
      font-size: 1.2rem;
    }

    .content p {
      margin-top: 0.5em;
      line-height: 1.5;
    }
  }
</style>


<script>
export default {
    name: 'LebenslaufDesktop'
}
</script>