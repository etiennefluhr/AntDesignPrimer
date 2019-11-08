
    import * as chai   from 'chai';
    import * as React  from 'react';
    import * as Enzyme from 'enzyme';
    import * as chuck  from '../../../../../typescript/de/mayflower/chuck';

    describe( 'React component HHWebsite', () =>
    {
        const wrapper: Enzyme.ShallowWrapper = Enzyme.shallow(
            <chuck.Website />
        );
        const demoElement:chuck.Website = wrapper.instance() as chuck.Website;

        it( 'create the React component', () =>
        {
            chai.expect( wrapper.length ).to.equal( 1 );
        });

        it( 'assign the property "elementID"', () =>
        {
            chai.expect( demoElement.props.elementID ).to.equal( 'DemoElement1' );
        });

    });
