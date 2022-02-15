import axios from 'react-native-axios';

export const Axios = axios.create({
    baseURL: 'https://developers.zomato.com/',
    headers: { 'user-key': "7749b19667964b87a3efc739e254ada2" }
});


const pizza = [
    {
        "id": "ctl_274085939",
        "name": "Tomato Cheese Pizza",
        "price": 89,
        "min_price": 89,
        "max_price": 89,
        "default_price": 89,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/7fa/6495abce8eac95ccdcf2aa78a721e7fa.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/7fa/6495abce8eac95ccdcf2aa78a721e7fa.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "31 votes",
            "value": 3.48
        }
    },
    {
        "id": "ctl_274085940",
        "name": "Onion Cheese Pizza",
        "price": 110,
        "min_price": 110,
        "max_price": 110,
        "default_price": 110,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/v9p9ptcqjedfyrlu3tkv",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/v9p9ptcqjedfyrlu3tkv",
        "rating": {
            "total_rating_text": "99 votes",
            "value": 3.54
        }
    },
    {
        "id": "ctl_274085941",
        "name": "Capsicum Cheese Pizza",
        "price": 145,
        "min_price": 145,
        "max_price": 145,
        "default_price": 145,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/68f/b85265a519cda290e26414df1b2c368f.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/68f/b85265a519cda290e26414df1b2c368f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "104 votes",
            "value": 3.57
        }
    },
    {
        "id": "ctl_274085942",
        "name": "Corn Cheese Pizza",
        "price": 100,
        "min_price": 100,
        "max_price": 100,
        "default_price": 100,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/2d8/dac96c15b3a413734adb39b2890812d8.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/2d8/dac96c15b3a413734adb39b2890812d8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "84 votes",
            "value": 3.45
        }
    },
    {
        "id": "ctl_334186717",
        "name": "Double Cheese Margherita",
        "price": 0,
        "min_price": 210,
        "max_price": 580,
        "default_price": 210,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/1ae/2c375f84e4d6b6ed11d4f58b006691ae.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/1ae/2c375f84e4d6b6ed11d4f58b006691ae.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "107 votes",
            "value": 2.73
        }
    },
    {
        "id": "ctl_274085353",
        "name": "Simple Veg Pizza",
        "price": 0,
        "min_price": 210,
        "max_price": 549,
        "default_price": 210,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/7a3/1799af9c85c649d2bd83c4ffe8caa7a3.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/7a3/1799af9c85c649d2bd83c4ffe8caa7a3.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "20 votes",
            "value": 2.66
        }
    },
    {
        "id": "ctl_274085358",
        "name": "Fresh Evergreen Pizza",
        "price": 0,
        "min_price": 229,
        "max_price": 529,
        "default_price": 229,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/v9p9ptcqjedfyrlu3tkv",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/v9p9ptcqjedfyrlu3tkv",
        "rating": {
            "total_rating_text": "137 votes",
            "value": 3.11
        }
    },
    {
        "id": "ctl_274085355",
        "name": "Fresh Delight Pizza",
        "price": 0,
        "min_price": 199,
        "max_price": 549,
        "default_price": 229,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/bee/116cc17a1a38ad5ed7d9622709f75bee.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/bee/116cc17a1a38ad5ed7d9622709f75bee.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "40 votes",
            "value": 2.93
        }
    },
    {
        "id": "ctl_274085356",
        "name": "Fresh Deluxe Pizza with Peri Peri Masala",
        "price": 0,
        "min_price": 219,
        "max_price": 499,
        "default_price": 219,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/50d/708857dae1ef19cf80e2562609f4450d.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/50d/708857dae1ef19cf80e2562609f4450d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "118 votes",
            "value": 3.36
        }
    },
    {
        "id": "ctl_274085357",
        "name": "Fresh Healthy Pizza",
        "price": 0,
        "min_price": 230,
        "max_price": 599,
        "default_price": 230,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/e72/fcba3c3eff7be8875a52176d0c77fe72.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/e72/fcba3c3eff7be8875a52176d0c77fe72.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "86 votes",
            "value": 3.05
        }
    },
    {
        "id": "ctl_274085359",
        "name": "Fresh Paneer Pizza",
        "price": 0,
        "min_price": 218,
        "max_price": 529,
        "default_price": 218,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/v9p9ptcqjedfyrlu3tkv",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/v9p9ptcqjedfyrlu3tkv",
        "rating": {
            "total_rating_text": "41 votes",
            "value": 3.29
        }
    },
    {
        "id": "ctl_274085456",
        "name": "Veggie Overloaded Pizza",
        "price": 0,
        "min_price": 249,
        "max_price": 599,
        "default_price": 249,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/afd/60f2c5ca4a9a5cfb792bc5b6b3234afd.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/afd/60f2c5ca4a9a5cfb792bc5b6b3234afd.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "122 votes",
            "value": 2.51
        }
    },
    {
        "id": "ctl_274085457",
        "name": "Paneer Overloaded Pizza",
        "price": 0,
        "min_price": 255,
        "max_price": 649,
        "default_price": 255,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/50d/708857dae1ef19cf80e2562609f4450d.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/50d/708857dae1ef19cf80e2562609f4450d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "396 votes",
            "value": 3.23
        }
    }
]

