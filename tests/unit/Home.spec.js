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