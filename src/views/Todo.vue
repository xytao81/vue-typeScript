<template>
  <div>
    <a-list class="list" item-layout="horizontal" :data-source="list" bordered>
      <a-list-item slot="renderItem" slot-scope="item, index">
        <TodoItem
          :item="item"
          :index="index"
          :editIndex="editIndex"
          @on-save="handleSave"
          @on-edit="handleEdit"
          @on-close="handleClose"
        ></TodoItem>
      </a-list-item>
    </a-list>
    <a-button @click="turn">跳转</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoItem from "../components/Todo-item";
import { State, Mutation } from "vuex-class";

@Component({
  name: "TodoPage",
  components: {
    TodoItem
  }
})
export default class Todo extends Vue {
  @State("todoList") public list;
  public editIndex = -1;

  @Mutation("updateTodoList") public updateList;

  public handleSave({ index, content }) {
    //   this.list[index].text = content
    this.updateList({ index, content });
    this.handleClose();
  }

  public handleEdit(index: any) {
    this.editIndex = index;
  }

  public handleClose() {
    this.editIndex = -1;
  }

  public turn() {
      this["$router"].push({
          name: 'Show'
      })
  }

}
</script>

<style lang="scss">
.list {
  /* width: 200px;
        margin: 100px auto; */
}
</style>
