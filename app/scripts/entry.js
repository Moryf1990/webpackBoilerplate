// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import tiy from './app.js';

// Looks like the imported module was a function, because here we're executing it!
tiy();
import Backbone from 'backbone';
import $ from 'jquery';

const tshirts = [
  {
    id: 1,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Save my Trees",
    price: 19

  },
  {
    id: 2,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Nature Lover",
    price: 19

  },
  {
    id: 3,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Forrest Walk",
    price: 19

  }
]

	const basicView = Backbone.View.extend({
	initialize:function(i){	
		this.i = i;
	},
	template: function() {
		return `<div class="container">
		<span><i class="fa fa-share"></i></span>
		 
  <div class="box">
    <div class="image-placeholder"></div><img class="imgstyle" src="${tshirts[this.i].imageUrlFront}">
    	 <div class="refresh"><i class="fa fa-recycle"></i></div>
    	 <div class="refresh2"><i class="fa fa-heart"></i></div>
    	 <div class="refresh3"><p>XL</p></div>
    	 <div class="refresh4"><i class="fa fa-square-o"></i></div>
    	 <div class="refresh5"><i class="fa fa-shopping-cart"></i></i></div>
      
            <div class="title">${tshirts[this.i].title}</div>
            <div class="price">$${tshirts[this.i].price}</div>
    </div> <!-- End box Div -->
</div>`
		  
	},
	
	render:function(){
		this.$el.append(this.template());
		$('body').append(this.el)	
	}
});

var firstShirt = new basicView(0);
var secondShirt = new basicView(1);
var thirdShirt = new basicView(2);

firstShirt.render();
secondShirt.render();
thirdShirt.render();





