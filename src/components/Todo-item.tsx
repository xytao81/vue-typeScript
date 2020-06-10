import { Component, Prop, Watch, Emit, Vue } from 'vue-property-decorator';

interface item {
    text: string;
    complete: boolean;
}

@Component({
    name: 'TodoItem'
})

export default class TodoItem extends Vue {
    @Prop(Object) public item!: item
    @Prop(Number) public index!: number
    @Prop(Number) public editIndex!: number

    public input_content = ''

    @Watch('editIndex')
    public change(index: number) {
        if (index === this.index) {
            this.input_content = this.item.text
        } else {
            this.input_content = ''
        }
    }

    // public save() {
    //     this.$emit('on-save', {
    //         index: this.index,
    //         content: this.input_content
    //     })
    // }
    
    // 装饰器写法
    @Emit('on-save')
    public save(index: any, content: any) {
        return {
            index,
            content
        }
    }

    public edit() {
        this.$emit('on-edit', this.index)
    }

    public close() {
        this.$emit('on-close')
    }

    protected render() {
        return (
            <div>
                {
                    this.editIndex === this.index ? (
                        <div>
                            <a-input v-model={this.input_content} style='width: 200px'></a-input>
                            <a-icon type='check' nativeOn-click={this.save.bind(this, this.index, this.input_content)}></a-icon>
                            <a-icon type='close' nativeOn-click={this.close}></a-icon>
                        </div>
                    ) : (
                            <div>
                                <span>{this.item.text}</span>
                                <a-icon type='edit' nativeOn-click={this.edit}></a-icon>
                            </div>
                        )
                }
            </div>
        )
    }

} 