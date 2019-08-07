const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("테스트용 확인");
});

exports.logincheck = functions.https.onCall((data, context) => {

const email = context.auth.token.email || null;
const uid = context.auth.uid;
  console.log(email+"로그인")
  return {email};
});

exports.logoutcheck = functions.https.onCall((data, context) => {

const email = context.auth.token.email || null;
const uid = context.auth.uid;
  console.log(email+"로그아웃")
  return {email};
});

exports.portfolioNotification = functions.firestore
  .document("portfolios/{portfolios}")
  .onCreate(async event => {
     var msg = "New Portfolio : " + event.data().title;
     console.log(msg);
     return pushMessage(msg);
  });

exports.postNotification = functions.firestore
  .document("posts/{posts}")
  .onCreate(async event => {
     var msg = "New Post : " + event.data().title;
     console.log(msg);
     return pushMessage(msg);
  });

function pushMessage(msg) {
  var payload = {
    notification: {
      title: msg
    }
};

const users = admin.firestore().collection("userauth");

users
 .get()
 .then(snapshot => {
   snapshot.forEach(doc => {
     if (doc.data().deviceToken != null) {
       console.log(doc.data().deviceToken);
       token = doc.data().deviceToken;
       console.log("전송 : ", token);
       admin.messaging().sendToDevice(token, payload)
         .then(function(response) {
           console.log('메시지 전송 성공:', response);
         })
         .catch(function(error) {
           console.log('메시지 전송 실패:', error);
         });
     } else {
       console.log(doc.data().GRADE);
     }
   });
   return "모든 유저에게 메시지 전송";
 })
 .catch(error => {
   console.log("문서를 얻어오는데 실패했습니다", error);
 });
}
