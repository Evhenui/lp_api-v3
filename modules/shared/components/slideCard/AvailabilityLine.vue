<template>
  <nav class="availability">
    <StatusNameplate
      v-if="!onlyStatus"
      :status="status"
      :changeView="false"
      :inactive="inactive"
    />
    <div v-if="!onlyStatus" class="availability__suggestions">
      <DeliveryNameplate :inactive="inactive" />
      <CreditNameplate :inactive="inactive" />
    </div>

    <div v-else class="availability__only-status" :class="onlyStatus">
      <span v-if="onlyStatus === 'in-stock'" class="availability__only-status-title in-stock"
        >В наличии</span
      >
      <span v-else class="availability__only-status-title not-available">Нет в наличии</span>
    </div>
  </nav>
</template>

<script setup>
import CreditNameplate from "~~/modules/shared/components/slideCard/UI/CreditNameplate.vue";
import DeliveryNameplate from "~~/modules/shared/components/slideCard/UI/DeliveryNameplate.vue";
import StatusNameplate from "~~/modules/shared/components/slideCard/UI/StatusNameplate.vue";

// const { status, changeView, inactive, onlyStatus } = defineProps({
//   status,
//   changeView,
//   inactive,
//   onlyStatus,
// });

defineProps({
  status: { type: String, required: false },
  changeView: { type: Boolean, required: false },
  inactive: { type: Boolean, required: false },
  onlyStatus: { type: String, required: false },
});
</script>

<style lang="scss" scoped>
.availability {
  @include flex-container(row, space-between, center);

  gap: 8px;

  @include bigMobile {
    @include flex-container(row, space-between, center);

    gap: 0;
  }

  &__suggestions {
    @include flex-container(row, center, center);

    gap: 16px;

    @include bigMobile {
      gap: 8px;
    }
  }

  &__only-status {
    @include flex-container(row, center, center);

    white-space: nowrap;

    border-radius: 4px;

    padding: 2px 8px;

    &.not-available {
      background-color: rgba(196, 196, 196, 0.5);

      .availability__only-status-title {
        color: #8a8a8a;
      }
    }

    &.in-stock {
      background-color: rgba(21, 152, 34, 0.1);

      .availability__only-status-title {
        color: #159822;
      }
    }

    &__only-status-title {
      @include font(14, 24, 400);
    }
  }
}
</style>
