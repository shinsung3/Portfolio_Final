import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import store from "../store.js";
import "firebase/functions";

const POSTS = "posts";
const PORTFOLIOS = "portfolios";
const USERAUTH = "userauth";
const BACKGROUNDIMG = "background";
const COMMENTS = "comments";

// Setup Firebase
const config = {
  projectId: "halhalnolnol-9b318",
  authDomain: "halhalnolnol-9b318.firebaseapp.com",
  apiKey: "AIzaSyAzGXg4iu-1spk8IoCm-EwpqJYsNGemOFk",
  databaseURL: "https://halhalnolnol-9b318.firebaseio.com",
  storageBucket: "halhalnolnol-9b318.appspot.com"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const logincheck = firebase.functions().httpsCallable("logincheck");
const logoutcheck = firebase.functions().httpsCallable("logoutcheck");

//offline check
firebase
  .firestore()
  .enablePersistence()
  .catch(function(err) {
    if (err.code == "failed-precondition") {
      console.log(err);
    } else if (err.code == "unimplemented") {
      console.log(err);
    }
  });

function chkDup(email) {
  return firestore
    .collection(USERAUTH)
    .doc(email)
    .get()
    .then(doc => {
      if (doc.exists) {
        return true;
      } else {
        return false;
      }
    });
}

function setAuthorization(email, auth) {
  return firestore
    .collection(USERAUTH)
    .doc(email)
    .set({
      email,
      auth,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
}

function getAllUserAuth() {
  const userauthCollection = firestore.collection(USERAUTH);
  return userauthCollection
    .orderBy("created_at", "desc")
    .get()
    .then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        data.created_at = new Date(data.created_at.toDate());
        return data;
      });
    });
}

async function getUserAuth(email) {
  var users = await getAllUserAuth();
  var auth = "";
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      auth = users[i].auth;
    }
  }
  store.state.userauth = auth;
}

export default {
  getBackground() {
    const postsCollection = firestore.collection(BACKGROUNDIMG);
    return postsCollection
      .orderBy("created_at", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          data.created_at = new Date(data.created_at.toDate());
          return data;
        });
      });
  },
  postBackground(img) {
    return firestore.collection(BACKGROUNDIMG).add({
      img,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
  getPosts() {
    const postsCollection = firestore.collection(POSTS);
    return postsCollection
      .orderBy("created_at", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          data.id = doc.id;
          data.created_at = new Date(data.created_at.toDate());
          return data;
        });
      });
  },
  getPostByIndex(id) {
    const postsCollection = firestore.collection(POSTS).doc(id);
    return postsCollection.get().then(docSnapshots => {
      let data = docSnapshots.data();
      data.id = docSnapshots.id;
      return data;
    });
  },
  postPost(title, body, userId) {
    return firestore.collection(POSTS).add({
      title,
      body,
      userId,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
  getPortfolios() {
    const postsCollection = firestore.collection(PORTFOLIOS);
    return postsCollection
      .orderBy("created_at", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          data.id = doc.id;
          data.created_at = new Date(data.created_at.toDate());
          return data;
        });
      });
  },
  getPortfoliosByIndex(id) {
    const postsCollection = firestore.collection(PORTFOLIOS).doc(id);
    return postsCollection.get().then(docSnapshots => {
      let data = docSnapshots.data();
      data.id = docSnapshots.id;
      return data;
    });
  },
  postPortfolio(title, body, img, uk, language, complete, people) {
    return firestore.collection(PORTFOLIOS).add({
      title,
      body,
      img,
      uk,
      language,
      complete,
      people,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
//댓글기능
  comments(id, fk, text, writer) {
  //  console.log(id);
    return firestore.collection(PORTFOLIOS).doc(id).collection(COMMENTS).add({
      id,
      fk,
      text,
      writer,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
  getCommentsByIndex(id) {
    const commentsCollection = firestore.collection(PORTFOLIOS).doc(id).collection(COMMENTS);
    return commentsCollection
    .get()
    .then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        data.id = doc.id;
        data.created_at = new Date(data.created_at.toDate());
          console.log(data);
        return data;
      });
    });
  },
	getAuthorization() {
		const userauthCollection = firestore.collection(USERAUTH)
		return userauthCollection
			.orderBy('created_at', 'desc')
			.get()
			.then((docSnapshots) => {
				return docSnapshots.docs.map((doc) => {
					let data = doc.data()
					data.created_at = new Date(data.created_at.toDate())
					return data
				})
			})
	},
  modifyAuthorization(email, auth) {
    return firestore.collection(USERAUTH).doc(email).update({
      email,
      auth
    })
  },
	loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
      chkDup(user.email).then(res => {
        if(res == false) {
          setAuthorization(user.email, '방문자');
        }
      }) .catch(err => {
        console.log(err);
      });
			logincheck({})
			return result
		}).catch(function(error) {
			console.error('[Google Login Error]', error)
		})
	},
	loginWithFacebook() {
		let provider = new firebase.auth.FacebookAuthProvider();
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
      chkDup(user.email).then(res => {
        if(res == false) {
          setAuthorization(user.email, '방문자');
        }
      }) .catch(err => {
        console.log(err);
      });
			return result
		}).catch(function(error) {
			console.error('[Facebook Login Error]', error)
		})
	},
	Logout() {
		firebase.auth().signOut().then(function() {
      store.state.userauth = ''
			alert("로그아웃 되었습니다.")
		}).catch(function(error) {
  		alert("로그아웃 실패.")
		});
		logoutcheck({})
	},
	signUp(email, password) {
		firebase.auth().createUserWithEmailAndPassword(email, password).then(
			function(user) {
				alert("회원가입 축하합니다")
        chkDup(email).then(res => {
          if(res == false) {
            setAuthorization(email, '방문자');
          }
        }) .catch(err => {
          console.log(err);
        });
			},
			function(err) {
			 	alert("error, " + err.message);
			}
		);
	},

	signIn(email, password) {
		return firebase.auth().signInWithEmailAndPassword(email, password).then(
			function(user) {
				return user
			},
			function(err) {
				store.state.accessToken = '';
				alert("error, " + err.message)
			}
		);
	},
	loginPersistence() {
			firebase.auth().onAuthStateChanged(function(user) {
			  if (user) {
			    store.state.user = user;
					store.state.accessToken = user.email;
          getUserAuth(user.email);
			  }
			});
	}
}
