<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Post;
class BlogController extends Controller
{
    public function get_all_blog_post(){
		
		 $blogposts = Post::with('user','category')->orderBy('id','desc')->get();
        return response()->json([
            'posts'=>$blogposts
        ],200);
	}
}
