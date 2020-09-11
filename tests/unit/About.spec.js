import About from "@/views/About.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

const wrapper = shallowMount(About, {
    stubs: {
        RouterLink: RouterLinkStub,
    },
});

describe("About", () => {
    test("should show url to prop on a router link", () => {
        expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/Contact");
    });
});