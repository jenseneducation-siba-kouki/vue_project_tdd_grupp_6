import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home', () => {
  test('find the tag with "Find Your Book"', () => {
    const wrapper = shallowMount(Home)
    const msg = 'Find Your Book'

    const element = wrapper.find('h1').text()

    expect(element).toBe(msg)
  })
})



