import {findComponent} from './with-page-content';

describe('findComponent', () => {
    const SAMPLE_DATA = {
        component: 'a',
        content: [
            {
                component: 'b',
                content: [
                    {
                        component: 'c',
                        content: [],
                    },
                    {
                        component: 'd',
                        content: [

                            {
                                component: 'g',
                                content: [],
                            },
                        ],
                    },
                ]
            },
            {
                component: 'e',
                content: [],
            },
            {
                component: 'f',
                content: [],
            },
        ],
    };

    it('should return undefined when no components are found', () => {
        expect(findComponent(SAMPLE_DATA.content, 'aa')).toBeUndefined();
    });

    it('should find components that are immediate children', () => {
        const {component} = findComponent(SAMPLE_DATA.content, 'e');
        expect(component).toBe('e');
    });

    it('should find components that are nested children', () => {
        const {component: b} = findComponent(SAMPLE_DATA.content, 'b');
        expect(b).toBe('b');

        const {component: c} = findComponent(SAMPLE_DATA.content, 'c');
        expect(c).toBe('c');

        const {component: g} = findComponent(SAMPLE_DATA.content, 'g');
        expect(g).toBe('g');
    });
});
