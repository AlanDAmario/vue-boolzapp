const { createApp } = Vue;

myApp = createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
      activeContactIndex: 0,
      newMessage: "",
    };
  },
  methods: {
    //INDEX RIPRENDE IL NUMERO DELL OGGETTO DI ARRAY SCRITTO IN HTML DURANTE IL CICLO
    //setActiveContact(index): Questo metodo aggiorna activeContactIndex con l'indice del contatto selezionato. Questo permette di cambiare il contatto attivo quando un utente clicca su un contatto nella lista.
    setContactActive(index) {
      this.activeContactIndex = index;
    },
    getActiveContact() {
      return this.contacts[this.activeContactIndex];
    },
    //Questa funzione, getMessageClass, è utilizzata per determinare dinamicamente le classi CSS da applicare a ciascun messaggio all'interno della conversazione. Prende un singolo messaggio come argomento e restituisce un oggetto che mappa le classi CSS ai valori booleani in base allo stato del messaggio (inviato o ricevuto). In questo modo, possiamo applicare stili diversi ai messaggi inviati e ricevuti nella nostra interfaccia utente.
    getMessageClass(message) {
      return {
        "chat-user": message.status === "sent",
        "chat-friend": message.status === "received",
        "green-message": message.status === "sent",
      };
    },
    addMessage() {
      if (this.newMessage.trim()) {
        //GETACTIVE RIPRENDE L INDICE DA ACTIVECONTACT GRAZIE ALLA FUNZIONE FATTA PRIMA
        // Aggiunge un nuovo oggetto messaggio all'array dei messaggi del contatto attivo
        this.getActiveContact().messages.push({
          //imposta la data corrente attraverso data
          date: new Date().toLocaleString(),
          //impostiamo il valore del nuovo messaggio attraverso new message
          message: this.newMessage,
          //Imposta lo status del messaggio a 'sent' per indicare che è stato inviato
          status: "sent",
        });
        //resettiamo il campo di input una volta inviato
        this.newMessage = "";
      }
      // Aggiunge una risposta automatica dopo 1 secondo
      setTimeout(() => {
        this.getActiveContact().messages.push({
          date: new Date().toLocaleString(),
          message: 'ok',
          status: 'received'
        });
      }, 1000);
    },
  },
});
myApp.mount("#app");
