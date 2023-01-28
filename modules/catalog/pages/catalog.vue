<template>
  <div>
    <Catalog :categories="categories" />
    <!-- <div class="category-purpose">
      <div class="category-purpose__line"></div>
      <div class="category-purpose__w">
        <h2 class="category-purpose__title">цель компании logicpower</h2>
        <div class="category-purpose__info">
          <p class="category-purpose__info-text">
            Цель компании LogicPower - поставлять украинскому потребителю товары
            высокого качества по доступной цене! В разделах «Компьютерная
            периферия» и «Комплектующие для ПК» Вы найдете все для корректной и
            комфортной работы своего компьютера. В разделе «Электропитание» -
            товары, которые обеспечат Ваше оборудование качественным питанием и
            обезопасят его.
          </p>
          <ul class="category-purpose__info-list">
            <li class="category-purpose__info-list-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li class="category-purpose__info-list-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li class="category-purpose__info-list-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li class="category-purpose__info-list-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li class="category-purpose__info-list-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
        <div class="category-purpose__goal">
          <h4 class="category-purpose__goal-title">Цель компании LogicPower</h4>
          <p class="category-purpose__goal-text">
            Цель компании LogicPower - поставлять украинскому потребителю товары
            высокого качества по доступной цене! В разделах «Компьютерная
            периферия» и «Комплектующие для ПК» Вы найдете все для корректной и
            комфортной работы своего компьютера. В разделе «Электропитание» -
            товары, которые обеспечат Ваше оборудование качественным питанием и
            обезопасят его.
          </p>
        </div>
        <div class="category-purpose__goal">
          <h4 class="category-purpose__goal-title">Цель компании LogicPower</h4>
          <p class="category-purpose__goal-text">
            Цель компании LogicPower - поставлять украинскому потребителю товары
            высокого качества по доступной цене! В разделах «Компьютерная
            периферия» и «Комплектующие для ПК» Вы найдете все для корректной и
            комфортной работы своего компьютера. В разделе «Электропитание» -
            товары, которые обеспечат Ваше оборудование качественным питанием и
            обезопасят его.
          </p>
        </div>
      </div>
      <div class="category-purpose__line"></div>
    </div> -->
  </div>
</template>

<script setup>
import { useCategoriesStore } from '~~/store/categoriesStore';
import Catalog from '~/modules/catalog/components/Catalog.vue';

const catalogStore = useCategoriesStore();
const categories = catalogStore.getCategories;
</script>
