import app from 'firebase/app'
import 'firebase/firebase-firestore'

var config = {
    apiKey: "AIzaSyDL0LbsQ-YOujZPvB2n3GEu0CatuKKnCI4",
    authDomain: "crypto-a62fe.firebaseapp.com",
    databaseURL: "https://crypto-a62fe.firebaseio.com",
    projectId: "crypto-a62fe",
    storageBucket: "crypto-a62fe.appspot.com",
    messagingSenderId: "1031305262261",
    appId: "1:1031305262261:web:732e78c88803a25714bafc"
  };

  class Firebase {
      constructor() {
        app.initializeApp(config)
        this.db = app.firestore()
      }
      // Get all valuta
      async getCrypto() {
          const response = await this.db.collection('cryptocurrency').get()
          return response
      }
  }

  export default new Firebase()