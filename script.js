var config = {
    apiKey: "AIzaSyBsKHtlTYHlEqaCObfRamIgGi6acGFpwy4",
    authDomain: "to-do-vue-js.firebaseapp.com",
    databaseURL: "https://to-do-vue-js.firebaseio.com",
    projectId: "to-do-vue-js",
    storageBucket: "to-do-vue-js.appspot.com",
    messagingSenderId: "604220475976"
};
firebase.initializeApp(config);

var uploadStatus = document.getElementById("uploadStatus");
var fileButton = document.getElementById("fileUpload");

fileButton.addEventListener("change", function(e) {
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref("myfiles/"+file.name);
  var task = storageRef.put(file);

  task.on("state-changed",
    function progress(snapshot){
      var currentProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploadStatus.value = currentProgress;
    },
    function error(err) {
      console.log(err);
    },
    function complete() {

    });
});
