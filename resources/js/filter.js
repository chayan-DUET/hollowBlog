  import Vue from 'vue'
  import moment from 'moment'
  Vue.filter('timeformat', function (arg) {
   return moment(arg).format("MMM Do YYYY")
})

Vue.filter('shortlength',function(text,length,suffix){
	return text.substring(0,length)+suffix;
})