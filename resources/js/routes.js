import AdminHome from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/List.vue'
import AddCategory from './components/admin/category/New.vue'
import EditCategory from './components/admin/category/Edit.vue'
//post
import PostList from './components/admin/post/List.vue'
import AddPost from './components/admin/post/New.vue'
import EditPost from './components/admin/post/Edit.vue'


//frontEnd
import PublicHome from './components/public/PublicHome.vue'
import BlogPost from './components/public/blog/BlogPost.vue'

import about from './components/public/about.vue'
import service from './components/public/service.vue'
import contact from './components/public/contact.vue'
//import Ex from './components/ExampleComponent.vue'
export const routes = [
    { path: '/home',
      component: AdminHome },

    { path: '/category-list',
      component: CategoryList },

	{ path: '/add-category',
      component: AddCategory },

	{ path: '/edit-category/:categoryid',
      component: EditCategory },

	  //post
	{ path: '/post-list',
      component: PostList },

	{ path: '/add-post',
      component: AddPost },

	{ path: '/edit-post/:postid',
      component: EditPost },

     //{ path: '/post',
     //component: Ex }
 // { path: '/bar', component: Bar }




 //frontEnd
 { path: '/',
      component: PublicHome },
 { path: '/blog',
    component: BlogPost },
    { path: '/about',
    component: about },
    { path: '/service',
    component: service },
    { path: '/contact',
    component: contact },

]
