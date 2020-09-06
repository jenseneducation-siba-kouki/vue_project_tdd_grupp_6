import { shallowMount } from '@vue/test-utils'
import CountOrder from '@/components/CountOrder.vue'


it('should display the number 0 when rendered', () => {
  const expectedCount = 0;
  const wrapper = shallowMount(CountOrder);

  const element = wrapper.find('.Count');
  const actualValue = Number(element.text());

  expect(actualValue).toBe(expectedCount);
})

it('should increase the displayed value when click on Increase button', async () => {
  const expectedCount = 1;
  const wrapper = shallowMount(CountOrder);
  const button = wrapper.find('.increase');
  const element = wrapper.find('.Count');

  await button.trigger('click');
  const actualValue = Number(element.text());

  expect(actualValue).toBe(expectedCount);
})

it('should decrease the displayed value when click on Decrease button', async () => {
  const expectedCount = 0;
  const wrapper = shallowMount(CountOrder);
  const button = wrapper.find('.decrease');
  const element = wrapper.find('.Count');

  await button.trigger('click');
  const actualValue = Number(element.text());

  expect(actualValue).toBe(expectedCount);
})

it('should increase the value when click on Increase button', async () => {
  const expectedCount = 1;
  const wrapper = shallowMount(CountOrder);
  const button = wrapper.find('.increase');

  await button.trigger('click');
  const actualValue = wrapper.vm.Count

  expect(actualValue).toBe(expectedCount);
})