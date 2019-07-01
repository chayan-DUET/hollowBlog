<template>
    <div>
        <section class="content">
            <div class="row justify-content-around" >
                <div class="col-12 ">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Post List</h3>

                            <div class="card-tools">
                                <button class="btn btn-primary">
                                    <router-link to="/add-post" style="color:#fff"> Add New Post</router-link>
                                </button>
                            </div>
                        </div>

                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Title</th>
									<th>Description</th>
									<th>Photo</th>
									<th>Action</th>

                                </tr>
                                </thead>
                                <tbody>
								<tr v-for="(post,index) in allPost">
								<td>{{index+1}}</td>
								<td v-if="post.user">{{post.user.name}}</td>
								<td v-if="post.category">{{post.category.cat_name}}</td>
								<td>{{post.title | shortlength(10,"....")}}</td>
								<td>{{post.description | shortlength(40,"....")}}</td>
								<td><img :src="ourImage(post.photo)" alt="" width="40" heigth="50"></td>
								<td>
								<a href="" @click.prevent = "deletePost(post.id)" >Delete</a>
								<router-link :to="`/edit-post/${post.id}`">Edit</router-link>
								</td>
								</tr>

                             <!--   <tr v-for="(category,index) in getallCategory" :key="category.id">
                                    <td>{{index+1}}</td>
                                    <td>{{category.cat_name}}</td>
                                    <td>{{category.created_at | timeformat}}</td>
                                   <td>
                                        <router-link :to="`/edit-category/${category.id}`">Edit</router-link>
                                        <a href="" @click.prevent = "deletePost(post.id)" >Delete</a>
                                    </td>
									
                                </tr> -->
                                </tbody>


                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>

                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
    export default {
        name: "List",
        mounted(){
            this.$store.dispatch("getAllPost")

        },
        computed:{
           allPost(){
           return this.$store.getters.getPost
           }
        },
        methods:{
		ourImage(img){
		return "uploadimage/"+img;
		},
		
		deletePost(id){
		//console.log(id)
		 axios.get('/delete-post/'+id)
                   .then(()=>{
                        this.$store.dispatch("getAllPost")
                   })
		 toast({
         type: 'success',
         title: 'Post delete successfully'
})
		}
           
        }
    }
</script>