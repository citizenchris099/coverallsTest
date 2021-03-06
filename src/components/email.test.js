/**
 * Created by chrismanning on 4/18/17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import Email from './email';

describe('<Email>', function () {
    it('should have an input for the email', function () {
        const wrapper = shallow(<Email/>);
        expect(wrapper.find('input')).to.have.length(1);
    });

    it('should have a button', function () {
        const wrapper = shallow(<Email/>);
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('should have props for handleEmailChange and fetchGravatar', function () {
        const wrapper = shallow(<Email/>);
        expect(wrapper.props().handleEmailChange).to.be.defined;
        expect(wrapper.props().fetchGravatar).to.be.defined;
    });

});