const burger = [
    {
        "id": "ctl_136935443",
        "name": "Veg Maharaja Burger",
        "price": 210,
        "min_price": 210,
        "max_price": 215,
        "default_price": 210,
        "item_image_url": 'https://b.zmtcdn.com/data/dish_photos/7ea/1b402072c08d7741b775fd53dd66c7ea.jpg',
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/7ea/1b402072c08d7741b775fd53dd66c7ea.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "11 votes",
            "value": 3.43
        }
    },
    {
        "id": "ctl_136935433",
        "name": "Aloo Tikki Cheese Burger",
        "price": 90,
        "min_price": 90,
        "max_price": 95,
        "default_price": 90,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/opribt7sjqq712icbby9",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/opribt7sjqq712icbby9",
        "rating": {
            "total_rating_text": "11 votes",
            "value": 3.43
        }
    },
    {
        "id": "ctl_274085006",
        "name": "Chilli Burger",
        "price": 100,
        "min_price": 100,
        "max_price": 100,
        "default_price": 100,
        "item_image_url": 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/glywy0un5ocz2l5tfyzl',
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/glywy0un5ocz2l5tfyzl",
        "rating": {
            "total_rating_text": "11 votes",
            "value": 3.43
        }
    },
    {
        "id": "ctl_274085007",
        "name": "Masala Burger",
        "price": 120,
        "min_price": 120,
        "max_price": 120,
        "default_price": 120,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/909/bf51faa90860eded53ec64890ce79909.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/909/bf51faa90860eded53ec64890ce79909.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "22 votes",
            "value": 3.64
        }
    },
    {
        "id": "ctl_334186164",
        "name": "Double Patty Burger",
        "price": 99,
        "min_price": 99,
        "max_price": 99,
        "default_price": 99,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mjmhgzid113wvfzbdjyp",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mjmhgzid113wvfzbdjyp",
        "rating": {
            "total_rating_text": "22 votes",
            "value": 3.64
        }
    },
    {
        "id": "ctl_334186243",
        "name": "Veg Cheese Bruger",
        "price": 99,
        "min_price": 99,
        "max_price": 99,
        "default_price": 99,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a2mjzowcv1lvwo6yli6d",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a2mjzowcv1lvwo6yli6d",
        "rating": {
            "total_rating_text": "15 votes",
            "value": 3.61
        }
    },
    {
        "id": "ctl_334188212",
        "name": "Corn Topping",
        "price": 109,
        "min_price": 109,
        "max_price": 109,
        "default_price": 109,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/909/bf51faa90860eded53ec64890ce79909.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/909/bf51faa90860eded53ec64890ce79909.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "22 votes",
            "value": 3.64
        }
    },
    {
        "id": "ctl_334187672",
        "name": "Paneer Burger",
        "price": 120,
        "min_price": 120,
        "max_price": 120,
        "default_price": 120,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fzsqocohnsfsjbzumzwh",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fzsqocohnsfsjbzumzwh",
        "rating": {
            "total_rating_text": "15 votes",
            "value": 3.61
        }
    },
    {
        "id": "ctl_389615621",
        "name": "Veg Overload Burger",
        "price": 149,
        "min_price": 149,
        "max_price": 149,
        "default_price": 149,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pjigc73gfnqadi5p1jja",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pjigc73gfnqadi5p1jja",
        "rating": {
            "total_rating_text": "15 votes",
            "value": 3.61
        }
    }
]


