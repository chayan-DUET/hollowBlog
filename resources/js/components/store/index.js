import axios from 'axios'
export default {
	state: {
    category:[
	{id:1,cat_name:'A',created_at:'12-12-2018'},
	{id:2,cat_name:'A',created_at:'12-12-2018'},
	{id:3,cat_name:'A',created_at:'12-12-2018'}
	],
	post:[],
	blogpost:[]
  },
  getters:{
	 getCategory(state){
		 return state.category
	 },
	 getPost(state){
		 return state.post
	 },
	  getblogPost(state){
		 return state.blogpost
	 }
  },
  actions:{
	reloadCategory(context){
		  axios.get('/category')
                   .then((response)=>{
                       console.log(response.data.categories);
					   context.commit('categories',response.data.categories)
                   })
                   .catch(()=>{
                   })
	},
   getAllPost(context){
	     axios.get('/post')
                   .then((response)=>{
                       console.log(response.data.posts);
					   context.commit('allposts',response.data.posts)
                   })
                   .catch(()=>{
                   })
   },
   getblogPost(context){
	     axios.get('/blogpost')
                   .then((response)=>{
                       //console.log(response.data.blogposts);
					   context.commit('getblogpost',response.data.posts)
                   })
                   .catch(()=>{
                   })
   }
  },
  mutations: {
  /* storeCategory(state,payload){
	state.category=payload;
    }, */
  categories(state,data){
	  return state.category=data;
   },
   allposts(state,payload){
	  return state.post=payload;
   },
    getblogpost(state,payload){
	  return state.blogpost=payload;
   }
   }
}