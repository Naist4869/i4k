<template>
<div id="BulletScreen">
    <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="弹幕列表" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
    </el-collapse>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: ''
            };
        }
    }
</script>
