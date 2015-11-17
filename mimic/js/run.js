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
    jls: false,
    friendsList : [
      {name: "Jenny", gender: "girl", amtr: "img/1.png"},
      {name: "Zach", gender: "boy", amtr:"img/2.png"},
      {name: "Peter", gender: "boy", amtr:"img/3.png"},
      {name: "James", gender: "boy", amtr:"img/4.png"}
    ],

    judgeList: [

    ],

    parTypes: [
      {way: "photo", styleObject: {color: 'black', border: 'none'}},
      {way: "donate", styleObject: {color: 'black', border: 'none'}},
      {way: "transfer", styleObject: {color: 'black', border: 'none'}}
    ],

    submitData: {
      opponent: {name: "+", amtr: "img/add.png"},
      parlayType: "default",
      judge: "",
      parlayContent: "Write your parlay here"
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
    showList: function(l){
      if(l == "friends") {
        this.fls = true;
      }
      if(l == "judge") {
        this.jls = true;
      }
    },

    // Set the opponent
    setSubData: function(t,index){
      if(t == "opponent") {
        this.submitData.opponent = this.friendsList[index];
        this.judgeList = this.friendsList.slice();
        this.judgeList.splice(index,1);

        this.appear("parlay");
      }
      if(t == "parlay") {
        this.submitData.parlayType = this.parTypes[index].way;
        this.parTypes[index].styleObject = {
          color: 'red',
          border: 'solid red',
          padding: '2px 4px 2px 4px'
        };

        this.appear("jc");
      }
      if(t == "judge") {
        this.submitData.judge = this.judgeList[index].name;
        this.jls = false;

        this.appear('sub');
      }
    },

    //submit the form - pop up a window here for testing
    subForm: function(){
      alert("You are playing with" + " " + this.submitData.opponent.name +
        " " + this.submitData.parlayType + " ! " + this.submitData.parlayContent
        + " judged by " + this.submitData.judge
      );
    }
  }
})
