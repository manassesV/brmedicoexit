import firebase from 'firebase'


export default class Login{

    login(value, next, errorcode){
        firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(() => next(true))
        .catch(error =>  alert(error.message))
    }


    create(value, next, errorcode){
        firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(() => next(true))
        .catch(error => errorcode(error.message))
    }

    returnData(error, next){

            var user = firebase.auth().currentUser;
            var uid = user.uid;

            var data = firebase.database();

            data.ref(uid).ref.child("Quiz").on("value", function(snapshot) {
                  snapshot.forEach(function(data) {
                      next(data.val());

                });
            });

            //next(error);
   
    }
}
