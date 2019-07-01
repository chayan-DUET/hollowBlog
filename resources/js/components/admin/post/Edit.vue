<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-10">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Edit Post{{this.$route.params.postid}}</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form"  enctype="multipart/form-data" @submit.prevent="updatePost()">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="categoryId">Edit Post</label>
                                    <input type="text" class="form-control" id="postId" placeholder="Add New Post"
									  v-model="form.title" name="title" :class="{ 'is-invalid': form.errors.has('title') }">
                                    <has-error :form="form" field="title"></has-error>
                                </div>
								 <div class="form-group">
                                    <label for="descriptionId">Add New Description</label>
									  <markdown-editor v-model="form.description"></markdown-editor>
									  
                                    <has-error :form="form" field="description"></has-error>
                                </div>
								 <div class="form-group">
								 <label for="cat_Id">Select Category</label>
                                    <select class="form-control" :class="{ 'is-invalid': form.errors.has('cat_Id') }" v-model="form.cat_id">
										  <option disabled value="">Select One</option>
										  <option :value="category.id" v-for="category in getallCategory">{{category.cat_name}}</option>
										</select>
									<has-error :form="form" field="cat_id"></has-error>
                                </div>
								 <div class="form-group">
                                    <label for="categoryId">Photo</label>
                                    <input @change="changePhoto($event)" name="photo" type ="file" :class="{ 'is-invalid': form.errors.has('photo') }">
                                    <img :src="updateImage()" alt="" width="80" height="80">
									<has-error :form="form" field="photo"></has-error>
                                </div>

                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" value="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card -->

                </div>

            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
</template>
<script>
export default{
name:'Edit',
data(){
return {
      // Create a new form instance
      form: new Form({
        title:'',
		description:'',
		cat_id:'',
		photo:'',
      })
    }

},
mounted(){
this.$store.dispatch("reloadCategory")
},
created(){
axios.get(`post/${this.$route.params.postid}`)
       .then((response)=>{
          this.form.fill(response.data.post)
                   })

},
computed:{
     getallCategory(){
           return this.$store.getters.getCategory
           }
},
 methods:{
           changePhoto(event){
		  // console.log(event)
		  let file = event.target.files[0];
		  if(file.size>1048576){
						  Swal({
				  type: 'error',
				  title: 'Oops...',
				  text: 'Something went wrong!',
				  footer: '<a href>Why do I have this issue?</a>'
				})
		  }
		  else{
		   let reader = new FileReader();
          reader.onload = event=> {
          this.form.photo=event.target.result
		  //console.log(event.target.result)
           };

  reader.readAsDataURL(file);
		  }
         
		   },
		   updatePost(){
		   //console.log(this.form.description)
		   this.form.post(`update/${this.$route.params.postid}`)
                .then(()=>{
			  	this.$router.push('/post-list')
				  
				  toast({
               type: 'success',
               title: 'Post Update successfully'
               })
			  })
			  
		   },
		updateImage(){
		let img=this.form.photo;
		if(img.length>100){
		return this.form.photo;
		}else{
		  return `uploadimage/${this.form.photo}`
		      }
		   }
        }
}
</script>