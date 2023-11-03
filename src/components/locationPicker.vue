<template>
  <div>
    <van-cell
      is-link
      @click="showPicker = true"
      title="所属区域"
      required
      :value="value"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @change="onChange"
      />
    </van-popup>
  </div>

</template>

<script>
export default {
  name: "LocationPicker",
  data() {
    return {
      value: "请选择",
      showPicker: false,
      columns: ["杭州", "宁波", "温州"],
    };
  },
  methods: {
    onChange(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
};
</script>

<style scoped></style>