const pasta = [
    {
        "id": "ctl_274086453",
        "name": "Baked Black Olives Pasta",
        "price": 0,
        "min_price": 170,
        "max_price": 310,
        "default_price": 170,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/e58/3af8fa8ffa34d2f130d555b68a9d4e58.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/e58/3af8fa8ffa34d2f130d555b68a9d4e58.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "22 votes",
            "value": 3.64
        }
    },
    {
        "id": "ctl_274086455",
        "name": "Baked Peri Peri Paneer Pasta",
        "price": 0,
        "min_price": 180,
        "max_price": 329,
        "default_price": 180,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/t2ed91wh6autpyonmbom",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/t2ed91wh6autpyonmbom",
        "rating": {
            "total_rating_text": "78 votes",
            "value": 2.64
        }
    },
    {
        "id": "ctl_274086456",
        "name": "Baked Full Vegetables Pasta",
        "price": 0,
        "min_price": 180,
        "max_price": 329,
        "default_price": 180,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nuahfgpub9efdrne5zj8",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nuahfgpub9efdrne5zj8",
        "rating": {
            "total_rating_text": "15 votes",
            "value": 3.61
        }
    },
    {
        "id": "ctl_274086695",
        "name": "White Sauce Penne Pasta",
        "price": 0,
        "min_price": 149,
        "max_price": 288,
        "default_price": 149,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fuy0pomhg1qw82ma8kqr",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fuy0pomhg1qw82ma8kqr",
        "rating": {
            "total_rating_text": "115 votes",
            "value": 4.1
        }
    },
    {
        "id": "ctl_274086696",
        "name": "Red Sauce Penne Pasta",
        "price": 0,
        "min_price": 149,
        "max_price": 288,
        "default_price": 149,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wt17dfcdaczgxrf8dpsl",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wt17dfcdaczgxrf8dpsl",
        "rating": {
            "total_rating_text": "176 votes",
            "value": 4.24
        }
    },
    {
        "id": "ctl_274086697",
        "name": "Mixed Sauce Penne Pasta",
        "price": 0,
        "min_price": 149,
        "max_price": 288,
        "default_price": 149,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fzhxc7evj2ob7cvrkoge",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fzhxc7evj2ob7cvrkoge",
        "rating": {
            "total_rating_text": "110 votes",
            "value": 3.78
        }
    },
    {
        "id": "ctl_274086698",
        "name": "Cheese Sauce Penne Pasta",
        "price": 0,
        "min_price": 159,
        "max_price": 299,
        "default_price": 159,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/e58/3af8fa8ffa34d2f130d555b68a9d4e58.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/e58/3af8fa8ffa34d2f130d555b68a9d4e58.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "221 votes",
            "value": 3.99
        }
    },
    {
        "id": "ctl_274090788",
        "name": "Tandoori Sauce Penne Pasta",
        "price": 0,
        "min_price": 169,
        "max_price": 320,
        "default_price": 169,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/csnrsoimbz7q4iow9fuh",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/csnrsoimbz7q4iow9fuh",
        "rating": {
            "total_rating_text": "1000 votes",
            "value": 4.0
        }
    },
]

const paratha = [
    {
        "id": "ctl_215029406",
        "name": "Sada Paratha",
        "price": 50,
        "min_price": 50,
        "max_price": 50,
        "default_price": 50,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/ba4/35317ee29b45733e6daf5fdd3f451ba4.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/ba4/35317ee29b45733e6daf5fdd3f451ba4.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "119 votes",
            "value": 3.67
        }
    },
    {
        "id": "ctl_215029407",
        "name": "Aloo Parantha",
        "price": 70,
        "min_price": 70,
        "max_price": 85,
        "default_price": 70,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e1yq27rl8kvwelqly4bl",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e1yq27rl8kvwelqly4bl",
        "rating": {
            "total_rating_text": "1290 votes",
            "value": 4.22
        }
    },
    {
        "id": "ctl_215029408",
        "name": "Aloo Pyaz Parantha",
        "price": 75,
        "min_price": 75,
        "max_price": 90,
        "default_price": 75,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/5b5/668064be9cfaabf96dccd7294023d5b5.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/5b5/668064be9cfaabf96dccd7294023d5b5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "3215 votes",
            "value": 4.02
        }
    },
    {
        "id": "ctl_215029409",
        "name": "Gobi Parantha",
        "price": 80,
        "min_price": 80,
        "max_price": 95,
        "default_price": 80,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/ddf/49b8c26b7291c4f5aed45c449cd6cddf.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/ddf/49b8c26b7291c4f5aed45c449cd6cddf.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "678 votes",
            "value": 3.76
        }
    },
    {
        "id": "ctl_215029410",
        "name": "Mooli Parantha",
        "price": 80,
        "min_price": 80,
        "max_price": 95,
        "default_price": 80,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yyti68p44iasoazcbiwl",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yyti68p44iasoazcbiwl",
        "rating": {
            "total_rating_text": "117 votes",
            "value": 3.61
        }
    },
    {
        "id": "ctl_215029411",
        "name": "Pyaz Parantha",
        "price": 80,
        "min_price": 80,
        "max_price": 95,
        "default_price": 80,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/b2e/deddc8e195715eb0d969d954e3a8eb2e.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/b2e/deddc8e195715eb0d969d954e3a8eb2e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "304 votes",
            "value": 3.94
        }
    },
    {
        "id": "ctl_215029415",
        "name": "Gobi Pyaz Parantha",
        "price": 85,
        "min_price": 85,
        "max_price": 100,
        "default_price": 85,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/0aa/871c1aeaca8aeeafd0857072ad8170aa.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/0aa/871c1aeaca8aeeafd0857072ad8170aa.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "326 votes",
            "value": 3.62
        }
    },
    {
        "id": "ctl_215029416",
        "name": "Mooli Pyaz Parantha",
        "price": 85,
        "min_price": 85,
        "max_price": 100,
        "default_price": 85,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rcarghhlmmbffwwp6wok",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rcarghhlmmbffwwp6wok",
        "rating": {
            "total_rating_text": "22 votes",
            "value": 2.93
        }
    },
    {
        "id": "ctl_215029412",
        "name": "Paneer Parantha",
        "price": 90,
        "min_price": 90,
        "max_price": 105,
        "default_price": 90,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/22e/baffa987fc33f1798a76ad1c2a99d22e.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/22e/baffa987fc33f1798a76ad1c2a99d22e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "26 votes",
            "value": 3.38
        }
    },
    {
        "id": "ctl_215029413",
        "name": "Mixed Parantha",
        "price": 95,
        "min_price": 95,
        "max_price": 110,
        "default_price": 95,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/ddf/49b8c26b7291c4f5aed45c449cd6cddf.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/ddf/49b8c26b7291c4f5aed45c449cd6cddf.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "1014 votes",
            "value": 4.05
        }
    },
    {
        "id": "ctl_215029414",
        "name": "Paneer Pyaz Parantha",
        "price": 95,
        "min_price": 95,
        "max_price": 110,
        "default_price": 95,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rzoum5d8emvovx7b6lre",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rzoum5d8emvovx7b6lre",
        "rating": {
            "total_rating_text": "687 votes",
            "value": 3.97
        }
    },
    {
        "id": "ctl_215029417",
        "name": "Sada Egg Parantha",
        "price": 85,
        "min_price": 85,
        "max_price": 100,
        "default_price": 85,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/41a/dcd647bbeeb5338842d9e917a40ec41a.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/41a/dcd647bbeeb5338842d9e917a40ec41a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "147 votes",
            "value": 3.86
        }
    },
    {
        "id": "ctl_215029419",
        "name": "Aloo Egg Pyaz Parantha",
        "price": 100,
        "min_price": 100,
        "max_price": 115,
        "default_price": 100,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/fcc/7a9dad8d679be5f714d57f316fb2ffcc.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/fcc/7a9dad8d679be5f714d57f316fb2ffcc.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "318 votes",
            "value": 4.11
        }
    },
    {
        "id": "ctl_215029422",
        "name": "Pyaz Egg Parantha",
        "price": 105,
        "min_price": 105,
        "max_price": 120,
        "default_price": 105,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dwaicawlm6vlbesmigqn",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dwaicawlm6vlbesmigqn",
        "rating": {
            "total_rating_text": "63 votes",
            "value": 4.27
        }
    },
    {
        "id": "ctl_215029423",
        "name": "Paneer Egg Parantha",
        "price": 115,
        "min_price": 115,
        "max_price": 130,
        "default_price": 115,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/51d/0c75ae0f07d059302b236552cf81251d.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/51d/0c75ae0f07d059302b236552cf81251d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "99 votes",
            "value": 3.92
        }
    },
    {
        "id": "ctl_215029424",
        "name": "Mixed Egg Parantha",
        "price": 120,
        "min_price": 120,
        "max_price": 135,
        "default_price": 120,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/4d7/a88312fe5443c5c27eeeaebdbc9f04d7.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/4d7/a88312fe5443c5c27eeeaebdbc9f04d7.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "22 votes",
            "value": 4.18
        }
    },

]

