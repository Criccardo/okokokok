# Mattia-cam, applicazione realizzata con ReactJS e NodeJS.

### Preparativi

Ho realizzato questa applicazione partendo da questa https://github.com/AGedu/mattiaCAM, che era l'applicazione originale realizzata appunto da Mattia. All'inizio non conoscevo ne React ne Node, per chi dovesse essere nella stessa situazione possono risultare utili i seguenti link: 
- sito ufficiale di React -> https://reactjs.org/
- documentazione ufficiale di React -> https://reactjs.org/docs/getting-started.html
- tutorial ufficiale di React -> https://reactjs.org/tutorial/tutorial.html
- download Node.js ( con anche npm integrato ) -> https://nodejs.org/it/download/

### Breve descrizione dell'applicazione

In origine l'applicazione permetteva la classificazione di immagini in modalità offline, e la classificazione di molteplici oggetti in tempo reale, utilizzando rispettivamente il modello [coco-ssd](https://www.npmjs.com/package/@tensorflow-models/coco-ssd "modello coco-ssd") e il modello [mobilenetV1](https://www.npmjs.com/package/@tensorflow-models/mobilenet "modello mobilenetV1"). Ho aggiunto 3 modelli, tutti funzionanti in modalità real time, e sono:
- [body-pix](https://www.npmjs.com/package/@tensorflow-models/body-pix "modello body-pix"), per la segmentazione del corpo
- [handpose](https://www.npmjs.com/package/@tensorflow-models/face-landmarks-detection "modello handpose"), per il rilevamento delle mani
- [face-landmarks-detection](https://www.npmjs.com/package/@tensorflow-models/face-landmarks-detection "modello face-landmarks-detection"), per la segmentazione facciale

Tutti i modelli TensorFlow possono essere visti al seguente link https://www.tensorflow.org/js/models.

Questa applicazione non salva dati degli utenti in quanto funziona in locale, prendendo dati ed elaborandoli, per poi mostrare in output i risultati. Da un punto di vista più tecnico, vengono adoperati modelli di IA semplici presenti nella piattaforma open souce TensorFlow, nella seguente modalità:

- caricamento del modello ( utilizzando algoritmi di stampo matematico )
- passaggio dei dati in input al modello
- elaborazione dei dati in base al proprio scopo
- caricamento delle previsioni ( risultati ) in output 

All'inizio, come per React e Node, non sapevo cosa fosse TensorFlow, ne come usare i suoi modelli, per questo possono risultare utili i link riportati sopra per capire il loro utilizzo e funzionamento.

### Operazioni per il download

Altra parte fondamentale per il funzionamento dell'applicazione, in caso la si voglia modificare o scaricare, sono le librerie di React e TensorFlow basate su Node, usate sia per la parte di costruzione della pagina web sia per la parte di machine learning.

Se si vuole scaricare il progetto in locale bisogna clonare il repository tramite il seguente comando ``` git clone https://github.com/Criccardo/okokokok.git ```, e successivamente, se si ha Node installato, ``` cd <nome cartella appena clonata> ``` per entrare nella cartella, ``` npm install ``` per installare le librerie e infine ``` npm start ``` per avviare l'applicazione. Le librerie TensorFlow da scaricare sono le seguenti: 

- ``` npx install @tensorflow-models/body-pix ``` 
- ``` npx install @tensorflow-models/handpose ```
- ``` npx install @tensorflow-models/coco-ssd ```
- ``` npx install @tensorflow-models/face-landmarks-detection ```
- ``` npx install @tensorflow-models/mobilenet ```

Le altre librerie sono le seguenti :

- ``` npx install react-bootstrap ```
- ``` npx install react-dom ```
- ``` npx install react-icons ```
- ``` npx install react-router-dom ```
- ``` npx install react-webcam ```
- ``` npx install styled-components ```

e se dovessero serivre, ci sono anche questi link utili in caso di errori o incomprensioni:

-
-

# inserire i link #
