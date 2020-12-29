Vue.component('new-product', {
	props: ['obj'],
	template: `
		<div class="card my-card-product mx-sm-auto px-2" data-aos="zoom-in-up" data-aos-duration="1000">
				<a href="#"><img class="card-img-top my-img-product" :src="obj.img" alt="Card image cap"></a>
				<div class="card-body">
				  <div class="name-price d-flex justify-content-between">
				    <h6 class="card-title mb-0 py-2"><a class="name" href="#">{{obj.name}}</a></h6>
				    <span class="price-by-dolar">{{obj.price}}</span>
				  </div>
				  <p class="card-text text-muted type-pro">{{obj.type}}</p>
				  <div class="view-buy d-flex justify-content-end">
				    <div class="btn-view-buy mr-2">
				      <a href="#" class="first btn btn-outline-info" role="button" aria-pressed="true">VIEW</a>
				    </div>
				    <div class="btn-view-buy">
				      <a href="#" class="second btn btn-outline-info" role="button" aria-pressed="true">ADD TO CART</a>
				    </div>
				  </div>
				</div>
		</div>
	`
})

// Khoi tao doi tuong vue
var vue = new Vue({
	el: '.app',
	data: {
		listShop1: [
		{
			id: 1,
			img: 'assets/images/shop-1.jpg',
			name: 'GAMERS MOUSE',
			price: '$45.05',
			type: 'mouse'
		},
		{
			id: 2,
			img: 'assets/images/shop-2.jpg',
			name: 'USB 3.0 HUB',
			price: '$67.05',
			type: 'accessories'
		},
		{
			id: 3,
			img: 'assets/images/shop-3.jpg',
			name: 'LAPTOP POWER ADAPTER',
			price: '$47.05',
			type: 'accessories'
		},
		{
			id: 4,
			img: 'assets/images/shop-4.jpg',
			name: 'WI-FI ROUTER REPIETER',
			price: '$32.15',
			type: 'network'
		},
		{
			id: 5,
			img: 'assets/images/shop-5.jpg',
			name: '128GB SSD M.2',
			price: '$45.05',
			type: 'storage'
		},
		{
			id: 6,
			img: 'assets/images/shop-6.jpg',
			name: 'EXTERNAL HDD DRIVE',
			price: '$102.05',
			type: 'storage'
		},
		{
			id: 7,
			img: 'assets/images/shop-7.jpg',
			name: '10" OCTA CORE TABLET',
			price: '$145.99',
			type: 'tablet'
		},
		{
			id: 8,
			img: 'assets/images/shop-1.jpg',
			name: 'CABLE ORGANIZER',
			price: '$15.25',
			type: 'accessories'
		},
		]
	}
});
