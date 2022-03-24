import ElButton from '../index';

export default {
    title: 'Button',
    component: ElButton,
};

export const NormalButton = () => '<el-button>With Text</el-button>'
export const ButtonTwo = () => '<el-button>button two</el-button>'
export const ButtonThree = () => '<el-button type="primary" :loading="true">button three</el-button>'
