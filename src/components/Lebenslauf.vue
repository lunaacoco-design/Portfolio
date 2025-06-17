<template lang="">
    <section class="timeline">
    <div class="timeline-year">Today</div>
    <div class="timeline-row">
    <!-- 1 Monat = 3 duration -->
      <!-- Linke Spalte -->
      <div class="timeline-column left">
        <div class="timeline-entry" style="--duration: 225; --color: #6a3ba5; --gap:36">
          <div class="bar"></div>
          <div class="content">
            <h3 style="color:#6a3ba5;">B.A. Interaction Design</h3>
            <strong>CODE University</strong><br>
            <span>September 2018 - November 2023</span>
            <p><strong>Bachelorarbeit:</strong> Supporting persons with disabilities in their application process<br>
               <strong>Abschlussprojekt:</strong> UX Metrics and KPIs for digital products</p>
          </div>
        </div>
        <div class="timeline-entry" style="--duration: 25; --color: #ff8800;">
          <div class="bar"></div>
          <div class="content">
            <h3 style="color:#ff8800;">Abitur</h3>
            <strong>Marienschule Euskirchen</strong><br>
            <span>2009 - 2017</span>
          </div>
        </div>
      </div>

      <!-- Rechte Spalte -->
      <div class="timeline-column right">
        <div class="timeline-entry" style="--duration: 39; --color: #0073e6; --gap: 27">
          <div class="bar"></div>
          <div class="content">
            <h3 style="color:#0073e6;">Werkstudent UX-Design</h3>
            <strong>SAP SE</strong><br>
            <span>Dezember 2023 - Januar 2025</span>
            <li>Redesign von digitalen Produkten zum neuen Theme</li>
            <li>Erstellung und Pflege der Figma Library</li>
          </div>
        </div>
        <div class="timeline-entry" style="--duration: 30; --color: #008000; --gap: 66">
          <div class="bar"></div>
          <div class="content">
            <h3 style="color:#008000;">Grafikdesigner</h3>
            <strong>Kalweit ITS GmbH</strong><br>
            <span>Juli 2021 - Februar 2023</span>
            <li>Betreuung der Social Media Kampagne</li>
            <li>Design von internen Dokumenten und Werbematerial</li>
          </div>
        </div>
        <div class="timeline-entry" style="--duration: 30; --color: #008000;">
          <div class="bar"></div>
          <div class="content">
            <h3 style="color:#008000;">Head of Marketing & PR</h3>
            <strong>Code + Design Initiative e.V.</strong><br>
            <span>Februar 2019 - Juli 2019</span>
            <li>Eventmanagement</li>
            <li>Social Media Kampagne</li>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
    body {
      margin: 0;
      font-family: sans-serif;
      background: #f9f9f9;
      color: #222;
    }

    .timeline {
      width: 90%;
      max-width: 1600px;
      margin: 100px auto;
      position: relative;
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
      margin-bottom: 100px;
      z-index: 2;
      position: relative;
    }

    .timeline-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
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
</style>


<script>
export default {
    name: 'Lebenslauf'
}
</script>