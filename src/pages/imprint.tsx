import {graphql, PageProps} from 'gatsby'
import React from 'react'

import {connectPage, Field} from '@jaenjs/jaen'
import {Layout} from '../components/Layout'
import {ImprintTemplate} from '../components/templates/ImprintTemplate'

const ImprintPage = connectPage(
  ({path}: PageProps) => {
    return (
      <Layout path={path}>
        <ImprintTemplate
          path="/Impressum"
          content={
            <Field.Text
              name="content"
              rtf
              defaultValue={`
<h2>
  <strong>AGT Gun Trade KG Impressum</strong>
</h2>
<p>Hauptsitz Ried im Innkreis</p>
<p>Wildfellnerstraße 22/1</p>
<p>4910, Ried im Innkreis</p>
<p>Österreich</p>
<p>&nbsp;</p>
<p>
  <strong>Kontaktdaten</strong>
</p>
<p>Telefon: +43 (0) 676 6510977</p>
<p>
  Weitere Kontakt Möglichkeiten <a href="/kontakt">Kontakt </a>.
</p>
<h2>
  <strong>Rechtliche Hinweise</strong>
</h2>
<p>UID: ATU77453827</p>
<p>Landesgericht Ried im Innkreis FN: 563839a</p>
<p>Inh. Patrick Türk</p>
<h2>Allgemeine Geschäftsbedingungen</h2>
<h2>
  <strong>Grundlegende Richtung der Website (Blattlinie)</strong>
</h2>
<p>
  Information über AGT Gun Trade KG, allgemeine Unternehmensinformationen
  sowie Informationen zu Produkten und Dienstleistungen des Unternehmens und
  Förderung des Absatzes derselben.
</p>
<p>&nbsp;</p>
<h2>
  <strong>Haftungsausschluss für Inhalte dieser Webseite</strong>
</h2>
<p>
  Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns,
  korrekte und aktuelle Informationen bereitzustellen. Es kann trotzdem
  nicht ausgeschlossen werden, dass Informationen unvollständig, nicht
  aktualisiert oder fehlerhaft sind. Leider können wir keine Haftung für die
  Korrektheit aller Inhalte auf dieser Webseite und für daraus resultierende
  Schäden übernehmen, speziell nicht für jene Inhalte die seitens Dritter
  bereitgestellt werden. Sollten Ihnen problematische oder rechtswidrige
  Inhalte auffallen, bitten wir Sie uns umgehend zu kontaktieren, Sie finden
  die Kontaktdaten obenstehend.
</p>
<p>&nbsp;</p>
<h2>
  <strong>Haftungsausschluss für Links auf dieser Webseite</strong>
</h2>
<p>
  Unsere Webseite enthält Hyperlinks (Links) zu anderen Webseiten, für deren
  Inhalt wir nicht verantwortlich sind und für die wir auch keine Haftung
  übernehmen können. Sollten Ihnen problematische oder rechtswidrige Links
  auf unserer Webseite auffallen, bitten wir Sie uns zu kontaktieren. Sie
  finden die Kontaktdaten obenstehend.
</p>
<p>&nbsp;</p>
<h2>
  <strong>Urheberrechtshinweis</strong>
</h2>
<p>
  Alle Inhalte (Bilder, Fotos, Texte, Videos etc.) auf dieser und den
  übrigen Seiten der AGT-Unternehmenshomepage sowie die Gestaltung der
  Seiten sind urheberrechtlich geschützt. Alle Rechte, insbesondere das
  Recht der Vervielfältigung, der Verbreitung und der Zur-Verfügung-Stellung
  sowie der Übersetzung sind der AGT Gun Trade KG vorbehalten. Kein Teil
  dieser Seiten darf in irgendeiner Form in welchem Verfahren auch immer
  ohne schriftliche Genehmigung der AGT Gun Trade KG reproduziert oder unter
  Verwendung elektronischer Systeme gespeichert, bearbeitet, vervielfältigt,
  verbreitet oder zur Verfügung gestellt werden. Der Download von Inhalten
  zum persönlichen, privaten und nicht-kommerziellen Gebrauch ist jedoch
  gestattet. Einzelne Seiten oder Inhalte können davon abweichend
  ausdrücklich weitergehende Nutzungsrechte einräumen. Falls notwendig,
  werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite
  rechtlich verfolgen.
</p>
<p>&nbsp;</p>
<h2>
  <strong>Bildernachweis</strong>
</h2>
<p>
  Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich
  geschützt. Die Bilderrechte liegen beim Medieninhaber der Webseite.
</p>
<p>&nbsp;</p>
<h2>
  <strong>Datenschutz</strong>
</h2>
<p>
  Informationen zum Datenschutz finden Sie in unserer{' '}
  <a href="./datenschutz">Datenschutzerklärung </a>.
</p>
<p>&nbsp;</p>
<h2>
  <strong>Allgemeine Geschäftsbedingungen</strong>
</h2>
<p>
  Informationen zum Datenschutz finden Sie in unserere{' '}
  <a href="./agb">AGB </a>.
</p>
`}
            />
          }
        />
      </Layout>
    )
  },
  {
    displayName: 'LegalPage'
  }
)

export const query = graphql`
  query($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default ImprintPage