const momos = [
    {
        "id": "ctl_182894207",
        "name": "Dry Veg Momos",
        "price": 100,
        "min_price": 100,
        "max_price": 100,
        "default_price": 100,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/d22/217bb69152527dec51bb1328c0e62d22.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/d22/217bb69152527dec51bb1328c0e62d22.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "26 votes",
            "value": 3.45
        }
    },
    {
        "id": "ctl_182894208",
        "name": "Dry Paneer Momos",
        "price": 140,
        "min_price": 140,
        "max_price": 140,
        "default_price": 140,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ijflmza26zzn6jr96niy",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ijflmza26zzn6jr96niy",
        "rating": {
            "total_rating_text": "26 votes",
            "value": 3.38
        }
    },
    {
        "id": "ctl_182894210",
        "name": "Afghani Veg Momos",
        "price": 120,
        "min_price": 120,
        "max_price": 120,
        "default_price": 120,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kd4l52v1yiblwpatuai5",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kd4l52v1yiblwpatuai5",
        "rating": {
            "total_rating_text": "26 votes",
            "value": 3.38
        }
    },
    {
        "id": "ctl_182894214",
        "name": "Cocktail Paneer Momos",
        "price": 160,
        "min_price": 160,
        "max_price": 160,
        "default_price": 160,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aqbqavvzlagxcsgmuyb6",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aqbqavvzlagxcsgmuyb6",
        "rating": {
            "total_rating_text": "26 votes",
            "value": 3.38
        }
    },
    {
        "id": "ctl_182894211",
        "name": "Afghani Paneer Momos",
        "price": 160,
        "min_price": 160,
        "max_price": 160,
        "default_price": 160,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jii7eezyvgjgylai9141",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jii7eezyvgjgylai9141",
        "rating": {
            "total_rating_text": "26 votes",
            "value": 3.38
        }
    },
    {
        "id": "ctl_182894213",
        "name": "Cocktail Veg Momos",
        "price": 120,
        "min_price": 120,
        "max_price": 120,
        "default_price": 120,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lohztjhuin9thc1bbtl5",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lohztjhuin9thc1bbtl5",
        "rating": {
            "total_rating_text": "26 votes",
            "value": 3.38
        }
    },
    {
        "id": "ctl_182894216",
        "name": "Veg Achaari Momos",
        "price": 120,
        "min_price": 120,
        "max_price": 120,
        "default_price": 120,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/z9xhedvze9my99p0nxna",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/z9xhedvze9my99p0nxna",
        "rating": {
            "total_rating_text": "26 votes",
            "value": 3.38
        }
    },
    {
        "id": "ctl_182894217",
        "name": "Paneer Momos Achaari",
        "price": 160,
        "min_price": 160,
        "max_price": 160,
        "default_price": 160,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cf9qvyjuapofi6raoryr",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cf9qvyjuapofi6raoryr",
        "rating": {
            "total_rating_text": "26 votes",
            "value": 3.38
        }
    },
    {
        "id": "ctl_182894219",
        "name": "Dry Chicken Momos",
        "price": 140,
        "min_price": 140,
        "max_price": 140,
        "default_price": 140,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ud7xkwwhnopccdog7uot",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ud7xkwwhnopccdog7uot",
        "rating": {
            "total_rating_text": "26 votes",
            "value": 3.38
        }
    },
    {
        "id": "ctl_182894221",
        "name": "Afghani Chicken Momos",
        "price": 160,
        "min_price": 160,
        "max_price": 160,
        "default_price": 160,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zlcrjrhh0v0bqvhr5y92",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zlcrjrhh0v0bqvhr5y92",
        "rating": {
            "total_rating_text": "110 votes",
            "value": 3.38
        }
    },
    {
        "id": "ctl_182894223",
        "name": "Cocktail Chicken Momos",
        "price": 160,
        "min_price": 160,
        "max_price": 160,
        "default_price": 160,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ziwgoa30ef99rhvfqmwx",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ziwgoa30ef99rhvfqmwx",
        "rating": {
            "total_rating_text": "333 votes",
            "value": 3.30
        }
    },
    {
        "id": "ctl_182894225",
        "name": "Chicken Achaari Momos",
        "price": 160,
        "min_price": 160,
        "max_price": 160,
        "default_price": 160,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/omifi5jwbtvtppbhhrog",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/omifi5jwbtvtppbhhrog",
        "rating": {
            "total_rating_text": "123 votes",
            "value": 4.41
        }
    },
    {
        "id": "ctl_182894227",
        "name": "Crispy Veg Momos",
        "price": 120,
        "min_price": 120,
        "max_price": 125,
        "default_price": 120,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sumbmmslumk5irc81fjn",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sumbmmslumk5irc81fjn",
        "rating": {
            "total_rating_text": "321 votes",
            "value": 3.00
        }
    },
    {
        "id": "ctl_182894228",
        "name": "Crispy Paneer Momos",
        "price": 160,
        "min_price": 160,
        "max_price": 160,
        "default_price": 160,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/e59/f2b1c32a3094d1651653375cb5baae59.png",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/e59/f2b1c32a3094d1651653375cb5baae59.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "276 votes",
            "value": 2.98
        }
    },
    {
        "id": "ctl_182894233",
        "name": "Pizza Veg Momos",
        "price": 140,
        "min_price": 140,
        "max_price": 140,
        "default_price": 140,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/421/71de46ff36f3fef431db5c1c4a503421.png",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/421/71de46ff36f3fef431db5c1c4a503421.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "231 votes",
            "value": 3.71
        }
    },
    {
        "id": "ctl_182894234",
        "name": "Pizza Paneer Momos",
        "price": 180,
        "min_price": 180,
        "max_price": 180,
        "default_price": 180,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ftnhlozjcjb6z37kvnq3",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ftnhlozjcjb6z37kvnq3",
        "rating": {
            "total_rating_text": "86 votes",
            "value": 2.00
        }
    },
    {
        "id": "ctl_182894236",
        "name": "Chilli Veg Momos",
        "price": 120,
        "min_price": 120,
        "max_price": 120,
        "default_price": 120,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/e44/04cb826b519740366afb71445b6a7e44.png",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/e44/04cb826b519740366afb71445b6a7e44.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "77 votes",
            "value": 3.89
        }
    },
    {
        "id": "ctl_182894243",
        "name": "Crispy Chicken Tikka Momos",
        "price": 180,
        "min_price": 180,
        "max_price": 180,
        "default_price": 180,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/58a/5a042a2ebddf36269b10585b4fdf458a.png",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/58a/5a042a2ebddf36269b10585b4fdf458a.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "150 votes",
            "value": 2.76
        }
    },
    {
        "id": "ctl_182894246",
        "name": "Chicken Momos [6 Pieces]",
        "price": 180,
        "min_price": 180,
        "max_price": 180,
        "default_price": 180,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aqbqavvzlagxcsgmuyb6",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aqbqavvzlagxcsgmuyb6",
        "rating": {
            "total_rating_text": "90 votes",
            "value": 3.98
        }
    }
]

