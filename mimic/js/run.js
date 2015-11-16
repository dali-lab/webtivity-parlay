/*
Vue.js is a light weight framework similar to angular.js
This is a file that runs vue.js on the web page - a simple framework
that can bind data and view together.
When a user is filling the form, this scipt will record the data. When
the user clicks the "submit" button, these data will be post to the server.

/-----------------****************-----------------/
To be modified:
data:
  1. friendsList should be connected with database and read from it
  2.
*/

new Vue({
  el: '#app',

  data: {
    componentsList: {
      parlay: false,
      photo: false,
      jc: false,
      sub: false,
    },

    fls: false,
    friendsList : [
      {name: "Jenny", gender: "girl" },
      {name: "Zach", gender: "boy"},
      {name: "Peter", gender: "boy"},
      {name: "James", gender: "boy"}
    ],

    parTypes: [
      {way: "photo", styleObject: {color: 'red'}},
      {way: "donate", styleObject: {color: 'red'}},
      {way: "transfer", styleObject: {color: 'red'}}
    ],

    submitData: {
      opponent: "+",
      parlayType: "default",
      judge: "default",
      parlayDate: "default"
    }
  },

  methods: {
    //Create a parlay step by step
    appear: function(op){
      if(op == "parlay") {
        this.componentsList.parlay = true;
        this.fls = false;
      } else if (op == "photo") {
        this.componentsList.photo = !this.componentsList.photo;
      } else if (op == "jc"){
        this.componentsList.jc = true;
      } else {
        this.componentsList.sub = true;
      }
    },

    // Pick your friend
    showFriendsList: function(){
      this.fls = true;
    },

    // Set the opponent
    setSubData: function(t,index){
      if(t == "opponent") {
        this.submitData.opponent = this.friendsList[index].name;
        this.appear("parlay");
      }
      if(t == "parlay") {
        this.submitData.parlayType = this.parTypes[index].way;
        this.parTypes[index].styleObject.color = 'blue';
        this.appear("jc");
      }
    },

    //submit the form - pop up a window here for testing
    subForm: function(){
      alert("You are playing with" + " " + this.submitData.opponent +
        " " + this.submitData.parlayType + "!"
      );
    }
  }
})
