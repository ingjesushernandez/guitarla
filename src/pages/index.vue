<script setup lang="ts">
import { guitarData } from "@/data/guitar-data";
import { IProduct } from "@/interfaces/product.interface";

const products = ref<IProduct[]>(guitarData);
const cart = ref<IProduct[]>([]);
const guitar = ref({});

watch(
  cart,
  () => {
    saveLocalStorage();
  },
  {
    deep: true,
  }
);

onMounted(() => {
  products.value = guitarData;
  guitar.value = guitarData[3];

  const cartStorage = localStorage.getItem("cart");
  if (cartStorage) {
    cart.value = JSON.parse(cartStorage);
  }
});

const saveLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

const addProduct = (product: IProduct) => {
  const existProductIndex = cart.value.findIndex(
    (guitar) => guitar.id === product.id
  );

  if (existProductIndex >= 0) {
    const existingProduct = cart.value[existProductIndex];
    if (existingProduct.cant !== undefined) existingProduct.cant++;
  } else {
    product.cant = 1;
    cart.value.push(product);
  }
};

const decreaseQuantity = (id: number) => {
  const index = cart.value.findIndex((guitar) => guitar.id === id);
  if (index >= 0) {
    const cartItem = cart.value[index];
    if (cartItem.cant !== undefined && cartItem.cant > 1) {
      cartItem.cant--;
    }
  }
};

const increaseQuantity = (id: number) => {
  const index = cart.value.findIndex((guitar) => guitar.id === id);
  if (index >= 0) {
    const cartItem = cart.value[index];
    if (cartItem.cant !== undefined && cartItem.cant < 5) {
      cartItem.cant++;
    }
  }
};

const deleteProduct = (id: number) => {
  cart.value = cart.value.filter((product) => product.id !== id);
};

const emptyCart = () => {
  cart.value = [];
};
</script>

<template>
  <Header
    :cart="cart"
    :guitar="guitar"
    @decrease-quantity="decreaseQuantity"
    @increase-quantity="increaseQuantity"
    @add-product="addProduct"
    @delete-product="deleteProduct"
    @empty-cart="emptyCart"
  />

  <main class="container-xl mt-5">
    <h2 class="text-center">Nuestra Colección</h2>

    <div class="row mt-5">
      <CardProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-product="addProduct"
      />
    </div>
  </main>

  <Footer />
</template>