const bakery = [
    {
        "id": "ctl_403734320",
        "name": "Tandoori Roti",
        "price": 17,
        "min_price": 17,
        "max_price": 17,
        "default_price": 17,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/e59/a396667da6d8b795d53a23fd0193ee59.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/e59/a396667da6d8b795d53a23fd0193ee59.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "107 votes",
            "value": 4.21
        }
    },
    {
        "id": "ctl_403734319",
        "name": "Rumali Roti",
        "price": 20,
        "min_price": 20,
        "max_price": 20,
        "default_price": 20,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/a5e/f29e722028ba224ef11cdb2a40c39a5e.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/a5e/f29e722028ba224ef11cdb2a40c39a5e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "60 votes",
            "value": 3.81
        }
    },
    {
        "id": "ctl_403734321",
        "name": "Butter Roti",
        "price": 20,
        "min_price": 20,
        "max_price": 20,
        "default_price": 20,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/776/66095368fed766a21ab522d95b8bb776.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/776/66095368fed766a21ab522d95b8bb776.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "167 votes",
            "value": 3.57
        }
    },
    {
        "id": "ctl_403734322",
        "name": "Plain Naan",
        "price": 35,
        "min_price": 35,
        "max_price": 35,
        "default_price": 35,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/a5e/f29e722028ba224ef11cdb2a40c39a5e.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/a5e/f29e722028ba224ef11cdb2a40c39a5e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "12 votes",
            "value": 2.8
        }
    },
    {
        "id": "ctl_403734323",
        "name": "Butter Naan",
        "price": 40,
        "min_price": 40,
        "max_price": 40,
        "default_price": 40,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/60a/a9dde6531226c4a7fff7427a3bc9260a.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/60a/a9dde6531226c4a7fff7427a3bc9260a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "168 votes",
            "value": 3.44
        }
    },
    {
        "id": "ctl_403734324",
        "name": "Lachha Paratha",
        "price": 40,
        "min_price": 40,
        "max_price": 40,
        "default_price": 40,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/ddf/49b8c26b7291c4f5aed45c449cd6cddf.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/ddf/49b8c26b7291c4f5aed45c449cd6cddf.jpg",
        "rating": {
            "total_rating_text": "66 votes",
            "value": 3.1
        }
    },
    {
        "id": "ctl_403734325",
        "name": "Missi Roti",
        "price": 40,
        "min_price": 40,
        "max_price": 40,
        "default_price": 40,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vtnuh8a0immc7z88jlbg",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vtnuh8a0immc7z88jlbg",
        "rating": {
            "total_rating_text": "45 votes",
            "value": 3.94
        }
    },
    {
        "id": "ctl_403734326",
        "name": "Onion Missi Roti",
        "price": 45,
        "min_price": 45,
        "max_price": 45,
        "default_price": 45,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pvcrya17546kw8l0dgps",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pvcrya17546kw8l0dgps",
        "rating": {
            "total_rating_text": "110 votes",
            "value": 3.83
        }
    },
    {
        "id": "ctl_403734327",
        "name": "Ajwain Paratha",
        "price": 45,
        "min_price": 45,
        "max_price": 45,
        "default_price": 45,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ldiem11y2lfn0owvxluu",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ldiem11y2lfn0owvxluu",
        "rating": {
            "total_rating_text": "123 votes",
            "value": 3.83
        }
    },
    {
        "id": "ctl_403734335",
        "name": "Paneer Paratha",
        "price": 75,
        "min_price": 75,
        "max_price": 75,
        "default_price": 75,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/biqscg1mltq1nbg1x8qh",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/biqscg1mltq1nbg1x8qh",
        "rating": {
            "total_rating_text": "67 votes",
            "value": 3.61
        }
    },
    {
        "id": "ctl_403734336",
        "name": "Aloo Naan",
        "price": 55,
        "min_price": 55,
        "max_price": 55,
        "default_price": 55,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nhufnin79xybzfsxoydh",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nhufnin79xybzfsxoydh",
        "rating": {
            "total_rating_text": "56 votes",
            "value": 3.61
        }
    },
    {
        "id": "ctl_403734337",
        "name": "Onion Naan",
        "price": 55,
        "min_price": 55,
        "max_price": 55,
        "default_price": 55,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ziut33ivgwn3pygy7rfo",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ziut33ivgwn3pygy7rfo",
        "rating": {
            "total_rating_text": "89 votes",
            "value": 2.52
        }
    },
    {
        "id": "ctl_403734338",
        "name": "Mixed Veg Stuffed Naan",
        "price": 65,
        "min_price": 65,
        "max_price": 65,
        "default_price": 65,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gqcgufm4excpyo9jczq1",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gqcgufm4excpyo9jczq1",
        "rating": {
            "total_rating_text": "22 votes",
            "value": 3.22
        }
    },
    {
        "id": "ctl_403734339",
        "name": "Paneer Naan",
        "price": 75,
        "min_price": 75,
        "max_price": 75,
        "default_price": 75,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lthzzstyfix5jwexyxhf",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lthzzstyfix5jwexyxhf",
        "rating": {
            "total_rating_text": "10 votes",
            "value": 3.87
        }
    }
]

