<?php

namespace App\Http\Controllers;
use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
   public function add_category(Request $request){
	  // return $request->all();
	  $this->validate($request,[
	  'cat_name'=>'required|min:2|max:50'
	  ]);
	  $category=new Category();
	  $category->cat_name=$request->cat_name;
	  $category->save();
	  return ['massage'=>'ok'];
   }
   public function all_category(){
        $categories = Category::all();
        return response()->json([
            'categories'=>$categories
        ],200);
    }
	public function delete_category($id){
		//return $id;
		$category=Category::find($id);
		$category->delete();
		
	}
	public function edit_category($id){
		//return $id;
		$editcategory=Category::find($id);
		  return response()->json([
            'editcategory'=>$editcategory
        ],200);
	}
	public function update_category(Request $request, $id){
		 $this->validate($request,[
	  'cat_name'=>'required|min:2|max:50'
	  ]);
		
		$updateCategory=Category::find($id);
		//return $id;
		$updateCategory->cat_name=$request->cat_name;
		$updateCategory->save();
		
	}
}
