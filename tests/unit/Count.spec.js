import { shallowMount } from '@vue/test-utils'
import CountOrder from '@/components/CountOrder.vue'

describe('Count.vue', () => {
  test('should increase the displayed value when click on Increase button' , () =>{
    const wrapper = shallowMount(CountOrder)
    expect(wrapper.text()).toContain('Count: 0')
    wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('Count: 0')
  });
})

// it('should increase the displayed value when click on Increase button', async () => {
//   const expectedValue = 1;
//   const wrapper = shallowMount(CountOrder);
//   const button = wrapper.find('.increase');
//   let actualValue  = wrapper.find('.Count');

//   await button.trigger('click');

//   expect(actualValue).toBe(expectedValue);
// })

it('should decrease the displayed value when click on Decrease button', async () => {
  const wrapper = shallowMount(CountOrder);
  const button = wrapper.find('.decrease');
  await button.trigger('click');
  expect(wrapper.text()).toContain('Count: 0')})

it('should not decrease under 0', async () => {
  const wrapper = shallowMount(CountOrder);
  const button = wrapper.find('.decrease');
  await button.trigger('click');
  expect(wrapper.text()).toContain('Count: 0')
})