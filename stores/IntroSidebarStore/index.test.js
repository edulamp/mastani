/*
* SidebarStore store test
*
*/

import SidebarStore from './index'

it('sidebar store create', () => {
  const sidebar = SidebarStore.create({}, {})

  expect(sidebar.menuItemsData.length).toBe(0)

  sidebar.loadMenuItem()
  expect(sidebar.menuItemsData.length).toBe(7)
})