const noodles = [
    {
        "id": "ctl_410413803",
        "name": "Hakka Noodles",
        "price": 0,
        "min_price": 65,
        "max_price": 110,
        "default_price": 65,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/e75/aaa1c6013d16077b6abc1243faa91e75.png",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/e75/aaa1c6013d16077b6abc1243faa91e75.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "10 votes",
            "value": 2.58
        }
    },
    {
        "id": "ctl_410423766",
        "name": "Chilli Mushroom Dry",
        "price": 210,
        "min_price": 210,
        "max_price": 210,
        "default_price": 210,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/atvs7qrl3lioy9x0kg3j",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/atvs7qrl3lioy9x0kg3j",
        "rating": {
            "total_rating_text": "150 votes",
            "value": 1.99
        }
    },
    {
        "id": "ctl_410427552",
        "name": "Veg Chefs Special Noodles",
        "price": 0,
        "min_price": 170,
        "max_price": 260,
        "default_price": 170,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bbgfwto3djgptysst0bb",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bbgfwto3djgptysst0bb",
        "rating": {
            "total_rating_text": "50 votes",
            "value": 1.99
        }
    },
    {
        "id": "ctl_410445383",
        "name": "Veg Singapore Noodles",
        "price": 0,
        "min_price": 80,
        "max_price": 145,
        "default_price": 80,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/w7ngirqd1i35nkts4rm0",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/w7ngirqd1i35nkts4rm0",
        "rating": {
            "total_rating_text": "50 votes",
            "value": 1.99
        }
    }
]

