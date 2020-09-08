import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home', () => {
  test('find the tag with "Accessories Web Shop"', () => {
    const wrapper = shallowMount(Home)
    const msg = 'Accessories Web Shop'

    const element = wrapper.find('h1').text()

    expect(element).toBe(msg)
  })
})

// describe('click event', () => {
//   it('add to cart button click should increment the count next to cart', async () => {
//     expect(wrapper.text()).toContain('0')
//     const button = wrapper.find('button')
//     await button.trigger('click')
//     expect(wrapper.text()).toContain('1')
//   })
// })

