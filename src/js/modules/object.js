const object = () => {

    let kitchenProducts = [
        {
         type: 'grater',
         price: 10
        },
        {
         type: 'pastry-bag',
         price: 25
        },
        {
         type: 'scale',
         price: 5
        },
        {
         type: 'whisk',
         price: 15
        }
       ];
       
       let devicesProducts = [
        {
         type: 'desktop',
         price: [100,1000]
        },
        {
         type: 'laptop',
         price: [50,1500]
        },
        {
         type: 'smartphone',
         price: [80,2000]
        },
        {
         type: 'tablet',
         price: [20,1300]
        }
       ];
       
       let cosmeticsProducts = [
        {
         type: 'blush',
         price: 100
        },
        {
         type: 'eyeshadow',
         price: 50
        },
        {
         type: 'lipstick',
         price: 80
        },
        {
         type: 'nail-polish',
         price: 200
        },
        {
         type: 'perfume',
         price: 300,
        }
       ];


       let kitchen = {
            category: 'kitchen'
       }

       let device = {
            category: 'device'
       }

       let cosmetic = {
            category: 'cosmetic'
       }

       kitchenProducts[0] = Object.create(kitchen);
       kitchenProducts[0].type = 'grater';
       kitchenProducts[0].price = 10;


       console.log(kitchenProducts);
}

export default object;