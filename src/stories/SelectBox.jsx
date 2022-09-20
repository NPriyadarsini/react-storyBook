import React from 'react';
import PropTypes from 'prop-types';
import './selectBox.css';
import { keys, values } from '@laufire/utils/collection';

/**
 * Primary UI component for user interaction
 */
export const SelectBox
= ({ backgroundColor, size, options, ...props }) =>
	<select
		className={ ['storybook-selectBox', `storybook-selectBox--${ size }`] }
		style={ backgroundColor && { backgroundColor } }
		{ ...props }
	>{
			options.map((option) =>
				<option key={ keys(option) } value={ (keys(option)) }>
					{values(option)}</option>)
		}
	</select>
	;

SelectBox.propTypes = {

	/**
   * Is this the principal call to action on the page?
   */
	// primary: PropTypes.bool,

	/**
   * What background color to use
   */
	backgroundColor: PropTypes.string,

	/**
   * How large should the button be?
   */
	size: PropTypes.oneOf(['small', 'medium', 'large']),

	/**
   * Button contents
   */
	label: PropTypes.string.isRequired,

	/**
   * Select Options
   */
	options: PropTypes.array,

	/**
   * Optional click handler
   */
	onClick: PropTypes.func,
};

SelectBox.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: 'medium',
	onClick: undefined,
	options: [],
};
