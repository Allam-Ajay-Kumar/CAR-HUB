import { createSlice } from "@reduxjs/toolkit";
const Productslice = createSlice(
    {
        name: "Products",
        initialState: {

            carList: [
                {
                    id: 1,
                    name: "BMW M4",
                    brand: "BMW",
                    price: 15000000,
                    fuel: "Petrol",
                    transmission: "Automatic",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSIGsZD-SP4X4stCbK5B9j4Nq-ZC1EZSz0C8armGMpg&s=10"
                },
                {
                    id: 2,
                    name: "Mercedes-Benz C-Class",
                    brand: "Mercedes-Benz",
                    price: 6500000,
                    fuel: "Petrol",
                    transmission: "Automatic",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpl0QpfzZWhixAVFVHOidIA4Kg3niHjOnnqpH7y4ydw&s=10"
                },
                {
                    id: 3,
                    name: "Audi R8",
                    brand: "Audi",
                    price: 25000000,
                    fuel: "Petrol",
                    transmission: "Automatic",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9uCg-SrXEhf-avCVj2ZwSsW3qS4EY92SZhD1YLll1Q&s=10"
                },
                {
                    id: 4,
                    name: "Porsche 911",
                    brand: "Porsche",
                    price: 20000000,
                    fuel: "Petrol",
                    transmission: "Automatic",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXbG1tTH9-fGB3FSLuQDjepmy0fet2XSP1YOP7OXV8Q&s=10"
                },
                {
                    id: 5,
                    name: "Tesla Model 3",
                    brand: "Tesla",
                    price: 6000000,
                    fuel: "Electric",
                    transmission: "Automatic",
                    image: "https://i.ytimg.com/vi_webp/JhA9-JYLFyo/hqdefault.webp"
                },
                {
                    id: 6,
                    name: "Toyota Fortuner",
                    brand: "Toyota",
                    price: 4500000,
                    fuel: "Diesel",
                    transmission: "Manual",
                    image: "https://images.unsplash.com/photo-1670054953044-2605dbd0d747?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                },
                {
                    id: 7,
                    name: "Lamborghini Huracan",
                    brand: "Lamborghini",
                    price: 40000000,
                    fuel: "Petrol",
                    transmission: "Automatic",
                    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500"
                },
                {
                    id: 8,
                    name: "Ferrari 488",
                    brand: "Ferrari",
                    price: 40000000,
                    fuel: "Petrol",
                    transmission: "Automatic",
                    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=500"
                },
                {
                    id: 9,
                    name: "Ford Mustang",
                    brand: "Ford",
                    price: 7500000,
                    fuel: "Petrol",
                    transmission: "Manual",
                    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=500"
                },
                {
                    id: 10,
                    name: "Range Rover Sport",
                    brand: "Land Rover",
                    price: 15000000,
                    fuel: "Diesel",
                    transmission: "Automatic",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHindy8Kp6nhbGs4GgUfQf86JIBUhSsCGSb4tRu7evg&s=10"
                },
                {
                    id: 11,
                    name: "Honda City",
                    brand: "Honda",
                    price: 1500000,
                    fuel: "Petrol",
                    transmission: "Manual",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1S0dqMfuihG-eI_giJcsWph-cX2ppi2SyemOjxQX-A&s=10"
                },
                {
                    id: 12,
                    name: "Hyundai Creta",
                    brand: "Hyundai",
                    price: 1800000,
                    fuel: "Petrol",
                    transmission: "Automatic",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHr3Wvzfgnagf6gfCm5X59nMWHpXB8tTegQJILV5H8hA&s=10"
                },
                {
                    id: 13,
                    name: "Kia Seltos",
                    brand: "Kia",
                    price: 1700000,
                    fuel: "Diesel",
                    transmission: "Automatic",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNabila81jYo8Wbv24q2iJIztpueKoZ9ymHJHmXEmKA&s"
                },
                {
                    id: 14,
                    name: "Mahindra Thar",
                    brand: "Mahindra",
                    price: 1800000,
                    fuel: "Diesel",
                    transmission: "Manual",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtJAvNh_l7pyBt57-G35CPLA2spCxkzRZO6unPPGhNA&s=10"
                },
                {
                    id: 15,
                    name: "Tata Nexon",
                    brand: "Tata",
                    price: 1200000,
                    fuel: "Petrol",
                    transmission: "Manual",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZQpuzJTWti0_VxhNbm9IoeIvOiTq_KooSFUy1GWJlw&s=10"
                },
                {
                    id: 16,
                    name: "Maruti Suzuki Swift",
                    brand: "Maruti Suzuki",
                    price: 800000,
                    fuel: "Petrol",
                    transmission: "Manual",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPufqmyo-UJOHWK5jrsKi9CoLc7V-peHEGJYjd5kqLQ&s=10"
                },
                {
                    id: 17,
                    name: "Volkswagen Golf",
                    brand: "Volkswagen",
                    price: 2500000,
                    fuel: "Petrol",
                    transmission: "Automatic",
                    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500"
                },
                {
                    id: 18,
                    name: "Nissan GT-R",
                    brand: "Nissan",
                    price: 25000000,
                    fuel: "Petrol",
                    transmission: "Manual",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCul2v6rMfU38Eyf0lc1Vc0g9TMLRyPdzzOO2tf5Z-Q&s=10"
                },
                {
                    id: 19,
                    name: "Rolls-Royce Ghost",
                    brand: "Rolls-Royce",
                    price: 80000000,
                    fuel: "Petrol",
                    transmission: "Automatic",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPv254rVm11G5bSAA848JkertOVj1rCNRcAPGU_8Oaw&s=10"
                },
                {
                    id: 20,
                    name: "Jeep Wrangler",
                    brand: "Jeep",
                    price: 6500000,
                    fuel: "Petrol",
                    transmission: "Manual",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy5h6OBcSNKfUCC1E5-PcCLSwgBjMmik3-VXjaxH_ig&s=10"
                }
            ],
            cartItem: [],
            selectedProduct: null,
            wishList: [],
            myWishlist: null,
            orders: [],
            myOrders: null,
            testDrive: [],
            updateProduct: null,
        },
        reducers: {
            addProduct: (state, action) => {
                state.carList.push(action.payload)
            },
            getOne: (state, action) => {
                state.selectedProduct = state.carList.find((e) => e.id == action.payload)

            },
            deleteProduct: (state, action) => {
                state.carList.splice(action.payload, 1)
            },




            ///////////Cart  Slice

            addtoCart: (state, action) => {
                var ind = state.cartItem.findIndex((e) => e.id == action.payload.id && e.username == action.payload.username);
                if (ind == -1) {
                    state.cartItem.push(action.payload)

                }
                else {
                    state.cartItem[ind].quantity = state.cartItem[ind].quantity + 1
                }

            },
            deleteinCart: (state, action) => {
                var ind = state.cartItem.findIndex((e) => e.id == action.payload.id && e.username == action.payload.username);
                //state.selectedProduct.splice(ind, 1)
                state.cartItem.splice(ind, 1)
                state.selectedProduct = state.cartItem.filter((e) => e.username == action.payload.username)
            },
            getProducts: (state, action) => {

                state.selectedProduct = state.cartItem.filter((e) => e.username == action.payload)
            },


            //////////wishlist
            addtoWishlist: (state, action) => {
                var ind = state.selectedProduct.findIndex((e) => e.id == action.payload.id && e.username == action.payload.username);
                state.cartItem.splice(ind, 1)
                state.selectedProduct = state.cartItem.filter((e) => e.username == action.payload.username)
                state.wishList.push(action.payload)

            },
            getWishlist: (state, action) => {
                state.myWishlist = state.wishList.filter((e) => e.username == action.payload)


            },



            /////////Orders

            addOrders: (state, action) => {
                var ind = state.selectedProduct.findIndex((e) => e.id == action.payload.id && e.username == action.payload.username);
                state.cartItem.splice(ind, 1)
                state.selectedProduct = state.cartItem.filter((e) => e.username == action.payload.username)
                state.orders.push(action.payload)
            },
            getOrders: (state, action) => {
                state.myOrders = state.orders.filter((e) => e.username == action.payload)
            },

            ////////////////testdrive


            addTest: (state, action) => {
                state.testDrive.push(action.payload)
            },


            ///////////////////update
            updateProduct: (state, action) => {

                state.updateProduct = state.carList.find(
                    (obj) => obj.id == action.payload
                );

            },

            updateNow: (state, action) => {

                var ind = state.carList.findIndex(
                    (obj) => obj.id == action.payload.id
                );

                if (ind !== -1) {
                    state.carList.splice(ind, 1, action.payload);
                }

            }
        }
    }
)
export const { updateNow,updateProduct, addProduct, getOne, deleteProduct, addtoCart, deleteinCart, getProducts, addtoWishlist, getWishlist, addOrders, getOrders, addTest } = Productslice.actions;
export default Productslice.reducer;
