import { createStore } from 'vuex'

export default createStore({
  state: {
    titleTask: '',
    descriptionTask: '',
    members: '',
    timeTask: null,
    apps: [],
    links: [
      {title: "1 step", href:"/first"},
      {title: "2 step", href:"/second"},
      {title: "3 step", href:"/third"},
      {title: "4 step", href:"/fourth"},
      {title: "5 step", href:"/fifth"},
      {title: "Final", href:"/final"},
    ]
  },
  mutations: {
    addTitle(state, title){
      state.titleTask = title;
      console.log(state);
    },
    addDescription(state, description){
      state.descriptionTask = description;
      console.log(state);
    },
    addTime(state, time){
      state.timeTask = time;
      console.log(state);
    },
    addMember(state, member){
      state.members = member;
      console.log(state);
    },
    addApps(state, apps){
      state.apps = apps;
    }
  }
})
