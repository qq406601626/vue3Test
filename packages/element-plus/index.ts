import type {App} from 'vue'
import ElAvatar from '@element-plus/avatar'
import ElButton from '@element-plus/button'
import ElBadge from '@element-plus/badge'
import ElTag from '@element-plus/tag'
import ElDivider from '@element-plus/divider'
import ElCard from '@element-plus/card'


export {
    ElAvatar, ElButton, ElBadge, ElCard, ElDivider, ElTag,
}

export default function install(app: App): void {
    ElAvatar(app)
    ElButton(app)
    ElBadge(app)
    ElTag(app)
    ElDivider(app)
    ElCard(app)
}
