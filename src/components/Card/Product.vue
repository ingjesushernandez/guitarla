<script setup lang="ts">
import { IProduct } from "@/interfaces/product.interface";

interface Props {
  product: IProduct;
}

const props = defineProps<Props>();

defineEmits(["add-product"]);
</script>

<template>
  <div class="col-md-6 col-lg-4 my-4 row align-items-center">
    <div class="col-4">
      <img
        class="img-fluid"
        :src="product.imagen"
        :alt="`Imagen del producto ${product.nombre}`"
      />
    </div>
    <div class="col-8">
      <h3 class="text-black fs-4 fw-bold text-uppercase">
        {{ product.nombre }}
      </h3>
      <p>{{ product.descripcion }}</p>
      <p class="fw-black text-primary fs-3">$ {{ product.precio }}</p>
      <button
        @click="$emit('add-product', product)"
        type="button"
        class="btn btn-dark w-100"
      >
        Agregar al Carrito
      </button>
    </div>
  </div>
</template>