const snacks = [
    {
        "id": "ctl_334186847",
        "name": "Garlic Bread",
        "price": 99,
        "min_price": 99,
        "max_price": 99,
        "default_price": 99,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/5f7/466cb8146da5541f4261eff3fb6a35f7.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/5f7/466cb8146da5541f4261eff3fb6a35f7.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "198 votes",
            "value": 3.42
        }
    },
    {
        "id": "ctl_334187120",
        "name": "Cheese Dip Garlic Bread",
        "price": 29,
        "min_price": 29,
        "max_price": 29,
        "default_price": 29,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/au28pqexqycnlmskk8bl",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/au28pqexqycnlmskk8bl",
        "rating": {
            "total_rating_text": "167 votes",
            "value": 2.86
        }
    },
    {
        "id": "ctl_348630199",
        "name": "Cheese Garlic Bread",
        "price": 189,
        "min_price": 189,
        "max_price": 189,
        "default_price": 189,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aatvj9zxdjzg03cywfdm",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aatvj9zxdjzg03cywfdm",
        "rating": {
            "total_rating_text": "45 votes",
            "value": 3.99
        }
    },
    {
        "id": "ctl_348630223",
        "name": "Stuffed Garlic Bread",
        "price": 169,
        "min_price": 169,
        "max_price": 169,
        "default_price": 169,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ixqkky4skjpyxyrzqxvl",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ixqkky4skjpyxyrzqxvl",
        "rating": {
            "total_rating_text": "110 votes",
            "value": 3.39
        }
    },
    {
        "id": "ctl_348630281",
        "name": "Plain Garlic Bread [2 Pieces]",
        "price": 160,
        "min_price": 160,
        "max_price": 160,
        "default_price": 160,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/u3ubwcgga6rr9jdxxobx",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/u3ubwcgga6rr9jdxxobx",
        "rating": {
            "total_rating_text": "78 votes",
            "value": 4.10
        }
    },
    {
        "id": "ctl_348630314",
        "name": "Chilli Paneer Stuffed Garlic Bread",
        "price": 210,
        "min_price": 210,
        "max_price": 210,
        "default_price": 210,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/833/6cef2bf0509597a46bc2d8179c9b3833.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/833/6cef2bf0509597a46bc2d8179c9b3833.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "86 votes",
            "value": 3.10
        }
    }
]

