import { eventKeys,triggerEvent } from '../aria'
import MenuItem from './menu-item'
/**
 * menu:{
 *     menu-item
 *     sub-menu:{
 *         menu-item
 *         sub-menu:{
 *             menu-item
 *         }
 *     }
 * }
 * */

class Submenu{
    public subMenuItems:NodeList
    public subIndex = 0
    constructor(public parent:MenuItem,public domNode:ParentNode) {
      this.subIndex= 0
      this.init()
    }
    init():void{
      this.subMenuItems = this.domNode.querySelectorAll('li')
      this.addListeners()
    }
    addListeners():void{
      const keys = eventKeys
      // const parentNode = this.parent.
    }
}