const soups = [
    {
        "id": "ctl_353158202",
        "name": "Veg Soup",
        "price": 99,
        "min_price": 99,
        "max_price": 99,
        "default_price": 99,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/b18/732c25ff0230a376db3642757b248b18.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/b18/732c25ff0230a376db3642757b248b18.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "136 votes",
            "value": 3.10
        }
    },
    {
        "id": "ctl_353158203",
        "name": "Thupka Soup",
        "price": 110,
        "min_price": 110,
        "max_price": 110,
        "default_price": 110,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/69e/09bbda3e7c9e9a676b69d473cb37569e.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/69e/09bbda3e7c9e9a676b69d473cb37569e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "155 votes",
            "value": 3.10
        }
    },
    {
        "id": "ctl_353158204",
        "name": "Manchow Soup",
        "price": 130,
        "min_price": 130,
        "max_price": 130,
        "default_price": 130,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/1df/b51fc3ad4d529ec447cb34341bfa01df.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/1df/b51fc3ad4d529ec447cb34341bfa01df.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "23 votes",
            "value": 3.50
        }
    },
    {
        "id": "ctl_353158205",
        "name": "Hot and Sour Soup",
        "price": 130,
        "min_price": 130,
        "max_price": 130,
        "default_price": 130,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pce0j8x6eid466b2atjt",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pce0j8x6eid466b2atjt",
        "rating": {
            "total_rating_text": "176 votes",
            "value": 3.10
        }
    },
    {
        "id": "ctl_353158206",
        "name": "Egg Soup",
        "price": 130,
        "min_price": 130,
        "max_price": 130,
        "default_price": 130,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gzk49u6imcwmxg0cgvl3",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gzk49u6imcwmxg0cgvl3",
        "rating": {
            "total_rating_text": "56 votes",
            "value": 4.10
        }
    },
    {
        "id": "ctl_353158207",
        "name": "Chicken Soup",
        "price": 150,
        "min_price": 150,
        "max_price": 150,
        "default_price": 150,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/4ac/bddbe7abf718af9b540990ed9da404ac.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/4ac/bddbe7abf718af9b540990ed9da404ac.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "232 votes",
            "value": 3.86
        }
    },
    {
        "id": "ctl_353158208",
        "name": "Chicken Manchow Soup",
        "price": 160,
        "min_price": 160,
        "max_price": 160,
        "default_price": 160,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aoenyx22hqnneqlb2zf8",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aoenyx22hqnneqlb2zf8",
        "rating": {
            "total_rating_text": "23 votes",
            "value": 3.44
        }
    },
    {
        "id": "ctl_353158209",
        "name": "Chicken Hot and Sour Soup",
        "price": 160,
        "min_price": 160,
        "max_price": 160,
        "default_price": 160,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/69e/09bbda3e7c9e9a676b69d473cb37569e.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/69e/09bbda3e7c9e9a676b69d473cb37569e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "213 votes",
            "value": 3.33
        }
    },
    {
        "id": "ctl_353158210",
        "name": "Chicken Thupka Soup",
        "price": 160,
        "min_price": 160,
        "max_price": 160,
        "default_price": 160,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jtn5dtwryshtpxlpikmx",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jtn5dtwryshtpxlpikmx",
        "rating": {
            "total_rating_text": "133 votes",
            "value": 4.00
        }
    }
]


const drinks = [
    {
        "id": "ctl_353158856",
        "name": "Vanilla Shake",
        "price": 99,
        "min_price": 99,
        "max_price": 99,
        "default_price": 99,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/06d/7a2241b174388dff1c05cbe17306906d.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/06d/7a2241b174388dff1c05cbe17306906d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "133 votes",
            "value": 4.00
        }
    },
    {
        "id": "ctl_353158857",
        "name": "Strawberry Shake",
        "price": 99,
        "min_price": 99,
        "max_price": 99,
        "default_price": 99,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/604/29ac73db99e2f0c4885181ec41a96604.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/604/29ac73db99e2f0c4885181ec41a96604.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "78 votes",
            "value": 4.10
        }
    },
    {
        "id": "ctl_353158858",
        "name": "Butterscotch Shake",
        "price": 119,
        "min_price": 119,
        "max_price": 119,
        "default_price": 119,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/d89/452e7e7f05ff3752b19f808b6a861d89.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/d89/452e7e7f05ff3752b19f808b6a861d89.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "178 votes",
            "value": 3.98
        }
    },
    {
        "id": "ctl_353158859",
        "name": "Chocolate Shake",
        "price": 119,
        "min_price": 119,
        "max_price": 119,
        "default_price": 119,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/956/6df642c0740f1d31bff64bbbf2b0b956.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/956/6df642c0740f1d31bff64bbbf2b0b956.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "198 votes",
            "value": 3.77
        }
    },
    {
        "id": "ctl_353158860",
        "name": "Cold Coffee Shake",
        "price": 119,
        "min_price": 119,
        "max_price": 119,
        "default_price": 119,
        "item_image_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y0udg8a3nesvs0q6hg8n",
        "item_image_thumb_url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y0udg8a3nesvs0q6hg8n",
        "rating": {
            "total_rating_text": "104 votes",
            "value": 3.80
        }
    },
    {
        "id": "ctl_353158861",
        "name": "Oreo Shake",
        "price": 129,
        "min_price": 129,
        "max_price": 129,
        "default_price": 129,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/c0c/fd57e7ab819fa7681a60318bec51cc0c.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/c0c/fd57e7ab819fa7681a60318bec51cc0c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "198 votes",
            "value": 3.89
        }
    },
    {
        "id": "ctl_353158862",
        "name": "KitKat Shake",
        "price": 169,
        "min_price": 169,
        "max_price": 169,
        "default_price": 169,
        "item_image_url": "https://b.zmtcdn.com/data/dish_photos/c95/d0fd02d597b141bf6ef1b713ad959c95.jpg",
        "item_image_thumb_url": "https://b.zmtcdn.com/data/dish_photos/c95/d0fd02d597b141bf6ef1b713ad959c95.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "rating": {
            "total_rating_text": "198 votes",
            "value": 4.50
        }
    }
]


export const MenuList = pizza.concat(burger, pasta, paratha, momos, bakery, noodles, snacks, soups, drinks)
